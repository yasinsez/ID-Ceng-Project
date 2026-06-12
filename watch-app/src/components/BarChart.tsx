import { WEEK_DATA, MAX_HOURS } from '../utils/chartData';

interface Props {
  maxH:        number;  // max bar height in px
  barW:        number;  // bar width  in px
  showLabels?: boolean; // render M T W T F S S labels below bars
}

export function BarChart({ maxH, barW, showLabels }: Props) {
  return (
    <div className="flex items-end justify-between w-full">
      {WEEK_DATA.map(({ day, hours }, i) => {
        const h = Math.max(6, (hours / MAX_HOURS) * maxH);
        return (
          <div key={i} className="flex flex-col items-center gap-1">
            <div
              className="bg-accent flex-shrink-0"
              style={{
                width:        barW,
                height:       h,
                borderRadius: `${barW / 2}px ${barW / 2}px 3px 3px`,
              }}
            />
            {showLabels && (
              <span className="text-[9px] text-secondary leading-none">{day}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
