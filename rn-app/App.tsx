import './global.css';
import { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import type { Screen, AmbientMode, Preset, EQValues } from './src/types';

import { SplashScreen }       from './src/screens/SplashScreen';
import { WelcomeScreen }      from './src/screens/WelcomeScreen';
import { AddDeviceScreen }    from './src/screens/AddDeviceScreen';
import { SearchingScreen }    from './src/screens/SearchingScreen';
import { ConnectedScreen }    from './src/screens/ConnectedScreen';
import { HomeScreen }         from './src/screens/HomeScreen';
import { SoundScreen }        from './src/screens/SoundScreen';
import { EQScreen }           from './src/screens/EQScreen';
import { SettingsScreen }     from './src/screens/SettingsScreen';
import { ProfileScreen }      from './src/screens/ProfileScreen';
import { DevicesScreen }      from './src/screens/DevicesScreen';
import { StatsScreen }        from './src/screens/StatsScreen';
import { HistoryScreen }      from './src/screens/HistoryScreen';
import { EarbudLeftScreen }   from './src/screens/EarbudLeftScreen';
import { EarbudRightScreen }  from './src/screens/EarbudRightScreen';
import { DeviceDetailScreen } from './src/screens/DeviceDetailScreen';

export default function App() {
  const [screen, setScreen]       = useState<Screen>('splash');
  const [volume, setVolume]       = useState(72);
  const [ambient, setAmbient]     = useState<AmbientMode>('nc');
  const [preset, setPreset]       = useState<Preset>('default');
  const [eq, setEq]               = useState<EQValues>({ bass: 60, mid: 50, treble: 45 });
  const [isPlaying, setIsPlaying] = useState(true);

  const nav        = (s: Screen) => setScreen(s);
  const shared     = { onNavigate: nav };
  const togglePlay = () => setIsPlaying((p) => !p);

  return (
    <SafeAreaProvider>
    <SafeAreaView className="flex-1 bg-[#0d0d0f]">
      <StatusBar barStyle="light-content" backgroundColor="#0d0d0f" />

      {screen === 'splash'        && <SplashScreen       {...shared} />}
      {screen === 'welcome'       && <WelcomeScreen      {...shared} />}
      {screen === 'add-device'    && <AddDeviceScreen    {...shared} />}
      {screen === 'searching'     && <SearchingScreen    {...shared} />}
      {screen === 'connected'     && <ConnectedScreen    {...shared} />}
      {screen === 'home'          && (
        <HomeScreen
          {...shared}
          volume={volume}          onVolumeChange={setVolume}
          ambient={ambient}        onAmbientChange={setAmbient}
          isPlaying={isPlaying}    onPlayPauseToggle={togglePlay}
        />
      )}
      {screen === 'sound'         && (
        <SoundScreen
          {...shared}
          preset={preset}          onPresetChange={setPreset}
          isPlaying={isPlaying}    onPlayPauseToggle={togglePlay}
        />
      )}
      {screen === 'eq'            && <EQScreen           {...shared} eq={eq} onEQChange={setEq} />}
      {screen === 'settings'      && <SettingsScreen     {...shared} />}
      {screen === 'profile'       && <ProfileScreen      {...shared} />}
      {screen === 'devices'       && <DevicesScreen      {...shared} />}
      {screen === 'stats'         && <StatsScreen        {...shared} />}
      {screen === 'history'       && <HistoryScreen      {...shared} />}
      {screen === 'earbud-left'   && <EarbudLeftScreen   {...shared} />}
      {screen === 'earbud-right'  && <EarbudRightScreen  {...shared} />}
      {screen === 'device-detail' && <DeviceDetailScreen {...shared} />}
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
