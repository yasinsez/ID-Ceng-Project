import { useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import Svg, { Polyline, Circle, Line as SvgLine } from 'react-native-svg';
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

  const b = (eq.bass - 50);
  const m = (eq.mid - 50);
  const t = (eq.treble - 50);
  
  const pts = [
    { x: 40, y: 70 - b * 0.4 },
    { x: 75, y: 70 - b * 0.8 },
    { x: 110, y: 70 - b * 0.3 },
    { x: 155, y: 70 - m * 0.7 },
    { x: 200, y: 70 - m * 0.4 },
    { x: 245, y: 70 - t * 0.5 },
    { x: 285, y: 70 - t * 0.8 },
    { x: 320, y: 70 - t * 1.0 },
  ];
  const pointsStr = pts.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ marginTop: 12, paddingHorizontal: 16 }}>
        <TouchableOpacity onPress={goBack} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: theme.card, borderWidth: 1, borderColor: theme.line, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="back" size={20} color={theme.text} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingHorizontal: 16, marginTop: 16, marginBottom: 20 }}>
        <Text style={{ fontSize: 28, fontWeight: '800', color: theme.text }}>Custom Equalizer</Text>
        <TouchableOpacity onPress={() => onEQChange({ bass: 50, mid: 50, treble: 50 })}>
          <Text style={{ fontSize: 15, fontWeight: '600', color: theme.blue, marginBottom: 4 }}>Reset</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 16, marginBottom: 24 }}>
          <View style={{ backgroundColor: theme.card, borderRadius: 12, height: 120, borderWidth: 1, borderColor: theme.line, overflow: 'hidden' }}>
            <View style={{ position: 'absolute', left: 12, top: 12 }}>
              <Text style={{ fontSize: 12, fontWeight: '700', color: theme.muted }}>+6</Text>
            </View>
            <View style={{ position: 'absolute', left: 12, top: 62 }}>
              <Text style={{ fontSize: 12, fontWeight: '700', color: theme.muted }}>0</Text>
            </View>
            <Svg width="100%" height="120" viewBox="0 0 340 120">
              <SvgLine x1="40" y1="20" x2="330" y2="20" stroke={theme.line} strokeWidth="1" />
              <SvgLine x1="40" y1="70" x2="330" y2="70" stroke={theme.line} strokeWidth="1" />
              <Polyline points={pointsStr} fill="none" stroke={theme.blue} strokeWidth="2" />
              {pts.map((p, i) => (
                <Circle key={i} cx={p.x} cy={p.y} r="4" fill={theme.blue} />
              ))}
            </Svg>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, marginTop: 8 }}>
            {['31', '62', '125', '500', '2k', '4k', '8k', '16k'].map(freq => (
              <Text key={freq} style={{ fontSize: 11, color: theme.muted }}>{freq}</Text>
            ))}
          </View>
        </View>

        <View style={{ paddingHorizontal: 16 }}>
          {bands.map(({ key, label }) => (
            <View key={key} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}>
              <Text style={{ width: 60, fontSize: 16, fontWeight: '600', color: theme.muted }}>{label}</Text>
              <Slider style={{ flex: 1, marginHorizontal: 10 }} minimumValue={0} maximumValue={100} value={eq[key]}
                onValueChange={v => { if (!navigating.current) onEQChange({ ...eq, [key]: Math.round(v) }); }}
                minimumTrackTintColor={theme.blue} maximumTrackTintColor={theme.line} thumbTintColor={theme.blue} />
              <Text style={{ width: 30, fontSize: 18, fontWeight: '800', color: theme.text, textAlign: 'right' }}>{dbVal(eq[key])}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={{ paddingHorizontal: 16, paddingBottom: 40, paddingTop: 10 }}>
        <TouchableOpacity onPress={goBack} style={{ backgroundColor: theme.blue, borderRadius: 16, paddingVertical: 16, alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>Save as Preset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
