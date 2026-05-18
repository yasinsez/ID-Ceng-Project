import { StatusBar } from '../components/StatusBar';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

const songs = [
  { title: 'Blinding Lights',  artist: 'The Weeknd',      time: '3:45', emoji: '🎵', day: 'Today' },
  { title: 'Until I Found You',artist: 'Stephen Sanchez', time: '3:02', emoji: '🎶', day: 'Today' },
  { title: 'As It Was',        artist: 'Harry Styles',    time: '2:47', emoji: '🎤', day: 'Today' },
  { title: 'Calm Down',        artist: 'Rema',            time: '3:31', emoji: '🎸', day: 'Yesterday' },
];

export function HistoryScreen({ onNavigate }: Props) {
  let lastDay = '';
  return (
    <div className="flex-1 flex flex-col bg-[#0d0d0f]">
      <StatusBar />
      <div className="flex items-center gap-3 px-4 py-2 flex-shrink-0">
        <button onClick={() => onNavigate('profile')} className="w-8 h-8 flex items-center justify-center bg-[#222228] rounded-full border-none cursor-pointer text-white text-[16px]">‹</button>
        <h2 className="text-[20px] font-bold text-white">Listening History</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-4 [scrollbar-width:none]">
        {songs.map((song, i) => {
          const showDay = song.day !== lastDay;
          lastDay = song.day;
          return (
            <div key={i}>
              {showDay && (
                <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mt-4 mb-2 first:mt-0">{song.day}</p>
              )}
              <div className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl px-4 mb-1">
                <div className={`flex items-center gap-3 py-3 ${i < songs.length - 1 && songs[i+1]?.day === song.day ? 'border-b border-[#2e2e38]' : ''}`}>
                  <div className="w-11 h-11 rounded-lg bg-[#2a2a32] flex items-center justify-center text-[20px] flex-shrink-0">
                    {song.emoji}
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-semibold text-white">{song.title}</p>
                    <p className="text-[12px] text-[#9ca3af]">{song.artist}</p>
                  </div>
                  <span className="text-[13px] text-[#9ca3af]">{song.time}</span>
                  <span className="text-[20px] text-[#6b7280] cursor-pointer ml-1">···</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
