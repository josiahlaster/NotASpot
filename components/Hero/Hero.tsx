'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="hero">
      {/* Background image with parallax */}
      <div
        className={styles.bg}
        style={{ backgroundImage: "url('/hero_car.png')" }}
      />

      {/* Dark overlay */}
      <div className={styles.overlay} />

      {/* Animated gradient orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      {/* Content */}
      <div className={`${styles.content} ${loaded ? styles.loaded : ''}`}>
        <div className={styles.badge} ref={overlayRef as any}>
          <span className={styles.badgeDot} />
          Now Serving the Greater Durham Area
        </div>

        <h1 className={styles.title} ref={titleRef}>
          <span className={styles.titleLine1}>NOT A</span>
          <span className={styles.titleLine2}>SPOT</span>
        </h1>

        <p className={styles.subtitle} ref={subtitleRef}>
          Precision Detailing. Flawless Finish.
        </p>

        <p className={styles.desc}>
          Where every surface tells a story of perfection.
          We don't just clean cars — we restore them to their highest form.
        </p>

        <div className={styles.cta} ref={ctaRef}>
          <button
            className="btn-glow"
            onClick={() => scrollTo('booking')}
            id="hero-book-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
            </svg>
            Book Your Detail
          </button>
          <button
            className={`btn-glow ${styles.btnOutline}`}
            onClick={() => scrollTo('services')}
            id="hero-services-btn"
          >
            View Packages
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </button>
        </div>

        {/* Stats bar */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>500+</span>
            <span className={styles.statLabel}>Cars Detailed</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>5.0★</span>
            <span className={styles.statLabel}>Google Rating</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Satisfaction</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scroll} onClick={() => scrollTo('drivers-seat')}>
        <div className={styles.scrollWheel} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
