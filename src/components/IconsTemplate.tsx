// IconsTemplate.tsx
import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {ColorPicker} from 'react-native-color-picker';
import Slider from '@react-native-community/slider';
import {ThemeContext} from '../context/ThemeContext.tsx';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CheckBox} from 'react-native-elements';
import {getIconSize} from '../utils.ts';

const IconsTemplate: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const {theme, setIconColor, setIconSize} = themeContext;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>(theme.colors.icon);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
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
                  backgroundColor: selectedColor || theme.colors.text,
                  borderColor: selectedColor || theme.colors.text,
                },
              ]}
              onPress={() => setModalVisible(true)}
            />
          </View>
        </View>
        <AntDesign
          name="rest"
          color={theme.colors.icon}
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
                defaultColor={selectedColor}
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

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.5,
    borderTopColor: '#cccccc',
    paddingVertical: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 10,
  },
  colorSample: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  colorPicker: {
    height: 200,
    width: '100%',
  },
  closeButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  optionButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    marginLeft: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#ffffff',
  },
  checkBoxes: {
    flexDirection: 'row',
  },
});

export default IconsTemplate;
