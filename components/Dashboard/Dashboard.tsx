'use client';
import { useState } from 'react';
import { PACKAGES, Package } from '@/lib/packages';
import styles from './Dashboard.module.css';

function PackageModal({ pkg, onClose, onSelect }: { pkg: Package; onClose: () => void; onSelect: (id: string) => void }) {
  return (
    <div className={styles.modalBack} onClick={onClose} id="package-modal">
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose} id="modal-close-btn">✕</button>
        <div className={styles.modalIcon}>{pkg.icon}</div>
        <h3 className={styles.modalTitle}>{pkg.name}</h3>
        <p className={styles.modalTagline}>{pkg.tagline}</p>
        <div className={styles.modalPrice}>
          ${pkg.price}
          <span className={styles.modalDeposit}> · ${pkg.deposit} deposit</span>
        </div>
        <p className={styles.modalDuration}>⏱ {pkg.duration}</p>
        <ul className={styles.modalFeatures}>
          {pkg.features.map(f => (
            <li key={f}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <button
          className="btn-glow"
          onClick={() => { onSelect(pkg.id); onClose(); }}
          style={{ width: '100%', justifyContent: 'center' }}
          id={`modal-select-${pkg.id}`}
        >
          Select This Package
        </button>
      </div>
    </div>
  );
}

export default function Dashboard({ onSelectPackage }: { onSelectPackage: (id: string) => void }) {
  const [selected, setSelected] = useState<Package | null>(null);

  const handleSelect = (id: string) => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    onSelectPackage(id);
  };

  return (
    <section className={styles.section} id="services">
      <div
        className={styles.bg}
        style={{ backgroundImage: "url('/dashboard_bg.png')" }}
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.tag}>Our Packages</div>
          <h2 className={styles.heading}>
            Choose Your <span className="gradient-text">Level of Clean</span>
          </h2>
          <p className={styles.sub}>Every package includes a full exterior inspection and our satisfaction guarantee.</p>
        </div>

        <div className={styles.grid}>
          {PACKAGES.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`${styles.card} ${pkg.popular ? styles.popular : ''}`}
              onClick={() => setSelected(pkg)}
              id={`package-card-${pkg.id}`}
              style={{ '--accent': pkg.color, animationDelay: `${i * 0.1}s` } as React.CSSProperties}
            >
              {pkg.popular && <div className={styles.badge}>Most Popular</div>}
              <div className={styles.cardIcon}>{pkg.icon}</div>
              <h3 className={styles.cardName}>{pkg.name}</h3>
              <p className={styles.cardTagline}>{pkg.tagline}</p>
              <div className={styles.cardPrice}>${pkg.price}</div>
              <p className={styles.cardDuration}>{pkg.duration}</p>
              <ul className={styles.cardFeatures}>
                {pkg.features.slice(0, 3).map(f => (
                  <li key={f}>{f}</li>
                ))}
                {pkg.features.length > 3 && (
                  <li className={styles.more}>+ {pkg.features.length - 3} more</li>
                )}
              </ul>
              <button
                className={styles.cardBtn}
                onClick={e => { e.stopPropagation(); setSelected(pkg); }}
                id={`details-btn-${pkg.id}`}
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <PackageModal
          pkg={selected}
          onClose={() => setSelected(null)}
          onSelect={handleSelect}
        />
      )}
    </section>
  );
}
