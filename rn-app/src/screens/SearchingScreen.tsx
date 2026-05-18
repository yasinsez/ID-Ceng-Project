import { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { StatusBar } from '../components/StatusBar';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

function PulseRing({ delay, size, color = '#2563eb' }: { delay: number; size: number; color?: string }) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(anim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(anim, { toValue: 0, duration: 0, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 1.5,
        borderColor: color,
        opacity: anim.interpolate({ inputRange: [0, 0.3, 1], outputRange: [0, 0.6, 0] }),
        transform: [{ scale: anim.interpolate({ inputRange: [0, 1], outputRange: [0.6, 1] }) }],
      }}
    />
  );
}

export function SearchingScreen({ onNavigate }: Props) {
  const [found, setFound] = useState(false);
  const cardAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Simulate finding a device after 2 s
    const t = setTimeout(() => {
      setFound(true);
      Animated.spring(cardAnim, { toValue: 1, useNativeDriver: true, tension: 60, friction: 8 }).start();
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <View className="flex-1 bg-[#0d0d0f]">
      <StatusBar />
      <View className="flex-row items-center gap-3 px-4 py-2">
        <TouchableOpacity
          onPress={() => onNavigate('add-device')}
          className="w-8 h-8 items-center justify-center bg-[#222228] rounded-full"
        >
          <Text className="text-white text-base">‹</Text>
        </TouchableOpacity>
        <Text className="text-xl font-bold text-white">Searching…</Text>
      </View>

      <View className="flex-1 items-center justify-center px-6">
        {/* Animated radar */}
        <View style={{ width: 220, height: 220, alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <PulseRing delay={0}    size={210} />
          <PulseRing delay={650}  size={160} />
          <PulseRing delay={1300} size={110} />

          {/* Static inner glow ring */}
          <View style={{
            width: 72, height: 72, borderRadius: 36,
            backgroundColor: '#1e3a5f',
            borderWidth: 2, borderColor: '#2563eb',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <Text style={{ fontSize: 28 }}>🎧</Text>
          </View>
        </View>

        <Text className="text-base text-[#9ca3af] mb-10">
          {found ? '1 device found' : 'Looking for nearby devices…'}
        </Text>

        {/* Found device card — animates in */}
        {found && (
          <Animated.View
            style={{
              width: '100%',
              opacity: cardAnim,
              transform: [{ translateY: cardAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }],
            }}
          >
            <TouchableOpacity
              onPress={() => onNavigate('connected')}
              className="w-full bg-[#1a1a1f] border border-[#2563eb] rounded-2xl p-4 flex-row items-center gap-4"
            >
              <View className="w-12 h-12 rounded-full bg-[#1e3a5f] items-center justify-center">
                <Text className="text-2xl">🎧</Text>
              </View>
              <View className="flex-1">
                <Text className="text-base font-semibold text-white">SoundWave Buds</Text>
                <Text className="text-xs text-[#9ca3af]">Ready to connect</Text>
              </View>
              <View className="bg-[#2563eb] rounded-xl px-4 py-2">
                <Text className="text-white text-xs font-bold">Connect</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </View>
  );
}
