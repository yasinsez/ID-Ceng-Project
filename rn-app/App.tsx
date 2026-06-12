import './global.css';
import { useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from './src/ThemeContext';
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
import { LoginScreen }        from './src/screens/LoginScreen';
import { SignUpScreen }       from './src/screens/SignUpScreen';
import { PairingHelpScreen }  from './src/screens/PairingHelpScreen';
import { LanguageScreen }     from './src/screens/LanguageScreen';
import { AutoPowerOffScreen } from './src/screens/AutoPowerOffScreen';
import { AboutScreen }        from './src/screens/AboutScreen';
import { HelpSupportScreen }  from './src/screens/HelpSupportScreen';
import { LogOutScreen }       from './src/screens/LogOutScreen';
import { RemoveDeviceScreen } from './src/screens/RemoveDeviceScreen';
import { UserGuideScreen }    from './src/screens/UserGuideScreen';

function AppInner() {
  const { theme, isDark } = useTheme();
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
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bg }}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={theme.bg} />

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
      {screen === 'device-detail'  && <DeviceDetailScreen  {...shared} />}
      {screen === 'login'          && <LoginScreen          {...shared} />}
      {screen === 'sign-up'        && <SignUpScreen          {...shared} />}
      {screen === 'pairing-help'   && <PairingHelpScreen     {...shared} />}
      {screen === 'language'       && <LanguageScreen        {...shared} />}
      {screen === 'auto-power-off' && <AutoPowerOffScreen    {...shared} />}
      {screen === 'about'          && <AboutScreen           {...shared} />}
      {screen === 'help-support'   && <HelpSupportScreen     {...shared} />}
      {screen === 'log-out'        && <LogOutScreen          {...shared} />}
      {screen === 'remove-device'  && <RemoveDeviceScreen    {...shared} />}
      {screen === 'user-guide'     && <UserGuideScreen       {...shared} />}
    </SafeAreaView>
  );
}


export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppInner />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
