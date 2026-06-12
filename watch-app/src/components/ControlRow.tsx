import { useRef } from 'react';

interface Props {
  centerLabel: string;
  onDecrement: () => void;
  onIncrement: () => void;
  onCenter:    () => void;
}

/**
 * Three-button control row: [−] [centerLabel] [+]
 * The − and + buttons fire once on tap, then repeat while held (~150 ms interval).
 */
export function ControlRow({ centerLabel, onDecrement, onIncrement, onCenter }: Props) {
  const holdRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  // Always-current refs so setInterval never captures a stale callback
  const decRef   = useRef(onDecrement);
  const incRef   = useRef(onIncrement);
  decRef.current = onDecrement;
  incRef.current = onIncrement;

  const startHold = (ref: React.MutableRefObject<() => void>) => {
    ref.current();
    holdRef.current = setInterval(() => ref.current(), 150);
  };

  const stopHold = () => {
    if (holdRef.current) { clearInterval(holdRef.current); holdRef.current = null; }
  };

  const circleBtn = 'w-[52px] h-[52px] rounded-full bg-surface border border-border flex items-center justify-center flex-shrink-0 select-none active:scale-95 transition-all active:opacity-70';

  return (
    <div className="flex items-center gap-3">
      <button
        className={circleBtn}
        aria-label="Decrease"
        onMouseDown={() => startHold(decRef)}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
        onTouchStart={e => { e.preventDefault(); startHold(decRef); }}
        onTouchEnd={stopHold}
      >
        <span className="text-[22px] font-light text-primary leading-none select-none">−</span>
      </button>

      <button
        className="flex-1 h-[52px] rounded-full bg-surface border border-border flex items-center justify-center select-none active:scale-95 transition-all active:opacity-70"
        onClick={onCenter}
      >
        <span className="text-[13px] font-medium text-primary">{centerLabel}</span>
      </button>

      <button
        className={circleBtn}
        aria-label="Increase"
        onMouseDown={() => startHold(incRef)}
        onMouseUp={stopHold}
        onMouseLeave={stopHold}
        onTouchStart={e => { e.preventDefault(); startHold(incRef); }}
        onTouchEnd={stopHold}
      >
        <span className="text-[22px] font-light text-primary leading-none select-none">+</span>
      </button>
    </div>
  );
}
