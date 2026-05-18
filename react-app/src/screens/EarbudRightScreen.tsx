import { StatusBar } from '../components/StatusBar';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

const gestures = [
  { gesture: 'Single Tap',    action: 'Play / Pause' },
  { gesture: 'Double Tap',    action: 'Next Track' },
  { gesture: 'Triple Tap',    action: 'Previous Track' },
  { gesture: 'Press & Hold',  action: 'Voice Assistant' },
];

export function EarbudRightScreen({ onNavigate }: Props) {
  return (
    <div className="flex-1 flex flex-col bg-[#0d0d0f]">
      <StatusBar />
      <div className="flex items-center gap-3 px-4 py-2 flex-shrink-0">
        <button onClick={() => onNavigate('settings')} className="w-8 h-8 flex items-center justify-center bg-[#222228] rounded-full border-none cursor-pointer text-white text-[16px]">‹</button>
        <h2 className="text-[20px] font-bold text-white">Earbud Controls</h2>
      </div>

      {/* Tab switcher */}
      <div className="flex bg-[#1a1a1f] border border-[#2e2e38] rounded-xl p-1 gap-1 mx-4 mb-4 flex-shrink-0">
        <button onClick={() => onNavigate('earbud-left')} className="flex-1 py-1.5 text-[12px] font-semibold rounded-lg bg-transparent text-[#9ca3af] border-none cursor-pointer">Left Earbud</button>
        <button className="flex-1 py-1.5 text-[12px] font-semibold rounded-lg bg-[#2563eb] text-white border-none cursor-pointer">Right Earbud</button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4 [scrollbar-width:none]">
        {/* Earbud illustration */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-[#1a1a1f] border border-[#2e2e38] flex items-center justify-center text-[48px]">
            🎧
          </div>
        </div>

        {/* Gesture rows */}
        <div className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl overflow-hidden">
          {gestures.map((g, i) => (
            <div key={g.gesture} className={`flex items-center justify-between px-4 py-4 ${i < gestures.length - 1 ? 'border-b border-[#2e2e38]' : ''}`}>
              <div>
                <p className="text-[14px] font-semibold text-white">{g.gesture}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[13px] text-[#9ca3af]">{g.action}</span>
                <span className="text-[18px] text-[#6b7280]">›</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[12px] text-[#6b7280] text-center mt-4 px-4">
          Tap each gesture to customize the action assigned to your right earbud.
        </p>
      </div>
    </div>
  );
}
