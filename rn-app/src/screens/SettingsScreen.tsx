import type { ReactNode } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from '../components/StatusBar';
import { NavBar } from '../components/NavBar';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

interface RowProps {
  icon: string;
  title: string;
  right?: ReactNode;
  onPress?: () => void;
  isLast?: boolean;
}

function Row({ icon, title, right, onPress, isLast }: RowProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ borderBottomWidth: isLast ? 0 : 1, borderBottomColor: '#2e2e38' }}
      className="flex-row items-center gap-3.5 px-4 py-3.5"
    >
      <Text className="text-lg w-6 text-center">{icon}</Text>
      <Text className="flex-1 text-[15px] font-medium text-white">{title}</Text>
      {right ?? <Text className="text-lg text-[#6b7280]">›</Text>}
    </TouchableOpacity>
  );
}

export function SettingsScreen({ onNavigate }: Props) {
  return (
    <View className="flex-1 bg-[#0d0d0f]">
      <StatusBar />
      <View className="px-4 py-2">
        <Text className="text-2xl font-bold text-white">Settings</Text>
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* Device section */}
        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl overflow-hidden mb-3">
          <Row icon="⚙️" title="General" />
          <Row icon="🎵" title="Sound"           onPress={() => onNavigate('sound')} />
          <Row icon="🎧" title="Earbud Controls" onPress={() => onNavigate('earbud-left')} />
          <Row icon="📱" title="Device Settings" onPress={() => onNavigate('device-detail')} isLast />
        </View>

        {/* Preferences section */}
        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl overflow-hidden mb-4">
          <Row icon="⏰" title="Auto Power-Off" right={<Text className="text-xs text-[#9ca3af] mr-2">30 min</Text>} />
          <Row icon="🌐" title="Language"       right={<Text className="text-xs text-[#9ca3af] mr-2">English</Text>} />
          <Row icon="ℹ️" title="About" isLast />
        </View>
      </ScrollView>

      <NavBar active="settings" onNavigate={onNavigate} />
    </View>
  );
}
