import { createStackNavigator } from 'react-navigation';
import { HomeTabs } from './home/home.navigation';
import { Details } from './home/details/details.component';

export const screens = {
  HOME: 'Home',
  DETAILS: 'Details',
};

export const AppStack = createStackNavigator(
  {
    [screens.HOME]: HomeTabs,
    [screens.DETAILS]: Details,
  },
  {
    initialRouteName: screens.HOME,
  }
);
