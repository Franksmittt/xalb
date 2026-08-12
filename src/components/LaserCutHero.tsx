'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import AnimatedButton from '@/components/AnimatedButton';
import {
  CNC_CUT,
  CNC_HOME,
  CNC_PARK,
  CNC_PATHS,
  CNC_PIERCE,
  CNC_TRAVEL,
  CNC_VIEWBOX,
} from '@/components/cncPaths';
import styles from './LaserCutHero.module.css';

type Phase = 'idle' | 'rapid' | 'pierce' | 'cut' | 'home' | 'done';

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export default function LaserCutHero() {
  const uid = useId().replace(/:/g, '');
  const reduced = Boolean(useReducedMotion());

  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const hotRefs = useRef<(SVGPathElement | null)[]>([]);
  const gantryRef = useRef<SVGGElement>(null);
  const carriageRef = useRef<SVGGElement>(null);
  const flareRef = useRef<SVGCircleElement>(null);
  const smokeRef = useRef<SVGEllipseElement>(null);

  const [phase, setPhase] = useState<Phase>(reduced ? 'done' : 'idle');
  const [cooled, setCooled] = useState<boolean[]>(() => CNC_PATHS.map(() => reduced));
  const [coords, setCoords] = useState(CNC_HOME);
  const [cutting, setCutting] = useState(false);

  useEffect(() => {
    const gantry = gantryRef.current;
    const carriage = carriageRef.current;
    const flare = flareRef.current;
    const smoke = smokeRef.current;
    const paths = pathRefs.current.filter((p): p is SVGPathElement => p !== null);
    const hots = hotRefs.current;

    if (!gantry || !carriage || !flare) return;

    const place = (x: number, y: number) => {
      gantry.setAttribute('transform', `translate(0 ${y})`);
      carriage.setAttribute('transform', `translate(${x} 0)`);
    };

    const setHot = (active: number, progress = 0) => {
      hots.forEach((h, i) => {
        if (!h) return;
        if (i !== active) {
          h.style.opacity = '0';
          return;
        }
        h.style.opacity = '1';
        h.style.strokeDasharray = '0.03 1';
        h.style.strokeDashoffset = String(-progress);
      });
    };

    if (reduced) {
      paths.forEach((p) => {
        p.style.strokeDasharray = '1';
        p.style.strokeDashoffset = '0';
      });
      hots.forEach((h) => {
        if (h) h.style.opacity = '0';
      });
      place(CNC_PARK.x, CNC_PARK.y);
      flare.style.opacity = '0';
      if (smoke) smoke.style.opacity = '0';
      setPhase('done');
      setCooled(CNC_PATHS.map(() => true));
      return;
    }

    const lengths = paths.map((p) => p.getTotalLength() || 1);
    paths.forEach((p) => {
      p.style.strokeDasharray = '1';
      p.style.strokeDashoffset = '1';
    });
    setHot(-1);

    let raf = 0;
    let stopped = false;
    let last = 0;
    let hudAt = 0;
    let index = 0;
    let state: Phase = 'idle';
    let pos = { ...CNC_HOME };
    let cutProgress = 0;
    let pierceT = 0;
    let startDelay = 0.7;
    let publishedPhase: Phase = 'idle';
    let publishedCutting = false;
    let lastHud = { x: -1, y: -1 };
    let travelArmed = false;
    let moveFrom = { ...pos };
    let moveTo = { ...pos };
    let moveElapsed = 0;
    let moveDur = 0.2;

    const publish = (nextPhase: Phase, nextCutting: boolean) => {
      if (stopped) return;
      if (nextPhase !== publishedPhase) {
        publishedPhase = nextPhase;
        setPhase(nextPhase);
      }
      if (nextCutting !== publishedCutting) {
        publishedCutting = nextCutting;
        setCutting(nextCutting);
      }
    };

    const armTravel = (to: { x: number; y: number }) => {
      moveFrom = { ...pos };
      moveTo = { ...to };
      moveElapsed = 0;
      const dist = Math.hypot(to.x - pos.x, to.y - pos.y);
      moveDur = Math.max(0.18, dist / CNC_TRAVEL);
      travelArmed = true;
    };

    const stepTravel = (dt: number) => {
      moveElapsed += dt;
      const t = Math.min(1, moveElapsed / moveDur);
      const e = easeInOut(t);
      pos = {
        x: lerp(moveFrom.x, moveTo.x, e),
        y: lerp(moveFrom.y, moveTo.y, e),
      };
      return t >= 1;
    };

    place(pos.x, pos.y);
    flare.style.opacity = '0';
    if (smoke) smoke.style.opacity = '0';

    const loop = (ts: number) => {
      if (stopped) return;
      if (!last) last = ts;
      const dt = Math.min((ts - last) / 1000, 0.05);
      last = ts;

      if (state === 'idle') {
        startDelay -= dt;
        if (startDelay <= 0) {
          state = 'rapid';
          publish('rapid', false);
        }
      } else if (index < paths.length) {
        const path = paths[index];
        const start = path.getPointAtLength(0);

        if (state === 'rapid') {
          flare.style.opacity = '0';
          if (smoke) smoke.style.opacity = '0';
          setHot(-1);
          publish('rapid', false);
          if (!travelArmed) armTravel(start);
          if (stepTravel(dt)) {
            travelArmed = false;
            pos = { x: start.x, y: start.y };
            state = 'pierce';
            pierceT = 0;
            cutProgress = 0;
            flare.style.opacity = '0.55';
            publish('pierce', true);
          }
        } else if (state === 'pierce') {
          pierceT += dt;
          const p = Math.min(1, pierceT / CNC_PIERCE);
          flare.style.opacity = String(0.55 + p * 0.45);
          if (smoke) smoke.style.opacity = String(p * 0.35);
          if (pierceT >= CNC_PIERCE) {
            state = 'cut';
            publish('cut', true);
          }
        } else if (state === 'cut') {
          cutProgress += CNC_CUT * dt;
          const len = lengths[index];
          flare.style.opacity = '1';
          if (smoke) smoke.style.opacity = '0.4';
          if (cutProgress >= len) {
            path.style.strokeDashoffset = '0';
            const doneIndex = index;
            if (!stopped) {
              setCooled((prev) => {
                const next = [...prev];
                next[doneIndex] = true;
                return next;
              });
            }
            pos = path.getPointAtLength(len);
            index += 1;
            travelArmed = false;
            state = 'rapid';
            flare.style.opacity = '0';
            if (smoke) smoke.style.opacity = '0';
            setHot(-1);
            publish('rapid', false);
          } else {
            const progress = cutProgress / len;
            path.style.strokeDashoffset = String(1 - progress);
            setHot(index, progress);
            pos = path.getPointAtLength(cutProgress);
          }
        }
      } else {
        flare.style.opacity = '0';
        if (smoke) smoke.style.opacity = '0';
        setHot(-1);
        if (state !== 'home' && state !== 'done') {
          state = 'home';
          travelArmed = false;
          publish('home', false);
        }
        if (!travelArmed) armTravel(CNC_PARK);
        if (stepTravel(dt)) {
          state = 'done';
          publish('done', false);
          place(CNC_PARK.x, CNC_PARK.y);
          return;
        }
      }

      place(pos.x, pos.y);
      if (ts - hudAt > 120) {
        hudAt = ts;
        const hx = Math.round(pos.x);
        const hy = Math.round(pos.y);
        if (hx !== lastHud.x || hy !== lastHud.y) {
          lastHud = { x: hx, y: hy };
          if (!stopped) setCoords(lastHud);
        }
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const statusLabel =
    phase === 'cut' || phase === 'pierce'
      ? 'Laser'
      : phase === 'rapid' || phase === 'home'
        ? 'Rapid'
        : phase === 'done'
          ? 'Idle'
          : 'Idle';

  return (
    <section
      className={styles.hero}
      aria-label="Xsphere CNC and laser hero"
      data-cutting={cutting ? 'true' : 'false'}
    >
      <div className={styles.inner}>
        <div className={styles.bedWrap}>
          <svg
            className={styles.bed}
            viewBox={`0 0 ${CNC_VIEWBOX.w} ${CNC_VIEWBOX.h}`}
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Laser cutting the Xsphere wordmark"
          >
            <defs>
              <pattern id={`honey-${uid}`} width="26" height="45" patternUnits="userSpaceOnUse">
                <rect width="26" height="45" fill="#161310" />
                <polygon
                  points="13,2 24,8.5 24,21.5 13,28 2,21.5 2,8.5"
                  fill="#0a0908"
                  stroke="#2c2822"
                  strokeWidth="1.15"
                />
                <polygon
                  points="26,24.5 37,31 37,44 26,50.5 15,44 15,31"
                  fill="#0a0908"
                  stroke="#2c2822"
                  strokeWidth="1.15"
                />
                <polygon
                  points="0,24.5 11,31 11,44 0,50.5 -11,44 -11,31"
                  fill="#0a0908"
                  stroke="#2c2822"
                  strokeWidth="1.15"
                />
              </pattern>
              <filter id={`grain-${uid}`}>
                <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="3" result="n" />
                <feColorMatrix type="saturate" values="0" in="n" result="g" />
                <feComponentTransfer in="g">
                  <feFuncA type="table" tableValues="0 0.28" />
                </feComponentTransfer>
              </filter>
              <filter id={`shadow-${uid}`} x="-40%" y="-20%" width="180%" height="180%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3.5" result="b" />
                <feOffset dy="6" result="o" />
                <feComponentTransfer in="o" result="s">
                  <feFuncA type="linear" slope="0.35" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode in="s" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id={`beam-${uid}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6a6e68" />
                <stop offset="18%" stopColor="#3e423c" />
                <stop offset="50%" stopColor="#2a2d28" />
                <stop offset="82%" stopColor="#1c1e1a" />
                <stop offset="100%" stopColor="#4a4e48" />
              </linearGradient>
              <linearGradient id={`head-${uid}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3a3c38" />
                <stop offset="40%" stopColor="#1f211e" />
                <stop offset="100%" stopColor="#121311" />
              </linearGradient>
              <radialGradient id={`flare-${uid}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fffaf0" stopOpacity="1" />
                <stop offset="28%" stopColor="#ffe08a" stopOpacity="0.85" />
                <stop offset="55%" stopColor="#6fae3a" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#6fae3a" stopOpacity="0" />
              </radialGradient>
              <linearGradient id={`sheet-${uid}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3a342c" />
                <stop offset="45%" stopColor="#2c271f" />
                <stop offset="100%" stopColor="#221e18" />
              </linearGradient>
            </defs>

            <rect width="100%" height="100%" fill={`url(#honey-${uid})`} />
            <rect x="0" y="0" width="1100" height="268" fill="#0d0c0a" opacity="0.25" />

            <rect x="8" y="10" width="12" height="248" rx="1" fill="#2a2c28" />
            <rect x="11" y="10" width="2.2" height="248" fill="#5a5e56" opacity="0.45" />
            <rect x="1080" y="10" width="12" height="248" rx="1" fill="#2a2c28" />
            <rect x="1083" y="10" width="2.2" height="248" fill="#5a5e56" opacity="0.45" />

            <rect
              x="40"
              y="44"
              width="1020"
              height="204"
              rx="1.5"
              fill={`url(#sheet-${uid})`}
            />
            <rect
              x="40"
              y="44"
              width="1020"
              height="204"
              rx="1.5"
              filter={`url(#grain-${uid})`}
              opacity="0.55"
            />
            <rect
              x="40"
              y="44"
              width="1020"
              height="204"
              rx="1.5"
              fill="none"
              stroke="rgba(0,0,0,0.45)"
              strokeWidth="1"
            />

            <g className={styles.preview} aria-hidden>
              {CNC_PATHS.map((p) => (
                <path key={`pre-${p.id}`} d={p.d} />
              ))}
            </g>

            <g>
              {CNC_PATHS.map((p, i) => (
                <path
                  key={p.id}
                  ref={(el) => {
                    pathRefs.current[i] = el;
                  }}
                  className={`${styles.kerf} ${cooled[i] ? styles.cooled : ''}`}
                  d={p.d}
                  pathLength={1}
                />
              ))}
            </g>
            <g>
              {CNC_PATHS.map((p, i) => (
                <path
                  key={`hot-${p.id}`}
                  ref={(el) => {
                    hotRefs.current[i] = el;
                  }}
                  className={styles.hotTip}
                  d={p.d}
                  pathLength={1}
                />
              ))}
            </g>

            <g ref={gantryRef} filter={`url(#shadow-${uid})`}>
              <rect x="-80" y="-38" width="1260" height="22" fill={`url(#beam-${uid})`} />
              <rect x="-80" y="-38" width="1260" height="1.2" fill="rgba(255,255,255,0.16)" />
              <rect x="-80" y="-18" width="1260" height="1" fill="rgba(0,0,0,0.45)" />
              <rect x="-80" y="-31" width="1260" height="1.4" fill="#1a1c18" />
              <rect x="-80" y="-27" width="1260" height="1.4" fill="#1a1c18" />
              <rect x="-80" y="-23" width="1260" height="5" fill="#4a4e48" opacity="0.35" />

              <g ref={carriageRef}>
                <ellipse cx="0" cy="10" rx="22" ry="7" fill="rgba(0,0,0,0.35)" />
                <rect x="-26" y="-54" width="52" height="36" rx="2" fill={`url(#head-${uid})`} />
                <rect x="-26" y="-54" width="52" height="1" fill="rgba(255,255,255,0.12)" />
                <rect x="-20" y="-48" width="40" height="8" rx="0.5" fill="#2c2e2a" />
                <rect x="-18" y="-46" width="36" height="1.2" fill="#111" />
                <rect x="-18" y="-43" width="36" height="1.2" fill="#111" />
                <circle cx="-16" cy="-28" r="1.6" fill="#6fae3a" opacity="0.9" />
                <circle cx="-16" cy="-28" r="0.7" fill="#e8ffc8" />
                <rect x="-8" y="-18" width="16" height="12" fill="#2a2c28" />
                <rect x="-6" y="-8" width="12" height="5" fill="#6d6a62" />
                <polygon points="-4.2,-3 4.2,-3 2.1,0 -2.1,0" fill="#9a9588" />
                <ellipse
                  ref={smokeRef}
                  className={styles.smoke}
                  cx="0"
                  cy="-6"
                  rx="18"
                  ry="10"
                  fill="rgba(210,205,195,0.22)"
                  opacity="0"
                />
                <circle ref={flareRef} className={styles.flare} r="7" fill={`url(#flare-${uid})`} opacity="0" />
                <circle r="1.15" fill="#fffaf2" opacity="0.95" className={styles.core} />
              </g>
            </g>
          </svg>

          <div className={styles.hud} aria-hidden>
            <span>{statusLabel}</span>
            <span>
              {coords.x.toFixed(0)} / {coords.y.toFixed(0)}
            </span>
          </div>
        </div>

        <div className={styles.copy}>
          <p className={styles.kicker}>Precision CNC &amp; laser</p>
          <h1 className={`font-display ${styles.headline}`}>
            CNC &amp; laser that turn ideas into <em>objects brands can touch</em>.
          </h1>
          <p className={styles.lede}>
            Dimensional signage, engraved detail, and fabricated pieces — a workshop, not a copy centre.
          </p>
          <div className={styles.actions}>
            <AnimatedButton href="/contact" variant="primary" size="md">
              Brief a commercial project
            </AnimatedButton>
            <AnimatedButton href="/imagine" variant="outline" size="md">
              Imagine what&apos;s possible
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
