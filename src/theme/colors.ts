interface ThemeColors {
  primary: string;
  background: string;
  text: string;
}

interface Theme {
  name: string;
  colors: ThemeColors;
}

const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: '#6200ee',
    background: '#ffffff',
    text: '#000000',
  },
};

const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: '#bb86fc',
    background: '#121212',
    text: '#ffffff',
  },
};

export {lightTheme, darkTheme};
