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

export interface ThemeContextProps {
  theme: Theme;
  setThemeByName: (name: string) => void;
  setFontSize: (size: number) => void;
  setFontFamily: (family: string) => void;
  isDarkTheme: boolean;
  setBackgroundImage: (imageUri: string | null) => void;
  setIconSize: (size: 'small' | 'medium' | 'large') => void;
  setIconColor: (color: string) => void;
}
