import {Theme} from '../types/theme';

const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: '#6200ee',
    background: '#ffffff',
    text: '#000000',
    icon: '#000000',
  },
  fontSize: 16,
  fontFamily: 'System',
  backgroundImage: null,
  iconSize: 'medium',
};

const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: '#bb86fc',
    background: '#121212',
    text: '#ffffff',
    icon: '#ffffff',
  },
  fontSize: 16,
  fontFamily: 'System',
  backgroundImage: null,
  iconSize: 'medium',
};

export {lightTheme, darkTheme};
