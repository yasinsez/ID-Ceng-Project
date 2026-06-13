import { View, Text, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { NavBar } from '../components/NavBar';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';
import type { ComponentProps } from 'react';

interface Props { onNavigate: (s: Screen) => void; }
type IconName = ComponentProps<typeof Icon>['name'];

function Item({ icon, title, sub, onPress, isLast }: { icon: IconName; title: string; sub: string; onPress?: () => void; isLast?: boolean }) {
  const { theme } = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: isLast ? 0 : 1, borderBottomColor: theme.line }}>
      <View style={{ width: 36, height: 36, borderRadius: 9, backgroundColor: theme.subBg, alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={icon} size={18} color={theme.blue} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 15, fontWeight: '600', color: theme.text }}>{title}</Text>
        <Text style={{ fontSize: 12, color: theme.muted, marginTop: 1 }}>{sub}</Text>
      </View>
      <Icon name="chevron-right" size={18} color={theme.muted} />
    </TouchableOpacity>
  );
}

export function SettingsScreen({ onNavigate }: Props) {
  const { theme, isDark, toggleDark } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: '800', color: theme.text }}>Settings</Text>
        <Text style={{ fontSize: 13, color: theme.muted, marginTop: 2 }}>Manage device and app preferences.</Text>
      </View>
      <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: theme.card, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: theme.line, marginBottom: 12 }}>
          <Item icon="music"      title="Sound"            sub="Presets and equalizer"    onPress={() => onNavigate('sound')} />
          <Item icon="headphones" title="Earbud Controls"  sub="Choose gesture actions"   onPress={() => onNavigate('earbud-left')} />
          <Item icon="power"      title="Auto Power-Off"   sub="Choose idle timeout"      onPress={() => onNavigate('auto-power-off')} />
          <Item icon="info"       title="About"            sub="Version and product info"  onPress={() => onNavigate('about')} isLast />
        </View>

        {/* Dark mode toggle */}
        <View style={{ backgroundColor: theme.card, borderRadius: 16, borderWidth: 1, borderColor: theme.line }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 16, paddingVertical: 14 }}>
            <View style={{ width: 36, height: 36, borderRadius: 9, backgroundColor: theme.subBg, alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="power" size={18} color={theme.blue} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: '600', color: theme.text }}>Dark Mode</Text>
              <Text style={{ fontSize: 12, color: theme.muted, marginTop: 1 }}>{isDark ? 'Dark theme active' : 'Light theme active'}</Text>
            </View>
            <Switch value={isDark} onValueChange={toggleDark} trackColor={{ false: theme.line, true: theme.blue }} thumbColor="#fff" />
          </View>
        </View>
      </ScrollView>
      <NavBar active="settings" onNavigate={onNavigate} />
    </View>
  );
}
