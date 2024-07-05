import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
