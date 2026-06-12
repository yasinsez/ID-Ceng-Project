import { useNavigate } from 'react-router-dom';
import { BrandHeader } from '../components/BrandHeader';

const HISTORY = [
  { date: 'Today',      time: '4h 32m', preset: 'Balanced' },
  { date: 'Yesterday',  time: '3h 10m', preset: 'Bass Boost' },
  { date: '20 May',     time: '2h 45m', preset: 'Podcast' },
];

export default function HistoryPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      <BrandHeader onBack={() => navigate('/stats')} />

      <div className="flex flex-col h-full px-3 pt-2">
        <div className="flex-shrink-0">
          <h2 className="text-[18px] font-bold text-primary leading-tight">Listening History</h2>
          <p className="text-[11px] text-secondary mt-0.5">Recent listening sessions.</p>
        </div>

        {/* History rows */}
        <div className="flex flex-col gap-2 mt-2 flex-1">
          {HISTORY.map((item, i) => (
            <div key={i} className="rounded-2xl bg-surface border border-border px-3 py-2.5">
              <p className="text-[13px] font-bold text-primary leading-tight">{item.date}</p>
              <p className="text-[11px] text-secondary mt-0.5">
                {item.time} · {item.preset}
              </p>
            </div>
          ))}
        </div>

        {/* Footer helper */}
        <p className="text-center text-[11px] text-secondary py-3 flex-shrink-0">
          Use back to return to Statistics.
        </p>
      </div>
    </div>
  );
}
