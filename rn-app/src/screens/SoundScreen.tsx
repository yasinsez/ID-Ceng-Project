import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from '../components/StatusBar';
import { NavBar } from '../components/NavBar';
import type { Screen, Preset } from '../types';

interface Props { onNavigate: (s: Screen) => void; preset: Preset; onPresetChange: (p: Preset) => void; }

const presets: { id: Preset; label: string; icon: string }[] = [
  { id: 'default', label: 'Default',   icon: '🎵' },
  { id: 'bass',    label: 'Bass Boost', icon: '🔊' },
  { id: 'clear',   label: 'Clear',      icon: '💎' },
  { id: 'treble',  label: 'Treble',     icon: '🎶' },
  { id: 'vocal',   label: 'Vocal',      icon: '🎤' },
  { id: 'custom',  label: 'Custom',     icon: '🎚️' },
];

export function SoundScreen({ onNavigate, preset, onPresetChange }: Props) {
  return (
    <View className="flex-1 bg-[#0d0d0f]">
      <StatusBar />
      <View className="flex-row items-center gap-3 px-4 py-2">
        <TouchableOpacity onPress={() => onNavigate('home')} className="w-8 h-8 items-center justify-center bg-[#222228] rounded-full">
          <Text className="text-white text-base">‹</Text>
        </TouchableOpacity>
        <Text className="text-xl font-bold text-white">Sound</Text>
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <Text className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">Presets</Text>
        <View className="flex-row flex-wrap gap-3 mb-4">
          {presets.map((p) => (
            <TouchableOpacity
              key={p.id}
              onPress={() => { onPresetChange(p.id); if (p.id === 'custom') onNavigate('eq'); }}
              className={`w-[47%] bg-[#1a1a1f] border rounded-2xl p-4 items-center gap-2 ${preset === p.id ? 'border-[#2563eb]' : 'border-[#2e2e38]'}`}
            >
              <Text className="text-2xl">{p.icon}</Text>
              <Text className={`text-sm font-semibold ${preset === p.id ? 'text-[#2563eb]' : 'text-white'}`}>{p.label}</Text>
              {preset === p.id && <View className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Now Playing */}
        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-4">
          <Text className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">Now Playing</Text>
          <View className="flex-row items-center gap-3">
            <View className="w-12 h-12 rounded-xl bg-[#2a2a32] items-center justify-center">
              <Text className="text-xl">🎵</Text>
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-white">Blinding Lights</Text>
              <Text className="text-xs text-[#9ca3af]">The Weeknd</Text>
            </View>
            <Text className="text-2xl">⏸</Text>
          </View>
        </View>
        <View className="h-4" />
      </ScrollView>

      <NavBar active="sound" onNavigate={onNavigate} />
    </View>
  );
}
