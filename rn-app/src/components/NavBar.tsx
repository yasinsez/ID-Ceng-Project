import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { Screen } from '../types';

interface Props { active: string; onNavigate: (s: Screen) => void; }

// Clean SF-Symbol-style unicode glyphs — consistent size, no color bleed from emoji
const tabs: { id: Screen; label: string; icon: string; activeIcon: string }[] = [
  { id: 'home',     label: 'Home',     icon: '⌂',  activeIcon: '⌂'  },
  { id: 'sound',    label: 'Sound',    icon: '♪',  activeIcon: '♫'  },
  { id: 'devices',  label: 'Devices',  icon: '◻',  activeIcon: '◼'  },
  { id: 'profile',  label: 'Profile',  icon: '○',  activeIcon: '●'  },
  { id: 'settings', label: 'Settings', icon: '✦',  activeIcon: '✦'  },
];

export function NavBar({ active, onNavigate }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View style={{
      flexDirection: 'row',
      backgroundColor: '#111115',
      borderTopWidth: 1,
      borderTopColor: '#2e2e38',
      paddingBottom: insets.bottom + 8,
      paddingTop: 8,
    }}>
      {tabs.map((t) => {
        const isActive = active === t.id;
        return (
          <TouchableOpacity
            key={t.id}
            onPress={() => onNavigate(t.id)}
            style={{ flex: 1, alignItems: 'center', gap: 2 }}
          >
            {/* Active indicator dot */}
            {isActive && (
              <View style={{
                position: 'absolute', top: -8,
                width: 4, height: 4, borderRadius: 2,
                backgroundColor: '#2563eb',
              }} />
            )}
            <Text style={{
              fontSize: 20,
              color: isActive ? '#2563eb' : '#6b7280',
              lineHeight: 24,
            }}>
              {isActive ? t.activeIcon : t.icon}
            </Text>
            <Text style={{
              fontSize: 10,
              fontWeight: '600',
              color: isActive ? '#2563eb' : '#6b7280',
            }}>
              {t.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
