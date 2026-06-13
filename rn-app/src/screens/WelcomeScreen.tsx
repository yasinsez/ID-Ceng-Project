import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

export function WelcomeScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg, paddingHorizontal: 24, justifyContent: 'space-between', paddingBottom: 40 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
        <View style={{ width: 80, height: 80, borderRadius: 22, backgroundColor: theme.blue, alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
          <Icon name="wave" size={40} color="#fff" />
        </View>
        <Image source={require('../../assets/vestel-logo.png')} style={{ width: 80, height: 22, resizeMode: 'contain' }} />
        <Text style={{ fontSize: 30, fontWeight: '800', color: theme.text, letterSpacing: -0.5 }}>SoundWave</Text>
        <Text style={{ fontSize: 15, color: theme.muted }}>Sound. Your Way.</Text>
      </View>
      <View style={{ gap: 10 }}>
        <TouchableOpacity onPress={() => onNavigate('add-device')} style={{ backgroundColor: theme.blue, borderRadius: 16, paddingVertical: 16, alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('login')} style={{ backgroundColor: theme.card, borderRadius: 16, paddingVertical: 16, alignItems: 'center', borderWidth: 1, borderColor: theme.line }}>
          <Text style={{ color: theme.text, fontSize: 16, fontWeight: '600' }}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('sign-up')} style={{ alignItems: 'center', paddingVertical: 8 }}>
          <Text style={{ color: theme.muted, fontSize: 13 }}>Don't have an account? <Text style={{ color: theme.blue, fontWeight: '700' }}>Sign Up</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
