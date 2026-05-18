import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from '../components/StatusBar';
import { NavBar } from '../components/NavBar';
import { BatteryPill } from '../components/BatteryPill';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

const devices = [
  { name: 'SoundWave Buds',      sub: 'Connected',               connected: true,  bats: [['L 100%','green'],['R 100%','green'],['Case 80%','blue']] as const },
  { name: 'SoundWave Buds Pro',  sub: 'Last connected 3 days ago', connected: false, bats: [['L 90%','green'],['R 90%','green'],['Case 70%','blue']] as const },
  { name: 'SoundWave Buds Lite', sub: 'Last connected 1 week ago', connected: false, bats: [['L 80%','green'],['R 80%','green'],['Case 60%','blue']] as const },
];

export function DevicesScreen({ onNavigate }: Props) {
  return (
    <View className="flex-1 bg-[#0d0d0f]">
      <StatusBar />
      <View className="flex-row items-center justify-between px-4 py-2">
        <Text className="text-2xl font-bold text-white">My Devices</Text>
        <TouchableOpacity className="w-8 h-8 items-center justify-center bg-[#222228] rounded-full">
          <Text className="text-[#9ca3af] text-lg">＋</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {devices.map((dev) => (
          <TouchableOpacity
            key={dev.name}
            onPress={() => onNavigate('device-detail')}
            className="w-full bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-4 flex-row items-center gap-3.5 mb-2.5"
          >
            <Text className="text-4xl">🎧</Text>
            <View className="flex-1">
              <Text className="text-[15px] font-semibold text-white mb-1">{dev.name}</Text>
              <Text className={`text-xs mb-2 ${dev.connected ? 'text-[#22c55e]' : 'text-[#9ca3af]'}`}>{dev.sub}</Text>
              <View className="flex-row gap-1.5 flex-wrap">
                {dev.bats.map(([label, color]) => (
                  <BatteryPill key={label} label={label} color={color} />
                ))}
              </View>
            </View>
            <Text className="text-lg text-[#6b7280]">›</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={() => onNavigate('add-device')}
          className="w-full bg-[#222228] border border-dashed border-[#2e2e38] rounded-2xl p-4 flex-row items-center justify-center gap-2.5 mt-1 mb-4"
        >
          <Text className="text-xl text-[#3b82f6]">＋</Text>
          <Text className="text-sm font-medium text-[#9ca3af]">Add New Device</Text>
        </TouchableOpacity>
      </ScrollView>

      <NavBar active="devices" onNavigate={onNavigate} />
    </View>
  );
}
