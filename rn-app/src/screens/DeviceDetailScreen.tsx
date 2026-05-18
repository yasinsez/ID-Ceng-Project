import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from '../components/StatusBar';
import { BatteryPill } from '../components/BatteryPill';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

const info = [
  { label: 'Model',         value: 'SWB-01' },
  { label: 'Serial Number', value: 'SWB-2026-000123' },
  { label: 'Firmware',      value: '1.0.3' },
  { label: 'Hardware',      value: 'Rev B' },
];

export function DeviceDetailScreen({ onNavigate }: Props) {
  return (
    <View className="flex-1 bg-[#0d0d0f]">
      <StatusBar />
      <View className="flex-row items-center gap-3 px-4 py-2">
        <TouchableOpacity onPress={() => onNavigate('devices')} className="w-8 h-8 items-center justify-center bg-[#222228] rounded-full">
          <Text className="text-white text-base">‹</Text>
        </TouchableOpacity>
        <Text className="text-xl font-bold text-white">Device Detail</Text>
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-5 mb-3 items-center">
          <Text className="text-6xl mb-3">🎧</Text>
          <Text className="text-lg font-bold text-white mb-1">SoundWave Buds</Text>
          <Text className="text-sm text-[#22c55e] mb-4">Connected</Text>
          <View className="flex-row gap-2">
            <BatteryPill label="L 100%" color="green" />
            <BatteryPill label="R 100%" color="green" />
            <BatteryPill label="Case 80%" color="blue" />
          </View>
        </View>

        {/* Info */}
        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl overflow-hidden mb-3">
          {info.map((row, i) => (
            <View key={row.label} className={`flex-row items-center justify-between px-4 py-3.5 ${i < info.length - 1 ? 'border-b border-[#2e2e38]' : ''}`}>
              <Text className="text-sm text-[#9ca3af]">{row.label}</Text>
              <Text className="text-sm font-medium text-white">{row.value}</Text>
            </View>
          ))}
        </View>

        {/* Actions */}
        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl overflow-hidden mb-3">
          <TouchableOpacity className="flex-row items-center gap-3.5 px-4 py-3.5 border-b border-[#2e2e38]">
            <Text className="text-lg w-6 text-center">🔄</Text>
            <Text className="flex-1 text-[15px] font-medium text-white">Check for Updates</Text>
            <Text className="text-xs text-[#22c55e] font-medium mr-1">Up to date</Text>
            <Text className="text-lg text-[#6b7280]">›</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center gap-3.5 px-4 py-3.5">
            <Text className="text-lg w-6 text-center">📖</Text>
            <Text className="flex-1 text-[15px] font-medium text-white">User Guide</Text>
            <Text className="text-lg text-[#6b7280]">›</Text>
          </TouchableOpacity>
        </View>

        {/* Remove */}
        <View className="bg-[#1a1a1f] border border-[rgba(239,68,68,0.3)] rounded-2xl overflow-hidden mb-4">
          <TouchableOpacity onPress={() => onNavigate('devices')} className="flex-row items-center gap-3.5 px-4 py-3.5">
            <Text className="text-lg w-6 text-center">🗑️</Text>
            <Text className="flex-1 text-[15px] font-medium text-[#ef4444]">Remove Device</Text>
            <Text className="text-lg text-[#ef4444]">›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
