import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from '../components/StatusBar';
import { NavBar } from '../components/NavBar';
import { Toggle } from '../components/Toggle';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; darkMode: boolean; onDarkModeChange: (v: boolean) => void; }

function Row({ icon, title, right, onPress }: { icon: string; title: string; right?: React.ReactNode; onPress?: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row items-center gap-3.5 px-4 py-3.5 border-b border-[#2e2e38] last:border-b-0">
      <Text className="text-lg w-6 text-center">{icon}</Text>
      <Text className="flex-1 text-[15px] font-medium text-white">{title}</Text>
      {right ?? <Text className="text-lg text-[#6b7280]">›</Text>}
    </TouchableOpacity>
  );
}

export function SettingsScreen({ onNavigate, darkMode, onDarkModeChange }: Props) {
  return (
    <View className="flex-1 bg-[#0d0d0f]">
      <StatusBar />
      <View className="px-4 py-2">
        <Text className="text-2xl font-bold text-white">Settings</Text>
      </View>
      <View className="flex-1 px-4">
        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl overflow-hidden mb-3">
          <Row icon="⚙️" title="General" />
          <Row icon="🎵" title="Sound"            onPress={() => onNavigate('sound')} />
          <Row icon="🎧" title="Earbud Controls"  onPress={() => onNavigate('earbud-left')} />
          <Row icon="📱" title="Device Settings"  onPress={() => onNavigate('device-detail')} />
        </View>
        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl overflow-hidden">
          <Row icon="🌙" title="Dark Mode"          right={<Toggle on={darkMode} onChange={onDarkModeChange} />} />
          <Row icon="⏰" title="Auto Power-Off"     right={<Text className="text-xs text-[#9ca3af] mr-2">30 min</Text>} />
          <Row icon="🌐" title="Language"           right={<Text className="text-xs text-[#9ca3af] mr-2">English</Text>} />
          <Row icon="ℹ️" title="About" />
        </View>
      </View>
      <NavBar active="settings" onNavigate={onNavigate} />
    </View>
  );
}
