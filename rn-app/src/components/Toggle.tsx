import { TouchableOpacity, View, Animated } from 'react-native';
import { useRef, useEffect } from 'react';

interface Props { on: boolean; onChange: (v: boolean) => void; }

export function Toggle({ on, onChange }: Props) {
  const anim = useRef(new Animated.Value(on ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(anim, { toValue: on ? 1 : 0, duration: 150, useNativeDriver: false }).start();
  }, [on]);

  const translateX = anim.interpolate({ inputRange: [0, 1], outputRange: [2, 22] });

  return (
    <TouchableOpacity
      onPress={() => onChange(!on)}
      className={`w-12 h-7 rounded-full justify-center ${on ? 'bg-[#2563eb]' : 'bg-[#3f3f46]'}`}
    >
      <Animated.View
        style={{ transform: [{ translateX }] }}
        className="w-5 h-5 rounded-full bg-white shadow"
      />
    </TouchableOpacity>
  );
}
