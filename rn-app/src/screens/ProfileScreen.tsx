import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from '../components/StatusBar';
import { NavBar } from '../components/NavBar';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

export function ProfileScreen({ onNavigate }: Props) {
  const menu = [
    { icon: '📱', label: 'My Devices',       screen: 'devices'  as Screen },
    { icon: '📻', label: 'Listening History', screen: 'history'  as Screen },
    { icon: '📊', label: 'Statistics',        screen: 'stats'    as Screen },
    { icon: 'ℹ️', label: 'About',             screen: null },
    { icon: '❓', label: 'Help & Support',    screen: null },
  ];

  return (
    <View className="flex-1 bg-[#0d0d0f]">
      <StatusBar />
      <View className="items-center pt-6 pb-4">
        <View className="w-[72px] h-[72px] rounded-full bg-[#2563eb] items-center justify-center mb-2">
          <Text className="text-3xl font-bold text-white">Z</Text>
        </View>
        <Text className="text-lg font-bold text-white">Zeynep Ertuğrul</Text>
        <Text className="text-sm text-[#9ca3af]">zeynep@gmail.com</Text>
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl overflow-hidden mb-3">
          {menu.map((item) => (
            <TouchableOpacity
              key={item.label}
              onPress={() => item.screen && onNavigate(item.screen)}
              className="flex-row items-center gap-3.5 px-4 py-3.5 border-b border-[#2e2e38] last:border-b-0"
            >
              <Text className="text-lg w-6 text-center">{item.icon}</Text>
              <Text className="flex-1 text-[15px] font-medium text-white">{item.label}</Text>
              <Text className="text-lg text-[#6b7280]">›</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="bg-[#1a1a1f] border border-[rgba(239,68,68,0.3)] rounded-2xl overflow-hidden mb-4">
          <TouchableOpacity
            onPress={() => onNavigate('welcome')}
            className="flex-row items-center gap-3.5 px-4 py-3.5"
          >
            <Text className="text-lg w-6 text-center">🚪</Text>
            <Text className="flex-1 text-[15px] font-medium text-[#ef4444]">Log Out</Text>
            <Text className="text-lg text-[#ef4444]">›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <NavBar active="profile" onNavigate={onNavigate} />
    </View>
  );
}
