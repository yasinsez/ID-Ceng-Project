import { useNavigate } from 'react-router-dom';
import { BrandHeader } from '../components/BrandHeader';

function HeadphonesIcon() {
  return (
    <svg className="text-accent" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 14a9 9 0 1 1 18 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="2"  y="13" width="4" height="7" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="18" y="13" width="4" height="7" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export default function ControlsPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      <BrandHeader onBack={() => navigate('/settings')} />

      <div className="flex flex-col px-4 pt-2 gap-3">
        <div>
          <h2 className="text-[18px] font-bold text-primary leading-tight">Touch Controls</h2>
          <p className="text-[11px] text-secondary mt-0.5">Choose an earbud.</p>
        </div>

        <div className="flex flex-col gap-3 mt-1">
          {/* Left Earbud card */}
          <button
            onClick={() => navigate('/controls/left')}
            className="w-full rounded-2xl bg-surface border border-border flex flex-col items-center justify-center py-5 gap-2 active:scale-95 transition-all active:opacity-70"
          >
            <HeadphonesIcon />
            <span className="text-[13px] font-bold text-primary">Left Earbud</span>
          </button>

          {/* Right Earbud card */}
          <button
            onClick={() => navigate('/controls/right')}
            className="w-full rounded-2xl bg-surface border border-border flex flex-col items-center justify-center py-5 gap-2 active:scale-95 transition-all active:opacity-70"
          >
            <HeadphonesIcon />
            <span className="text-[13px] font-bold text-primary">Right Earbud</span>
          </button>
        </div>
      </div>
    </div>
  );
}
