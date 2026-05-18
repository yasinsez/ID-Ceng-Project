interface ToggleProps {
  on: boolean;
  onChange: (val: boolean) => void;
}

export function Toggle({ on, onChange }: ToggleProps) {
  return (
    <button
      onClick={() => onChange(!on)}
      className={`relative w-12 h-7 rounded-full transition-colors flex-shrink-0 border-none cursor-pointer ${on ? 'bg-[#2563eb]' : 'bg-[#2e2e38]'}`}
    >
      <span
        className={`absolute top-[3px] w-[22px] h-[22px] bg-white rounded-full shadow-md transition-transform ${on ? 'translate-x-[22px]' : 'translate-x-[3px]'}`}
      />
    </button>
  );
}
