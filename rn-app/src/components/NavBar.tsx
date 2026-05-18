import { View, Text, TouchableOpacity } from 'react-native';
import type { Screen } from '../types';

interface Props { active: string; onNavigate: (s: Screen) => void; }

const tabs = [
  { id: 'home',     label: 'Home',     icon: '🏠' },
  { id: 'sound',    label: 'Sound',    icon: '🎵' },
  { id: 'devices',  label: 'Devices',  icon: '📱' },
  { id: 'profile',  label: 'Profile',  icon: '👤' },
  { id: 'settings', label: 'Settings', icon: '⚙️' },
];

export function NavBar({ active, onNavigate }: Props) {
  return (
    <View className="flex-row bg-[#111115] border-t border-[#2e2e38] pb-5 pt-2">
      {tabs.map((t) => (
        <TouchableOpacity
          key={t.id}
          onPress={() => onNavigate(t.id as Screen)}
          className="flex-1 items-center gap-0.5"
        >
          <Text className="text-xl">{t.icon}</Text>
          <Text className={`text-[10px] font-semibold ${active === t.id ? 'text-[#2563eb]' : 'text-[#6b7280]'}`}>
            {t.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
