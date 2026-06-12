import { Outlet } from 'react-router-dom';
import { WatchFrame } from '../components/WatchFrame';
import { PageTransition } from '../components/PageTransition';
import { useTheme } from '../context/ThemeContext';

export function WatchLayout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[#DDE4EF] dark:bg-[#070C14] flex flex-col items-center justify-center gap-6 transition-colors duration-300">
      <WatchFrame>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </WatchFrame>

      {/* Dev-only theme toggle — outside the watch frame */}
      <button
        onClick={toggleTheme}
        className="px-5 py-2 rounded-full text-[13px] font-medium shadow-sm border transition-colors duration-200
          bg-white       dark:bg-[#1B2433]
          text-[#111827] dark:text-[#F8FAFC]
          border-[#D9DEE8] dark:border-[#2A3547]"
      >
        {theme === 'dark' ? '☀  Switch to Light' : '🌙  Switch to Dark'}
      </button>
    </div>
  );
}
