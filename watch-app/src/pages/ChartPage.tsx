import { useNavigate } from 'react-router-dom';
import { BrandHeader } from '../components/BrandHeader';
import { BarChart } from '../components/BarChart';
import { STATS_SUMMARY } from '../utils/chartData';

export default function ChartPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      <BrandHeader onBack={() => navigate('/stats')} />

      <div className="flex flex-col px-3 pt-2 gap-2 overflow-y-auto">
        <div>
          <h2 className="text-[18px] font-bold text-primary leading-tight">Listening Chart</h2>
          <p className="text-[11px] text-secondary mt-0.5">Daily listening time.</p>
        </div>

        {/* Header card with totals */}
        <div className="rounded-2xl bg-surface border border-border px-3 py-2.5 flex items-center justify-between">
          <p className="text-[15px] font-bold text-primary">{STATS_SUMMARY.total}</p>
          <p className="text-[15px] font-bold text-success">{STATS_SUMMARY.progress}</p>
        </div>

        {/* Full bar chart with labels */}
        <div className="rounded-2xl bg-surface border border-border px-3 py-3">
          <BarChart maxH={80} barW={10} showLabels={true} />
        </div>

        {/* Two stat cards */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-2xl bg-surface border border-border px-3 py-2.5">
            <p className="text-[14px] font-bold text-primary">{STATS_SUMMARY.avg}</p>
            <p className="text-[10px] text-secondary mt-1">Daily avg.</p>
          </div>
          <div className="rounded-2xl bg-surface border border-border px-3 py-2.5">
            <p className="text-[14px] font-bold text-primary">{STATS_SUMMARY.peakDay}</p>
            <p className="text-[10px] text-secondary mt-1">Peak day</p>
          </div>
        </div>
      </div>
    </div>
  );
}
