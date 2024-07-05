import {StyleSheet, View} from 'react-native';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import SettingBtn from '../../components/SettingBtn';
import React from 'react';
import {Theme} from '../../types/theme';

interface Props {
  theme: Theme;
  goToSettings: () => void;
  isDarkTheme: boolean;
}
export const HomeHeader = ({theme, goToSettings, isDarkTheme}: Props) => {
  return (
    <View style={styles.container}>
      <ThemeSwitcher />
      <SettingBtn
        goToSettings={goToSettings}
        color={isDarkTheme ? 'white' : 'black'}
        textColor={theme.colors.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 15,
  },
});
