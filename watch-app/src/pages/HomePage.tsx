import { useNavigate } from 'react-router-dom';
import { BrandHeader }  from '../components/BrandHeader';
import { useAppState }  from '../context/AppStateContext';
import type { NoiseMode } from '../types';

const NOISE_LABELS: Record<NoiseMode, string> = {
  anc:          'Noise Cancellation',
  off:          'Off',
  transparency: 'Transparency',
};

export default function HomePage() {
  const navigate = useNavigate();
  const { connectedDevice, noiseMode } = useAppState();

  return (
    <div className="flex flex-col h-full">
      <BrandHeader onBack={() => navigate('/')} />

      <div className="flex flex-col items-center px-3 pt-2 gap-3">

        {/* ── Headphone icon in rounded square ── */}
        <div className="w-[84px] h-[84px] rounded-[22px] bg-surface-sel flex items-center justify-center flex-shrink-0">
          <svg
            className="text-accent"
            width="46"
            height="46"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M3 14a9 9 0 1 1 18 0"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <rect x="2"  y="13" width="4" height="7" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
            <rect x="18" y="13" width="4" height="7" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        {/* ── Device card → noise control ── */}
        <button
          onClick={() => navigate('/noise-control')}
          className="w-full rounded-2xl bg-surface border border-border px-3 py-2.5 flex items-center gap-2 active:scale-95 transition-all active:opacity-80"
        >
          <div className="flex-1 min-w-0 text-left">
            <p className="text-[13px] font-bold text-primary leading-tight">
              {connectedDevice}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
              <span className="text-[11px] text-secondary">{NOISE_LABELS[noiseMode]}</span>
            </div>
          </div>
          {/* Right chevron */}
          <svg
            className="text-accent flex-shrink-0"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden
          >
            <path
              d="M5 2.5L9.5 7 5 11.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* ── Two tiles ── */}
        <div className="w-full grid grid-cols-2 gap-2.5">

          {/* Menu tile */}
          <button
            onClick={() => navigate('/menu')}
            className="rounded-2xl bg-surface border border-border flex flex-col items-center justify-center gap-1.5 py-4 active:scale-95 transition-all active:opacity-80"
          >
            <svg
              className="text-accent"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect x="3"  y="3"  width="8" height="8" rx="1.5" />
              <rect x="13" y="3"  width="8" height="8" rx="1.5" />
              <rect x="3"  y="13" width="8" height="8" rx="1.5" />
              <rect x="13" y="13" width="8" height="8" rx="1.5" />
            </svg>
            <span className="text-[12px] font-medium text-primary">Menu</span>
          </button>

          {/* Device tile */}
          <button
            onClick={() => navigate('/devices')}
            className="rounded-2xl bg-surface border border-border flex flex-col items-center justify-center gap-1.5 py-4 active:scale-95 transition-all active:opacity-80"
          >
            <svg
              className="text-accent"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path d="M3 14a9 9 0 1 1 18 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="2"  y="13" width="4" height="7" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
              <rect x="18" y="13" width="4" height="7" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="text-[12px] font-medium text-primary">Device</span>
          </button>

        </div>
      </div>
    </div>
  );
}
