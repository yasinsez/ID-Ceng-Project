import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from '../components/StatusBar';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

export function AddDeviceScreen({ onNavigate }: Props) {
  return (
    <View className="flex-1 bg-[#0d0d0f]">
      <StatusBar />
      <View className="flex-row items-center gap-3 px-4 py-2">
        <TouchableOpacity
          onPress={() => onNavigate('welcome')}
          className="w-8 h-8 items-center justify-center bg-[#222228] rounded-full"
        >
          <Text className="text-white text-base">‹</Text>
        </TouchableOpacity>
        <Text className="text-xl font-bold text-white">Add Device</Text>
      </View>

      <View className="flex-1 items-center justify-center px-8">
        {/* Concentric rings */}
        <View className="w-48 h-48 rounded-full border border-[#2563eb] opacity-20 absolute" />
        <View className="w-36 h-36 rounded-full border border-[#2563eb] opacity-40 absolute" />
        <View className="w-24 h-24 rounded-full bg-[#1e3a5f] items-center justify-center mb-16">
          <Text className="text-3xl">📡</Text>
        </View>
        <Text className="text-2xl font-bold text-white mb-2 mt-24">Find Your Device</Text>
        <Text className="text-sm text-[#9ca3af] text-center mb-10 leading-5">
          Make sure your earbuds are out of the case and in pairing mode (LED flashing white).
        </Text>
        <TouchableOpacity
          onPress={() => onNavigate('searching')}
          className="w-full bg-[#2563eb] rounded-2xl py-4 items-center"
        >
          <Text className="text-white text-base font-bold">Start Searching</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
