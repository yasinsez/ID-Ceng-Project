import { View, Text, TouchableOpacity } from 'react-native';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

export function WelcomeScreen({ onNavigate }: Props) {
  return (
    <View className="flex-1 bg-[#0d0d0f] px-6 justify-between pb-10">
      <View className="flex-1 items-center justify-center">
        <Text className="text-6xl mb-6">🎧</Text>
        <Text className="text-3xl font-bold text-white text-center mb-3">Welcome to{'\n'}SoundWave Buds</Text>
        <Text className="text-sm text-[#9ca3af] text-center leading-5">
          Control your earbuds, customize your sound,{'\n'}and track your listening experience.
        </Text>
      </View>

      <View className="gap-3">
        <TouchableOpacity
          onPress={() => onNavigate('add-device')}
          className="w-full bg-[#2563eb] rounded-2xl py-4 items-center"
        >
          <Text className="text-white text-base font-bold">Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onNavigate('home')}
          className="w-full bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl py-4 items-center"
        >
          <Text className="text-white text-base font-semibold">Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
