import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavBar } from '../components/NavBar';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }
type TabKey = 'Day' | 'Week' | 'Month' | 'Year';
const DATA = {
  Day:   { total: '3h 25m',   trend: '↑ +8% from yesterday',   trendUp: true,  bars: [{label:'Morning',h:48},{label:'Afternoon',h:72,active:true},{label:'Evening',h:64}], genres: [{name:'Pop',pct:42},{name:'Electronic',pct:30},{name:'Podcast',pct:18}] },
  Week:  { total: '18h 42m',  trend: '↑ +12% from last week',  trendUp: true,  bars: [{label:'Mon',h:24},{label:'Tue',h:28},{label:'Wed',h:30},{label:'Thu',h:46},{label:'Fri',h:44},{label:'Sat',h:60,active:true},{label:'Sun',h:24}], genres: [{name:'Pop',pct:35},{name:'Electronic',pct:28},{name:'Hip-Hop',pct:20},{name:'Jazz',pct:17}] },
  Month: { total: '74h 10m',  trend: '↓ -3% from last month',  trendUp: false, bars: [{label:'W1',h:38},{label:'W2',h:54},{label:'W3',h:72,active:true},{label:'W4',h:48}], genres: [{name:'Electronic',pct:44},{name:'Pop',pct:31},{name:'Jazz',pct:15}] },
  Year:  { total: '846h 20m', trend: '↑ +21% from last year',  trendUp: true,  bars: [{label:'Jan',h:48},{label:'Feb',h:62},{label:'Mar',h:70},{label:'Apr',h:82,active:true},{label:'May',h:74},{label:'Jun',h:66},{label:'Jul',h:58},{label:'Aug',h:76},{label:'Sep',h:68},{label:'Oct',h:72},{label:'Nov',h:60},{label:'Dec',h:54}], genres: [{name:'Electronic',pct:39},{name:'Pop',pct:33},{name:'Hip-Hop',pct:19}] },
} satisfies Record<TabKey, { total: string; trend: string; trendUp: boolean; bars: { label: string; h: number; active?: boolean }[]; genres: { name: string; pct: number }[] }>;

const TABS: TabKey[] = ['Day', 'Week', 'Month', 'Year'];

export function StatsScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  const [tab, setTab] = useState<TabKey>('Week');
  const d = DATA[tab];
  const maxH = Math.max(...d.bars.map(b => b.h));
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingVertical: 16 }}>
        <TouchableOpacity onPress={() => onNavigate('profile')} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: theme.card, borderWidth: 1, borderColor: theme.line, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="back" size={20} color={theme.text} />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: '800', color: theme.text }}>Statistics</Text>
      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: 16, backgroundColor: theme.segBg, borderRadius: 12, padding: 4, marginBottom: 16 }}>
        {TABS.map(t => (
          <TouchableOpacity key={t} onPress={() => setTab(t)} style={{ flex: 1, paddingVertical: 8, borderRadius: 9, alignItems: 'center', backgroundColor: tab === t ? theme.card : 'transparent' }}>
            <Text style={{ fontSize: 13, fontWeight: '600', color: tab === t ? theme.text : theme.muted }}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: theme.card, borderRadius: 16, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: theme.line }}>
          <Text style={{ fontSize: 13, color: theme.muted, fontWeight: '600', marginBottom: 4 }}>Total Listening Time</Text>
          <Text style={{ fontSize: 28, fontWeight: '800', color: theme.text }}>{d.total}</Text>
          <Text style={{ fontSize: 12, color: d.trendUp ? theme.green : theme.danger, marginTop: 2 }}>{d.trend}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: tab === 'Year' ? 3 : 6, marginTop: 20, height: 64 }}>
            {d.bars.map(bar => (
              <View key={bar.label} style={{ flex: 1, alignItems: 'center', gap: 4 }}>
                <View style={{ width: '100%', height: Math.max(4, (bar.h / maxH) * 52), borderRadius: 4, backgroundColor: bar.active ? theme.blue : theme.subBg }} />
                <Text style={{ fontSize: tab === 'Year' ? 8 : 10, color: theme.muted }}>{bar.label}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={{ backgroundColor: theme.card, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: theme.line, marginBottom: 20 }}>
          <Text style={{ fontSize: 15, fontWeight: '700', color: theme.text, marginBottom: 14 }}>Top Genres</Text>
          {d.genres.map((g, i) => (
            <View key={g.name} style={{ marginBottom: i < d.genres.length - 1 ? 12 : 0 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                <Text style={{ fontSize: 13, fontWeight: '600', color: theme.text }}>{g.name}</Text>
                <Text style={{ fontSize: 13, color: theme.muted }}>{g.pct}%</Text>
              </View>
              <View style={{ height: 6, backgroundColor: theme.subBg, borderRadius: 3 }}>
                <View style={{ height: 6, width: `${g.pct}%`, backgroundColor: theme.blue, borderRadius: 3 }} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <NavBar active="profile" onNavigate={onNavigate} />
    </View>
  );
}
