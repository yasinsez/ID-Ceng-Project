import { useNavigate }  from 'react-router-dom';
import { BrandHeader }  from '../components/BrandHeader';
import { useAppState }  from '../context/AppStateContext';
import type { SoundPreset } from '../types';

const PRESETS: { id: SoundPreset; label: string }[] = [
  { id: 'balanced',  label: 'Balanced'  },
  { id: 'bassBoost', label: 'Bass Boost' },
  { id: 'podcast',   label: 'Podcast'   },
];

export default function SoundPage() {
  const navigate = useNavigate();
  const { soundPreset, setSoundPreset } = useAppState();

  const rowBase = 'w-full h-11 rounded-full flex items-center justify-center relative px-4 active:scale-95 transition-all active:opacity-70';
  const selected = 'bg-surface-sel border-2 border-accent';
  const normal   = 'bg-surface border border-border';

  return (
    <div className="flex flex-col h-full">
      <BrandHeader onBack={() => navigate('/menu')} />

      <div className="flex flex-col px-4 pt-2 gap-3">
        <div>
          <h2 className="text-[18px] font-bold text-primary leading-tight">Sound Presets</h2>
          <p className="text-[11px] text-secondary mt-0.5">Choose a sound mode.</p>
        </div>

        <div className="flex flex-col gap-2">
          {PRESETS.map(({ id, label }) => {
            const active = soundPreset === id;
            return (
              <button
                key={id}
                onClick={() => setSoundPreset(id)}
                className={`${rowBase} ${active ? selected : normal}`}
              >
                <span className={`text-[13px] text-primary ${active ? 'font-bold' : 'font-medium'}`}>
                  {label}
                </span>
                {active && (
                  <svg className="text-accent absolute right-4" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            );
          })}

          {/* Custom EQ — navigates to EQ flow, shows checkmark when active */}
          {(() => {
            const active = soundPreset === 'customEq';
            return (
              <button
                onClick={() => navigate('/sound/eq/bass')}
                className={`${rowBase} ${active ? selected : normal}`}
              >
                <span className={`text-[13px] text-primary ${active ? 'font-bold' : 'font-medium'}`}>
                  Custom EQ
                </span>
                {active ? (
                  <svg className="text-accent absolute right-4" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg className="text-secondary absolute right-4" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M5 2.5L9.5 7 5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
