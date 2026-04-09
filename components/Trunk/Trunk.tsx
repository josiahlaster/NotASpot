'use client';
import styles from './Trunk.module.css';

const REVIEWS = [
  {
    name: 'Marcus T.',
    vehicle: '2021 BMW M4',
    rating: 5,
    text: "Not a Spot took my M4 from looking beat to absolutely MINT. The paint correction they did was insane — I can see myself in the hood. Won't go anywhere else.",
    avatar: '🧔🏾',
  },
  {
    name: 'Destiny W.',
    vehicle: '2023 Dodge Charger',
    rating: 5,
    text: "Booked the Flawless Finish package and I am BLOWN AWAY. My Charger looks better than the day I bought it. Super professional, super fast. 10/10.",
    avatar: '👩🏽',
  },
  {
    name: 'Jordan K.',
    vehicle: '2019 Tesla Model 3',
    rating: 5,
    text: 'Got the Zero Spot Signature on my Tesla. Ceramic coating looks unreal. Water just sheets right off. These guys are the real deal in Durham.',
    avatar: '🧑🏼',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < count ? '#C9A84C' : 'none'} stroke="#C9A84C" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Trunk() {
  return (
    <section className={styles.section} id="reviews">
      <div className={styles.bg} />
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.tag}>Customer Reviews</div>
          <h2 className={styles.heading}>
            What Our Clients <span className="gradient-text">Are Saying</span>
          </h2>
          <p className={styles.sub}>Reviews from real customers in the Durham area.</p>
        </div>

        <div className={styles.grid}>
          {REVIEWS.map((r, i) => (
            <div key={r.name} className={styles.card} style={{ animationDelay: `${i * 0.15}s` }} id={`review-card-${i}`}>
              <Stars count={r.rating} />
              <p className={styles.quote}>"{r.text}"</p>
              <div className={styles.reviewer}>
                <span className={styles.avatar}>{r.avatar}</span>
                <div>
                  <div className={styles.name}>{r.name}</div>
                  <div className={styles.vehicle}>{r.vehicle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.googleBadge} id="google-rating-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <strong>5.0</strong> Google Rating · Based on 50+ reviews
        </div>
      </div>
    </section>
  );
}
