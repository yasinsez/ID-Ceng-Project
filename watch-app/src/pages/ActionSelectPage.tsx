import { useNavigate, useParams } from 'react-router-dom';
import { useAppState } from '../context/AppStateContext';
import {
  GESTURE_PILL, GESTURE_ACTIONS,
  GESTURE_PARAM_KEY, GESTURE_PARAM_DISPLAY,
} from '../utils/gestureLabels';
import type { GestureAction } from '../types';

export default function ActionSelectPage() {
  const navigate = useNavigate();
  const { earbud, gesture } = useParams<{ earbud: string; gesture: string }>();
  const { gestureAssignments, setGestureAssignments } = useAppState();

  const earbudKey   = earbud as 'left' | 'right';
  const gestureKey  = GESTURE_PARAM_KEY[gesture ?? ''];
  const currentVal  = gestureKey ? gestureAssignments[earbudKey]?.[gestureKey] : undefined;

  const earbudLabel   = earbud ? earbud.charAt(0).toUpperCase() + earbud.slice(1) : '';
  const gestureLabel  = GESTURE_PARAM_DISPLAY[gesture ?? ''] ?? gesture ?? '';
  const title         = `${earbudLabel} · ${gestureLabel}`;

  const handleSelect = (action: GestureAction) => {
    if (!gestureKey || !earbudKey) return;
    setGestureAssignments({
      ...gestureAssignments,
      [earbudKey]: { ...gestureAssignments[earbudKey], [gestureKey]: action },
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Minimal back row — no VESTEL on this screen per design */}
      <div className="h-9 flex items-center flex-shrink-0">
        <button
          onClick={() => navigate(`/controls/${earbud}`)}
          className="ml-2 p-1 text-primary"
          aria-label="Back"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M9 2.5L4 7l5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Title + subtitle */}
      <div className="px-4 pb-2 flex-shrink-0">
        <h2 className="text-[18px] font-bold text-primary leading-tight">{title}</h2>
        <p className="text-[11px] text-secondary mt-0.5">Pick one action.</p>
      </div>

      {/* 2 × 3 action pill grid */}
      <div className="flex-1 grid grid-cols-2 gap-2 px-4 pb-4 content-start mt-1">
        {GESTURE_ACTIONS.map(action => {
          const active = action === currentVal;
          return (
            <button
              key={action}
              onClick={() => handleSelect(action)}
              className={[
                'h-11 rounded-full flex items-center justify-center gap-1.5 px-3 active:scale-95 transition-all active:opacity-70',
                active
                  ? 'bg-surface-sel border-2 border-accent'
                  : 'bg-surface border border-border',
              ].join(' ')}
            >
              <span className={`text-[12px] leading-none ${active ? 'font-bold text-accent' : 'font-medium text-primary'}`}>
                {GESTURE_PILL[action]}
              </span>
              {active && (
                <svg className="text-accent flex-shrink-0" width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
