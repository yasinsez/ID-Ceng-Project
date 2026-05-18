import { useState } from 'react';
import type { Screen, AmbientMode, Preset, EQValues } from './types';

import { SplashScreen }      from './screens/SplashScreen';
import { WelcomeScreen }     from './screens/WelcomeScreen';
import { AddDeviceScreen }   from './screens/AddDeviceScreen';
import { SearchingScreen }   from './screens/SearchingScreen';
import { ConnectedScreen }   from './screens/ConnectedScreen';
import { HomeScreen }        from './screens/HomeScreen';
import { SoundScreen }       from './screens/SoundScreen';
import { EQScreen }          from './screens/EQScreen';
import { SettingsScreen }    from './screens/SettingsScreen';
import { ProfileScreen }     from './screens/ProfileScreen';
import { DevicesScreen }     from './screens/DevicesScreen';
import { StatsScreen }       from './screens/StatsScreen';
import { HistoryScreen }     from './screens/HistoryScreen';
import { EarbudLeftScreen }  from './screens/EarbudLeftScreen';
import { EarbudRightScreen } from './screens/EarbudRightScreen';
import { DeviceDetailScreen } from './screens/DeviceDetailScreen';

export default function App() {
  const [screen, setScreen]   = useState<Screen>('splash');
  const [volume, setVolume]   = useState(72);
  const [ambient, setAmbient] = useState<AmbientMode>('nc');
  const [preset, setPreset]   = useState<Preset>('default');
  const [eq, setEq]           = useState<EQValues>({ bass: 60, mid: 50, treble: 45 });
  const [darkMode, setDarkMode] = useState(true);

  const nav = (s: Screen) => setScreen(s);

  const shared = { onNavigate: nav };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Phone shell */}
      <div
        className="relative overflow-hidden flex flex-col"
        style={{ width: 390, height: 844, borderRadius: 44, background: '#0d0d0f', boxShadow: '0 0 0 10px #1a1a1f, 0 30px 80px rgba(0,0,0,0.8)' }}
      >
        {screen === 'splash'        && <SplashScreen      {...shared} />}
        {screen === 'welcome'       && <WelcomeScreen     {...shared} />}
        {screen === 'add-device'    && <AddDeviceScreen   {...shared} />}
        {screen === 'searching'     && <SearchingScreen   {...shared} />}
        {screen === 'connected'     && <ConnectedScreen   {...shared} />}
        {screen === 'home'          && (
          <HomeScreen
            {...shared}
            volume={volume}       onVolumeChange={setVolume}
            ambient={ambient}     onAmbientChange={setAmbient}
          />
        )}
        {screen === 'sound'         && (
          <SoundScreen
            {...shared}
            preset={preset}       onPresetChange={setPreset}
          />
        )}
        {screen === 'eq'            && (
          <EQScreen
            {...shared}
            eq={eq}               onEqChange={setEq}
          />
        )}
        {screen === 'settings'      && (
          <SettingsScreen
            {...shared}
            darkMode={darkMode}   onDarkModeChange={setDarkMode}
          />
        )}
        {screen === 'profile'       && <ProfileScreen     {...shared} />}
        {screen === 'devices'       && <DevicesScreen     {...shared} />}
        {screen === 'stats'         && <StatsScreen       {...shared} />}
        {screen === 'history'       && <HistoryScreen     {...shared} />}
        {screen === 'earbud-left'   && <EarbudLeftScreen  {...shared} />}
        {screen === 'earbud-right'  && <EarbudRightScreen {...shared} />}
        {screen === 'device-detail' && <DeviceDetailScreen {...shared} />}
      </div>
    </div>
  );
}
