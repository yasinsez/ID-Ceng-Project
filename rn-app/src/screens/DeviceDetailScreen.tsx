import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavBar } from '../components/NavBar';
import { BatteryPill } from '../components/BatteryPill';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }
const INFO = [['Model','SoundWave Buds'],['Firmware','v2.1.4'],['Serial Number','SW-2024-001'],['Bluetooth','5.3'],['Codec','AAC / SBC'],['Driver Size','10mm Dynamic'],['Frequency','20Hz – 20kHz'],['IPX Rating','IPX4']];

export function DeviceDetailScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingVertical: 16 }}>
        <TouchableOpacity onPress={() => onNavigate('devices')} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: theme.card, borderWidth: 1, borderColor: theme.line, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="back" size={20} color={theme.text} />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: '800', color: theme.text }}>Device Details</Text>
      </View>
      <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: theme.card, borderRadius: 16, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: theme.line, flexDirection: 'row', alignItems: 'center', gap: 14 }}>
          <View style={{ width: 56, height: 56, borderRadius: 12, backgroundColor: theme.subBg, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="headphones" size={28} color={theme.blue} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: '800', color: theme.text, marginBottom: 4 }}>SoundWave Buds</Text>
            <View style={{ flexDirection: 'row', gap: 6, flexWrap: 'wrap' }}>
              <BatteryPill label="L 100%" color="green" /><BatteryPill label="R 100%" color="green" /><BatteryPill label="Case 80%" color="blue" />
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: theme.card, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: theme.line, marginBottom: 12 }}>
          {INFO.map(([label, value], i) => (
            <View key={label} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 13, borderBottomWidth: i < INFO.length - 1 ? 1 : 0, borderBottomColor: theme.line }}>
              <Text style={{ fontSize: 14, color: theme.muted }}>{label}</Text>
              <Text style={{ fontSize: 14, fontWeight: '600', color: theme.text }}>{value}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity onPress={() => onNavigate('earbud-left')} style={{ backgroundColor: theme.card, borderRadius: 14, paddingVertical: 15, alignItems: 'center', borderWidth: 1, borderColor: theme.line, marginBottom: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: theme.blue }}>Earbud Controls</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('remove-device')} style={{ backgroundColor: theme.card, borderRadius: 14, paddingVertical: 15, alignItems: 'center', borderWidth: 1, borderColor: theme.dangerBg, marginBottom: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: theme.danger }}>Remove Device</Text>
        </TouchableOpacity>
      </ScrollView>
      <NavBar active="devices" onNavigate={onNavigate} />
    </View>
  );
}
