import { View, Text, TouchableOpacity } from 'react-native';
import { NavBar } from '../components/NavBar';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }
const STEPS = [
  { n: 1, title: 'Single tap',  desc: 'Play or pause your audio.' },
  { n: 2, title: 'Double tap', desc: 'Skip to the next track.' },
  { n: 3, title: 'Long press', desc: 'Toggle Noise Cancellation on or off.' },
];

export function UserGuideScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingVertical: 16 }}>
        <TouchableOpacity onPress={() => onNavigate('devices')} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: theme.card, borderWidth: 1, borderColor: theme.line, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="back" size={20} color={theme.text} />
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 22, fontWeight: '800', color: theme.text }}>User Guide</Text>
          <Text style={{ fontSize: 13, color: theme.muted, marginTop: 2 }}>Default gesture controls.</Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 16, gap: 10 }}>
        {STEPS.map(s => (
          <View key={s.n} style={{ backgroundColor: theme.card, borderRadius: 14, padding: 16, flexDirection: 'row', gap: 14, borderWidth: 1, borderColor: theme.line }}>
            <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: theme.blue, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#fff', fontWeight: '800', fontSize: 14 }}>{s.n}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={{ fontSize: 15, fontWeight: '700', color: theme.text, marginBottom: 2 }}>{s.title}</Text>
              <Text style={{ fontSize: 13, color: theme.muted }}>{s.desc}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={{ flex: 1 }} />
      <NavBar active="devices" onNavigate={onNavigate} />
    </View>
  );
}
