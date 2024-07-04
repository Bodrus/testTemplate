import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  Setting: undefined;
  Home: undefined;
};

export type HomeNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Home'
>;
