import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {ColorPicker} from 'react-native-color-picker';
import Slider from '@react-native-community/slider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CheckBox} from 'react-native-elements';

import {getIconSize} from '../../utils';
import styles from './styles';
import {ThemeContextProps} from '../../types/theme';

interface Props {
  themeContext: ThemeContextProps;
}

const IconsTemplate = ({themeContext}: Props) => {
  const {theme, setIconColor, setIconSize} = themeContext;
  const [modalVisible, setModalVisible] = useState(false);

  const handleColorChange = (color: string) => {
    setIconColor(color);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.contentContainer}>
          <View>
            <Text style={[styles.label, {color: theme.colors.text}]}>
              Select icon color
            </Text>
            <TouchableOpacity
              style={[
                styles.colorSample,
                {
                  backgroundColor: theme.iconColor,
                  borderColor: theme.iconColor,
                },
              ]}
              onPress={() => setModalVisible(true)}
            />
          </View>
        </View>
        <AntDesign
          name="rest"
          color={theme.iconColor}
          size={getIconSize(theme.iconSize)}
        />
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Choose a color</Text>
              <ColorPicker
                onColorSelected={handleColorChange}
                defaultColor={theme.iconColor}
                style={styles.colorPicker}
                sliderComponent={Slider}
              />
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>

      <Text style={styles.label}>Icon Size</Text>
      <View style={styles.checkBoxes}>
        <CheckBox
          title="Small"
          checked={theme.iconSize === 'small'}
          onPress={() => setIconSize('small')}
          checkedColor={theme.colors.primary}
        />
        <CheckBox
          title="Medium"
          checked={theme.iconSize === 'medium'}
          onPress={() => setIconSize('medium')}
          checkedColor={theme.colors.primary}
        />
        <CheckBox
          title="Large"
          checked={theme.iconSize === 'large'}
          onPress={() => setIconSize('large')}
          checkedColor={theme.colors.primary}
        />
      </View>
    </View>
  );
};

export default IconsTemplate;
