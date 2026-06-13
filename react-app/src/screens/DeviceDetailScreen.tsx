import { StatusBar } from '../components/StatusBar';
import { BatteryPill } from '../components/BatteryPill';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

const info = [
  { label: 'Model',           value: 'VYB-01' },
  { label: 'Serial Number',   value: 'VYB-2026-000123' },
  { label: 'Firmware',        value: '1.0.3' },
  { label: 'Hardware',        value: 'Rev B' },
];

export function DeviceDetailScreen({ onNavigate }: Props) {
  return (
    <div className="flex-1 flex flex-col bg-[#0d0d0f]">
      <StatusBar />
      <div className="flex items-center gap-3 px-4 py-2 flex-shrink-0">
        <button onClick={() => onNavigate('devices')} className="w-8 h-8 flex items-center justify-center bg-[#222228] rounded-full border-none cursor-pointer text-white text-[16px]">‹</button>
        <h2 className="text-[20px] font-bold text-white">Device Detail</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4 [scrollbar-width:none]">
        {/* Hero card */}
        <div className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-5 mb-3 flex flex-col items-center">
          <div className="text-[56px] mb-3">🎧</div>
          <p className="text-[18px] font-bold text-white mb-1">Vybex Buds</p>
          <p className="text-[13px] text-[#22c55e] mb-4">Connected</p>
          <div className="flex gap-2">
            <BatteryPill label="L 100%" color="green" />
            <BatteryPill label="R 100%" color="green" />
            <BatteryPill label="Case 80%" color="blue" />
          </div>
        </div>

        {/* Device info */}
        <div className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl overflow-hidden mb-3">
          {info.map((row, i) => (
            <div key={row.label} className={`flex items-center justify-between px-4 py-3.5 ${i < info.length - 1 ? 'border-b border-[#2e2e38]' : ''}`}>
              <span className="text-[14px] text-[#9ca3af]">{row.label}</span>
              <span className="text-[14px] font-medium text-white">{row.value}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl overflow-hidden mb-3">
          <button className="w-full flex items-center gap-3.5 px-4 py-3.5 border-b border-[#2e2e38] bg-transparent cursor-pointer hover:bg-white/[0.02] transition-colors">
            <span className="text-[18px] w-6 text-center">🔄</span>
            <span className="flex-1 text-left text-[15px] font-medium text-white">Check for Updates</span>
            <span className="text-[13px] text-[#22c55e] font-medium mr-1">Up to date</span>
            <span className="text-[18px] text-[#6b7280]">›</span>
          </button>
          <button className="w-full flex items-center gap-3.5 px-4 py-3.5 bg-transparent cursor-pointer hover:bg-white/[0.02] transition-colors">
            <span className="text-[18px] w-6 text-center">📖</span>
            <span className="flex-1 text-left text-[15px] font-medium text-white">User Guide</span>
            <span className="text-[18px] text-[#6b7280]">›</span>
          </button>
        </div>

        {/* Remove device */}
        <div className="bg-[#1a1a1f] border border-[rgba(239,68,68,0.3)] rounded-2xl overflow-hidden">
          <button
            onClick={() => onNavigate('devices')}
            className="w-full flex items-center gap-3.5 px-4 py-3.5 bg-transparent cursor-pointer hover:bg-red-500/5 transition-colors"
          >
            <span className="text-[18px] w-6 text-center">🗑️</span>
            <span className="flex-1 text-left text-[15px] font-medium text-[#ef4444]">Remove Device</span>
            <span className="text-[18px] text-[#ef4444]">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
