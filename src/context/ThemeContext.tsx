import React, {createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useColorScheme} from 'react-native';

import {darkTheme, lightTheme} from '../theme/theme';
import {iconSize, Theme, ThemeContextProps} from '../types/theme';

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
        const [
          savedThemeName,
          savedFontSize,
          savedFontFamily,
          savedIconSize,
          savedIconColor,
          savedBackgroundImage,
        ] = await Promise.all([
          AsyncStorage.getItem('themeName'),
          AsyncStorage.getItem('fontSize'),
          AsyncStorage.getItem('fontFamily'),
          AsyncStorage.getItem('iconSize'),
          AsyncStorage.getItem('iconColor'),
          AsyncStorage.getItem('backgroundImage'),
        ]);

        if (savedThemeName && themes[savedThemeName as ThemeName]) {
          setTheme(themes[savedThemeName as ThemeName]);
        }
        if (savedFontSize) {
          setFontSize(parseInt(savedFontSize, 10));
        }
        if (savedFontFamily) {
          setFontFamily(savedFontFamily);
        }
        if (savedIconColor) {
          setIconColor(savedIconColor);
        }
        if (savedIconSize) {
          setIconSize(savedIconSize as iconSize);
        }
        if (savedIconSize) {
          setIconSize(savedIconSize as iconSize);
        }
        if (savedBackgroundImage) {
          setBackgroundImage(savedBackgroundImage);
        }
      } catch (error) {
        console.log('Failed to load theme:', error);
      }
    };

    loadTheme();
  }, []);

  const setThemeByName = async (name: string) => {
    try {
      const savedFontSize = await AsyncStorage.getItem('fontSize');
      const savedFontFamily = await AsyncStorage.getItem('fontFamily');
      const savedIconSize = (await AsyncStorage.getItem(
        'iconSize',
      )) as iconSize;
      const savedIconColor = await AsyncStorage.getItem('iconColor');
      const backgroundImage = await AsyncStorage.getItem('backgroundImage');

      if (themes[name as ThemeName]) {
        const newTheme = themes[name as ThemeName];

        const updatedTheme = {
          ...newTheme,
          fontSize: savedFontSize
            ? parseInt(savedFontSize, 10)
            : newTheme.fontSize,
          fontFamily: savedFontFamily || newTheme.fontFamily,
          iconSize: savedIconSize || newTheme.iconSize,
          iconColor: savedIconColor || newTheme.iconColor,
          backgroundImage: backgroundImage || null,
        };

        setTheme(updatedTheme);
        AsyncStorage.setItem('themeName', name).catch(error =>
          console.log('Failed to save theme:', error),
        );
      }
    } catch (error) {
      console.log('Failed to load theme:', error);
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

  const setBackgroundImage = (imageUri: string) => {
    setTheme(prevTheme => ({
      ...prevTheme,
      backgroundImage: imageUri,
    }));
    AsyncStorage.setItem('backgroundImage', imageUri).catch(error =>
      console.log('Failed to save font family:', error),
    );
  };

  const deleteBackgroundImage = () => {
    setTheme(prevTheme => ({
      ...prevTheme,
      backgroundImage: null,
    }));
    AsyncStorage.removeItem('backgroundImage').catch(error =>
      console.log('Failed to remove:', error),
    );
  };

  const setIconColor = (color: string) => {
    setTheme(prevTheme => ({
      ...prevTheme,
      iconColor: color,
    }));
    AsyncStorage.setItem('iconColor', color).catch(error =>
      console.log('Failed to save font family:', error),
    );
  };

  const setIconSize = (size: 'small' | 'medium' | 'large') => {
    setTheme(prevTheme => ({
      ...prevTheme,
      iconSize: size,
    }));
    AsyncStorage.setItem('iconSize', size).catch(error =>
      console.log('Failed to save font family:', error),
    );
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
        deleteBackgroundImage,
        setIconColor,
        setIconSize,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
