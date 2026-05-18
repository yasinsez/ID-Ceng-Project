import { StatusBar } from '../components/StatusBar';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

export function SearchingScreen({ onNavigate }: Props) {
  return (
    <div className="flex-1 flex flex-col bg-[#0d0d0f]">
      <StatusBar />
      <div className="flex items-center px-4 py-2">
        <button onClick={() => onNavigate('add-device')} className="w-8 h-8 flex items-center justify-center bg-[#222228] rounded-full border-none cursor-pointer text-white text-[16px]">‹</button>
      </div>
      <div className="flex-1 flex flex-col items-center px-6 pt-6 gap-4 text-center">
        <h2 className="text-[24px] font-bold text-white">Searching...</h2>
        <p className="text-[14px] text-[#9ca3af]">Looking for your device</p>

        {/* Animated radar */}
        <div className="relative w-44 h-44 flex items-center justify-center my-4">
          <div className="absolute inset-0 rounded-full border border-[#3b82f6]/15 animate-ping" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-4 rounded-full border border-[#3b82f6]/30 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
          <div className="absolute inset-8 rounded-full border-2 border-[#2563eb] flex items-center justify-center text-[48px]">
            🔵
          </div>
        </div>

        {/* Found device card */}
        <div className="w-full bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-4 text-left">
          <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">Available Devices</p>
          <div className="flex items-center justify-between">
            <span className="text-[16px] font-semibold text-white">SoundWave Buds</span>
            <div className="flex items-end gap-0.5">
              {[6, 10, 14].map((h, i) => (
                <div key={i} className="w-1 bg-[#3b82f6] rounded-sm" style={{ height: h }} />
              ))}
            </div>
          </div>
        </div>

        <p className="text-[13px] text-[#9ca3af]">Make sure your device is nearby and in pairing mode.</p>

        <button
          onClick={() => onNavigate('connected')}
          className="w-full max-w-[280px] py-4 bg-[#2563eb] text-white font-semibold text-[16px] rounded-xl border-none cursor-pointer hover:brightness-110 transition-all mt-4"
        >
          Connect
        </button>
      </div>
    </div>
  );
}
