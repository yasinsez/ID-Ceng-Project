import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }
export function SignUpScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg, paddingHorizontal: 24 }}>
      <TouchableOpacity onPress={() => onNavigate('welcome')} style={{ marginTop: 12, width: 36, height: 36, borderRadius: 18, backgroundColor: theme.card, borderWidth: 1, borderColor: theme.line, alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="back" size={20} color={theme.text} />
      </TouchableOpacity>
      <View style={{ marginTop: 24, marginBottom: 32 }}>
        <Text style={{ fontSize: 26, fontWeight: '800', color: theme.text }}>Create account</Text>
        <Text style={{ fontSize: 14, color: theme.muted, marginTop: 4 }}>Join SoundWave today</Text>
      </View>
      <View style={{ gap: 12 }}>
        <TextInput value={name} onChangeText={setName} placeholder="Full name" placeholderTextColor={theme.muted} style={{ backgroundColor: theme.inputBg, borderRadius: 14, paddingHorizontal: 16, paddingVertical: 14, fontSize: 15, color: theme.text, borderWidth: 1, borderColor: theme.line }} />
        <TextInput value={email} onChangeText={setEmail} placeholder="Email" placeholderTextColor={theme.muted} keyboardType="email-address" autoCapitalize="none" style={{ backgroundColor: theme.inputBg, borderRadius: 14, paddingHorizontal: 16, paddingVertical: 14, fontSize: 15, color: theme.text, borderWidth: 1, borderColor: theme.line }} />
        <TextInput value={password} onChangeText={setPassword} placeholder="Password" placeholderTextColor={theme.muted} secureTextEntry style={{ backgroundColor: theme.inputBg, borderRadius: 14, paddingHorizontal: 16, paddingVertical: 14, fontSize: 15, color: theme.text, borderWidth: 1, borderColor: theme.line }} />
      </View>
      <TouchableOpacity onPress={() => onNavigate('home')} style={{ backgroundColor: theme.blue, borderRadius: 16, paddingVertical: 16, alignItems: 'center', marginTop: 24 }}>
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate('login')} style={{ paddingVertical: 16, alignItems: 'center' }}>
        <Text style={{ color: theme.muted, fontSize: 13 }}>Already have an account? <Text style={{ color: theme.blue, fontWeight: '700' }}>Log In</Text></Text>
      </TouchableOpacity>
    </View>
  );
}
