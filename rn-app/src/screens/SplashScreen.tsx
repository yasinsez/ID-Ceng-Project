import { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

const BARS = [40, 65, 45, 80, 55, 70, 40, 60, 75, 50, 85, 45, 65];

export function SplashScreen({ onNavigate }: Props) {
  const anims   = useRef(BARS.map(() => new Animated.Value(1))).current;
  const logoAnim = useRef(new Animated.Value(0)).current;
  const textAnim = useRef(new Animated.Value(0)).current;
  const btnAnim  = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Entrance animations
    Animated.timing(logoAnim, { toValue: 1, duration: 600, useNativeDriver: true }).start();
    setTimeout(() => Animated.timing(textAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start(), 300);
    setTimeout(() => Animated.timing(btnAnim,  { toValue: 1, duration: 500, useNativeDriver: true }).start(), 600);

    // Waveform: staggered looping pulse
    const loops = anims.map((anim, i) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(i * 70),
          Animated.timing(anim, { toValue: 0.25 + Math.random() * 0.75, duration: 380 + i * 25, useNativeDriver: false }),
          Animated.timing(anim, { toValue: 1,                           duration: 380 + i * 25, useNativeDriver: false }),
        ])
      )
    );
    loops.forEach((l) => l.start());

    // Auto-navigate after 2.8 s
    const timer = setTimeout(() => onNavigate('welcome'), 2800);
    return () => {
      clearTimeout(timer);
      loops.forEach((l) => l.stop());
    };
  }, []);

  return (
    <View className="flex-1 bg-[#0d0d0f] items-center justify-center px-8">
      {/* Logo */}
      <Animated.View
        style={{
          opacity: logoAnim,
          transform: [{ translateY: logoAnim.interpolate({ inputRange: [0, 1], outputRange: [24, 0] }) }],
          alignItems: 'center',
          marginBottom: 48,
        }}
      >
        <View className="w-24 h-24 rounded-3xl bg-[#2563eb] items-center justify-center mb-6 shadow-lg">
          <Text className="text-5xl">🎧</Text>
        </View>
        <Animated.View style={{ opacity: textAnim, alignItems: 'center' }}>
          <Text className="text-3xl font-bold text-white tracking-tight">SoundWave</Text>
          <Text className="text-3xl font-bold text-[#2563eb] tracking-tight">Buds</Text>
          <Text className="text-sm text-[#9ca3af] mt-2 text-center">Premium Wireless Audio Experience</Text>
        </Animated.View>
      </Animated.View>

      {/* Animated waveform */}
      <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 4, marginBottom: 64, height: 48 }}>
        {BARS.map((h, i) => (
          <Animated.View
            key={i}
            style={{
              width: 6,
              borderRadius: 4,
              backgroundColor: '#2563eb',
              height: anims[i].interpolate({ inputRange: [0, 1], outputRange: [3, h * 0.48] }),
              opacity: 0.35 + i * 0.04,
            }}
          />
        ))}
      </View>

      {/* CTA — tap to skip */}
      <Animated.View style={{ opacity: btnAnim, width: '100%' }}>
        <TouchableOpacity
          onPress={() => onNavigate('welcome')}
          className="w-full bg-[#2563eb] rounded-2xl py-4 items-center"
        >
          <Text className="text-white text-base font-bold">Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
