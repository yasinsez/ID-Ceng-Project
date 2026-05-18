import { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { BatteryPill } from '../components/BatteryPill';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

export function ConnectedScreen({ onNavigate }: Props) {
  const scale    = useRef(new Animated.Value(0)).current;
  const opacity  = useRef(new Animated.Value(0)).current;
  const slideUp  = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    // Checkmark springs in
    Animated.spring(scale, {
      toValue: 1, tension: 70, friction: 6, useNativeDriver: true,
    }).start();

    // Text / battery / button fade + slide up
    Animated.sequence([
      Animated.delay(300),
      Animated.parallel([
        Animated.timing(opacity,  { toValue: 1,  duration: 400, useNativeDriver: true }),
        Animated.timing(slideUp,  { toValue: 0,  duration: 400, useNativeDriver: true }),
      ]),
    ]).start();

    // Auto-navigate to home after 2.5 s
    const timer = setTimeout(() => onNavigate('home'), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-[#0d0d0f] items-center justify-center px-8">
      {/* Animated checkmark ring */}
      <Animated.View style={{ transform: [{ scale }], marginBottom: 28 }}>
        <View style={{
          width: 128, height: 128, borderRadius: 64,
          borderWidth: 3, borderColor: '#22c55e',
          backgroundColor: 'rgba(34,197,94,0.08)',
          alignItems: 'center', justifyContent: 'center',
        }}>
          <Text style={{ fontSize: 52, color: '#22c55e' }}>✓</Text>
        </View>
      </Animated.View>

      {/* Info */}
      <Animated.View
        style={{ opacity, transform: [{ translateY: slideUp }], alignItems: 'center', width: '100%' }}
      >
        <Text className="text-2xl font-bold text-white mb-1">Connected!</Text>
        <Text className="text-sm text-[#9ca3af] text-center mb-4">SoundWave Buds</Text>

        <View className="flex-row gap-2 mb-10">
          <BatteryPill label="L 100%" color="green" />
          <BatteryPill label="R 100%" color="green" />
          <BatteryPill label="Case 80%" color="blue" />
        </View>

        <TouchableOpacity
          onPress={() => onNavigate('home')}
          className="w-full bg-[#2563eb] rounded-2xl py-4 items-center"
        >
          <Text className="text-white text-base font-bold">Go to Dashboard</Text>
        </TouchableOpacity>

        <Text className="text-xs text-[#6b7280] mt-4">Taking you there automatically…</Text>
      </Animated.View>
    </View>
  );
}
