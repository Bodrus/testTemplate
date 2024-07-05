import React, {useContext} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ThemeContext} from '../../context/ThemeContext';
import {HomeNavigationProp} from '../../types/navigation';
import {HomeContent} from './HomeContent';
import {HomeHeader} from './HomeHeader';

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
      {theme.backgroundImage ? (
        <ImageBackground
          source={{uri: theme.backgroundImage}}
          style={styles.backgroundImage}>
          <HomeHeader
            theme={theme}
            goToSettings={goToSettings}
            isDarkTheme={isDarkTheme}
          />
          <HomeContent theme={theme} />
        </ImageBackground>
      ) : (
        <>
          <HomeHeader
            theme={theme}
            goToSettings={goToSettings}
            isDarkTheme={isDarkTheme}
          />
          <HomeContent theme={theme} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 15,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
