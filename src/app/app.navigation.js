import { createStackNavigator } from 'react-navigation';
import { Home } from './home/home.component';

export const screens = {
  HOME: 'home',
};

export const AppStack = createStackNavigator(
  {
    [screens.HOME]: Home,
  },
  {
    initialRouteName: screens.HOME,
  }
);
