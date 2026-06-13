import { createContext, useContext, useState } from 'react';
import { light, dark, type Theme } from './theme';

interface ThemeContextValue {
  theme: Theme;
  isDark: boolean;
  toggleDark: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: light,
  isDark: false,
  toggleDark: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ theme: isDark ? dark : light, isDark, toggleDark: () => setIsDark(d => !d) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
