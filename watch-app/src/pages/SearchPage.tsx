import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BrandHeader } from '../components/BrandHeader';

export default function SearchPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const returnTo: string | undefined = (location.state as { returnTo?: string } | null)?.returnTo;

  useEffect(() => {
    const t = setTimeout(
      () => navigate('/connected', { state: { returnTo } }),
      3000,
    );
    return () => clearTimeout(t);
  }, [navigate, returnTo]);

  return (
    <div className="flex flex-col h-full">
      <BrandHeader hideInDark />

      <div className="text-center px-5 pt-1 pb-2 flex-shrink-0">
        <h2 className="text-[18px] font-bold text-primary leading-tight">Searching</h2>
        <p className="text-[11px] text-secondary mt-1 leading-snug">
          Searching for SoundWave Buds automatically.
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-44 h-44">
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed border-accent-light"
            style={{ animation: 'spin-ring 4s linear infinite' }}
          />
          <div
            className="absolute inset-4 rounded-full"
            style={{ background: 'var(--color-accent-light)', animation: 'pulse-scale 2.5s ease-in-out infinite' }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68px] h-[68px] rounded-full bg-surface-sel flex items-center justify-center">
            <svg className="text-accent" width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M15 15L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      <p className="px-6 pb-5 text-[11px] text-secondary text-center leading-snug flex-shrink-0">
        The watch connects automatically when the device is found.
      </p>
    </div>
  );
}
