// FontFamilySwitcher.tsx
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {ThemeContext} from '../context/ThemeContext.tsx';

const FontFamilySwitcher = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const {theme, setFontFamily, isDarkTheme} = themeContext;
  const fontFamilies = [
    'System',
    'Arial',
    'Courier New',
    'Georgia',
    'Times New Roman',
  ];

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.label,
          {color: theme.colors.text, fontFamily: theme.fontFamily},
        ]}>
        Font Family
      </Text>
      <Picker
        selectedValue={theme.fontFamily}
        onValueChange={itemValue => setFontFamily(itemValue)}>
        {fontFamilies.map(fontFamily => (
          <Picker.Item
            key={fontFamily}
            label={fontFamily}
            value={fontFamily}
            color={isDarkTheme ? 'white' : 'black'}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 0.5,
    borderTopColor: '#cccccc',
  },
  label: {
    fontSize: 18,
  },
});

export default FontFamilySwitcher;
