import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }
export function RemoveDeviceScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 }}>
      <View style={{ backgroundColor: theme.card, borderRadius: 24, padding: 28, width: '100%', alignItems: 'center', borderWidth: 1, borderColor: theme.line }}>
        <View style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: theme.dangerBg, alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
          <Icon name="trash" size={26} color={theme.danger} />
        </View>
        <Text style={{ fontSize: 20, fontWeight: '800', color: theme.text, marginBottom: 6 }}>Remove device?</Text>
        <Text style={{ fontSize: 13, color: theme.muted, textAlign: 'center', marginBottom: 24 }}>Vybex Buds will be removed from My Devices.</Text>
        <TouchableOpacity onPress={() => onNavigate('devices')} style={{ backgroundColor: theme.danger, borderRadius: 16, paddingVertical: 15, width: '100%', alignItems: 'center', marginBottom: 10 }}>
          <Text style={{ color: '#fff', fontWeight: '700', fontSize: 15 }}>Remove Device</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('device-detail')} style={{ backgroundColor: theme.bg, borderRadius: 16, paddingVertical: 15, width: '100%', alignItems: 'center', borderWidth: 1, borderColor: theme.line }}>
          <Text style={{ color: theme.text, fontWeight: '600', fontSize: 15 }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
