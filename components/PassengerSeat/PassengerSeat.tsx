'use client';
import styles from './PassengerSeat.module.css';

const WHY_US = [
  {
    icon: '🏆',
    title: 'Professional Grade Products',
    desc: 'We use only premium detailing products — the same brands trusted by professional detailers and concours competitors worldwide.',
  },
  {
    icon: '🤝',
    title: '100% Satisfaction Guarantee',
    desc: "If you're not completely satisfied with your detail, we'll make it right — no questions asked.",
  },
  {
    icon: '📍',
    title: 'Mobile & In-Shop Service',
    desc: "We come to you, or you come to us. Your choice, your schedule.",
  },
  {
    icon: '📸',
    title: 'Before & After Documentation',
    desc: 'Every detail is documented with photos so you can see the full transformation.',
  },
];

export default function PassengerSeat() {
  return (
    <section className={styles.section} id="why-us">
      <div
        className={styles.bg}
        style={{ backgroundImage: "url('/passenger_seat.png')" }}
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.tag}>Why Choose Us</div>
          <h2 className={styles.heading}>
            The Not a Spot
            <br />
            <span className="gradient-text">Difference</span>
          </h2>
          <p className={styles.desc}>
            We're not just another car wash. We're craftsmen who treat every
            vehicle like it's our own. Here's what sets us apart.
          </p>

          <div className={styles.contactCard}>
            <div className={styles.contactRow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <a href="tel:9198645867" id="contact-phone">(919) 864-5867</a>
            </div>
            <div className={styles.contactRow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:notaspot919@gmail.com" id="contact-email">notaspot919@gmail.com</a>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {WHY_US.map((item, i) => (
            <div
              key={item.title}
              className={styles.card}
              style={{ animationDelay: `${i * 0.12}s` }}
              id={`why-card-${i}`}
            >
              <div className={styles.cardIcon}>{item.icon}</div>
              <div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
