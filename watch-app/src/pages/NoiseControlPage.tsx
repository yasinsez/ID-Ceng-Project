import { useNavigate } from 'react-router-dom';
import { BrandHeader } from '../components/BrandHeader';
import { useAppState } from '../context/AppStateContext';
import type { NoiseMode } from '../types';

const MODES: { id: NoiseMode; label: string; subtitle: string; Icon: React.FC<{ className: string }> }[] = [
  {
    id: 'anc',
    label: 'Noise Cancellation',
    subtitle: 'Blocks outside noise',
    Icon: ({ className }) => (
      <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 14a9 9 0 1 1 18 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="2"  y="13" width="4" height="7" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="13" width="4" height="7" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'off',
    label: 'Off',
    subtitle: 'No processing',
    Icon: ({ className }) => (
      <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M11 5a7 7 0 0 1 0 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 9a3 3 0 0 1 0 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'transparency',
    label: 'Transparency',
    subtitle: 'Lets sound through',
    Icon: ({ className }) => (
      <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15 15L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function NoiseControlPage() {
  const navigate = useNavigate();
  const { noiseMode, setNoiseMode } = useAppState();

  return (
    <div className="flex flex-col h-full">
      <BrandHeader onBack={() => navigate('/home')} />

      <div className="flex flex-col px-4 pt-2 gap-3">
        <div>
          <h2 className="text-[18px] font-bold text-primary leading-tight">Noise Control</h2>
          <p className="text-[11px] text-secondary mt-0.5">Choose listening mode.</p>
        </div>

        <div className="flex flex-col gap-2">
          {MODES.map(({ id, label, subtitle, Icon }) => {
            const active = noiseMode === id;
            return (
              <button
                key={id}
                onClick={() => setNoiseMode(id)}
                className={[
                  'w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl active:scale-95 transition-all active:opacity-70',
                  active
                    ? 'bg-surface-sel border-2 border-accent'
                    : 'bg-surface border border-border',
                ].join(' ')}
              >
                <div className="w-9 h-9 rounded-xl bg-surface-sel flex items-center justify-center flex-shrink-0">
                  <Icon className="text-accent" />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className={`text-[13px] leading-tight ${active ? 'font-bold text-primary' : 'font-medium text-primary'}`}>
                    {label}
                  </p>
                  <p className="text-[11px] text-secondary mt-0.5">{subtitle}</p>
                </div>
                {active && (
                  <svg className="text-accent flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
