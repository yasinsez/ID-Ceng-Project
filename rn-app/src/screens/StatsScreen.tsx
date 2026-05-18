import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from '../components/StatusBar';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

const bars = [
  { label: 'Mon', h: 30 }, { label: 'Tue', h: 45 }, { label: 'Wed', h: 35 },
  { label: 'Thu', h: 55 }, { label: 'Fri', h: 40 }, { label: 'Sat', h: 70, active: true }, { label: 'Sun', h: 25 },
];
const genres = [
  { name: 'Pop',       pct: 35 }, { name: 'Electronic', pct: 28 },
  { name: 'Hip-Hop',   pct: 20 }, { name: 'Jazz',       pct: 17 },
];
const filters = ['Day', 'Week', 'Month', 'Year'];

export function StatsScreen({ onNavigate }: Props) {
  const [filter, setFilter] = useState('Week');

  return (
    <View className="flex-1 bg-[#0d0d0f]">
      <StatusBar />
      <View className="flex-row items-center gap-3 px-4 py-2">
        <TouchableOpacity onPress={() => onNavigate('profile')} className="w-8 h-8 items-center justify-center bg-[#222228] rounded-full">
          <Text className="text-white text-base">‹</Text>
        </TouchableOpacity>
        <Text className="text-xl font-bold text-white">Statistics</Text>
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* Time filter */}
        <View className="flex-row bg-[#1a1a1f] border border-[#2e2e38] rounded-xl p-1 gap-1 mb-4">
          {filters.map((f) => (
            <TouchableOpacity
              key={f}
              onPress={() => setFilter(f)}
              className={`flex-1 py-1.5 rounded-lg items-center ${filter === f ? 'bg-[#2563eb]' : 'bg-transparent'}`}
            >
              <Text className={`text-xs font-semibold ${filter === f ? 'text-white' : 'text-[#9ca3af]'}`}>{f}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Big stat */}
        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-5 mb-3">
          <Text className="text-sm text-[#9ca3af] mb-1">Listening Time</Text>
          <Text className="text-4xl font-bold text-white">18 h 42 min</Text>
          <Text className="text-xs text-[#22c55e] mt-1">↑ +12% from last week</Text>
          {/* Bar chart */}
          <View className="flex-row items-end gap-1.5 mt-4 h-20">
            {bars.map((b) => (
              <View key={b.label} className="flex-1 items-center gap-1">
                <View
                  className={`w-full rounded-t ${b.active ? 'bg-[#2563eb]' : 'bg-[#2a2a32]'}`}
                  style={{ height: `${b.h}%` }}
                />
                <Text className="text-[9px] text-[#6b7280]">{b.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Genres */}
        <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl p-5 mb-4">
          <Text className="text-[15px] font-semibold text-white mb-4">Top Genres</Text>
          {genres.map((g) => (
            <View key={g.name} className="mb-3 last:mb-0">
              <View className="flex-row justify-between mb-1.5">
                <Text className="text-sm text-white">{g.name}</Text>
                <Text className="text-sm text-[#9ca3af]">{g.pct}%</Text>
              </View>
              <View className="h-1 bg-[#2a2a32] rounded-full overflow-hidden">
                <View className="h-full bg-[#2563eb] rounded-full" style={{ width: `${g.pct}%` }} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
