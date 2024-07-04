interface ThemeColors {
  primary: string;
  background: string;
  text: string;
  icon: string;
}

export interface Theme {
  name: string;
  colors: ThemeColors;
  fontSize: number;
  fontFamily: string;
  backgroundImage: string | null;
  iconSize: 'small' | 'medium' | 'large';
}

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
