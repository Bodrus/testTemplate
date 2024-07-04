// BackgroundPicker.tsx
import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../context/ThemeContext.tsx';
import {launchImageLibrary} from 'react-native-image-picker';

const BackgroundPicker = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const {theme, setBackgroundImage} = themeContext;

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length) {
          setBackgroundImage(assets[0]?.uri || null);
        }
      },
    );
  };

  const resetPhoto = () => {
    setBackgroundImage(null);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, {color: theme.colors.text}]}>Background</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[styles.optionButton, {backgroundColor: theme.colors.primary}]}
          onPress={onChangePhoto}>
          <Text style={styles.optionText}>BackGround Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, {backgroundColor: theme.colors.primary}]}
          onPress={resetPhoto}>
          <Text style={styles.optionText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 16,
    borderTopWidth: 0.5,
    borderTopColor: '#cccccc',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  optionButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  optionText: {
    fontSize: 16,
    color: '#ffffff',
  },
  optionIcon: {
    width: 24,
    height: 24,
    tintColor: '#ffffff',
  },
});

export default BackgroundPicker;
