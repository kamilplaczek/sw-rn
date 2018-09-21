import { createStackNavigator } from 'react-navigation';
import { HomeTabs } from './home/home.navigation';

export const screens = {
  HOME: 'Home',
};

export const AppStack = createStackNavigator(
  {
    [screens.HOME]: HomeTabs,
  },
  {
    initialRouteName: screens.HOME,
  }
);
