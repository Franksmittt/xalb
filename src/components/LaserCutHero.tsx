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

function moveToward(
  from: { x: number; y: number },
  to: { x: number; y: number },
  step: number,
) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.hypot(dx, dy);
  if (dist <= step || dist < 1.2) return { pos: { x: to.x, y: to.y }, arrived: true };
  const r = step / dist;
  return { pos: { x: from.x + dx * r, y: from.y + dy * r }, arrived: false };
}

export default function LaserCutHero() {
  const uid = useId().replace(/:/g, '');
  const reducedMotion = useReducedMotion();
  const reduced = Boolean(reducedMotion);

  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const gantryRef = useRef<SVGGElement>(null);
  const carriageRef = useRef<SVGGElement>(null);
  const flareRef = useRef<SVGCircleElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const [phase, setPhase] = useState<Phase>(reduced ? 'done' : 'idle');
  const [cooled, setCooled] = useState<boolean[]>(() => CNC_PATHS.map(() => reduced));
  const [coords, setCoords] = useState(CNC_HOME);
  const [cutting, setCutting] = useState(false);

  useEffect(() => {
    const gantry = gantryRef.current;
    const carriage = carriageRef.current;
    const flare = flareRef.current;
    const paths = pathRefs.current.filter((p): p is SVGPathElement => p !== null);

    if (!gantry || !carriage || !flare) return;

    const place = (x: number, y: number) => {
      gantry.setAttribute('transform', `translate(0 ${y})`);
      carriage.setAttribute('transform', `translate(${x} 0)`);
    };

    if (reduced) {
      paths.forEach((p) => {
        p.style.strokeDasharray = '1';
        p.style.strokeDashoffset = '0';
      });
      place(CNC_PARK.x, CNC_PARK.y);
      flare.style.opacity = '0';
      setPhase('done');
      setCooled(CNC_PATHS.map(() => true));
      return;
    }

    const lengths = paths.map((p) => p.getTotalLength() || 1);
    paths.forEach((p) => {
      p.style.strokeDasharray = '1';
      p.style.strokeDashoffset = '1';
    });

    let raf = 0;
    let stopped = false;
    let last = 0;
    let hudAt = 0;
    let index = 0;
    let state: Phase = 'idle';
    let pos = { ...CNC_HOME };
    let cutProgress = 0;
    let pierceT = 0;
    let startDelay = 0.45;
    let publishedPhase: Phase = 'idle';
    let publishedCutting = false;
    let lastHud = { x: -1, y: -1 };

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

    place(pos.x, pos.y);
    flare.style.opacity = '0';

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
          publish('rapid', false);
          const next = moveToward(pos, start, CNC_TRAVEL * dt);
          pos = next.pos;
          if (next.arrived) {
            state = 'pierce';
            pierceT = 0;
            cutProgress = 0;
            flare.style.opacity = '1';
            publish('pierce', true);
          }
        } else if (state === 'pierce') {
          pierceT += dt;
          if (pierceT >= CNC_PIERCE) {
            state = 'cut';
            publish('cut', true);
          }
        } else if (state === 'cut') {
          cutProgress += CNC_CUT * dt;
          const len = lengths[index];
          if (cutProgress >= len) {
            cutProgress = len;
            const doneIndex = index;
            path.style.strokeDashoffset = '0';
            if (!stopped) {
              setCooled((prev) => {
                const next = [...prev];
                next[doneIndex] = true;
                return next;
              });
            }
            pos = path.getPointAtLength(len);
            index += 1;
            state = 'rapid';
            flare.style.opacity = '0';
            publish('rapid', false);
          } else {
            path.style.strokeDashoffset = String(1 - cutProgress / len);
            pos = path.getPointAtLength(cutProgress);
          }
        }
      } else {
        flare.style.opacity = '0';
        if (state !== 'home' && state !== 'done') {
          state = 'home';
          publish('home', false);
        }
        const next = moveToward(pos, CNC_PARK, CNC_TRAVEL * dt);
        pos = next.pos;
        if (next.arrived) {
          state = 'done';
          publish('done', false);
          place(pos.x, pos.y);
          return;
        }
      }

      place(pos.x, pos.y);
      if (ts - hudAt > 90) {
        hudAt = ts;
        const hx = Math.round(pos.x * 10) / 10;
        const hy = Math.round(pos.y * 10) / 10;
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
      ? 'Cutting'
      : phase === 'rapid' || phase === 'home'
        ? 'Rapid'
        : phase === 'done'
          ? 'Complete'
          : 'Standby';

  return (
    <section className={styles.hero} aria-label="Xsphere CNC and laser hero" data-cutting={cutting ? 'true' : 'false'}>
      <div className={styles.accentBar} aria-hidden />

      <div className={styles.inner}>
        <div className={styles.bedWrap}>
          <svg
            ref={svgRef}
            className={styles.bed}
            viewBox={`0 0 ${CNC_VIEWBOX.w} ${CNC_VIEWBOX.h}`}
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="CNC laser cutting the Xsphere wordmark"
          >
            <defs>
              <pattern id={`grid-${uid}`} width="28" height="28" patternUnits="userSpaceOnUse">
                <path
                  d="M 28 0 L 0 0 0 28"
                  fill="none"
                  stroke="rgba(111,174,58,0.14)"
                  strokeWidth="1.2"
                />
              </pattern>
              <pattern id={`honey-${uid}`} width="22" height="38" patternUnits="userSpaceOnUse">
                <polygon
                  points="11,2 20,8 20,16 11,22 2,16 2,8"
                  fill="none"
                  stroke="rgba(111,174,58,0.1)"
                  strokeWidth="0.7"
                />
              </pattern>
              <linearGradient id={`beam-${uid}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3a4334" />
                <stop offset="45%" stopColor="#1c2218" />
                <stop offset="100%" stopColor="#12160f" />
              </linearGradient>
              <filter id={`flare-${uid}`} x="-120%" y="-120%" width="340%" height="340%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3.4" result="b" />
                <feFlood floodColor="#6fae3a" floodOpacity="1" result="c" />
                <feComposite in="c" in2="b" operator="in" result="g" />
                <feMerge>
                  <feMergeNode in="g" />
                  <feMergeNode in="g" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect width="100%" height="100%" fill="#12160f" />
            <rect width="100%" height="100%" fill={`url(#honey-${uid})`} />
            <rect width="100%" height="100%" fill={`url(#grid-${uid})`} />

            <rect x="6" y="8" width="9" height="284" rx="1" fill="#161b14" stroke="#2c3328" strokeWidth="0.8" />
            <rect x="975" y="8" width="9" height="284" rx="1" fill="#161b14" stroke="#2c3328" strokeWidth="0.8" />

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
                  className={`${styles.cutLine} ${cooled[i] ? styles.cooled : ''}`}
                  d={p.d}
                  pathLength={1}
                />
              ))}
            </g>

            <g ref={gantryRef} className={styles.gantry}>
              <rect x="-70" y="-26" width="1140" height="7" fill="rgba(0,0,0,0.4)" />
              <rect x="-70" y="-44" width="1140" height="20" fill={`url(#beam-${uid})`} />
              <rect x="-70" y="-44" width="1140" height="1.4" fill="rgba(255,255,255,0.14)" />
              <line x1="-70" y1="-34" x2="1070" y2="-34" stroke="#4a5344" strokeWidth="1.6" />

              <g ref={carriageRef}>
                <rect x="-30" y="-62" width="60" height="40" rx="3.5" fill="#1a2016" stroke="#5a6452" strokeWidth="1.1" />
                <rect x="-22" y="-56" width="44" height="7" rx="1" fill="#2f3828" />
                <rect x="-18" y="-46" width="36" height="4" fill="#6fae3a" opacity="0.85" />
                <rect x="-9" y="-22" width="18" height="11" fill="#6d7664" />
                <polygon points="-8,-11 8,-11 3.2,0 -3.2,0" fill="#a8b09c" />
                <polygon points="-4.5,-11 4.5,-11 2,0 -2,0" fill="#dfe6d4" />
                <rect x="-6" y="-15" width="12" height="3" fill="#6fae3a" />
                <circle
                  ref={flareRef}
                  className={styles.flare}
                  r="5"
                  fill="#f8ffe8"
                  filter={`url(#flare-${uid})`}
                  opacity="0"
                />
                <g className={styles.sparks} aria-hidden>
                  <line x1="0" y1="0" x2="10" y2="-12" />
                  <line x1="0" y1="0" x2="-9" y2="-11" />
                  <line x1="0" y1="0" x2="7" y2="9" />
                  <line x1="0" y1="0" x2="-8" y2="8" />
                  <line x1="0" y1="0" x2="12" y2="2" />
                  <line x1="0" y1="0" x2="-12" y2="-2" />
                </g>
              </g>
            </g>
          </svg>

          <div className={styles.hud} aria-hidden>
            <span>
              Job <em>0047-XSPHERE</em>
            </span>
            <span className={styles.hudCoords}>
              X {coords.x.toFixed(1)}
              <span> </span>
              Y {coords.y.toFixed(1)}
            </span>
            <span className={styles.hudStatus} data-phase={phase}>
              {statusLabel}
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
