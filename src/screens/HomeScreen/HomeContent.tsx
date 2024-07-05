import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {getIconSize} from '../../utils';
import {Theme} from '../../types/theme';

interface HomeContentProps {
  theme: Theme;
}

export const HomeContent = ({theme}: HomeContentProps) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: theme.colors.text,
          fontSize: theme.fontSize,
          fontFamily: theme.fontFamily,
        }}>
        Some text for example usage change font family
      </Text>

      <AntDesign
        name="windows"
        color={theme.colors.icon}
        size={getIconSize(theme.iconSize)}
        style={styles.icon}
      />
      <AntDesign
        name="rest"
        color={theme.colors.icon}
        size={getIconSize(theme.iconSize)}
        style={styles.icon}
      />
      <AntDesign
        name="linkedin-square"
        color={theme.colors.icon}
        size={getIconSize(theme.iconSize)}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  icon: {
    marginVertical: 5,
  },
});
