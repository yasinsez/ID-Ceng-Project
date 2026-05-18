import { StatusBar } from '../components/StatusBar';
import { NavBar } from '../components/NavBar';
import { Toggle } from '../components/Toggle';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; darkMode: boolean; onDarkModeChange: (v: boolean) => void; }

interface RowProps { icon: string; title: string; right?: React.ReactNode; onClick?: () => void; }
function Row({ icon, title, right, onClick }: RowProps) {
  return (
    <button onClick={onClick} className="w-full flex items-center gap-3.5 px-4 py-3.5 border-b border-[#2e2e38] last:border-b-0 bg-transparent cursor-pointer hover:bg-white/[0.02] transition-colors">
      <span className="text-[18px] w-6 text-center">{icon}</span>
      <span className="flex-1 text-left text-[15px] font-medium text-white">{title}</span>
      {right ?? <span className="text-[18px] text-[#6b7280]">›</span>}
    </button>
  );
}

export function SettingsScreen({ onNavigate, darkMode, onDarkModeChange }: Props) {
  return (
    <div className="flex-1 flex flex-col bg-[#0d0d0f] overflow-hidden">
      <StatusBar />
      <div className="px-4 py-2 flex-shrink-0">
        <h1 className="text-[22px] font-bold text-white">Settings</h1>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-4 [scrollbar-width:none]">
        <div className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl overflow-hidden mb-3">
          <Row icon="⚙️" title="General" />
          <Row icon="🎵" title="Sound" onClick={() => onNavigate('sound')} />
          <Row icon="🎧" title="Earbud Controls" onClick={() => onNavigate('earbud-left')} />
          <Row icon="📱" title="Device Settings" onClick={() => onNavigate('device-detail')} />
        </div>
        <div className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl overflow-hidden">
          <Row icon="🌙" title="Dark Mode" right={<Toggle on={darkMode} onChange={onDarkModeChange} />} />
          <Row icon="⏰" title="Automatic Power-Off" right={<span className="text-[13px] text-[#9ca3af] mr-2">30 min</span>} />
          <Row icon="🌐" title="Language" right={<span className="text-[13px] text-[#9ca3af] mr-2">English</span>} />
          <Row icon="ℹ️" title="About" />
        </div>
      </div>
      <NavBar active="settings" onNavigate={onNavigate} />
    </div>
  );
}
