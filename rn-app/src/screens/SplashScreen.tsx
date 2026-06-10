import { useEffect, useRef } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }
const BARS = [18, 34, 48, 62, 44, 72, 40, 55, 70, 45, 60, 38, 50];

export function SplashScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  const anims = useRef(BARS.map(() => new Animated.Value(1))).current;
  const fadeIn = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeIn, { toValue: 1, duration: 600, useNativeDriver: true }).start();
    const loops = anims.map((anim, i) =>
      Animated.loop(Animated.sequence([
        Animated.delay(i * 60),
        Animated.timing(anim, { toValue: 0.2 + Math.random() * 0.8, duration: 400 + i * 20, useNativeDriver: false }),
        Animated.timing(anim, { toValue: 1, duration: 400 + i * 20, useNativeDriver: false }),
      ]))
    );
    loops.forEach(l => l.start());
    const timer = setTimeout(() => onNavigate('welcome'), 2400);
    return () => { clearTimeout(timer); loops.forEach(l => l.stop()); };
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View style={{ opacity: fadeIn, alignItems: 'center' }}>
        <View style={{ width: 72, height: 72, borderRadius: 20, backgroundColor: theme.blue, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <Icon name="wave" size={36} color="#fff" />
        </View>
        <Image source={require('../../assets/vestel-logo.png')} style={{ width: 80, height: 22, resizeMode: 'contain', marginBottom: 10, tintColor: theme.muted }} />
        <Text style={{ fontSize: 28, fontWeight: '800', color: theme.text, letterSpacing: -0.5 }}>SoundWave</Text>
        <Text style={{ fontSize: 14, color: theme.muted, marginTop: 4 }}>Sound. Your Way.</Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 3, marginTop: 40, height: 40 }}>
          {BARS.map((h, i) => (
            <Animated.View key={i} style={{ width: 5, borderRadius: 3, backgroundColor: theme.blue, height: anims[i].interpolate({ inputRange: [0, 1], outputRange: [2, h * 0.5] }), opacity: 0.4 + i * 0.04 }} />
          ))}
        </View>
      </Animated.View>
    </View>
  );
}
