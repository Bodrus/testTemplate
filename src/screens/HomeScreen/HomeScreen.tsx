import React, {useContext} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext.tsx';
import {useNavigation} from '@react-navigation/native';
import {HomeNavigationProp} from '../../types/navigation.ts';
import ThemeSwitcher from '../../components/ThemeSwitcher.tsx';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
      <ThemeSwitcher />
      <Pressable
        onPress={goToSettings}
        hitSlop={5}
        style={styles.iconContainer}>
        <AntDesign
          name="setting"
          color={isDarkTheme ? 'white' : 'black'}
          size={34}
        />
        <Text style={{color: theme.colors.text}}>Settings</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
  },
  iconContainer: {
    alignItems: 'center',
  },
  text: {},
});

export default HomeScreen;
