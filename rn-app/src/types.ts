export type Screen =
  | 'splash' | 'welcome' | 'add-device' | 'searching' | 'connected'
  | 'home' | 'sound' | 'eq' | 'settings' | 'profile'
  | 'devices' | 'stats' | 'history' | 'earbud-left' | 'earbud-right' | 'device-detail';

export type AmbientMode = 'nc' | 'off' | 'transparency';
export type Preset = 'default' | 'bass' | 'clear' | 'treble' | 'vocal' | 'custom';
export interface EQValues { bass: number; mid: number; treble: number; }
