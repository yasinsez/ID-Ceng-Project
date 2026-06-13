import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { NavBar } from '../components/NavBar';
import { BatteryPill } from '../components/BatteryPill';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }
const devices = [
  { name: 'Vybex Buds',      sub: 'Connected',                 connected: true,  bats: [['L 100%','green'],['R 100%','green'],['Case 80%','blue']] as const },
  { name: 'Vybex Buds Pro',  sub: 'Last connected 3 days ago', connected: false, bats: [['L 90%','green'],['R 90%','green'],['Case 70%','blue']] as const },
  { name: 'Vybex Buds Lite', sub: 'Last connected 1 week ago', connected: false, bats: [['L 80%','green'],['R 80%','green'],['Case 60%','blue']] as const },
];

export function DevicesScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ alignItems: 'center', paddingTop: 16, paddingBottom: 8 }}>
        <Image source={require('../../assets/vestel-logo.png')} style={{ width: 80, height: 22, resizeMode: 'contain' }} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingBottom: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: '800', color: theme.text }}>My Devices</Text>
        <TouchableOpacity onPress={() => onNavigate('add-device')} style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: theme.blue, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="plus" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1, paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
        {devices.map(dev => (
          <TouchableOpacity key={dev.name} onPress={() => onNavigate('device-detail')} style={{ backgroundColor: theme.card, borderRadius: 14, padding: 14, flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 10, borderWidth: 1, borderColor: theme.line }}>
            <View style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: theme.subBg, alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="headphones" size={22} color={theme.blue} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: '700', color: theme.text, marginBottom: 3 }}>{dev.name}</Text>
              <Text style={{ fontSize: 12, color: dev.connected ? theme.green : theme.muted, marginBottom: 6, fontWeight: dev.connected ? '600' : '400' }}>{dev.sub}</Text>
              <View style={{ flexDirection: 'row', gap: 5, flexWrap: 'wrap' }}>
                {dev.bats.map(([label, color]) => <BatteryPill key={label} label={label} color={color} />)}
              </View>
            </View>
            <Icon name="chevron-right" size={18} color={theme.muted} />
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={() => onNavigate('add-device')} style={{ backgroundColor: theme.card, borderRadius: 14, paddingVertical: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16, borderWidth: 1.5, borderStyle: 'dashed', borderColor: theme.blue }}>
          <Icon name="plus" size={18} color={theme.blue} />
          <Text style={{ fontSize: 14, fontWeight: '600', color: theme.blue }}>Add New Device</Text>
        </TouchableOpacity>
      </ScrollView>
      <NavBar active="devices" onNavigate={onNavigate} />
    </View>
  );
}
