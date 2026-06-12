import { useNavigate } from 'react-router-dom';
import { BrandHeader }  from './BrandHeader';
import { useAppState }  from '../context/AppStateContext';
import { GESTURE_FULL } from '../utils/gestureLabels';

interface Props {
  earbud: 'left' | 'right';
}

const ROWS = [
  { label: 'Single Tap',   param: 'single-tap', key: 'singleTap' as const },
  { label: 'Double Tap',   param: 'double-tap', key: 'doubleTap' as const },
  { label: 'Press & Hold', param: 'press-hold', key: 'pressHold' as const },
];

export function EarbudControls({ earbud }: Props) {
  const navigate = useNavigate();
  const { gestureAssignments } = useAppState();
  const gestures = gestureAssignments[earbud];

  const title    = earbud === 'left' ? 'Left Controls'       : 'Right Controls';
  const subtitle = earbud === 'left' ? 'Left earbud gestures.' : 'Right earbud gestures.';

  // Segmented L/R switch shared style
  const seg = (side: 'left' | 'right') => {
    const active = earbud === side;
    return (
      <button
        key={side}
        onClick={() => !active && navigate(`/controls/${side}`)}
        disabled={active}
        className={[
          'w-7 h-6 rounded-full flex items-center justify-center text-[12px] select-none',
          active
            ? 'bg-surface-2 text-accent font-bold'
            : 'text-secondary font-medium',
        ].join(' ')}
      >
        {side === 'left' ? 'L' : 'R'}
      </button>
    );
  };

  return (
    <div className="flex flex-col h-full">
      <BrandHeader onBack={() => navigate('/controls')} />

      <div className="px-4 pt-2 flex-shrink-0">
        {/* Title row with inline L/R switch */}
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-[18px] font-bold text-primary leading-tight">{title}</h2>
          <div className="flex items-center rounded-full bg-surface border border-border p-0.5 gap-0.5 flex-shrink-0">
            {seg('left')}
            {seg('right')}
          </div>
        </div>
        <p className="text-[11px] text-secondary mt-0.5">{subtitle}</p>
        <p className="text-[11px] text-secondary mt-2 leading-snug">
          Each action can be used once per earbud.
        </p>
      </div>

      {/* Gesture rows */}
      <div className="flex flex-col gap-2 px-4 mt-3">
        {ROWS.map(({ label, param, key }) => (
          <button
            key={param}
            onClick={() => navigate(`/controls/${earbud}/${param}`)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-surface border border-border active:scale-95 transition-all active:opacity-70"
          >
            <div className="flex-1 min-w-0 text-left">
              <p className="text-[13px] font-bold text-primary leading-tight">{label}</p>
              <p className="text-[11px] text-secondary mt-0.5">{GESTURE_FULL[gestures[key]]}</p>
            </div>
            <svg className="text-secondary flex-shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M5 2.5L9.5 7 5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
