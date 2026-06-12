import { useNavigate } from 'react-router-dom';
import { BrandHeader } from '../components/BrandHeader';

/* ── Icon primitives ── */
const HeadphonesIcon = () => (
  <svg className="text-accent" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 14a9 9 0 1 1 18 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="2"  y="13" width="4" height="7" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="18" y="13" width="4" height="7" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const VolumeIcon = () => (
  <svg className="text-accent" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M11 5L6 9H3v6h3l5 4V5z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19.07 4.93a9 9 0 0 1 0 14.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SoundIcon = () => (
  <svg className="text-accent" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <line x1="4" y1="6"  x2="20" y2="6"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9"  cy="6"  r="2.5" fill="currentColor"/>
    <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="16" cy="12" r="2.5" fill="currentColor"/>
    <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="18" r="2.5" fill="currentColor"/>
  </svg>
);

const SettingsIcon = () => (
  <svg className="text-accent" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const StatsIcon = () => (
  <svg className="text-accent" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <line x1="6"  y1="20" x2="6"  y2="13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="12" y1="20" x2="12" y2="4"  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="18" y1="20" x2="18" y2="9"  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const HomeBackIcon = () => (
  <svg className="text-accent" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M15 18L9 12l6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── Tile config ── */
const TILES = [
  { id: 'devices',  label: 'Devices',  route: '/devices',  Icon: HeadphonesIcon },
  { id: 'volume',   label: 'Volume',   route: '/volume',   Icon: VolumeIcon     },
  { id: 'sound',    label: 'Sound',    route: '/sound',    Icon: SoundIcon      },
  { id: 'settings', label: 'Settings', route: '/settings', Icon: SettingsIcon   },
  { id: 'stats',    label: 'Stats',    route: '/stats',    Icon: StatsIcon      },
  { id: 'home',     label: 'Home',     route: '/home',     Icon: HomeBackIcon   },
] as const;

/* ── Page ── */
export default function MenuPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      {/* Back navigates explicitly to /home per spec */}
      <BrandHeader onBack={() => navigate('/home')} />

      <div className="flex-1 grid grid-cols-2 gap-2.5 p-3 pt-1">
        {TILES.map(({ id, label, route, Icon }) => (
          <button
            key={id}
            onClick={() => navigate(route)}
            className="rounded-2xl bg-surface border border-border flex flex-col items-center justify-center gap-2 active:scale-95 transition-all active:opacity-80"
          >
            <Icon />
            <span className="text-[12px] font-medium text-primary">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
