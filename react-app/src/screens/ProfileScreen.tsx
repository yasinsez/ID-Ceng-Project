import { StatusBar } from '../components/StatusBar';
import { NavBar } from '../components/NavBar';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

export function ProfileScreen({ onNavigate }: Props) {
  const menu = [
    { icon: '📱', label: 'My Devices',        screen: 'devices'  as Screen },
    { icon: '📻', label: 'Listening History',  screen: 'history'  as Screen },
    { icon: '📊', label: 'Statistics',         screen: 'stats'    as Screen },
    { icon: 'ℹ️', label: 'About',              screen: null },
    { icon: '❓', label: 'Help & Support',     screen: null },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#0d0d0f] overflow-hidden">
      <StatusBar />

      {/* Avatar section */}
      <div className="flex flex-col items-center pt-6 pb-4 flex-shrink-0">
        <div className="w-18 h-18 w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center text-[28px] font-bold text-white mb-2">
          Z
        </div>
        <p className="text-[18px] font-bold text-white">Zeynep Ertuğrul</p>
        <p className="text-[13px] text-[#9ca3af]">zeynep@gmail.com</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4 [scrollbar-width:none]">
        <div className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl overflow-hidden mb-3">
          {menu.map((item) => (
            <button
              key={item.label}
              onClick={() => item.screen && onNavigate(item.screen)}
              className="w-full flex items-center gap-3.5 px-4 py-3.5 border-b border-[#2e2e38] last:border-b-0 bg-transparent cursor-pointer hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-[18px] w-6 text-center">{item.icon}</span>
              <span className="flex-1 text-left text-[15px] font-medium text-white">{item.label}</span>
              <span className="text-[18px] text-[#6b7280]">›</span>
            </button>
          ))}
        </div>

        <div className="bg-[#1a1a1f] border border-[rgba(239,68,68,0.3)] rounded-2xl overflow-hidden">
          <button
            onClick={() => onNavigate('welcome')}
            className="w-full flex items-center gap-3.5 px-4 py-3.5 bg-transparent cursor-pointer hover:bg-red-500/5 transition-colors"
          >
            <span className="text-[18px] w-6 text-center">🚪</span>
            <span className="flex-1 text-left text-[15px] font-medium text-[#ef4444]">Log Out</span>
            <span className="text-[18px] text-[#ef4444]">›</span>
          </button>
        </div>
      </div>

      <NavBar active="profile" onNavigate={onNavigate} />
    </div>
  );
}
