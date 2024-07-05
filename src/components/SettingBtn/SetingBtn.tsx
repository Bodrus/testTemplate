import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface SettingBtnProps {
  goToSettings: () => void;
  color: 'white' | 'black';
  textColor: string;
}

const SettingBtn = ({goToSettings, color, textColor}: SettingBtnProps) => {
  return (
    <Pressable onPress={goToSettings} hitSlop={5} style={styles.iconContainer}>
      <AntDesign name="setting" color={color} size={34} />
      <Text style={{color: textColor}}>Settings</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
  },
});

export default SettingBtn;
