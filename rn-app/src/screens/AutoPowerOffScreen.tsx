import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavBar } from '../components/NavBar';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }
const OPTIONS = ['5 min', '30 min', 'Never'];

export function AutoPowerOffScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  const [selected, setSelected] = useState('30 min');
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, height: 36, zIndex: 1, paddingHorizontal: 16 }}>
        <TouchableOpacity onPress={() => onNavigate('settings')} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: theme.card, borderWidth: 1, borderColor: theme.line, alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
          <Icon name="back" size={20} color={theme.text} />
        </TouchableOpacity>
        <View style={{ position: 'absolute', left: 0, right: 0, alignItems: 'center', justifyContent: 'center', zIndex: 0 }}>
          <Image source={require('../../assets/vestel-logo.png')} style={{ width: 80, height: 22, resizeMode: 'contain' }} />
        </View>
      </View>
      <View style={{ paddingHorizontal: 16, marginTop: 16, marginBottom: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: '800', color: theme.text }}>Auto Power-Off</Text>
        <Text style={{ fontSize: 13, color: theme.muted, marginTop: 2 }}>Earbuds will turn off after idle time.</Text>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        {OPTIONS.map(opt => (
          <TouchableOpacity key={opt} onPress={() => setSelected(opt)} style={{ backgroundColor: theme.card, borderRadius: 14, paddingHorizontal: 16, paddingVertical: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: selected === opt ? theme.blue : theme.line, marginBottom: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: '600', color: theme.text }}>{opt}</Text>
            {selected === opt && <Icon name="check" size={20} color={theme.blue} />}
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ flex: 1 }} />
      <NavBar active="settings" onNavigate={onNavigate} />
    </View>
  );
}
