import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from '../components/StatusBar';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

const songs = [
  { title: 'Blinding Lights',   artist: 'The Weeknd',       time: '3:45', emoji: '🎵', day: 'Today' },
  { title: 'Until I Found You', artist: 'Stephen Sanchez',  time: '3:02', emoji: '🎶', day: 'Today' },
  { title: 'As It Was',         artist: 'Harry Styles',     time: '2:47', emoji: '🎤', day: 'Today' },
  { title: 'Calm Down',         artist: 'Rema',             time: '3:31', emoji: '🎸', day: 'Yesterday' },
];

export function HistoryScreen({ onNavigate }: Props) {
  let lastDay = '';
  return (
    <View className="flex-1 bg-[#0d0d0f]">
      <StatusBar />
      <View className="flex-row items-center gap-3 px-4 py-2">
        <TouchableOpacity onPress={() => onNavigate('profile')} className="w-8 h-8 items-center justify-center bg-[#222228] rounded-full">
          <Text className="text-white text-base">‹</Text>
        </TouchableOpacity>
        <Text className="text-xl font-bold text-white">Listening History</Text>
      </View>

      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {songs.map((song, i) => {
          const showDay = song.day !== lastDay;
          lastDay = song.day;
          return (
            <View key={i}>
              {showDay && (
                <Text className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mt-4 mb-2">{song.day}</Text>
              )}
              <View className="bg-[#1a1a1f] border border-[#2e2e38] rounded-2xl px-4 mb-1">
                <View className={`flex-row items-center gap-3 py-3 ${i < songs.length - 1 && songs[i + 1]?.day === song.day ? 'border-b border-[#2e2e38]' : ''}`}>
                  <View className="w-11 h-11 rounded-xl bg-[#2a2a32] items-center justify-center">
                    <Text className="text-xl">{song.emoji}</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-sm font-semibold text-white">{song.title}</Text>
                    <Text className="text-xs text-[#9ca3af]">{song.artist}</Text>
                  </View>
                  <Text className="text-sm text-[#9ca3af]">{song.time}</Text>
                  <Text className="text-xl text-[#6b7280] ml-1">···</Text>
                </View>
              </View>
            </View>
          );
        })}
        <View className="h-4" />
      </ScrollView>
    </View>
  );
}
