import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { NavBar } from '../components/NavBar';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen, Preset } from '../types';

interface Props { onNavigate: (s: Screen) => void; preset: Preset; onPresetChange: (p: Preset) => void; isPlaying: boolean; onPlayPauseToggle: () => void; }
const PRESETS: { id: Preset; label: string }[] = [
  { id: 'default', label: 'Default' }, { id: 'bass', label: 'Bass Boost' },
  { id: 'treble', label: 'Treble Boost' }, { id: 'vocal', label: 'Vocal' },
  { id: 'clear', label: 'Clear' }, { id: 'custom', label: 'Custom' },
];

export function SoundScreen({ onNavigate, preset, onPresetChange, isPlaying, onPlayPauseToggle }: Props) {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ alignItems: 'center', paddingTop: 16, paddingBottom: 8 }}>
        <Image source={require('../../assets/vestel-logo.png')} style={{ width: 80, height: 22, resizeMode: 'contain' }} />
      </View>
      <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: '800', color: theme.text }}>Sound</Text>
      </View>
      <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
          {PRESETS.map(p => (
            <TouchableOpacity key={p.id} onPress={() => onPresetChange(p.id)}
              style={{ width: '47%', paddingVertical: 18, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: preset === p.id ? theme.blue : theme.card, borderWidth: 1, borderColor: preset === p.id ? theme.blue : theme.line }}>
              <Text style={{ fontSize: 14, fontWeight: '700', color: preset === p.id ? '#fff' : theme.text }}>{p.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity onPress={() => onNavigate('eq')} style={{ backgroundColor: theme.card, borderRadius: 14, paddingHorizontal: 16, paddingVertical: 14, flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 1, borderColor: theme.line, marginBottom: 12 }}>
          <Icon name="sliders" size={20} color={theme.blue} />
          <Text style={{ flex: 1, fontSize: 15, fontWeight: '600', color: theme.text }}>Custom Equalizer</Text>
          <Icon name="chevron-right" size={18} color={theme.muted} />
        </TouchableOpacity>
        <View style={{ backgroundColor: theme.card, borderRadius: 14, padding: 14, borderWidth: 1, borderColor: theme.line, marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <View style={{ width: 42, height: 42, borderRadius: 8, backgroundColor: theme.subBg, alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="music" size={20} color={theme.blue} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, fontWeight: '700', color: theme.text }}>Blinding Lights</Text>
              <Text style={{ fontSize: 12, color: theme.muted }}>The Weeknd</Text>
            </View>
            <TouchableOpacity onPress={onPlayPauseToggle} style={{ width: 38, height: 38, borderRadius: 19, backgroundColor: theme.blue, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 16 }}>{isPlaying ? '⏸' : '▶'}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 4, backgroundColor: theme.line, borderRadius: 2 }}>
            <View style={{ height: 4, width: '40%', backgroundColor: theme.blue, borderRadius: 2 }} />
          </View>
        </View>
      </ScrollView>
      <NavBar active="sound" onNavigate={onNavigate} />
    </View>
  );
}
