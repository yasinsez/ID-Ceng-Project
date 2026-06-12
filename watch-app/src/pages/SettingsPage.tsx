import { useNavigate }  from 'react-router-dom';
import { BrandHeader }  from '../components/BrandHeader';
import { useTheme }     from '../context/ThemeContext';
import { useAppState }  from '../context/AppStateContext';

/* ── Icon components ──────────────────────────────────────────── */
const GearIcon = () => (
  <svg className="text-accent" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const GridIcon = () => (
  <svg className="text-accent" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden>
    <rect x="3"  y="3"  width="8" height="8" rx="1.5"/>
    <rect x="13" y="3"  width="8" height="8" rx="1.5"/>
    <rect x="3"  y="13" width="8" height="8" rx="1.5"/>
    <rect x="13" y="13" width="8" height="8" rx="1.5"/>
  </svg>
);

const RefreshIcon = () => (
  <svg className="text-accent" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 12a9 9 0 1 0 3.6-7.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 4v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowsHIcon = () => (
  <svg className="text-secondary" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M7 12h10M7 12l3-3M7 12l3 3M17 12l-3-3M17 12l-3 3"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ChevronRight = () => (
  <svg className="text-secondary" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M5 2.5L9.5 7 5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Row component ──────────────────────────────────────────────── */
function Row({ icon, title, subtitle, right, onClick }: {
  icon:     React.ReactNode;
  title:    string;
  subtitle: string;
  right:    React.ReactNode;
  onClick:  () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-surface border border-border active:scale-95 transition-all active:opacity-70"
    >
      <div className="w-9 h-9 rounded-xl bg-surface-sel flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0 text-left">
        <p className="text-[13px] font-bold text-primary leading-tight">{title}</p>
        <p className="text-[11px] text-secondary mt-0.5">{subtitle}</p>
      </div>
      {right}
    </button>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */
export default function SettingsPage() {
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();
  const { setPendingDevice, connectedDevice, resetToDefaults } = useAppState();

  const handleReconnect = () => {
    setPendingDevice(connectedDevice);
    navigate('/search', { state: { returnTo: '/settings' } });
  };

  const handleReset = () => {
    if (window.confirm('Reset all settings to defaults?')) {
      resetToDefaults();
      navigate('/home');
    }
  };

  return (
    <div className="flex flex-col h-full">
      <BrandHeader onBack={() => navigate('/menu')} />

      <div className="flex flex-col px-4 pt-2 gap-3">
        <div>
          <h2 className="text-[18px] font-bold text-primary leading-tight">Settings</h2>
          <p className="text-[11px] text-secondary mt-0.5">Quick watch settings.</p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <Row
            icon={<GearIcon />}
            title="Touch Controls"
            subtitle="Left and right gestures"
            right={<ChevronRight />}
            onClick={() => navigate('/controls')}
          />
          <Row
            icon={<GridIcon />}
            title="Dark Mode"
            subtitle="Switch appearance"
            right={<ArrowsHIcon />}
            onClick={toggleTheme}
          />
          <Row
            icon={<RefreshIcon />}
            title="Reconnect"
            subtitle="Search for earbuds again"
            right={<ChevronRight />}
            onClick={handleReconnect}
          />

          {/* Reset button at bottom */}
          <button
            onClick={handleReset}
            className="mt-auto pt-3 text-center text-[11px] text-secondary active:scale-95 transition-all active:opacity-60"
          >
            Reset settings
          </button>
        </div>
      </div>
    </div>
  );
}
