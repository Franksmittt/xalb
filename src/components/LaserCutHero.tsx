'use client';

import { useEffect, useId, useRef, useState, type CSSProperties } from 'react';
import { useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import AnimatedButton from '@/components/AnimatedButton';
import styles from './LaserCutHero.module.css';

const WORDMARK = 'Xsphere';

const SPARKS = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: 8 + ((i * 41) % 84),
  delay: 0.95 + (i % 11) * 0.24,
  duration: 0.42 + (i % 5) * 0.08,
  dx: `${(i % 2 === 0 ? 1 : -1) * (16 + (i % 8) * 9)}px`,
  dy: `${-(22 + (i % 7) * 14)}px`,
}));

const SMOKE = [
  { id: 1, left: '18%', delay: '1.1s' },
  { id: 2, left: '38%', delay: '1.7s' },
  { id: 3, left: '52%', delay: '2.2s' },
  { id: 4, left: '68%', delay: '2.8s' },
  { id: 5, left: '80%', delay: '3.3s' },
];

function WordmarkText({
  className,
  style,
}: {
  className: string;
  style?: CSSProperties;
}) {
  return (
    <text
      className={className}
      x="50%"
      y="56%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="158"
      fontWeight="800"
      letterSpacing="-0.03em"
      style={style}
    >
      {WORDMARK}
    </text>
  );
}

