import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import {ThemeContext} from '../../context/ThemeContext';
import styles from './styles';

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
    ).catch();
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

export default BackgroundPicker;
