import { StatusBar } from '../components/StatusBar';
import { NavBar } from '../components/NavBar';
import { BatteryPill } from '../components/BatteryPill';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

const devices = [
  { name: 'Vybex Buds',      sub: 'Connected',              connected: true,  bats: [['L 100%','green'],['R 100%','green'],['Case 80%','blue']] as const },
  { name: 'Vybex Buds Pro',  sub: 'Last connected 3 days ago', connected: false, bats: [['L 90%','green'],['R 90%','green'],['Case 70%','blue']] as const },
  { name: 'Vybex Buds Lite', sub: 'Last connected 1 week ago', connected: false, bats: [['L 80%','green'],['R 80%','green'],['Case 60%','blue']] as const },
];

export function DevicesScreen({ onNavigate }: Props) {
  return (
    <div className="flex-1 flex flex-col bg-[#0d0d0f] overflow-hidden">
      <StatusBar />
      <div className="flex items-center justify-between px-4 py-2 flex-shrink-0">
        <h1 className="text-[22px] font-bold text-white">My Devices</h1>
        <button className="w-8 h-8 flex items-center justify-center bg-[#222228] rounded-full border-none cursor-pointer text-[#9ca3af] text-lg">＋</button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-4 [scrollbar-width:none]">
        {devices.map((dev) => (
          <button
            key={dev.name}
            onClick={() => onNavigate('device-detail')}
            className="w-full bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-4 flex items-center gap-3.5 text-left mb-2.5 cursor-pointer hover:bg-[#222228] transition-colors"
          >
            <span className="text-[36px] flex-shrink-0">🎧</span>
            <div className="flex-1">
              <p className="text-[15px] font-semibold text-white mb-1">{dev.name}</p>
              <p className={`text-[12px] mb-2 ${dev.connected ? 'text-[#22c55e]' : 'text-[#9ca3af]'}`}>{dev.sub}</p>
              <div className="flex gap-1.5 flex-wrap">
                {dev.bats.map(([label, color]) => (
                  <BatteryPill key={label} label={label} color={color} />
                ))}
              </div>
            </div>
            <span className="text-[18px] text-[#6b7280]">›</span>
          </button>
        ))}

        <button
          onClick={() => onNavigate('add-device')}
          className="w-full bg-[#222228] border border-dashed border-[#2e2e38] rounded-2xl p-4 flex items-center justify-center gap-2.5 cursor-pointer hover:bg-[#2a2a32] transition-colors mt-1"
        >
          <span className="text-[20px] text-[#3b82f6]">＋</span>
          <span className="text-[14px] font-medium text-[#9ca3af]">Add New Device</span>
        </button>
      </div>
      <NavBar active="devices" onNavigate={onNavigate} />
    </div>
  );
}
