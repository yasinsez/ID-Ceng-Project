import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from './Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { active: string; onNavigate: (s: Screen) => void; }

const tabs = [
  { id: 'home'     as Screen, label: 'Home',     icon: 'headphones' as const },
  { id: 'sound'    as Screen, label: 'Sound',    icon: 'music'      as const },
  { id: 'devices'  as Screen, label: 'Devices',  icon: 'device'     as const },
  { id: 'profile'  as Screen, label: 'Profile',  icon: 'profile'    as const },
  { id: 'settings' as Screen, label: 'Settings', icon: 'gear'       as const },
];

export function NavBar({ active, onNavigate }: Props) {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  return (
    <View style={{ flexDirection: 'row', backgroundColor: theme.card, borderTopWidth: 1, borderTopColor: theme.line, paddingBottom: insets.bottom + 6, paddingTop: 8 }}>
      {tabs.map((t) => {
        const isActive = active === t.id;
        return (
          <TouchableOpacity key={t.id} onPress={() => onNavigate(t.id)} style={{ flex: 1, alignItems: 'center', gap: 3 }}>
            <Icon name={t.icon} size={22} color={isActive ? theme.blue : theme.muted} />
            <Text style={{ fontSize: 10, fontWeight: '600', color: isActive ? theme.blue : theme.muted }}>{t.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
