import React, {createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useColorScheme} from 'react-native';

import {darkTheme, lightTheme} from '../theme/theme';
import {Theme, ThemeContextProps} from '../types/theme';

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

type ThemeName = 'light' | 'dark';
const themes: Record<ThemeName, Theme> = {light: lightTheme, dark: darkTheme};

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(
    systemColorScheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedThemeName = await AsyncStorage.getItem('themeName');
        const savedFontSize = await AsyncStorage.getItem('fontSize');
        const savedFontFamily = await AsyncStorage.getItem('fontFamily');

        if (savedThemeName && themes[savedThemeName as ThemeName]) {
          setTheme(themes[savedThemeName as ThemeName]);
        }
        if (savedFontSize) {
          setTheme(prevTheme => ({
            ...prevTheme,
            fontSize: parseInt(savedFontSize, 10),
          }));
        }
        if (savedFontFamily) {
          setTheme(prevTheme => ({...prevTheme, fontFamily: savedFontFamily}));
        }
      } catch (error) {
        console.log('Failed to load theme:', error);
      }
    };

    loadTheme();
  }, []);

  const setThemeByName = (name: string) => {
    if (themes[name as ThemeName]) {
      setTheme(themes[name as ThemeName]);
      AsyncStorage.setItem('themeName', name).catch(error =>
        console.log('Failed to save theme:', error),
      );
    }
  };

  const setFontSize = (size: number) => {
    setTheme(prevTheme => ({...prevTheme, fontSize: size}));
    AsyncStorage.setItem('fontSize', size.toString()).catch(error =>
      console.log('Failed to save font size:', error),
    );
  };

  const setFontFamily = (family: string) => {
    setTheme(prevTheme => ({...prevTheme, fontFamily: family}));
    AsyncStorage.setItem('fontFamily', family).catch(error =>
      console.log('Failed to save font family:', error),
    );
  };

  const setBackgroundImage = (imageUri: string | null) => {
    setTheme(prevTheme => ({
      ...prevTheme,
      backgroundImage: imageUri,
    }));
  };

  const setIconColor = (color: string) => {
    setTheme(prevTheme => ({
      ...prevTheme,
      colors: {
        ...prevTheme.colors,
        icon: color,
      },
    }));
  };

  const setIconSize = (size: 'small' | 'medium' | 'large') => {
    setTheme(prevTheme => ({
      ...prevTheme,
      iconSize: size,
    }));
  };

  const isDarkTheme = theme.name === 'dark';

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setThemeByName,
        setFontSize,
        setFontFamily,
        isDarkTheme,
        setBackgroundImage,
        setIconColor,
        setIconSize,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
