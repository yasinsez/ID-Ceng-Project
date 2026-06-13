import { StatusBar } from '../components/StatusBar';
import { BatteryPill } from '../components/BatteryPill';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

export function ConnectedScreen({ onNavigate }: Props) {
  return (
    <div className="flex-1 flex flex-col bg-[#0d0d0f]">
      <StatusBar />
      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-5 text-center">
        {/* Green glow */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#22c55e]/08" />
          <div className="absolute inset-[-10px] rounded-full border-2 border-[#22c55e]/30" />
          <div className="w-28 h-28 rounded-full border-[2.5px] border-[#22c55e] flex items-center justify-center text-[48px] font-bold text-[#22c55e]">
            ✓
          </div>
        </div>

        <h2 className="text-[28px] font-bold text-white">Connected!</h2>
        <p className="text-[15px] text-[#9ca3af]">Your earbuds are ready to use.</p>

        {/* Device card */}
        <div className="w-full bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-4 flex items-center gap-4 text-left">
          <span className="text-[40px]">🎧</span>
          <div>
            <p className="text-[15px] font-semibold text-white mb-2">Vybex Buds</p>
            <div className="flex gap-2">
              <BatteryPill label="L 100%" color="green" />
              <BatteryPill label="R 100%" color="green" />
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate('home')}
          className="w-full py-4 bg-[#2563eb] text-white font-semibold text-[16px] rounded-xl border-none cursor-pointer hover:brightness-110 transition-all mt-2"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
