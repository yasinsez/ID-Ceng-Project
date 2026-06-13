import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  showBack?: boolean;
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

export function ScreenLayout({ showBack, title, subtitle, children }: Props) {
  const navigate = useNavigate();

  const hasHeader = showBack || title || subtitle;

  return (
    <div className="flex flex-col h-full">
      {hasHeader && (
        <div className="flex items-start gap-1.5 px-4 pt-2 pb-1.5 flex-shrink-0">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="mt-0.5 text-accent flex-shrink-0 -ml-1 p-0.5"
              aria-label="Back"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M9 2.5L4 7l5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          <div className="min-w-0">
            {title && (
              <p className="text-[13px] font-bold text-primary leading-tight truncate">
                {title}
              </p>
            )}
            {subtitle && (
              <p className="text-[11px] text-secondary leading-tight truncate mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="flex-1 min-h-0 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
