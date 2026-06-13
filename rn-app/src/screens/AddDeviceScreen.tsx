import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }
export function AddDeviceScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
        <TouchableOpacity onPress={() => onNavigate('welcome')} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: theme.card, borderWidth: 1, borderColor: theme.line, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="back" size={20} color={theme.text} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 }}>
        <Text style={{ fontSize: 22, fontWeight: '800', color: theme.text, marginBottom: 8 }}>Add Your Device</Text>
        <Text style={{ fontSize: 14, color: theme.muted, textAlign: 'center', lineHeight: 20, marginBottom: 48 }}>Put your earbuds in pairing mode,{'\n'}then start searching.</Text>
        <View style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: theme.subBg, alignItems: 'center', justifyContent: 'center', marginBottom: 56 }}>
          <Icon name="headphones" size={48} color={theme.blue} />
        </View>
        <TouchableOpacity onPress={() => onNavigate('searching')} style={{ width: '100%', backgroundColor: theme.blue, borderRadius: 16, paddingVertical: 16, alignItems: 'center', marginBottom: 10 }}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>Start Searching</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('pairing-help')} style={{ width: '100%', paddingVertical: 14, alignItems: 'center' }}>
          <Text style={{ color: theme.blue, fontSize: 15, fontWeight: '600' }}>How to pair?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
