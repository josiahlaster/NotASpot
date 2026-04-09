'use client';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoText}>NOT A SPOT</span>
              <span className={styles.logoSub}>DETAILING</span>
            </div>
            <p className={styles.tagline}>Precision Detailing. Flawless Finish.</p>
            <p className={styles.location}>📍 Durham, NC · Serving the Greater Area</p>
          </div>

          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <ul>
              <li><button onClick={() => scrollTo('services')} id="footer-services">Services</button></li>
              <li><button onClick={() => scrollTo('results')} id="footer-results">Our Work</button></li>
              <li><button onClick={() => scrollTo('reviews')} id="footer-reviews">Reviews</button></li>
              <li><button onClick={() => scrollTo('booking')} id="footer-booking">Book Now</button></li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h4 className={styles.linksTitle}>Contact</h4>
            <ul>
              <li>
                <a href="tel:9198645867" id="footer-phone">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  (919) 864-5867
                </a>
              </li>
              <li>
                <a href="mailto:notaspot919@gmail.com" id="footer-email">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  notaspot919@gmail.com
                </a>
              </li>
            </ul>

            <div className={styles.socials}>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener" className={styles.social} aria-label="Instagram" id="footer-instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com" target="_blank" rel="noopener" className={styles.social} aria-label="TikTok" id="footer-tiktok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.07a8.19 8.19 0 004.79 1.54V7.17a4.85 4.85 0 01-1.02-.48z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener" className={styles.social} aria-label="Facebook" id="footer-facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 Not a Spot Detailing. All rights reserved.</span>
          <span className={styles.craft}>Crafted with ♥ in Durham, NC</span>
        </div>
      </div>
    </footer>
  );
}
