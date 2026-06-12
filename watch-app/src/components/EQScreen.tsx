import { useNavigate } from 'react-router-dom';
import { BrandHeader }  from './BrandHeader';
import { ControlRow }   from './ControlRow';
import { useAppState }  from '../context/AppStateContext';
import type { EQ }      from '../types';

interface Props {
  title:       string;
  field:       keyof EQ;
  valueLabel:  string;            // e.g. "Bass EQ value"
  centerLabel: 'Next' | 'Save';
  nextRoute?:  string;            // required when centerLabel === 'Next'
}

// Bar heights: outer bars are decorative; the middle bar (index 2) reflects the EQ value.
// Formula: 0.65 + (value / 5) * 0.35  gives  0.30 at -5, 0.65 at 0, 1.0 at +5
const OUTER_H  = [0.28, 0.54, 0, 0.52, 0.28]; // fractions of maxH for bars 0,1,3,4
const BAR_W    = 36; // px
const MAX_H    = 76; // px  — container height

function midFraction(val: number) {
  return Math.max(0.20, Math.min(1.0, 0.65 + (val / 5) * 0.35));
}

export function EQScreen({ title, field, valueLabel, centerLabel, nextRoute }: Props) {
  const navigate = useNavigate();
  const { eq, setEq, setSoundPreset } = useAppState();
  const value = eq[field];

  const change = (delta: number) =>
    setEq({ ...eq, [field]: Math.max(-5, Math.min(5, eq[field] + delta)) });

  const handleCenter = () => {
    if (centerLabel === 'Save') {
      setSoundPreset('customEq');
      navigate('/sound');
    } else {
      navigate(nextRoute!);
    }
  };

  const heights = OUTER_H.map((h, i) => i === 2 ? midFraction(value) : h);

  return (
    <div className="flex flex-col h-full">
      <BrandHeader onBack={() => navigate(-1)} />

      {/* Central content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h2 className="text-[18px] font-bold text-primary text-center">{title}</h2>

        {/* EQ bar visualizer */}
        <div
          className="flex items-end gap-2 mt-5"
          style={{ height: MAX_H }}
          aria-hidden
        >
          {heights.map((frac, i) => (
            <div
              key={i}
              className="bg-accent flex-shrink-0"
              style={{
                width:        BAR_W,
                height:       Math.max(14, frac * MAX_H),
                borderRadius: BAR_W / 2,
              }}
            />
          ))}
        </div>

        {/* Numeric value */}
        <p className="text-[60px] font-bold text-primary leading-none mt-4 tabular-nums">
          {value > 0 ? `+${value}` : `${value}`}
        </p>
        <p className="text-[12px] text-secondary mt-1">{valueLabel}</p>
      </div>

      {/* Controls */}
      <div className="px-4 pb-5 flex-shrink-0">
        <ControlRow
          centerLabel={centerLabel}
          onDecrement={() => change(-1)}
          onIncrement={() => change(+1)}
          onCenter={handleCenter}
        />
      </div>
    </div>
  );
}
