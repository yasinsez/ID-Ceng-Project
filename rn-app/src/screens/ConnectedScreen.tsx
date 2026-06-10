import { View, Text, Image, TouchableOpacity } from 'react-native';
import { BatteryPill } from '../components/BatteryPill';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }
export function ConnectedScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 }}>
      <Image source={require('../../assets/vestel-logo.png')} style={{ width: 80, height: 22, resizeMode: 'contain', marginBottom: 32, tintColor: theme.muted }} />
      <View style={{ width: 90, height: 90, borderRadius: 45, borderWidth: 3, borderColor: theme.green, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <Icon name="check" size={44} color={theme.green} />
      </View>
      <Text style={{ fontSize: 22, fontWeight: '800', color: theme.text, marginBottom: 6 }}>Connected!</Text>
      <Text style={{ fontSize: 14, color: theme.muted, marginBottom: 32 }}>SoundWave Buds are ready.</Text>
      <View style={{ backgroundColor: theme.card, borderRadius: 16, padding: 16, width: '100%', borderWidth: 1, borderColor: theme.line, flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 32 }}>
        <View style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: theme.subBg, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="headphones" size={22} color={theme.blue} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: '700', color: theme.text, marginBottom: 6 }}>SoundWave Buds</Text>
          <View style={{ flexDirection: 'row', gap: 6 }}>
            <BatteryPill label="L 100%" color="green" />
            <BatteryPill label="R 100%" color="green" />
            <BatteryPill label="Case 80%" color="blue" />
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => onNavigate('home')} style={{ width: '100%', backgroundColor: theme.blue, borderRadius: 16, paddingVertical: 16, alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