export default function LaserCutHero() {
  const rawId = useId();
  const uid = rawId.replace(/:/g, '');
  const textRef = useRef<SVGTextElement>(null);
  const reducedMotion = useReducedMotion();
  const [pathLength, setPathLength] = useState(4200);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    let measured = false;

    const measure = () => {
      if (cancelled || measured) return;
      measured = true;

      const node = textRef.current;
      if (node) {
        const width = node.getComputedTextLength();
        setPathLength(Math.max(2800, Math.round(width * 3.55)));
      }

      setReady(true);
    };

    const timeout = window.setTimeout(measure, 700);

    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(() => {
        window.clearTimeout(timeout);
        measure();
      }).catch(() => {
        window.clearTimeout(timeout);
        measure();
      });
    } else {
      measure();
    }

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, []);

  const reduced = Boolean(reducedMotion);
  const live = ready && !reduced;

  return (
    <section
      className={styles.hero}
      aria-label="Xsphere CNC and laser hero"
      data-ready={live ? 'true' : 'false'}
      data-reduced={reduced ? 'true' : 'false'}
      style={{ ['--path-length' as string]: pathLength }}
    >
      <Image
        src="/images/fabrication-lab.png"
        alt=""
        fill
        priority
        className={styles.photo}
        sizes="100vw"
      />
      <div className={styles.wash} />
      <div className={styles.grid} aria-hidden />
      <div className={styles.accentBar} aria-hidden />

      <div className={styles.inner}>
        <div className={styles.stage}>
          <div className={styles.bed}>
            <span className={`${styles.mark} ${styles.markTl}`} aria-hidden />
            <span className={`${styles.mark} ${styles.markTr}`} aria-hidden />
            <span className={`${styles.mark} ${styles.markBl}`} aria-hidden />
            <span className={`${styles.mark} ${styles.markBr}`} aria-hidden />

            <svg
              className={styles.wordmark}
              viewBox="0 0 1200 268"
              role="img"
              aria-label="Xsphere"
            >
              <defs>
                <linearGradient id={`plate-${uid}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2c3524" />
                  <stop offset="45%" stopColor="#1c2418" />
                  <stop offset="100%" stopColor="#12180f" />
                </linearGradient>
                <radialGradient id={`void-${uid}`} cx="50%" cy="50%" r="58%">
                  <stop offset="0%" stopColor="#6fae3a" stopOpacity="0.72" />
                  <stop offset="42%" stopColor="#2f6b3a" stopOpacity="0.38" />
                  <stop offset="100%" stopColor="#050805" stopOpacity="1" />
                </radialGradient>
                <pattern
                  id={`honey-${uid}`}
                  width="28"
                  height="48"
                  patternUnits="userSpaceOnUse"
                >
                  <polygon
                    points="14,3 25,9 25,21 14,27 3,21 3,9"
                    fill="none"
                    stroke="rgba(111,174,58,0.13)"
                    strokeWidth="0.7"
                  />
                </pattern>
                <filter id={`glow-${uid}`} x="-20%" y="-40%" width="140%" height="180%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3.2" result="blur" />
                  <feFlood floodColor="#6fae3a" floodOpacity="0.95" result="color" />
                  <feComposite in="color" in2="blur" operator="in" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id={`head-${uid}`} x="-40%" y="-80%" width="180%" height="260%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur" />
                  <feFlood floodColor="#c6f06a" floodOpacity="1" result="color" />
                  <feComposite in="color" in2="blur" operator="in" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id={`edge-${uid}`} x="-15%" y="-30%" width="130%" height="160%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
                  <feFlood floodColor="#6fae3a" floodOpacity="0.9" result="color" />
                  <feComposite in="color" in2="blur" operator="in" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <mask id={`cut-${uid}`} maskUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="1200" height="268" fill="#fff" />
                  <WordmarkText className={styles.punch} />
                </mask>
              </defs>

              <rect width="1200" height="268" fill={`url(#honey-${uid})`} className={styles.honeycomb} />
              <rect
                className={styles.backlight}
                width="1200"
                height="268"
                fill={`url(#void-${uid})`}
              />
              <rect
                className={styles.plate}
                width="1200"
                height="268"
                fill={`url(#plate-${uid})`}
                mask={`url(#cut-${uid})`}
              />

              <WordmarkText className={styles.slug} />
              <WordmarkText className={styles.cad} />
              <text
                ref={textRef}
                className={styles.laserTrail}
                x="50%"
                y="56%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="158"
                fontWeight="800"
                letterSpacing="-0.03em"
                style={{ filter: `url(#glow-${uid})` }}
              >
                {WORDMARK}
              </text>
              <WordmarkText
                className={styles.laserHead}
                style={{ filter: `url(#head-${uid})` }}
              />
              <WordmarkText
                className={styles.edge}
                style={{ filter: `url(#edge-${uid})` }}
              />
            </svg>

            <div className={styles.gantry} aria-hidden>
              <div className={styles.gantryBar} />
              <div className={styles.gantryCarriage}>
                <div className={styles.gantryHead} />
                <span className={styles.beam} />
              </div>
            </div>
            <div className={styles.hotspot} aria-hidden />

            {SPARKS.map((spark) => (
              <span
                key={spark.id}
                className={styles.spark}
                style={{
                  left: `${spark.x}%`,
                  animationDelay: `${spark.delay}s`,
                  animationDuration: `${spark.duration}s`,
                  ['--dx' as string]: spark.dx,
                  ['--dy' as string]: spark.dy,
                }}
                aria-hidden
              />
            ))}
            {SMOKE.map((puff) => (
              <span
                key={puff.id}
                className={styles.smoke}
                style={{ left: puff.left, animationDelay: puff.delay, animationDuration: '1.6s' }}
                aria-hidden
              />
            ))}

            <div className={styles.hud} aria-hidden>
              <div className={styles.hudTop}>
                <span>
                  Job <span className={styles.hudBright}>0047-XSPHERE</span>
                </span>
                <span>Bed 1200 × 900 mm</span>
              </div>
              <div className={styles.hudBottom}>
                <div>
                  <div>Src CAD / vector</div>
                  <div className={styles.progress}>
                    <div className={styles.progressFill} />
                  </div>
                </div>
                <div className={styles.status}>
                  <span className={styles.statusIdle}>Standby</span>
                  <span className={styles.statusCut}>Cutting</span>
                  <span className={styles.statusDone}>Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          <p className={styles.kicker}>Precision CNC &amp; laser</p>
          <h1 className={`font-display ${styles.headline}`}>
            CNC &amp; laser that turn ideas into <em>objects brands can touch</em>.
          </h1>
          <p className={styles.lede}>
            Dimensional signage, engraved detail, and fabricated pieces for commercial clients — a
            workshop that brings concepts to life, not a copy centre.
          </p>
          <div className={styles.actions}>
            <AnimatedButton href="/contact" variant="primary" size="lg">
              Brief a commercial project
            </AnimatedButton>
            <AnimatedButton href="/imagine" variant="outline" size="lg">
              Imagine what&apos;s possible
            </AnimatedButton>
          </div>
        </div>

        <div className={styles.chips}>
          <span>Laser cut</span>
          <span className={styles.dot}>·</span>
          <span>Laser engrave</span>
          <span className={styles.dotWarm}>·</span>
          <span>CNC route</span>
          <span className={styles.dot}>·</span>
          <span>Finish &amp; install</span>
        </div>
      </div>
    </section>
  );
}
