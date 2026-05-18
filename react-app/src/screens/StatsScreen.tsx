import { useState } from 'react';
import { StatusBar } from '../components/StatusBar';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

const bars = [
  { label: 'Mon', h: 30 }, { label: 'Tue', h: 45 }, { label: 'Wed', h: 35 },
  { label: 'Thu', h: 55 }, { label: 'Fri', h: 40 }, { label: 'Sat', h: 70, active: true }, { label: 'Sun', h: 25 },
];
const genres = [
  { name: 'Pop',       pct: 35 }, { name: 'Electronic', pct: 28 },
  { name: 'Hip-Hop',   pct: 20 }, { name: 'Jazz',       pct: 17 },
];
const filters = ['Day', 'Week', 'Month', 'Year'];

export function StatsScreen({ onNavigate }: Props) {
  const [filter, setFilter] = useState('Week');

  return (
    <div className="flex-1 flex flex-col bg-[#0d0d0f]">
      <StatusBar />
      <div className="flex items-center gap-3 px-4 py-2 flex-shrink-0">
        <button onClick={() => onNavigate('profile')} className="w-8 h-8 flex items-center justify-center bg-[#222228] rounded-full border-none cursor-pointer text-white text-[16px]">‹</button>
        <h2 className="text-[20px] font-bold text-white">Listening Statistics</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-4 [scrollbar-width:none]">
        {/* Time filter */}
        <div className="flex bg-[#1a1a1f] border border-[#2e2e38] rounded-xl p-1 gap-1 mb-4">
          {filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`flex-1 py-1.5 text-[12px] font-semibold rounded-lg border-none cursor-pointer transition-all ${filter === f ? 'bg-[#2563eb] text-white' : 'bg-transparent text-[#9ca3af]'}`}>
              {f}
            </button>
          ))}
        </div>

        {/* Big stat */}
        <div className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-5 mb-3">
          <p className="text-[13px] text-[#9ca3af] mb-1">Listening Time</p>
          <p className="text-[32px] font-bold text-white tracking-tight">18 h 42 min</p>
          <p className="text-[12px] text-[#22c55e] mt-1">↑ +12% from last week</p>
          {/* Bar chart */}
          <div className="flex items-end gap-1.5 mt-4 h-20">
            {bars.map((b) => (
              <div key={b.label} className="flex-1 flex flex-col items-center gap-1">
                <div className={`w-full rounded-t-[4px] ${b.active ? 'bg-[#2563eb]' : 'bg-[#2a2a32]'}`} style={{ height: `${b.h}%` }} />
                <span className="text-[9px] text-[#6b7280]">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Genres */}
        <div className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-5">
          <p className="text-[15px] font-semibold text-white mb-4">Top Genres</p>
          {genres.map((g) => (
            <div key={g.name} className="mb-3 last:mb-0">
              <div className="flex justify-between text-[13px] mb-1.5">
                <span className="text-white">{g.name}</span>
                <span className="text-[#9ca3af]">{g.pct}%</span>
              </div>
              <div className="h-1 bg-[#2a2a32] rounded-full overflow-hidden">
                <div className="h-full bg-[#2563eb] rounded-full" style={{ width: `${g.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
