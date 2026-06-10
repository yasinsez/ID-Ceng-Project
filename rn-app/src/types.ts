export type Screen =
  | 'splash' | 'welcome' | 'add-device' | 'searching' | 'connected'
  | 'home' | 'sound' | 'eq' | 'settings' | 'profile'
  | 'devices' | 'stats' | 'history' | 'earbud-left' | 'earbud-right' | 'device-detail'
  | 'login' | 'sign-up' | 'pairing-help' | 'language' | 'auto-power-off'
  | 'about' | 'help-support' | 'log-out' | 'remove-device' | 'user-guide';

export type AmbientMode = 'nc' | 'off' | 'transparency';
export type Preset = 'default' | 'bass' | 'clear' | 'treble' | 'vocal' | 'custom';
export interface EQValues { bass: number; mid: number; treble: number; }
