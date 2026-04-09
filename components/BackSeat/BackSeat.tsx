'use client';
import { useRef, useState, useCallback } from 'react';
import styles from './BackSeat.module.css';

const PAIRS = [
  { before: '/before_detail.png', after: '/after_detail.png', label: 'Full Exterior Detail' },
];

function Slider({ pair }: { pair: typeof PAIRS[0] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const getPos = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    return Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
  };

  const onMouseDown = () => { dragging.current = true; };
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (dragging.current) setPosition(getPos(e.clientX));
  }, []);
  const onMouseUp = () => { dragging.current = false; };

  const onTouchMove = (e: React.TouchEvent) => {
    setPosition(getPos(e.touches[0].clientX));
  };

  return (
    <div
      ref={containerRef}
      className={styles.slider}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
      id="before-after-slider"
    >
      {/* Before */}
      <div className={styles.sliderImg} style={{ backgroundImage: `url(${pair.before})` }}>
        <span className={styles.sliderLabel}>BEFORE</span>
      </div>

      {/* After clipped */}
      <div
        className={`${styles.sliderImg} ${styles.sliderAfter}`}
        style={{
          backgroundImage: `url(${pair.after})`,
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <span className={`${styles.sliderLabel} ${styles.sliderLabelAfter}`}>AFTER</span>
      </div>

      {/* Handle */}
      <div className={styles.handle} style={{ left: `${position}%` }}>
        <div className={styles.handleLine} />
        <div className={styles.handleKnob}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />
          </svg>
        </div>
        <div className={styles.handleLine} />
      </div>
    </div>
  );
}

export default function BackSeat() {
  return (
    <section className={styles.section} id="results">
      <div className={styles.bg} />
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.tag}>Real Results</div>
          <h2 className={styles.heading}>
            See The <span className="gradient-text">Transformation</span>
          </h2>
          <p className={styles.sub}>
            Drag the slider to compare before & after. These are real vehicles — real results.
          </p>
        </div>

        <div className={styles.sliders}>
          {PAIRS.map((pair, i) => (
            <div key={i} className={styles.sliderWrap}>
              <Slider pair={pair} />
              <p className={styles.sliderCaption}>{pair.label}</p>
            </div>
          ))}
        </div>

        <div className={styles.note}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
          </svg>
          Results may vary based on vehicle condition. Contact us for a free assessment.
        </div>
      </div>
    </section>
  );
}
