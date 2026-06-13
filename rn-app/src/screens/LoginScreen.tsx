import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Icon } from '../components/Icon';
import { useTheme } from '../ThemeContext';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }
export function LoginScreen({ onNavigate }: Props) {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{ flex: 1, backgroundColor: theme.bg, paddingHorizontal: 24 }}>
      <View style={{ alignItems: 'center', paddingTop: 16, paddingBottom: 8 }}>
        <Image source={require('../../assets/vestel-logo.png')} style={{ width: 80, height: 22, resizeMode: 'contain' }} />
      </View>
      <View style={{ marginTop: 24, marginBottom: 32 }}>
        <Text style={{ fontSize: 26, fontWeight: '800', color: theme.text }}>Welcome back</Text>
        <Text style={{ fontSize: 14, color: theme.muted, marginTop: 4 }}>Sign in to your account</Text>
      </View>
      <View style={{ gap: 12 }}>
        <TextInput value={email} onChangeText={setEmail} placeholder="Email" placeholderTextColor={theme.muted} keyboardType="email-address" autoCapitalize="none" style={{ backgroundColor: theme.inputBg, borderRadius: 14, paddingHorizontal: 16, paddingVertical: 14, fontSize: 15, color: theme.text, borderWidth: 1, borderColor: theme.line }} />
        <TextInput value={password} onChangeText={setPassword} placeholder="Password" placeholderTextColor={theme.muted} secureTextEntry style={{ backgroundColor: theme.inputBg, borderRadius: 14, paddingHorizontal: 16, paddingVertical: 14, fontSize: 15, color: theme.text, borderWidth: 1, borderColor: theme.line }} />
      </View>
      <TouchableOpacity onPress={() => onNavigate('home')} style={{ backgroundColor: theme.blue, borderRadius: 16, paddingVertical: 16, alignItems: 'center', marginTop: 24 }}>
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate('sign-up')} style={{ paddingVertical: 16, alignItems: 'center' }}>
        <Text style={{ color: theme.muted, fontSize: 13 }}>Don't have an account? <Text style={{ color: theme.blue, fontWeight: '700' }}>Create Account</Text></Text>
      </TouchableOpacity>
    </View>
  );
}
