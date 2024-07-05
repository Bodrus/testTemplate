import React, {useContext} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';

import {ThemeContext} from '../../context/ThemeContext';
import FontFamilySwitcher from '../../components/FontFamilySwitcher';
import BackgroundPicker from '../../components/BackgroundPicker';
import IconsTemplate from '../../components/IconsTemplate';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import FontSizeSwitcher from '../../components/FontSizeSwitcher';

const SettingsScreen = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    return null;
  }
  const {theme} = themeContext;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
        },
      ]}>
      {theme.backgroundImage ? (
        <ImageBackground
          source={{uri: theme.backgroundImage}}
          style={styles.backgroundImage}>
          <ThemeSwitcher />
          <BackgroundPicker />
          <IconsTemplate themeContext={themeContext} />
          <FontSizeSwitcher />
          <FontFamilySwitcher />
        </ImageBackground>
      ) : (
        <>
          <ThemeSwitcher />
          <BackgroundPicker />
          <IconsTemplate themeContext={themeContext} />
          <FontSizeSwitcher />
          <FontFamilySwitcher />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});

export default SettingsScreen;
