import { StatusBar } from '../components/StatusBar';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

export function AddDeviceScreen({ onNavigate }: Props) {
  return (
    <div className="flex-1 flex flex-col bg-[#0d0d0f]">
      <StatusBar />
      <div className="flex items-center px-4 py-2">
        <button onClick={() => onNavigate('welcome')} className="w-8 h-8 flex items-center justify-center bg-[#222228] rounded-full border-none cursor-pointer text-white text-[16px]">‹</button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-5 text-center">
        {/* Concentric rings */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#2563eb]/15" />
          <div className="absolute inset-2.5 rounded-full border border-[#2563eb]/25" />
          <div className="absolute inset-5 rounded-full border-2 border-[#2563eb] bg-[#2563eb]/08 flex items-center justify-center">
            <span className="text-[40px]">🔵</span>
          </div>
        </div>
        <h2 className="text-[22px] font-bold text-white">Add Your Device</h2>
        <p className="text-[14px] text-[#9ca3af] leading-relaxed max-w-[220px]">
          Make sure your earbuds are in pairing mode.
        </p>
        <button
          onClick={() => onNavigate('searching')}
          className="w-full max-w-[280px] py-4 bg-[#2563eb] text-white font-semibold text-[16px] rounded-xl border-none cursor-pointer hover:brightness-110 transition-all"
        >
          Start Searching
        </button>
        <span className="text-[14px] text-[#3b82f6] cursor-pointer">🔗 How to pair?</span>
      </div>
    </div>
  );
}
