import { useState } from 'react';
import { StatusBar } from '../components/StatusBar';
import { NavBar } from '../components/NavBar';
import { BatteryPill } from '../components/BatteryPill';
import type { Screen, AmbientMode } from '../types';

interface Props {
  onNavigate: (s: Screen) => void;
  volume: number;
  onVolumeChange: (v: number) => void;
  ambient: AmbientMode;
  onAmbientChange: (a: AmbientMode) => void;
}

const ambientOptions: { id: AmbientMode; icon: string; label: string }[] = [
  { id: 'nc',           icon: '🎧', label: 'Noise\nCancellation' },
  { id: 'off',          icon: '🔇', label: 'Off' },
  { id: 'transparency', icon: '🌊', label: 'Transparency' },
];

export function HomeScreen({ onNavigate, volume, onVolumeChange, ambient, onAmbientChange }: Props) {
  return (
    <div className="flex-1 flex flex-col bg-[#0d0d0f] overflow-hidden">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 flex-shrink-0">
        <h1 className="text-[22px] font-bold text-white">My Earbuds</h1>
        <button className="w-8 h-8 flex items-center justify-center bg-[#222228] rounded-full border-none cursor-pointer text-[#9ca3af] text-lg">＋</button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 [scrollbar-width:none]">
        {/* Hero card */}
        <div className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-4 relative overflow-hidden">
          <div className="absolute top-[-10px] right-[-10px] w-32 h-32 rounded-full bg-[#2563eb] opacity-[0.12] blur-xl pointer-events-none" />
          <div className="absolute top-4 right-4 text-[56px] opacity-90">🎧</div>
          <p className="text-[17px] font-bold text-white mb-1">SoundWave Buds</p>
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
            <span className="text-[12px] font-medium text-[#22c55e]">Connected</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            <BatteryPill label="L 100%" color="green" />
            <BatteryPill label="R 100%" color="green" />
            <BatteryPill label="Case 80%" color="blue" />
          </div>
        </div>

        {/* Ambient Sound */}
        <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mt-5 mb-2">Ambient Sound</p>
        <div className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-2">
          <div className="flex bg-[#222228] rounded-xl p-1 gap-1">
            {ambientOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => onAmbientChange(opt.id)}
                className={`flex-1 flex flex-col items-center gap-1 py-2 px-1 rounded-[10px] border-none cursor-pointer transition-all text-[10px] font-medium ${
                  ambient === opt.id ? 'bg-[#2a2a32] text-white' : 'bg-transparent text-[#6b7280]'
                }`}
              >
                <span className="text-[18px]">{opt.icon}</span>
                <span className="text-center leading-tight whitespace-pre-line">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Volume */}
        <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mt-5 mb-2">Volume</p>
        <div className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="text-[18px] text-[#9ca3af]">🔈</span>
            <input
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={(e) => onVolumeChange(Number(e.target.value))}
              className="flex-1 h-1 accent-[#2563eb] cursor-pointer"
            />
            <span className="text-[13px] text-[#9ca3af] w-8 text-right">{volume}%</span>
          </div>
        </div>
      </div>

      <NavBar active="home" onNavigate={onNavigate} />
    </div>
  );
}
