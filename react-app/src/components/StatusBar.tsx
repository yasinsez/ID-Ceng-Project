export function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-1.5 flex-shrink-0">
      <span className="text-[13px] font-semibold text-white">9:41</span>
      <div className="flex items-center gap-1 text-[11px] text-white font-medium">
        <span>●●●</span>
        <span>WiFi</span>
        <span>🔋</span>
      </div>
    </div>
  );
}
