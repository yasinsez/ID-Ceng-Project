import { useEffect, useRef } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { Icon } from '../components/Icon';
import { BatteryPill } from '../components/BatteryPill';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }
export function SearchingScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  const pulse1 = useRef(new Animated.Value(1)).current;
  const pulse2 = useRef(new Animated.Value(1)).current;
  const pulse3 = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    const makeLoop = (anim: Animated.Value, delay: number) =>
      Animated.loop(Animated.sequence([
        Animated.delay(delay),
        Animated.timing(anim, { toValue: 1.6, duration: 1200, useNativeDriver: true }),
        Animated.timing(anim, { toValue: 1, duration: 0, useNativeDriver: true }),
      ]));
    const ls = [makeLoop(pulse1, 0), makeLoop(pulse2, 400), makeLoop(pulse3, 800)];
    ls.forEach(l => l.start());
    return () => ls.forEach(l => l.stop());
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
        <TouchableOpacity onPress={() => onNavigate('add-device')} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: theme.card, borderWidth: 1, borderColor: theme.line, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="back" size={20} color={theme.text} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 }}>
        <Text style={{ fontSize: 22, fontWeight: '800', color: theme.text, marginBottom: 8 }}>Searching…</Text>
        <Text style={{ fontSize: 14, color: theme.muted, marginBottom: 48 }}>Looking for nearby devices</Text>
        <View style={{ width: 120, height: 120, alignItems: 'center', justifyContent: 'center', marginBottom: 48 }}>
          {[pulse1, pulse2, pulse3].map((p, i) => (
            <Animated.View key={i} style={{ position: 'absolute', width: 120, height: 120, borderRadius: 60, borderWidth: 2, borderColor: theme.blue, opacity: p.interpolate({ inputRange: [1, 1.6], outputRange: [0.5, 0] }), transform: [{ scale: p }] }} />
          ))}
          <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: theme.subBg, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="search" size={30} color={theme.blue} />
          </View>
        </View>
        <TouchableOpacity onPress={() => onNavigate('connected')} style={{ backgroundColor: theme.card, borderRadius: 16, padding: 16, width: '100%', borderWidth: 1, borderColor: theme.line, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <View style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: theme.subBg, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="headphones" size={22} color={theme.blue} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 15, fontWeight: '700', color: theme.text, marginBottom: 4 }}>Vybex Buds</Text>
            <View style={{ flexDirection: 'row', gap: 6 }}>
              <BatteryPill label="L 100%" color="green" />
              <BatteryPill label="R 100%" color="green" />
            </View>
          </View>
          <Icon name="link" size={18} color={theme.blue} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
