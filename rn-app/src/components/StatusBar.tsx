import { View, Text } from 'react-native';

export function StatusBar() {
  return (
    <View className="flex-row items-center justify-between px-5 pt-3 pb-1">
      <Text className="text-white text-xs font-semibold">9:41</Text>
      <View className="flex-row items-center gap-1">
        <Text className="text-white text-xs">▲</Text>
        <Text className="text-white text-xs">WiFi</Text>
        <Text className="text-white text-xs">🔋</Text>
      </View>
    </View>
  );
}
