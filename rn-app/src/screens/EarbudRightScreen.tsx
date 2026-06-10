import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavBar } from '../components/NavBar';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }
const ACTIONS = ['Play/Pause', 'Next Track', 'Prev Track', 'Vol Up', 'Vol Down', 'Voice Assistant', 'ANC Toggle'];
const gestures = [{ label: 'Single Tap', default: 'Play/Pause' }, { label: 'Double Tap', default: 'Vol Up' }, { label: 'Long Press', default: 'Voice Assistant' }];

export function EarbudRightScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  const [selected, setSelected] = useState(gestures.map(g => g.default));
  const [open, setOpen] = useState<number | null>(null);
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingVertical: 16 }}>
        <TouchableOpacity onPress={() => onNavigate('settings')} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: theme.card, borderWidth: 1, borderColor: theme.line, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="back" size={20} color={theme.text} />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: '800', color: theme.text }}>Earbud Controls</Text>
      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: 16, backgroundColor: theme.segBg, borderRadius: 12, padding: 4, marginBottom: 16 }}>
        <TouchableOpacity onPress={() => onNavigate('earbud-left')} style={{ flex: 1, paddingVertical: 9, borderRadius: 9, alignItems: 'center' }}>
          <Text style={{ fontSize: 13, fontWeight: '600', color: theme.muted }}>Left</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, paddingVertical: 9, borderRadius: 9, alignItems: 'center', backgroundColor: theme.card }}>
          <Text style={{ fontSize: 13, fontWeight: '700', color: theme.text }}>Right</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: theme.card, borderRadius: 16, overflow: 'visible', borderWidth: 1, borderColor: theme.line, marginBottom: 20 }}>
          {gestures.map((g, i) => (
            <View key={g.label} style={{ borderBottomWidth: i < gestures.length - 1 ? 1 : 0, borderBottomColor: theme.line }}>
              <TouchableOpacity onPress={() => setOpen(open === i ? null : i)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 14 }}>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: '600', color: theme.text }}>{g.label}</Text>
                  <Text style={{ fontSize: 12, color: theme.blue, marginTop: 2 }}>{selected[i]}</Text>
                </View>
                <Icon name={open === i ? 'back' : 'chevron-right'} size={18} color={theme.muted} />
              </TouchableOpacity>
              {open === i && (
                <View style={{ backgroundColor: theme.bg, borderTopWidth: 1, borderTopColor: theme.line }}>
                  {ACTIONS.map(a => (
                    <TouchableOpacity key={a} onPress={() => { const n = [...selected]; n[i] = a; setSelected(n); setOpen(null); }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 12 }}>
                      <Text style={{ fontSize: 14, color: theme.text }}>{a}</Text>
                      {selected[i] === a && <Icon name="check" size={16} color={theme.blue} />}
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
      <NavBar active="settings" onNavigate={onNavigate} />
    </View>
  );
}
