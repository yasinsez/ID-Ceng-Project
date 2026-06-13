export type DeviceName    = 'Vybex Buds' | 'Earbuds Pro' | 'Sport Buds';
export type SoundPreset   = 'balanced' | 'bassBoost' | 'podcast' | 'customEq';
export type NoiseMode     = 'anc' | 'off' | 'transparency';
export type VolumeStep    = 1 | 5 | 10;
export type GestureAction = 'playPause' | 'nextTrack' | 'previous' | 'ancMode' | 'assistant' | 'none';

export interface EQ {
  bass: number;
  mid: number;
  treble: number;
}

export interface GestureAssignments {
  left: {
    singleTap: GestureAction;
    doubleTap:  GestureAction;
    pressHold:  GestureAction;
  };
  right: {
    singleTap: GestureAction;
    doubleTap:  GestureAction;
    pressHold:  GestureAction;
  };
}
