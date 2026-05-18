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
  isPlaying: boolean; onPlayPauseToggle: () => void;
}

const ambientModes: { id: AmbientMode; label: string; icon: string }[] = [
  { id: 'nc',           label: 'Noise Cancel', icon: '🔇' },
  { id: 'off',          label: 'Off',           icon: '○'  },
  { id: 'transparency', label: 'Transparency',  icon: '👂' },
];

export function HomeScreen({ onNavigate, volume, onVolumeChange, ambient, onAmbientChange, isPlaying, onPlayPauseToggle }: Props) {
  return (
    <View className="flex-1 bg-[#0d0d0f]">
      <StatusBar />

      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-2">
        <View>
          <Text className="text-xl font-bold text-white">SoundWave Buds</Text>
          <Text className="text-xs text-[#22c55e]">● Connected</Text>
        </View>
        <TouchableOpacity onPress={() => onNavigate('profile')}>
          {/* Solid gradient-style avatar — gradient classes don't work in NativeWind */}
          <View style={{
            width: 36, height: 36, borderRadius: 18,
            backgroundColor: '#2563eb',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <Text style={{ color: '#fff', fontWeight: '700', fontSize: 14 }}>Z</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* Hero card — earbud + battery + ambient */}
        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-3xl p-5 mb-3">
          {/* Tappable L / R earbuds */}
          <View className="flex-row justify-center items-end gap-6 mb-4">
            <TouchableOpacity
              onPress={() => onNavigate('earbud-left')}
              activeOpacity={0.75}
              style={{ alignItems: 'center', gap: 6 }}
            >
              <View style={{
                width: 72, height: 72, borderRadius: 36,
                backgroundColor: '#222228', borderWidth: 2, borderColor: '#2563eb',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <Text style={{ fontSize: 32 }}>🎧</Text>
              </View>
              <BatteryPill label="L  100%" color="green" />
              <Text style={{ fontSize: 10, color: '#6b7280', fontWeight: '600' }}>LEFT</Text>
            </TouchableOpacity>

            {/* Case battery in the middle */}
            <View style={{ alignItems: 'center', gap: 6, paddingBottom: 28 }}>
              <View style={{
                width: 48, height: 48, borderRadius: 12,
                backgroundColor: '#222228', borderWidth: 1, borderColor: '#2e2e38',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <Text style={{ fontSize: 22 }}>📦</Text>
              </View>
              <BatteryPill label="Case 80%" color="blue" />
            </View>

            <TouchableOpacity
              onPress={() => onNavigate('earbud-right')}
              activeOpacity={0.75}
              style={{ alignItems: 'center', gap: 6 }}
            >
              <View style={{
                width: 72, height: 72, borderRadius: 36,
                backgroundColor: '#222228', borderWidth: 2, borderColor: '#2563eb',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <Text style={{ fontSize: 32 }}>🎧</Text>
              </View>
              <BatteryPill label="R  100%" color="green" />
              <Text style={{ fontSize: 10, color: '#6b7280', fontWeight: '600' }}>RIGHT</Text>
            </TouchableOpacity>
          </View>

          {/* Device Details button */}
          <TouchableOpacity
            onPress={() => onNavigate('device-detail')}
            activeOpacity={0.8}
            style={{
              flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
              backgroundColor: '#111115', borderWidth: 1, borderColor: '#2e2e38',
              borderRadius: 10, paddingVertical: 8, marginBottom: 14, gap: 6,
            }}
          >
            <Text style={{ fontSize: 13, color: '#9ca3af' }}>◻</Text>
            <Text style={{ fontSize: 12, fontWeight: '600', color: '#9ca3af' }}>Device Details</Text>
            <Text style={{ fontSize: 13, color: '#6b7280' }}>›</Text>
          </TouchableOpacity>

          {/* Ambient mode picker */}
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

        {/* Now Playing mini-player */}
        <TouchableOpacity
          onPress={() => onNavigate('sound')}
          className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-4 mb-3"
          activeOpacity={0.85}
        >
          <Text className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">Now Playing</Text>
          <View className="flex-row items-center gap-3">
            <View className="w-12 h-12 rounded-xl bg-[#2a2a32] items-center justify-center">
              <Text className="text-xl">🎵</Text>
            </View>
            <View className="flex-1">
              <Text className="text-sm font-semibold text-white">Blinding Lights</Text>
              <Text className="text-xs text-[#9ca3af]">The Weeknd</Text>
            </View>
            {/* Prev / Play-Pause / Next */}
            <View className="flex-row items-center gap-4">
              <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                <Text className="text-lg text-[#9ca3af]">⏮</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPlayPauseToggle} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                <Text className="text-2xl text-white">{isPlaying ? '⏸' : '▶'}</Text>
              </TouchableOpacity>
              <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                <Text className="text-lg text-[#9ca3af]">⏭</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>

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
