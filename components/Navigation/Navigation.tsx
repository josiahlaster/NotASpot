'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnScroll = () => setMenuOpen(false);
    window.addEventListener('scroll', closeOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', closeOnScroll);
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav ref={ref} className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={() => scrollTo('hero')} id="nav-logo">
          <span className={styles.logoText}>NOT A SPOT</span>
          <span className={styles.logoSub}>DETAILING</span>
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <li><button onClick={() => scrollTo('services')} id="nav-services">Services</button></li>
          <li><button onClick={() => scrollTo('results')} id="nav-results">Results</button></li>
          <li><button onClick={() => scrollTo('reviews')} id="nav-reviews">Reviews</button></li>
          <li><button onClick={() => scrollTo('booking')} id="nav-contact">Contact</button></li>
        </ul>

        <button className="btn-glow" onClick={() => scrollTo('booking')} id="nav-book-btn">
          Book Now
        </button>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          id="nav-burger"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
