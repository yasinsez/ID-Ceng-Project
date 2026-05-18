import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from '../components/StatusBar';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

export function SearchingScreen({ onNavigate }: Props) {
  return (
    <View className="flex-1 bg-[#0d0d0f]">
      <StatusBar />
      <View className="flex-row items-center gap-3 px-4 py-2">
        <TouchableOpacity
          onPress={() => onNavigate('add-device')}
          className="w-8 h-8 items-center justify-center bg-[#222228] rounded-full"
        >
          <Text className="text-white text-base">‹</Text>
        </TouchableOpacity>
        <Text className="text-xl font-bold text-white">Searching…</Text>
      </View>

      <View className="flex-1 items-center justify-center px-6">
        {/* Radar rings */}
        <View className="items-center justify-center mb-10">
          <View className="w-52 h-52 rounded-full border border-[#2563eb] opacity-10 absolute" />
          <View className="w-40 h-40 rounded-full border border-[#2563eb] opacity-20 absolute" />
          <View className="w-28 h-28 rounded-full border border-[#2563eb] opacity-40 absolute" />
          <View className="w-16 h-16 rounded-full bg-[#2563eb] items-center justify-center">
            <Text className="text-2xl">🎧</Text>
          </View>
        </View>

        <Text className="text-base text-[#9ca3af] mb-10">Looking for nearby devices…</Text>

        {/* Found device card */}
        <TouchableOpacity
          onPress={() => onNavigate('connected')}
          className="w-full bg-[#1a1a1f] border border-[#2563eb] rounded-2xl p-4 flex-row items-center gap-4"
        >
          <Text className="text-4xl">🎧</Text>
          <View className="flex-1">
            <Text className="text-base font-semibold text-white">SoundWave Buds</Text>
            <Text className="text-xs text-[#9ca3af]">Ready to connect</Text>
          </View>
          <View className="bg-[#2563eb] rounded-xl px-4 py-2">
            <Text className="text-white text-xs font-bold">Connect</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
