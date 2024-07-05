import {Theme} from '../types/theme';

const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: '#6200ee',
    background: '#ffffff',
    text: '#000000',
  },
  fontSize: 16,
  fontFamily: 'System',
  backgroundImage: null,
  iconSize: 'medium',
  iconColor: '#000000',
};

const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: '#bb86fc',
    background: '#121212',
    text: '#ffffff',
  },
  fontSize: 16,
  fontFamily: 'System',
  backgroundImage: null,
  iconSize: 'medium',
  iconColor: '#ffffff',
};

export {lightTheme, darkTheme};
