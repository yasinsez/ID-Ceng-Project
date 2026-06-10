import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavBar } from '../components/NavBar';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';
import type { ComponentProps } from 'react';

interface Props { onNavigate: (s: Screen) => void; }
type IconName = ComponentProps<typeof Icon>['name'];
const TIPS: { icon: IconName; title: string; desc: string }[] = [
  { icon: 'link',       title: 'Pairing help',    desc: 'Open the charging case, keep the earbuds nearby, and tap Add Device from the Devices page.' },
  { icon: 'headphones', title: 'Gesture controls', desc: 'Go to Settings → Earbud Controls to assign a different action to each tap type.' },
  { icon: 'sliders',    title: 'Sound tips',       desc: 'Use My Earbuds for ANC / Off / Transparency and Sound for presets or the custom EQ.' },
  { icon: 'battery',    title: 'Battery & power',  desc: 'Use Automatic Power-Off to save battery when the earbuds are idle for a long time.' },
];

export function HelpSupportScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingVertical: 16 }}>
        <TouchableOpacity onPress={() => onNavigate('profile')} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: theme.card, borderWidth: 1, borderColor: theme.line, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="back" size={20} color={theme.text} />
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 22, fontWeight: '800', color: theme.text }}>Help & Support</Text>
          <Text style={{ fontSize: 13, color: theme.muted, marginTop: 2 }}>Quick help for pairing, controls, and sound settings.</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
        {TIPS.map(tip => (
          <View key={tip.title} style={{ backgroundColor: theme.card, borderRadius: 14, padding: 16, flexDirection: 'row', gap: 14, borderWidth: 1, borderColor: theme.line, marginBottom: 10 }}>
            <View style={{ width: 36, height: 36, borderRadius: 9, backgroundColor: theme.subBg, alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={tip.icon} size={18} color={theme.blue} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: '700', color: theme.text, marginBottom: 4 }}>{tip.title}</Text>
              <Text style={{ fontSize: 13, color: theme.muted, lineHeight: 18 }}>{tip.desc}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <NavBar active="profile" onNavigate={onNavigate} />
    </View>
  );
}
