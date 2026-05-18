import { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { StatusBar } from '../components/StatusBar';
import { NavBar } from '../components/NavBar';
import type { Screen, Preset } from '../types';

interface Props {
  onNavigate: (s: Screen) => void;
  preset: Preset;
  onPresetChange: (p: Preset) => void;
  isPlaying: boolean;
  onPlayPauseToggle: () => void;
}

const presets: { id: Preset; label: string; icon: string }[] = [
  { id: 'default', label: 'Default',    icon: '🎵' },
  { id: 'bass',    label: 'Bass Boost', icon: '🔊' },
  { id: 'clear',   label: 'Clear',      icon: '💎' },
  { id: 'treble',  label: 'Treble',     icon: '🎶' },
  { id: 'vocal',   label: 'Vocal',      icon: '🎤' },
  { id: 'custom',  label: 'Custom',     icon: '🎚️' },
];

const TRACK_DURATION = 214; // 3:34 in seconds

export function SoundScreen({ onNavigate, preset, onPresetChange, isPlaying, onPlayPauseToggle }: Props) {
  const [progress, setProgress] = useState(67); // seconds elapsed
  const progressAnim = useRef(new Animated.Value(67 / TRACK_DURATION)).current;
  const intervalRef  = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          const next = Math.min(p + 1, TRACK_DURATION);
          Animated.timing(progressAnim, { toValue: next / TRACK_DURATION, duration: 950, useNativeDriver: false }).start();
          return next;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isPlaying]);

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  return (
    <View className="flex-1 bg-[#0d0d0f]">
      <StatusBar />
      <View className="flex-row items-center gap-3 px-4 py-2">
        <TouchableOpacity
          onPress={() => onNavigate('home')}
          className="w-8 h-8 items-center justify-center bg-[#222228] rounded-full"
        >
          <Text className="text-white text-base">‹</Text>
        </TouchableOpacity>
        <Text className="text-xl font-bold text-white">Sound</Text>
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>

        {/* ── Now Playing ── */}
        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-4 mb-4">
          <Text className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">Now Playing</Text>

          {/* Track info */}
          <View className="flex-row items-center gap-3 mb-4">
            <View className="w-14 h-14 rounded-xl bg-[#2a2a32] items-center justify-center">
              <Text className="text-2xl">🎵</Text>
            </View>
            <View className="flex-1">
              <Text className="text-base font-bold text-white">Blinding Lights</Text>
              <Text className="text-sm text-[#9ca3af]">The Weeknd</Text>
            </View>
            <TouchableOpacity>
              <Text className="text-xl text-[#6b7280]">♡</Text>
            </TouchableOpacity>
          </View>

          {/* Progress bar */}
          <View className="mb-1">
            <View className="h-1 bg-[#2a2a32] rounded-full overflow-hidden">
              <Animated.View
                style={{
                  height: '100%',
                  backgroundColor: '#2563eb',
                  borderRadius: 4,
                  width: progressAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }),
                }}
              />
            </View>
            <View className="flex-row justify-between mt-1.5">
              <Text className="text-[10px] text-[#6b7280]">{fmt(progress)}</Text>
              <Text className="text-[10px] text-[#6b7280]">{fmt(TRACK_DURATION)}</Text>
            </View>
          </View>

          {/* Controls */}
          <View className="flex-row items-center justify-center gap-8 mt-2">
            <TouchableOpacity hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
              <Text className="text-2xl text-[#9ca3af]">⏮</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPlayPauseToggle}
              style={{
                width: 56, height: 56, borderRadius: 28,
                backgroundColor: '#2563eb',
                alignItems: 'center', justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: 22, color: '#fff' }}>{isPlaying ? '⏸' : '▶'}</Text>
            </TouchableOpacity>
            <TouchableOpacity hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
              <Text className="text-2xl text-[#9ca3af]">⏭</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Presets ── */}
        <Text className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">Sound Presets</Text>
        <View className="flex-row flex-wrap gap-3 mb-4">
          {presets.map((p) => (
            <TouchableOpacity
              key={p.id}
              onPress={() => { onPresetChange(p.id); if (p.id === 'custom') onNavigate('eq'); }}
              style={{ width: '47%' }}
              className={`bg-[#1a1a1f] border rounded-2xl p-4 items-center gap-2 ${preset === p.id ? 'border-[#2563eb]' : 'border-[#2e2e38]'}`}
            >
              <Text className="text-2xl">{p.icon}</Text>
              <Text className={`text-sm font-semibold ${preset === p.id ? 'text-[#2563eb]' : 'text-white'}`}>{p.label}</Text>
              {preset === p.id && <View className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />}
            </TouchableOpacity>
          ))}
        </View>

        {/* ── EQ shortcut ── */}
        <TouchableOpacity
          onPress={() => onNavigate('eq')}
          className="flex-row items-center justify-between bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl px-4 py-3.5 mb-4"
        >
          <View className="flex-row items-center gap-3">
            <Text className="text-xl">🎚️</Text>
            <Text className="text-sm font-semibold text-white">Custom Equalizer</Text>
          </View>
          <Text className="text-lg text-[#6b7280]">›</Text>
        </TouchableOpacity>

        <View className="h-4" />
      </ScrollView>

      <NavBar active="sound" onNavigate={onNavigate} />
    </View>
  );
}
