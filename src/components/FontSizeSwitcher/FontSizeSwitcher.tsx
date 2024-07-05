import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

import {ThemeContext} from '../../context/ThemeContext';

const FontSizeSwitcher = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const {theme, setFontSize} = themeContext;

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          {color: theme.colors.text, fontSize: theme.fontSize},
        ]}>
        Font Size
      </Text>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={12}
        maximumValue={33}
        step={1}
        value={theme.fontSize}
        onValueChange={setFontSize}
        minimumTrackTintColor={theme.colors.primary}
        maximumTrackTintColor="#000000"
        thumbTintColor={theme.colors.primary}
      />
      <Text style={[styles.fontSize, {color: theme.colors.text}]}>
        {theme.fontSize}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 0.5,
    borderTopColor: '#cccccc',
  },
  label: {
    fontSize: 18,
    width: 130,
  },
  fontSize: {
    fontSize: 18,
  },
});

export default FontSizeSwitcher;
