import { View, Text } from 'react-native';

interface Props { label: string; color: 'green' | 'blue'; }

export function BatteryPill({ label, color }: Props) {
  const bg  = color === 'green' ? 'bg-[#166534]' : 'bg-[#1e3a5f]';
  const txt = color === 'green' ? 'text-[#4ade80]' : 'text-[#60a5fa]';
  return (
    <View className={`${bg} rounded-full px-2 py-0.5`}>
      <Text className={`${txt} text-[10px] font-semibold`}>{label}</Text>
    </View>
  );
}
