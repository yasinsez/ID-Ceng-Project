import { View, Text, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { StatusBar } from '../components/StatusBar';
import type { Screen, EQValues } from '../types';

interface Props { onNavigate: (s: Screen) => void; eq: EQValues; onEQChange: (eq: EQValues) => void; }

export function EQScreen({ onNavigate, eq, onEQChange }: Props) {
  const bands: { key: keyof EQValues; label: string }[] = [
    { key: 'bass',   label: 'Bass' },
    { key: 'mid',    label: 'Mid' },
    { key: 'treble', label: 'Treble' },
  ];

  return (
    <View className="flex-1 bg-[#0d0d0f]">
      <StatusBar />
      <View className="flex-row items-center justify-between px-4 py-2">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => onNavigate('sound')} className="w-8 h-8 items-center justify-center bg-[#222228] rounded-full">
            <Text className="text-white text-base">‹</Text>
          </TouchableOpacity>
          <Text className="text-xl font-bold text-white">Equalizer</Text>
        </View>
        <TouchableOpacity onPress={() => onEQChange({ bass: 50, mid: 50, treble: 50 })}>
          <Text className="text-sm text-[#3b82f6]">Reset</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 px-4 justify-center">
        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-5">
          {bands.map(({ key, label }) => (
            <View key={key} className="mb-6 last:mb-0">
              <View className="flex-row justify-between mb-2">
                <Text className="text-sm font-semibold text-white">{label}</Text>
                <Text className="text-sm text-[#9ca3af]">{eq[key] > 50 ? `+${eq[key] - 50}` : eq[key] - 50} dB</Text>
              </View>
              <Slider
                minimumValue={0}
                maximumValue={100}
                value={eq[key]}
                onValueChange={(v) => onEQChange({ ...eq, [key]: Math.round(v) })}
                minimumTrackTintColor="#2563eb"
                maximumTrackTintColor="#2a2a32"
                thumbTintColor="#2563eb"
              />
            </View>
          ))}
        </View>

        <TouchableOpacity className="mt-6 bg-[#2563eb] rounded-2xl py-4 items-center">
          <Text className="text-white text-base font-bold">Save as Preset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
