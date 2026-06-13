import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavBar } from '../components/NavBar';
import { Icon } from '../components/Icon';
import type { Screen } from '../types';

interface Props { onNavigate: (s: Screen) => void; }

export function LanguageScreen({ onNavigate }: Props) {
  const [lang, setLang] = useState('en');
  return (
    <View style={{ flex: 1, backgroundColor: '#f7f8fb' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingVertical: 16 }}>
        <TouchableOpacity onPress={() => onNavigate('settings')} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: '#fff', borderWidth: 1, borderColor: '#e2e6ee', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="back" size={20} color="#121722" />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: '800', color: '#121722' }}>Language</Text>
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        {[{ id: 'en', label: 'English' }, { id: 'tr', label: 'Türkçe' }].map(l => (
          <TouchableOpacity key={l.id} onPress={() => setLang(l.id)} style={{ backgroundColor: '#fff', borderRadius: 14, paddingHorizontal: 16, paddingVertical: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: lang === l.id ? '#2f6eea' : '#e2e6ee', marginBottom: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: '600', color: '#121722' }}>{l.label}</Text>
            {lang === l.id && <Icon name="check" size={20} color="#2f6eea" />}
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ flex: 1 }} />
      <NavBar active="settings" onNavigate={onNavigate} />
    </View>
  );
}
