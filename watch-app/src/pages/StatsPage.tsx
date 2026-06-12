import { useNavigate } from 'react-router-dom';
import { BrandHeader } from '../components/BrandHeader';
import { BarChart } from '../components/BarChart';
import { STATS_SUMMARY } from '../utils/chartData';

function BarChartIcon() {
  return (
    <svg className="text-accent" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <line x1="6"  y1="20" x2="6"  y2="13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="12" y1="20" x2="12" y2="4"  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="18" y1="20" x2="18" y2="9"  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

function ListIcon() {
  return (
    <svg className="text-accent" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <line x1="8"  y1="6"  x2="20" y2="6"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8"  y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8"  y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="4" cy="6"  r="1.5" fill="currentColor"/>
      <circle cx="4" cy="12" r="1.5" fill="currentColor"/>
      <circle cx="4" cy="18" r="1.5" fill="currentColor"/>
    </svg>
  );
}

export default function StatsPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      <BrandHeader onBack={() => navigate('/menu')} />

      <div className="flex flex-col px-3 pt-2 gap-2 overflow-y-auto">
        <div>
          <h2 className="text-[18px] font-bold text-primary leading-tight">Statistics</h2>
          <p className="text-[11px] text-secondary mt-0.5">Weekly listening overview.</p>
        </div>

        {/* Two stat cards */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-2xl bg-surface border border-border px-3 py-2.5">
            <p className="text-[15px] font-bold text-primary">{STATS_SUMMARY.total}</p>
            <p className="text-[10px] text-secondary mt-0.5">This week</p>
          </div>
          <div className="rounded-2xl bg-surface border border-border px-3 py-2.5">
            <p className="text-[15px] font-bold text-success">{STATS_SUMMARY.progress}</p>
            <p className="text-[10px] text-secondary mt-0.5">Progress</p>
          </div>
        </div>

        {/* Daily Use card with mini chart + link */}
        <div className="rounded-2xl bg-surface border border-border px-3 py-2.5">
          <div className="flex items-center justify-between mb-2.5">
            <p className="text-[13px] font-bold text-primary">Daily Use</p>
            <button
              onClick={() => navigate('/stats/chart')}
              className="text-[11px] font-medium text-success active:scale-95 transition-all active:opacity-70"
            >
              Chart
            </button>
          </div>
          <BarChart maxH={48} barW={8} showLabels={false} />
        </div>

        {/* Two nav buttons */}
        <div className="grid grid-cols-2 gap-2 mt-1">
          <button
            onClick={() => navigate('/stats/chart')}
            className="rounded-2xl bg-surface border border-border flex flex-col items-center justify-center py-3 active:scale-95 transition-all active:opacity-70"
          >
            <BarChartIcon />
            <span className="text-[11px] text-primary font-medium mt-1">Chart</span>
            <span className="text-[9px] text-secondary">Bars</span>
          </button>
          <button
            onClick={() => navigate('/stats/history')}
            className="rounded-2xl bg-surface border border-border flex flex-col items-center justify-center py-3 active:scale-95 transition-all active:opacity-70"
          >
            <ListIcon />
            <span className="text-[11px] text-primary font-medium mt-1">History</span>
            <span className="text-[9px] text-secondary">Recent</span>
          </button>
        </div>
      </div>
    </div>
  );
}
