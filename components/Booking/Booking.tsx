'use client';
import { useState, useEffect } from 'react';
import { PACKAGES } from '@/lib/packages';
import styles from './Booking.module.css';

interface FormData {
  service: string;
  make: string;
  model: string;
  year: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
}

const TIME_SLOTS = ['8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'];

export default function Booking({ selectedPackage }: { selectedPackage: string }) {
  const [form, setForm] = useState<FormData>({
    service: selectedPackage || '',
    make: '', model: '', year: '',
    date: '', time: '',
    name: '', email: '', phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Sync selected package from parent
  useEffect(() => {
    if (selectedPackage) setForm(f => ({ ...f, service: selectedPackage }));
  }, [selectedPackage]);

  const pkg = PACKAGES.find(p => p.id === form.service);

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.service || !form.date || !form.time || !form.name || !form.email || !form.phone) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/stripe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section} id="booking">
      <div className={styles.bg} />
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.tag}>Book Online</div>
          <h2 className={styles.heading}>
            Reserve Your <span className="gradient-text">Detail Session</span>
          </h2>
          <p className={styles.sub}>
            Secure your spot with a small deposit. Pay the remainder at your appointment.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Form */}
          <form className={styles.form} onSubmit={handleSubmit} id="booking-form">
            {/* Service */}
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="booking-service">Service Package *</label>
              <select
                id="booking-service"
                className={styles.select}
                value={form.service}
                onChange={set('service')}
                required
              >
                <option value="">Select a package...</option>
                {PACKAGES.map(p => (
                  <option key={p.id} value={p.id}>{p.icon} {p.name} — ${p.price}</option>
                ))}
              </select>
            </div>

            {/* Vehicle */}
            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="booking-make">Vehicle Make *</label>
                <input id="booking-make" className={styles.input} placeholder="e.g. BMW" value={form.make} onChange={set('make')} required />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="booking-model">Model *</label>
                <input id="booking-model" className={styles.input} placeholder="e.g. M3" value={form.model} onChange={set('model')} required />
              </div>
              <div className={styles.fieldGroup} style={{ flex: '0 0 90px' }}>
                <label className={styles.label} htmlFor="booking-year">Year *</label>
                <input id="booking-year" className={styles.input} placeholder="2024" maxLength={4} value={form.year} onChange={set('year')} required />
              </div>
            </div>

            {/* Date */}
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="booking-date">Preferred Date *</label>
              <input
                id="booking-date"
                type="date"
                className={styles.input}
                value={form.date}
                onChange={set('date')}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            {/* Time slots */}
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Preferred Time *</label>
              <div className={styles.timeGrid}>
                {TIME_SLOTS.map(t => (
                  <button
                    key={t}
                    type="button"
                    className={`${styles.timeSlot} ${form.time === t ? styles.timeSlotActive : ''}`}
                    onClick={() => setForm(f => ({ ...f, time: t }))}
                    id={`time-slot-${t.replace(/[: ]/g, '-')}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="booking-name">Full Name *</label>
              <input id="booking-name" className={styles.input} placeholder="Your name" value={form.name} onChange={set('name')} required />
            </div>
            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="booking-email">Email *</label>
                <input id="booking-email" type="email" className={styles.input} placeholder="you@email.com" value={form.email} onChange={set('email')} required />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="booking-phone">Phone *</label>
                <input id="booking-phone" type="tel" className={styles.input} placeholder="(919) 000-0000" value={form.phone} onChange={set('phone')} required />
              </div>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button
              type="submit"
              className={`btn-glow ${styles.submitBtn}`}
              disabled={loading}
              id="booking-submit-btn"
            >
              {loading ? (
                <span className={styles.spinner} />
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                    <path d="M1 10h22"/>
                  </svg>
                  Pay Deposit & Book — ${pkg?.deposit ?? '...'}
                </>
              )}
            </button>
          </form>

          {/* Summary panel */}
          <div className={styles.summary}>
            <div className={`glass ${styles.summaryCard}`}>
              <h3 className={styles.summaryTitle}>Booking Summary</h3>
              {pkg ? (
                <>
                  <div className={styles.summaryPkg}>
                    <span className={styles.summaryIcon}>{pkg.icon}</span>
                    <div>
                      <div className={styles.summaryName}>{pkg.name}</div>
                      <div className={styles.summaryTime}>{pkg.duration}</div>
                    </div>
                  </div>
                  <div className={styles.summaryRows}>
                    <div className={styles.summaryRow}>
                      <span>Package Price</span>
                      <span>${pkg.price}</span>
                    </div>
                    <div className={`${styles.summaryRow} ${styles.summaryDeposit}`}>
                      <span>Deposit Due Now</span>
                      <span className={styles.depositAmt}>${pkg.deposit}</span>
                    </div>
                    <div className={styles.summaryRow}>
                      <span>Balance at Appointment</span>
                      <span>${pkg.price - pkg.deposit}</span>
                    </div>
                  </div>
                </>
              ) : (
                <p className={styles.summaryEmpty}>Select a package to see pricing.</p>
              )}

              <div className={styles.guarantee}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>100% Satisfaction Guarantee</span>
              </div>

              <div className={styles.contact}>
                <p>Questions? Call or text:</p>
                <a href="tel:9198645867" className={styles.contactPhone} id="booking-phone-link">(919) 864-5867</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
