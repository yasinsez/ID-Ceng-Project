import { View, Text, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { NavBar } from '../components/NavBar';
import { BatteryPill } from '../components/BatteryPill';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen, AmbientMode } from '../types';

interface Props {
  onNavigate: (s: Screen) => void;
  volume: number; onVolumeChange: (v: number) => void;
  ambient: AmbientMode; onAmbientChange: (a: AmbientMode) => void;
  isPlaying: boolean; onPlayPauseToggle: () => void;
}

export function HomeScreen({ onNavigate, volume, onVolumeChange, ambient, onAmbientChange }: Props) {
  const { theme } = useTheme();
  const ambientLabel = ambient === 'nc' ? 'Noise Cancellation On' : ambient === 'transparency' ? 'Transparency Mode On' : 'Off';
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ alignItems: 'center', paddingTop: 16, paddingBottom: 8 }}>
        <Image source={require('../../assets/vestel-logo.png')} style={{ width: 80, height: 22, resizeMode: 'contain' }} />
      </View>
      <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: '800', color: theme.text }}>My Earbuds</Text>
      </View>
      <View style={{ marginHorizontal: 16, backgroundColor: theme.card, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: theme.line, flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <View style={{ width: 48, height: 48, borderRadius: 10, backgroundColor: theme.subBg, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="headphones" size={24} color={theme.blue} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: '700', color: theme.text, marginBottom: 2 }}>SoundWave Buds</Text>
          <Text style={{ fontSize: 12, color: theme.green, fontWeight: '600', marginBottom: 6 }}>Connected</Text>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <BatteryPill label="L 100%" color="green" />
            <BatteryPill label="R 100%" color="green" />
            <BatteryPill label="Case 80%" color="blue" />
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 16, backgroundColor: theme.card, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: theme.line, marginBottom: 12 }}>
        <Text style={{ fontSize: 14, fontWeight: '700', color: theme.text, marginBottom: 12 }}>Ambient Sound</Text>
        <View style={{ flexDirection: 'row', gap: 8, marginBottom: 10 }}>
          {(['nc', 'off', 'transparency'] as AmbientMode[]).map(mode => (
            <TouchableOpacity key={mode} onPress={() => onAmbientChange(mode)}
              style={{ flex: 1, paddingVertical: 10, borderRadius: 10, alignItems: 'center', backgroundColor: ambient === mode ? theme.blue : theme.bg, borderWidth: 1, borderColor: ambient === mode ? theme.blue : theme.line }}>
              <Icon name={mode === 'nc' ? 'headphones' : mode === 'off' ? 'volume' : 'wave'} size={18} color={ambient === mode ? '#fff' : theme.muted} />
              <Text style={{ fontSize: 10, fontWeight: '600', color: ambient === mode ? '#fff' : theme.muted, marginTop: 4, textAlign: 'center' }}>
                {mode === 'nc' ? 'Noise\nCancel' : mode === 'off' ? 'Off' : 'Transparen\ncy'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={{ fontSize: 12, color: theme.muted }}>{ambientLabel}</Text>
      </View>
      <View style={{ marginHorizontal: 16, backgroundColor: theme.card, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: theme.line }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Icon name="volume" size={18} color={theme.text} />
            <Text style={{ fontSize: 14, fontWeight: '700', color: theme.text }}>Volume</Text>
          </View>
          <Text style={{ fontSize: 14, fontWeight: '700', color: theme.blue }}>{volume}%</Text>
        </View>
        <Slider minimumValue={0} maximumValue={100} value={volume} onValueChange={v => onVolumeChange(Math.round(v))} minimumTrackTintColor={theme.blue} maximumTrackTintColor={theme.line} thumbTintColor={theme.blue} />
      </View>
      <View style={{ flex: 1 }} />
      <NavBar active="home" onNavigate={onNavigate} />
    </View>
  );
}
