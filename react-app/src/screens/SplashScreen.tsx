import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

export function SplashScreen({ onNavigate }: Props) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0f2e] via-[#080808] to-[#0d1440] text-center px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#2563eb] opacity-[0.12] blur-3xl pointer-events-none" />

      {/* Logo */}
      <div className="w-28 h-28 rounded-[32px] bg-[#2563eb]/10 border border-[#2563eb]/25 flex items-center justify-center mb-6 relative z-10">
        <div className="flex items-end gap-0.5 h-8">
          {[8, 20, 30, 22, 14, 26, 18].map((h, i) => (
            <div
              key={i}
              className="w-1.5 bg-[#3b82f6] rounded-sm animate-pulse"
              style={{ height: h, animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      <h1 className="text-[28px] font-bold text-white tracking-tight mb-2 relative z-10">SoundWave</h1>
      <p className="text-[16px] text-white/55 mb-12 relative z-10">Sound. Your Way.</p>

      <button
        onClick={() => onNavigate('welcome')}
        className="w-full max-w-[280px] py-4 bg-[#2563eb] text-white font-semibold text-[16px] rounded-xl border-none cursor-pointer hover:brightness-110 transition-all relative z-10"
      >
        Get Started
      </button>
    </div>
  );
}
