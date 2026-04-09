'use client';
import styles from './DriverSeat.module.css';

export default function DriverSeat() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className={styles.section} id="drivers-seat">
      <div
        className={styles.bg}
        style={{ backgroundImage: "url('/driver_seat.png')" }}
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.tag}>Our Story</div>
        <h2 className={styles.heading}>
          We Don't Just
          <br />
          <span className="gradient-text">Clean Cars.</span>
          <br />
          We Restore Pride.
        </h2>
        <p className={styles.body}>
          Not a Spot was built on one belief: your car deserves to look as good
          as it makes you feel. Based in Durham, NC, we bring obsessive
          attention to detail and professional-grade products to every single
          vehicle that comes through our hands.
        </p>
        <p className={styles.body}>
          From a fresh daily driver to a show-ready exotic — if you're behind the
          wheel, we'll make sure the world sees it clearly.
        </p>

        <div className={styles.pillars}>
          {[
            { icon: '🔬', label: 'Obsessive Detail' },
            { icon: '🛡️', label: 'Paint Protection' },
            { icon: '⚡', label: 'Fast Turnaround' },
            { icon: '✅', label: 'Satisfaction Guaranteed' },
          ].map(p => (
            <div key={p.label} className={styles.pillar}>
              <span className={styles.pillarIcon}>{p.icon}</span>
              <span className={styles.pillarLabel}>{p.label}</span>
            </div>
          ))}
        </div>

        <button
          className="btn-glow"
          onClick={() => scrollTo('services')}
          id="driver-cta-btn"
        >
          View Our Packages
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
