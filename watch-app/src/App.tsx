import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider }    from './context/ThemeContext';
import { AppStateProvider } from './context/AppStateContext';
import { WatchLayout }      from './layouts/WatchLayout';

import WatchHomePage     from './pages/WatchHomePage';
import SearchPage        from './pages/SearchPage';
import ConnectedPage     from './pages/ConnectedPage';
import HomePage          from './pages/HomePage';
import MenuPage          from './pages/MenuPage';
import DevicesPage       from './pages/DevicesPage';
import VolumePage        from './pages/VolumePage';
import SoundPage         from './pages/SoundPage';
import BassEqPage        from './pages/BassEqPage';
import MidEqPage         from './pages/MidEqPage';
import TrebleEqPage      from './pages/TrebleEqPage';
import SettingsPage      from './pages/SettingsPage';
import ControlsPage      from './pages/ControlsPage';
import LeftControlsPage  from './pages/LeftControlsPage';
import RightControlsPage from './pages/RightControlsPage';
import ActionSelectPage  from './pages/ActionSelectPage';
import StatsPage         from './pages/StatsPage';
import ChartPage         from './pages/ChartPage';
import HistoryPage       from './pages/HistoryPage';
import NoiseControlPage  from './pages/NoiseControlPage';

export default function App() {
  return (
    <ThemeProvider>
      <AppStateProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<WatchLayout />}>
              <Route path="/"                          element={<WatchHomePage />} />
              <Route path="/search"                    element={<SearchPage />} />
              <Route path="/connected"                 element={<ConnectedPage />} />
              <Route path="/home"                      element={<HomePage />} />
              <Route path="/menu"                      element={<MenuPage />} />
              <Route path="/devices"                   element={<DevicesPage />} />
              <Route path="/volume"                    element={<VolumePage />} />
              <Route path="/sound"                     element={<SoundPage />} />
              <Route path="/sound/eq/bass"             element={<BassEqPage />} />
              <Route path="/sound/eq/mid"              element={<MidEqPage />} />
              <Route path="/sound/eq/treble"           element={<TrebleEqPage />} />
              <Route path="/settings"                  element={<SettingsPage />} />
              <Route path="/controls"                  element={<ControlsPage />} />
              <Route path="/controls/left"             element={<LeftControlsPage />} />
              <Route path="/controls/right"            element={<RightControlsPage />} />
              <Route path="/controls/:earbud/:gesture" element={<ActionSelectPage />} />
              <Route path="/stats"                     element={<StatsPage />} />
              <Route path="/stats/chart"               element={<ChartPage />} />
              <Route path="/stats/history"             element={<HistoryPage />} />
              <Route path="/noise-control"             element={<NoiseControlPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppStateProvider>
    </ThemeProvider>
  );
}
