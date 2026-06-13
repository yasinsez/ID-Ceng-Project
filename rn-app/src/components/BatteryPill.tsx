import { View, Text } from 'react-native';

interface Props { label: string; color: 'green' | 'blue'; }

export function BatteryPill({ label, color }: Props) {
  const bg  = color === 'green' ? '#dcfce7' : '#dbeafe';
  const txt = color === 'green' ? '#15803d' : '#1d4ed8';
  return (
    <View style={{ backgroundColor: bg, borderRadius: 99, paddingHorizontal: 8, paddingVertical: 3 }}>
      <Text style={{ color: txt, fontSize: 10, fontWeight: '700' }}>{label}</Text>
    </View>
  );
}
