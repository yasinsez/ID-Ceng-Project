import { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen, EQValues } from '../types';

interface Props { onNavigate: (s: Screen) => void; eq: EQValues; onEQChange: (eq: EQValues) => void; }

export function EQScreen({ onNavigate, eq, onEQChange }: Props) {
  const { theme } = useTheme();
  const navigating = useRef(false);
  const bands: { key: keyof EQValues; label: string }[] = [
    { key: 'bass', label: 'Bass' }, { key: 'mid', label: 'Mid' }, { key: 'treble', label: 'Treble' },
  ];
  const dbVal = (v: number) => { const d = Math.round(((v - 50) / 50) * 6); return d > 0 ? `+${d}` : `${d}`; };
  const goBack = () => { navigating.current = true; onNavigate('sound'); };
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <TouchableOpacity onPress={goBack} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: theme.card, borderWidth: 1, borderColor: theme.line, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="back" size={20} color={theme.text} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: '800', color: theme.text }}>Custom Equalizer</Text>
        </View>
        <TouchableOpacity onPress={() => onEQChange({ bass: 50, mid: 50, treble: 50 })}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: theme.blue }}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 16, justifyContent: 'center' }}>
        <View style={{ backgroundColor: theme.card, borderRadius: 16, padding: 20, borderWidth: 1, borderColor: theme.line, gap: 20 }}>
          {bands.map(({ key, label }) => (
            <View key={key}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                <Text style={{ fontSize: 14, fontWeight: '700', color: theme.text }}>{label}</Text>
                <Text style={{ fontSize: 13, color: theme.muted }}>{dbVal(eq[key])} dB</Text>
              </View>
              <Slider minimumValue={0} maximumValue={100} value={eq[key]}
                onValueChange={v => { if (!navigating.current) onEQChange({ ...eq, [key]: Math.round(v) }); }}
                minimumTrackTintColor={theme.blue} maximumTrackTintColor={theme.line} thumbTintColor={theme.blue} />
            </View>
          ))}
        </View>
        <TouchableOpacity onPress={goBack} style={{ marginTop: 20, backgroundColor: theme.blue, borderRadius: 16, paddingVertical: 16, alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>Save as Preset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
