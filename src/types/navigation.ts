import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Setting: undefined;
};

export type HomeNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Home'
>;
