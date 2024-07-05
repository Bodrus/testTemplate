import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ThemeContext} from '../../context/ThemeContext';
import {HomeNavigationProp} from '../../types/navigation';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import SettingBtn from '../../components/SettingBtn';
import {HomeContent} from './HomeContent';

const HomeScreen = () => {
  const themeContext = useContext(ThemeContext);
  const navigation = useNavigation<HomeNavigationProp>();

  if (!themeContext) {
    return null;
  }

  const {theme, isDarkTheme} = themeContext;

  const goToSettings = () => navigation.navigate('Setting');

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={styles.headerContainer}>
        <ThemeSwitcher />
        <SettingBtn
          goToSettings={goToSettings}
          color={isDarkTheme ? 'white' : 'black'}
          textColor={theme.colors.text}
        />
      </View>
      <HomeContent theme={theme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
});

export default HomeScreen;
