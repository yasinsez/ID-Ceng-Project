import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrandHeader } from '../components/BrandHeader';

export default function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate('/search'), 2000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="flex flex-col h-full">
      {/* Header hidden in dark — no back button needed */}
      <BrandHeader hideInDark />

      {/* Vertically centered content */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        {/* Soundwave icon in soft rounded square */}
        <div className="w-24 h-24 rounded-[22px] bg-surface-sel flex items-center justify-center">
          <svg
            className="text-accent"
            width="54"
            height="42"
            viewBox="0 0 54 42"
            fill="none"
            aria-hidden
          >
            {/* 5 bars, bottom-aligned, heights: 14 22 38 30 18 */}
            <rect x="0"  y="28" width="8" height="14" rx="4" fill="currentColor" />
            <rect x="11" y="20" width="8" height="22" rx="4" fill="currentColor" />
            <rect x="22" y="4"  width="8" height="38" rx="4" fill="currentColor" />
            <rect x="33" y="12" width="8" height="30" rx="4" fill="currentColor" />
            <rect x="44" y="24" width="8" height="18" rx="4" fill="currentColor" />
          </svg>
        </div>

        <p className="text-[13px] text-secondary">Opening Vybex...</p>
      </div>
    </div>
  );
}
