import React, {useContext} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

import {ThemeContext} from '../../context/ThemeContext';

const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const {theme, setThemeByName, isDarkTheme} = themeContext;

  const toggleSwitch = () => {
    setThemeByName(isDarkTheme ? 'light' : 'dark');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, {color: theme.colors.text}]}>
        {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
      </Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isDarkTheme ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isDarkTheme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  label: {
    fontSize: 18,
  },
});

export default ThemeSwitcher;
