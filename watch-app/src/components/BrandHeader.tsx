interface Props {
  /** Called when the back chevron is tapped. Omit to hide the chevron. */
  onBack?: () => void;
  /** When true the entire header row is hidden (e.g., on home screens). */
  hideInDark?: boolean;
}

/**
 * Top-of-screen back button row (Vestel logo is in WatchFrame).
 * Shows optional back chevron on the left when provided.
 */
export function BrandHeader({ onBack, hideInDark }: Props) {
  return (
    <div className={`relative flex items-center h-9 flex-shrink-0 px-4${hideInDark ? ' dark:hidden' : ''}`}>
      {onBack && (
        <button
          onClick={onBack}
          className="p-1 text-primary"
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
    </div>
  );
}
