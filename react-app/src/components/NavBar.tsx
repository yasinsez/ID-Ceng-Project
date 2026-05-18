import type { Screen } from '../types';

interface NavBarProps {
  active: 'home' | 'sound' | 'devices' | 'profile' | 'settings';
  onNavigate: (screen: Screen) => void;
}

const tabs = [
  { id: 'home',     icon: '⌂', label: 'Home',     screen: 'home'     as Screen },
  { id: 'sound',    icon: '♪', label: 'Sound',    screen: 'sound'    as Screen },
  { id: 'devices',  icon: '□', label: 'Devices',  screen: 'devices'  as Screen },
  { id: 'profile',  icon: '♟', label: 'Profile',  screen: 'profile'  as Screen },
  { id: 'settings', icon: '⚙', label: 'Settings', screen: 'settings' as Screen },
];

export function NavBar({ active, onNavigate }: NavBarProps) {
  return (
    <nav className="flex bg-[#111116] border-t border-[#2e2e38] h-16 flex-shrink-0">
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.screen)}
            className={`flex-1 flex flex-col items-center justify-center gap-1 text-[10px] font-medium border-none bg-transparent cursor-pointer transition-colors ${
              isActive ? 'text-[#3b82f6]' : 'text-[#6b7280]'
            }`}
          >
            <span className="text-[22px] leading-none">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
