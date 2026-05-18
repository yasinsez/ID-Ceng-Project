import { View, Text, TouchableOpacity } from 'react-native';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

export function ConnectedScreen({ onNavigate }: Props) {
  return (
    <View className="flex-1 bg-[#0d0d0f] items-center justify-center px-8">
      <View className="w-32 h-32 rounded-full border-4 border-[#22c55e] items-center justify-center mb-6">
        <Text className="text-5xl">✓</Text>
      </View>
      <Text className="text-2xl font-bold text-white mb-2">Connected!</Text>
      <Text className="text-sm text-[#9ca3af] text-center mb-2">SoundWave Buds</Text>
      <Text className="text-xs text-[#22c55e] mb-12">L 100%  R 100%  Case 80%</Text>

      <TouchableOpacity
        onPress={() => onNavigate('home')}
        className="w-full bg-[#2563eb] rounded-2xl py-4 items-center"
      >
        <Text className="text-white text-base font-bold">Go to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}
