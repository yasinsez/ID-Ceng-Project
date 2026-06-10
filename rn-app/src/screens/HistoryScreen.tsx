import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavBar } from '../components/NavBar';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }
const HISTORY = [
  { day: 'Today', tracks: [{title:'Blinding Lights',artist:'The Weeknd',dur:'3:20'},{title:'Save Your Tears',artist:'The Weeknd',dur:'3:35'},{title:'Peaches',artist:'Justin Bieber',dur:'3:18'}] },
  { day: 'Yesterday', tracks: [{title:'Levitating',artist:'Dua Lipa',dur:'3:23'},{title:'Good 4 U',artist:'Olivia Rodrigo',dur:'2:58'},{title:'Stay',artist:'The Kid LAROI',dur:'2:21'}] },
  { day: 'Monday', tracks: [{title:'Montero',artist:'Lil Nas X',dur:'2:18'},{title:'Kiss Me More',artist:'Doja Cat',dur:'3:37'}] },
];

export function HistoryScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingVertical: 16 }}>
        <TouchableOpacity onPress={() => onNavigate('profile')} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: theme.card, borderWidth: 1, borderColor: theme.line, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="back" size={20} color={theme.text} />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: '800', color: theme.text }}>Listening History</Text>
      </View>
      <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
        {HISTORY.map(section => (
          <View key={section.day} style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 12, fontWeight: '700', color: theme.muted, letterSpacing: 1, marginBottom: 6, textTransform: 'uppercase' }}>{section.day}</Text>
            <View style={{ backgroundColor: theme.card, borderRadius: 14, overflow: 'hidden', borderWidth: 1, borderColor: theme.line }}>
              {section.tracks.map((t, i) => (
                <View key={t.title} style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 14, paddingVertical: 12, borderBottomWidth: i < section.tracks.length - 1 ? 1 : 0, borderBottomColor: theme.line }}>
                  <View style={{ width: 38, height: 38, borderRadius: 8, backgroundColor: theme.subBg, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="music" size={18} color={theme.blue} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: theme.text }}>{t.title}</Text>
                    <Text style={{ fontSize: 12, color: theme.muted, marginTop: 1 }}>{t.artist}</Text>
                  </View>
                  <Text style={{ fontSize: 12, color: theme.muted }}>{t.dur}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
      <NavBar active="profile" onNavigate={onNavigate} />
    </View>
  );
}
