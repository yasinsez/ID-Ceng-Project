import { useNavigate } from 'react-router-dom';
import { VestelLogo } from '../components/VestelLogo';

/* ── Generic Smartwatch App Icons ── */

const MessagesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const WeatherIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
  </svg>
);

const ActivityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const MusicIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
);

const MapsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
  </svg>
);

const HealthIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.73 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .43-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.49-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

interface AppIcon {
  id: string;
  label: string;
  route: string;
  colorClass: string;
  Icon: React.FC;
  isMainApp?: boolean;
}

const APP_GRID: AppIcon[] = [
  { id: 'messages', label: 'Messages', route: '#', colorClass: 'bg-[#34C759]', Icon: MessagesIcon },
  { id: 'weather',  label: 'Weather',  route: '#', colorClass: 'bg-[#5AC8FA]', Icon: WeatherIcon },
  { id: 'phone',    label: 'Phone',    route: '#', colorClass: 'bg-[#34C759]', Icon: PhoneIcon },
  { id: 'maps',     label: 'Maps',     route: '#', colorClass: 'bg-[#4CD964]', Icon: MapsIcon },
  { id: 'activity', label: 'Activity', route: '#', colorClass: 'bg-black border border-white/10', Icon: ActivityIcon },
  { id: 'music',    label: 'Music',    route: '#', colorClass: 'bg-[#FF2D55]', Icon: MusicIcon },
  { id: 'health',   label: 'Health',   route: '#', colorClass: 'bg-[#FF2D55]', Icon: HealthIcon },
  { id: 'settings', label: 'Settings', route: '#', colorClass: 'bg-[#8E8E93]', Icon: SettingsIcon },
  { id: 'vestel',   label: 'Vestel',   route: '/home', colorClass: 'bg-white border border-[#D9DEE8] dark:border-[#2A3547]', Icon: () => <VestelLogo />, isMainApp: true },
];

export default function WatchHomePage() {
  const navigate = useNavigate();

  const renderIcon = ({ id, label, route, colorClass, Icon, isMainApp }: AppIcon) => (
    <button
      key={id}
      onClick={() => {
        if (route !== '#') navigate(route);
      }}
      className="group flex flex-col items-center justify-center outline-none"
      aria-label={label}
      title={label}
    >
      <div
        className={`rounded-full flex items-center justify-center transition-all duration-300 ease-out active:scale-90 shadow-md w-[54px] h-[54px] ${colorClass} text-white`}
      >
        <div className={isMainApp ? 'scale-[0.8]' : 'scale-[0.85]'}>
          <Icon />
        </div>
      </div>
    </button>
  );

  return (
    <div className="flex flex-col items-center justify-center h-full bg-bg relative overflow-hidden px-4">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-surface-2)_0%,_transparent_70%)] opacity-30" />
      
      {/* 3x3 Grid layout */}
      <div className="relative z-10 grid grid-cols-3 gap-x-6 gap-y-5 justify-items-center">
        {APP_GRID.map(renderIcon)}
      </div>
    </div>
  );
}
