import { StatusBar } from '../components/StatusBar';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

export function WelcomeScreen({ onNavigate }: Props) {
  return (
    <div className="flex-1 flex flex-col bg-gradient-to-b from-[#0c1438] via-[#0d0d0f] to-[#0a0c20]">
      <StatusBar />
      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-5 text-center">
        <div className="w-48 h-40 flex items-center justify-center text-[80px] bg-[#2563eb]/08 rounded-full">
          🎧
        </div>
        <h1 className="text-[32px] font-bold text-white">Welcome</h1>
        <p className="text-[15px] text-white/55 leading-relaxed max-w-[240px]">
          Personalize your sound, control your earbuds, your way.
        </p>
        <div className="w-full flex flex-col gap-3 mt-2">
          <button
            onClick={() => onNavigate('add-device')}
            className="w-full py-4 bg-[#2563eb] text-white font-semibold text-[16px] rounded-xl border-none cursor-pointer hover:brightness-110 transition-all"
          >
            Get Started
          </button>
          <button
            onClick={() => onNavigate('add-device')}
            className="w-full py-4 bg-transparent text-white font-semibold text-[16px] rounded-xl border border-[#2e2e38] cursor-pointer hover:bg-white/5 transition-all"
          >
            Log In
          </button>
        </div>
        <p className="text-[13px] text-white/45">
          Don't have an account?{' '}
          <span className="text-[#3b82f6] cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
}
