'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const params = useSearchParams();
  const sessionId = params.get('session_id');
  const [confNum] = useState(() => Math.random().toString(36).substring(2, 8).toUpperCase());

  useEffect(() => {
    // Could verify session server-side here
  }, [sessionId]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--black)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{
        maxWidth: '520px',
        width: '100%',
        textAlign: 'center',
        background: 'rgba(10,10,20,0.8)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '24px',
        padding: '3rem 2.5rem',
        backdropFilter: 'blur(16px)',
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1.25rem' }}>✅</div>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '2rem',
          fontWeight: 900,
          marginBottom: '0.75rem',
          background: 'linear-gradient(135deg, #00B4FF, #C9A84C)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          You're Booked!
        </h1>
        <p style={{ color: 'rgba(245,245,247,0.7)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
          Your deposit has been received. We'll confirm your appointment details via email shortly.
        </p>

        <div style={{
          background: 'rgba(0, 180, 255, 0.08)',
          border: '1px solid rgba(0,180,255,0.2)',
          borderRadius: '12px',
          padding: '1rem 1.5rem',
          marginBottom: '2rem',
        }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(245,245,247,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>
            Confirmation #
          </p>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#00B4FF', letterSpacing: '0.1em' }}>
            NAS-{confNum}
          </p>
        </div>

        <p style={{ color: 'rgba(245,245,247,0.5)', fontSize: '0.85rem', marginBottom: '2rem' }}>
          Questions? Call or text us at{' '}
          <a href="tel:9198645867" style={{ color: '#00B4FF' }}>(919) 864-5867</a>
          {' '}or email{' '}
          <a href="mailto:notaspot919@gmail.com" style={{ color: '#00B4FF' }}>notaspot919@gmail.com</a>
        </p>

        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 28px',
          background: 'linear-gradient(135deg, #00B4FF, #0077AA)',
          color: '#fff',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '0.85rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          borderRadius: '50px',
          boxShadow: '0 0 24px rgba(0,180,255,0.3)',
          textDecoration: 'none',
        }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
