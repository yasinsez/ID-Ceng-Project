import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

// Dimensions derived from Figma SVG viewBox 244×290, scaled ×1.475
// Outer corner-radius 58px → 86px  |  Inner corner-radius 52px → 77px
// Bezel gap 6px → 9px
const W        = 360;
const H        = 428;
const R_OUTER  = 86;
const R_INNER  = 77;
const BEZEL    = 9;

export function WatchFrame({ children }: Props) {
  return (
    <div
      style={{ width: W, height: H, borderRadius: R_OUTER, flexShrink: 0 }}
      className="relative bg-bezel border border-bezel-stroke shadow-2xl"
    >
      {/* Watch face */}
      <div
        style={{ borderRadius: R_INNER, inset: BEZEL }}
        className="absolute bg-bg flex flex-col overflow-hidden"
      >
        {/* Status row — time only on right.
            px-8 (32px) is required here: at y=16px from inner-div top the
            border-radius-77 corner curve clips anything within 30px of each
            edge, so 16px (px-4) isn't enough. */}
        <div className="flex items-center justify-end px-8 pt-4 pb-1 flex-shrink-0">
          <span className="text-[11px] font-semibold tabular-nums text-primary leading-none">
            10:09
          </span>
        </div>

        {/* Vestel logo row — centered below status bar */}
        <div className="flex items-center justify-center py-2 flex-shrink-0">
          <svg width="44" height="9" viewBox="0 0 44 9" fill="none" className="text-[#EE3124] dark:text-[#EE3124]">
            <path d="M2.4 7.2V1.8H4.2V7.2H2.4ZM7.2 7.2V1.8H10.2V3.6H7.2V7.2ZM7.2 4.2H10.2V6H7.2V4.2ZM12.6 7.2V1.8H14.4V7.2H12.6ZM17.4 7.2V1.8H19.2V5.4L21.6 1.8H23.4L20.4 5.8L23.4 7.2H21.6L19.2 5.4V7.2H17.4ZM24 7.2V1.8H26.4V3.6H24V7.2ZM24 4.2H26.4V6H24V4.2ZM30.6 7.2V1.8H32.4V7.2H30.6ZM35.4 7.2V1.8H38.4V3.6H35.4V7.2Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Screen slot */}
        <div className="flex-1 min-h-0 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
