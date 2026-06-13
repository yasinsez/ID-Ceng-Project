import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavBar } from '../components/NavBar';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';
import type { ComponentProps } from 'react';

interface Props { onNavigate: (s: Screen) => void; }
type IconName = ComponentProps<typeof Icon>['name'];
const menu: { icon: IconName; title: string; sub: string; screen: Screen; danger?: boolean }[] = [
  { icon: 'device',   title: 'My Devices',       sub: 'Manage paired devices', screen: 'devices' },
  { icon: 'history',  title: 'Listening History', sub: 'Recent sessions',       screen: 'history' },
  { icon: 'stats',    title: 'Statistics',        sub: 'Weekly listening data', screen: 'stats' },
  { icon: 'info',     title: 'About',             sub: 'App information',       screen: 'about' },
  { icon: 'help',     title: 'Help & Support',    sub: 'FAQ and contact',       screen: 'help-support' },
  { icon: 'logout',   title: 'Log Out',           sub: 'Return to welcome',     screen: 'log-out', danger: true },
];

export function ProfileScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} contentContainerStyle={{ paddingTop: 16 }} showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: theme.card, borderRadius: 16, padding: 20, marginBottom: 12, borderWidth: 1, borderColor: theme.line, alignItems: 'center' }}>
          <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: theme.subBg, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
            <Icon name="profile" size={28} color={theme.blue} />
          </View>
          <Text style={{ fontSize: 18, fontWeight: '800', color: theme.text }}>Mehmet</Text>
          <Text style={{ fontSize: 13, color: theme.muted, marginTop: 2 }}>Sound profile synced</Text>
        </View>
        <View style={{ backgroundColor: theme.card, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: theme.line, marginBottom: 20 }}>
          {menu.map((item, i) => (
            <TouchableOpacity key={item.title} onPress={() => onNavigate(item.screen)} style={{ flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: i < menu.length - 1 ? 1 : 0, borderBottomColor: theme.line }}>
              <View style={{ width: 36, height: 36, borderRadius: 9, backgroundColor: item.danger ? theme.dangerBg : theme.subBg, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={item.icon} size={18} color={item.danger ? theme.danger : theme.blue} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 15, fontWeight: '600', color: item.danger ? theme.danger : theme.text }}>{item.title}</Text>
                <Text style={{ fontSize: 12, color: theme.muted, marginTop: 1 }}>{item.sub}</Text>
              </View>
              <Icon name="chevron-right" size={18} color={item.danger ? theme.danger : theme.muted} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <NavBar active="profile" onNavigate={onNavigate} />
    </View>
  );
}
