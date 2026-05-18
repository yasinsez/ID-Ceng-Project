import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { StatusBar } from '../components/StatusBar';
import { NavBar } from '../components/NavBar';
import { BatteryPill } from '../components/BatteryPill';
import type { Screen, AmbientMode } from '../types';

interface Props {
  onNavigate: (s: Screen) => void;
  volume: number; onVolumeChange: (v: number) => void;
  ambient: AmbientMode; onAmbientChange: (m: AmbientMode) => void;
}

const ambientModes: { id: AmbientMode; label: string; icon: string }[] = [
  { id: 'nc',           label: 'Noise Cancel', icon: '🔇' },
  { id: 'off',          label: 'Off',           icon: '○' },
  { id: 'transparency', label: 'Transparency',  icon: '👂' },
];

export function HomeScreen({ onNavigate, volume, onVolumeChange, ambient, onAmbientChange }: Props) {
  return (
    <View className="flex-1 bg-[#0d0d0f]">
      <StatusBar />
      <View className="flex-row items-center justify-between px-4 py-2">
        <View>
          <Text className="text-xl font-bold text-white">SoundWave Buds</Text>
          <Text className="text-xs text-[#22c55e]">Connected</Text>
        </View>
        <TouchableOpacity onPress={() => onNavigate('profile')}>
          <View className="w-9 h-9 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] items-center justify-center">
            <Text className="text-white font-bold text-sm">Z</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* Hero card */}
        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-3xl p-5 mb-3">
          <View className="items-center mb-4">
            <Text className="text-7xl mb-3">🎧</Text>
            <View className="flex-row gap-2">
              <BatteryPill label="L 100%" color="green" />
              <BatteryPill label="R 100%" color="green" />
              <BatteryPill label="Case 80%" color="blue" />
            </View>
          </View>

          {/* Ambient mode */}
          <View className="flex-row bg-[#111115] rounded-xl p-1 gap-1">
            {ambientModes.map((m) => (
              <TouchableOpacity
                key={m.id}
                onPress={() => onAmbientChange(m.id)}
                className={`flex-1 py-2 rounded-lg items-center ${ambient === m.id ? 'bg-[#2563eb]' : 'bg-transparent'}`}
              >
                <Text className="text-base mb-0.5">{m.icon}</Text>
                <Text className={`text-[10px] font-semibold ${ambient === m.id ? 'text-white' : 'text-[#9ca3af]'}`}>{m.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Volume */}
        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-4 mb-3">
          <View className="flex-row justify-between mb-2">
            <Text className="text-sm font-semibold text-white">Volume</Text>
            <Text className="text-sm text-[#9ca3af]">{volume}%</Text>
          </View>
          <Slider
            minimumValue={0}
            maximumValue={100}
            value={volume}
            onValueChange={(v) => onVolumeChange(Math.round(v))}
            minimumTrackTintColor="#2563eb"
            maximumTrackTintColor="#2a2a32"
            thumbTintColor="#2563eb"
          />
        </View>

        {/* Quick actions */}
        <View className="flex-row gap-3 mb-4">
          <TouchableOpacity onPress={() => onNavigate('sound')} className="flex-1 bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-4 items-center gap-2">
            <Text className="text-2xl">🎵</Text>
            <Text className="text-xs font-semibold text-white">Sound</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('eq')} className="flex-1 bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-4 items-center gap-2">
            <Text className="text-2xl">🎚️</Text>
            <Text className="text-xs font-semibold text-white">EQ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('settings')} className="flex-1 bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-4 items-center gap-2">
            <Text className="text-2xl">⚙️</Text>
            <Text className="text-xs font-semibold text-white">Settings</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <NavBar active="home" onNavigate={onNavigate} />
    </View>
  );
}
