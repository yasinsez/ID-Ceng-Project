import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from '../components/StatusBar';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

const gestures = [
  { gesture: 'Single Tap',   action: 'Play / Pause' },
  { gesture: 'Double Tap',   action: 'Next Track' },
  { gesture: 'Triple Tap',   action: 'Previous Track' },
  { gesture: 'Press & Hold', action: 'Voice Assistant' },
];

export function EarbudRightScreen({ onNavigate }: Props) {
  return (
    <View className="flex-1 bg-[#0d0d0f]">
      <StatusBar />
      <View className="flex-row items-center gap-3 px-4 py-2">
        <TouchableOpacity onPress={() => onNavigate('home')} className="w-8 h-8 items-center justify-center bg-[#222228] rounded-full">
          <Text className="text-white text-base">‹</Text>
        </TouchableOpacity>
        <Text className="text-xl font-bold text-white">Earbud Controls</Text>
      </View>

      {/* Tab switcher */}
      <View className="flex-row bg-[#1a1a1f] border border-[#2e2e38] rounded-xl p-1 gap-1 mx-4 mb-4">
        <TouchableOpacity onPress={() => onNavigate('earbud-left')} className="flex-1 py-1.5 rounded-lg items-center">
          <Text className="text-xs font-semibold text-[#9ca3af]">Left Earbud</Text>
        </TouchableOpacity>
        <View className="flex-1 py-1.5 rounded-lg bg-[#2563eb] items-center">
          <Text className="text-xs font-semibold text-white">Right Earbud</Text>
        </View>
      </View>

      <View className="flex-1 px-4">
        <View className="items-center mb-6">
          <View className="w-24 h-24 rounded-full bg-[#1a1a1f] border border-[#2e2e38] items-center justify-center">
            <Text className="text-5xl">🎧</Text>
          </View>
        </View>

        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl overflow-hidden">
          {gestures.map((g, i) => (
            <View key={g.gesture} className={`flex-row items-center justify-between px-4 py-4 ${i < gestures.length - 1 ? 'border-b border-[#2e2e38]' : ''}`}>
              <Text className="text-sm font-semibold text-white">{g.gesture}</Text>
              <View className="flex-row items-center gap-2">
                <Text className="text-sm text-[#9ca3af]">{g.action}</Text>
                <Text className="text-lg text-[#6b7280]">›</Text>
              </View>
            </View>
          ))}
        </View>

        <Text className="text-xs text-[#6b7280] text-center mt-4 px-4">
          Tap each gesture to customize the action assigned to your right earbud.
        </Text>
      </View>
    </View>
  );
}
