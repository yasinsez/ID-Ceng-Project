import { View, Text, TouchableOpacity } from 'react-native';
import { NavBar } from '../components/NavBar';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }
export function AboutScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingVertical: 16 }}>
        <TouchableOpacity onPress={() => onNavigate('settings')} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: theme.card, borderWidth: 1, borderColor: theme.line, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="back" size={20} color={theme.text} />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: '800', color: theme.text }}>About</Text>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <View style={{ backgroundColor: theme.card, borderRadius: 16, padding: 24, alignItems: 'center', borderWidth: 1, borderColor: theme.line, marginBottom: 12 }}>
          <View style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: theme.subBg, alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
            <Icon name="headphones" size={28} color={theme.blue} />
          </View>
          <Text style={{ fontSize: 18, fontWeight: '800', color: theme.text, marginBottom: 6 }}>SoundWave Buds</Text>
          <Text style={{ fontSize: 13, color: theme.muted, textAlign: 'center', lineHeight: 18 }}>Mobile companion app for earbuds, smartwatch control and sound personalization.</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          {[['Brand','Vestel'],['Version','1.0'],['Status','Demo']].map(([label, value]) => (
            <View key={label} style={{ flex: 1, backgroundColor: theme.card, borderRadius: 14, padding: 14, alignItems: 'center', borderWidth: 1, borderColor: theme.line }}>
              <Text style={{ fontSize: 11, color: theme.muted, marginBottom: 4 }}>{label}</Text>
              <Text style={{ fontSize: 14, fontWeight: '700', color: theme.text }}>{value}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={{ flex: 1 }} />
      <NavBar active="settings" onNavigate={onNavigate} />
    </View>
  );
}
