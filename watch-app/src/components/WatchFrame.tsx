import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { VestelLogo } from './VestelLogo';

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
  const location = useLocation();
  const isHomeScreen = location.pathname === '/';

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

        {/* Vestel logo row — centered below status bar, hidden on home screen */}
        {!isHomeScreen && (
          <div className="flex items-center justify-center py-1 flex-shrink-0">
            <VestelLogo />
          </div>
        )}

        {/* Screen slot */}
        <div className="flex-1 min-h-0 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
