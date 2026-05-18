import { View, Text, TouchableOpacity } from 'react-native';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

export function SplashScreen({ onNavigate }: Props) {
  return (
    <View className="flex-1 bg-[#0d0d0f] items-center justify-center px-8">
      <View className="items-center mb-12">
        <View className="w-24 h-24 rounded-3xl bg-[#2563eb] items-center justify-center mb-6 shadow-lg">
          <Text className="text-5xl">🎧</Text>
        </View>
        <Text className="text-3xl font-bold text-white tracking-tight">SoundWave</Text>
        <Text className="text-3xl font-bold text-[#2563eb] tracking-tight">Buds</Text>
        <Text className="text-sm text-[#9ca3af] mt-2 text-center">Premium Wireless Audio Experience</Text>
      </View>

      {/* Waveform bars */}
      <View className="flex-row items-end gap-1 mb-16 h-12">
        {[40, 65, 45, 80, 55, 70, 40, 60, 75, 50, 85, 45, 65].map((h, i) => (
          <View
            key={i}
            className="w-1.5 rounded-full bg-[#2563eb]"
            style={{ height: `${h}%`, opacity: 0.4 + i * 0.04 }}
          />
        ))}
      </View>

      <TouchableOpacity
        onPress={() => onNavigate('welcome')}
        className="w-full bg-[#2563eb] rounded-2xl py-4 items-center"
      >
        <Text className="text-white text-base font-bold">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
