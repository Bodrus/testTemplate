import React, {createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from '../theme/colors.ts';

interface ThemeColors {
  primary: string;
  background: string;
  text: string;
}

interface Theme {
  name: string;
  colors: ThemeColors;
}

interface ThemeContextProps {
  theme: Theme;
  setThemeByName: (name: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

const themes = {light: lightTheme, dark: darkTheme};

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(
    systemColorScheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedThemeName = await AsyncStorage.getItem('themeName');
        if (savedThemeName !== null && themes[savedThemeName]) {
          setTheme(themes[savedThemeName]);
        }
      } catch (error) {
        console.log('Failed to load theme:', error);
      }
    };

    loadTheme();
  }, []);

  const setThemeByName = (name: string) => {
    if (themes[name]) {
      setTheme(themes[name]);
      AsyncStorage.setItem('themeName', name).catch(error =>
        console.log('Failed to save theme:', error),
      );
    }
  };

  const isDarkTheme = theme.name === 'dark';

  return (
    <ThemeContext.Provider value={{theme, setThemeByName, isDarkTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
