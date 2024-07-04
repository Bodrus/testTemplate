import React, {useContext} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import FontSizeSwitcher from '../../components/FontSizeSwitcher.tsx';
import {ThemeContext} from '../../context/ThemeContext.tsx';
import FontFamilySwitcher from '../../components/FontFamilySwitcher.tsx';
import BackgroundPicker from '../../components/BackgroundPicker.tsx';
import IconsTemplate from "../../components/IconsTemplate.tsx";
import ThemeSwitcher from "../../components/ThemeSwitcher.tsx";

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
          <IconsTemplate />
          <FontSizeSwitcher />
          <FontFamilySwitcher />
        </ImageBackground>
      ) : (
        <>
          <ThemeSwitcher />
          <BackgroundPicker />
          <IconsTemplate />
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
