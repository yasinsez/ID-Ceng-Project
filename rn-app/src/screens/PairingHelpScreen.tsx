import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }
const STEPS = [
  { n: 1, title: 'Open the charging case',     desc: 'Keep your earbuds inside the open case near your phone.' },
  { n: 2, title: 'Hold the pairing button',    desc: 'Press and hold the button on the case for 3 seconds until the LED flashes.' },
  { n: 3, title: 'Start searching in the app', desc: 'Tap "Start Searching" and select your device from the list.' },
];

export function PairingHelpScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingVertical: 16 }}>
        <TouchableOpacity onPress={() => onNavigate('add-device')} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: theme.card, borderWidth: 1, borderColor: theme.line, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="back" size={20} color={theme.text} />
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 22, fontWeight: '800', color: theme.text }}>How to Pair</Text>
          <Text style={{ fontSize: 13, color: theme.muted, marginTop: 2 }}>Follow these steps to connect your earbuds.</Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 16, gap: 10 }}>
        {STEPS.map(s => (
          <View key={s.n} style={{ backgroundColor: theme.card, borderRadius: 14, padding: 16, flexDirection: 'row', gap: 14, borderWidth: 1, borderColor: theme.line }}>
            <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: theme.blue, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#fff', fontWeight: '800', fontSize: 14 }}>{s.n}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: '700', color: theme.text, marginBottom: 4 }}>{s.title}</Text>
              <Text style={{ fontSize: 13, color: theme.muted, lineHeight: 18 }}>{s.desc}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={{ flex: 1 }} />
      <TouchableOpacity onPress={() => onNavigate('searching')} style={{ marginHorizontal: 16, marginBottom: 32, backgroundColor: theme.blue, borderRadius: 16, paddingVertical: 16, alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>Start Searching</Text>
      </TouchableOpacity>
    </View>
  );
}
