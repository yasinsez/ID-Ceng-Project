import { createContext, useContext, useState, type ReactNode } from 'react';
import type {
  DeviceName, SoundPreset, NoiseMode, VolumeStep, EQ, GestureAssignments,
} from '../types';

interface AppStateContextValue {
  connectedDevice: DeviceName;
  pendingDevice:   DeviceName | null;
  volume: number;
  volumeStep: VolumeStep;
  soundPreset: SoundPreset;
  eq: EQ;
  noiseMode: NoiseMode;
  gestureAssignments: GestureAssignments;
  setConnectedDevice:    (d: DeviceName)          => void;
  setPendingDevice:      (d: DeviceName | null)   => void;
  setVolume:             (v: number)              => void;
  setVolumeStep:         (s: VolumeStep)          => void;
  setSoundPreset:        (p: SoundPreset)         => void;
  setEq:                 (eq: EQ)                 => void;
  setNoiseMode:          (m: NoiseMode)           => void;
  setGestureAssignments: (g: GestureAssignments)  => void;
  resetToDefaults:       () => void;
}

const DEFAULT_GESTURES: GestureAssignments = {
  left:  { singleTap: 'playPause', doubleTap: 'previous',  pressHold: 'ancMode' },
  right: { singleTap: 'playPause', doubleTap: 'nextTrack', pressHold: 'ancMode' },
};

const AppStateContext = createContext<AppStateContextValue>({
  connectedDevice:    'SoundWave Buds',
  pendingDevice:      null,
  volume:             72,
  volumeStep:         1,
  soundPreset:        'balanced',
  eq:                 { bass: 2, mid: 0, treble: 1 },
  noiseMode:          'anc',
  gestureAssignments: DEFAULT_GESTURES,
  setConnectedDevice:    () => {},
  setPendingDevice:      () => {},
  setVolume:             () => {},
  setVolumeStep:         () => {},
  setSoundPreset:        () => {},
  setEq:                 () => {},
  setNoiseMode:          () => {},
  setGestureAssignments: () => {},
  resetToDefaults:       () => {},
});

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [connectedDevice,    setConnectedDevice]    = useState<DeviceName>('SoundWave Buds');
  const [pendingDevice,      setPendingDevice]      = useState<DeviceName | null>(null);
  const [volume,             setVolume]             = useState(72);
  const [volumeStep,         setVolumeStep]         = useState<VolumeStep>(1);
  const [soundPreset,        setSoundPreset]        = useState<SoundPreset>('balanced');
  const [eq,                 setEq]                 = useState<EQ>({ bass: 2, mid: 0, treble: 1 });
  const [noiseMode,          setNoiseMode]          = useState<NoiseMode>('anc');
  const [gestureAssignments, setGestureAssignments] = useState<GestureAssignments>(DEFAULT_GESTURES);

  const resetToDefaults = () => {
    setConnectedDevice('SoundWave Buds');
    setPendingDevice(null);
    setVolume(72);
    setVolumeStep(1);
    setSoundPreset('balanced');
    setEq({ bass: 2, mid: 0, treble: 1 });
    setNoiseMode('anc');
    setGestureAssignments(DEFAULT_GESTURES);
  };

  return (
    <AppStateContext.Provider value={{
      connectedDevice,    setConnectedDevice,
      pendingDevice,      setPendingDevice,
      volume,             setVolume,
      volumeStep,         setVolumeStep,
      soundPreset,        setSoundPreset,
      eq,                 setEq,
      noiseMode,          setNoiseMode,
      gestureAssignments, setGestureAssignments,
      resetToDefaults,
    }}>
      {children}
    </AppStateContext.Provider>
  );
}

export const useAppState = () => useContext(AppStateContext);
