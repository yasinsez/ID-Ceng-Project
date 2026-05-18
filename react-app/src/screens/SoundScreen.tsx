import { StatusBar } from '../components/StatusBar';
import { NavBar } from '../components/NavBar';
import type { Screen, Preset } from '../types';

interface Props { onNavigate: (s: Screen) => void; preset: Preset; onPresetChange: (p: Preset) => void; }

const presets: { id: Preset; icon: string; label: string }[] = [
  { id: 'default', icon: '🎵', label: 'Default' },
  { id: 'bass',    icon: '🔊', label: 'Bass Boost' },
  { id: 'clear',   icon: '✨', label: 'Clear' },
  { id: 'treble',  icon: '🎶', label: 'Treble Boost' },
  { id: 'vocal',   icon: '🎤', label: 'Vocal' },
  { id: 'custom',  icon: '🎛️', label: 'Custom' },
];

export function SoundScreen({ onNavigate, preset, onPresetChange }: Props) {
  return (
    <div className="flex-1 flex flex-col bg-[#0d0d0f] overflow-hidden">
      <StatusBar />
      <div className="px-4 py-2 flex-shrink-0">
        <h1 className="text-[22px] font-bold text-white">Sound</h1>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-28 [scrollbar-width:none]">
        <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">Presets</p>
        <div className="grid grid-cols-2 gap-2.5">
          {presets.map((p) => {
            const isActive = preset === p.id;
            return (
              <button
                key={p.id}
                onClick={() => p.id === 'custom' ? onNavigate('eq') : onPresetChange(p.id)}
                className={`flex items-center gap-2.5 px-4 py-3.5 rounded-xl border cursor-pointer text-[14px] font-medium transition-all ${
                  isActive
                    ? 'bg-[#2563eb]/12 border-[#2563eb] text-[#3b82f6]'
                    : 'bg-[#1a1a1f] border-[#2e2e38] text-white hover:bg-[#222228]'
                }`}
              >
                <span>{p.icon}</span>
                <span className="flex-1 text-left">{p.label}</span>
                {isActive && <span className="text-[#3b82f6]">✓</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Now Playing bar */}
      <div className="absolute bottom-16 left-0 right-0 bg-[#222228] border-t border-[#2e2e38] px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#2a2a32] flex-shrink-0" />
        <div className="flex-1">
          <p className="text-[13px] font-semibold text-white">Not Playing</p>
          <p className="text-[11px] text-[#9ca3af]">—</p>
        </div>
        <span className="text-[22px] text-white cursor-pointer">▶</span>
      </div>

      <NavBar active="sound" onNavigate={onNavigate} />
    </div>
  );
}
