import { StatusBar } from '../components/StatusBar';
import type { Screen, EQValues } from '../types';

interface Props { onNavigate: (s: Screen) => void; eq: EQValues; onEQChange: (eq: EQValues) => void; }

export function EQScreen({ onNavigate, eq, onEQChange }: Props) {
  const dotPositions = [55, 40, 70, 50, 35, 65, 45, 30, 60];
  const freqLabels = ['31', '62', '125', '250', '500', '2k', '4k', '8k', '16k'];

  return (
    <div className="flex-1 flex flex-col bg-[#0d0d0f]">
      <StatusBar />
      <div className="flex items-center justify-between px-4 py-2 flex-shrink-0">
        <button onClick={() => onNavigate('sound')} className="w-8 h-8 flex items-center justify-center bg-[#222228] rounded-full border-none cursor-pointer text-white text-[16px]">‹</button>
        <h2 className="text-[20px] font-bold text-white">Custom Equalizer</h2>
        <button onClick={() => onEQChange({ bass: 0, mid: 0, treble: 0 })} className="text-[13px] text-[#3b82f6] bg-transparent border-none cursor-pointer">Reset</button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4 [scrollbar-width:none]">
        {/* EQ Canvas */}
        <div className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-4 h-36 relative overflow-hidden mb-1">
          {[0.25, 0.5, 0.75].map((r, i) => (
            <div key={i} className="absolute left-4 right-4 h-px bg-[#2e2e38]" style={{ top: `${r * 100}%` }} />
          ))}
          <span className="absolute top-2 left-3 text-[10px] text-[#6b7280]">+6</span>
          <span className="absolute top-1/2 left-3 -translate-y-1/2 text-[10px] text-[#6b7280]">0</span>
          <span className="absolute bottom-2 left-3 text-[10px] text-[#6b7280]">-6</span>
          <div className="absolute inset-4 flex items-end justify-around">
            {dotPositions.map((yPct, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]" style={{ marginBottom: `${yPct}%` }} />
            ))}
          </div>
        </div>
        <div className="flex justify-around px-4 mb-5">
          {freqLabels.map((l) => <span key={l} className="text-[9px] text-[#6b7280]">{l}</span>)}
        </div>

        {/* Sliders */}
        {([['Bass', 'bass'], ['Mid', 'mid'], ['Treble', 'treble']] as [string, keyof EQValues][]).map(([label, key]) => (
          <div key={key} className="flex items-center gap-3 mb-4">
            <span className="text-[14px] text-[#9ca3af] w-12">{label}</span>
            <input
              type="range" min={-6} max={6} step={1}
              value={eq[key]}
              onChange={(e) => onEQChange({ ...eq, [key]: Number(e.target.value) })}
              className="flex-1 accent-[#2563eb] cursor-pointer"
            />
            <span className="text-[12px] text-[#9ca3af] w-7 text-right">
              {eq[key] > 0 ? '+' : ''}{eq[key]}
            </span>
          </div>
        ))}

        <button
          onClick={() => onNavigate('sound')}
          className="w-full py-4 bg-[#2563eb] text-white font-semibold text-[16px] rounded-xl border-none cursor-pointer hover:brightness-110 transition-all mt-2"
        >
          Save as Preset
        </button>
      </div>
    </div>
  );
}
