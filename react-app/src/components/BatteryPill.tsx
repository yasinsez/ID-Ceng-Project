interface BatteryPillProps {
  label: string;
  color?: 'green' | 'blue';
}

export function BatteryPill({ label, color = 'green' }: BatteryPillProps) {
  return (
    <div className="flex items-center gap-1.5 bg-[#222228] rounded-[5px] px-2 py-1">
      <div className={`w-1.5 h-1.5 rounded-full ${color === 'green' ? 'bg-[#22c55e]' : 'bg-[#3b82f6]'}`} />
      <span className={`text-[11px] font-medium ${color === 'green' ? 'text-[#22c55e]' : 'text-[#3b82f6]'}`}>
        {label}
      </span>
    </div>
  );
}
