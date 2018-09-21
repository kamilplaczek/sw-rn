import { createBottomTabNavigator } from 'react-navigation';
import { List } from './list/list.component';
import { About } from './about/about.component';

export const tabs = {
  LIST: 'List',
  ABOUT: 'About',
};

export const HomeTabs = createBottomTabNavigator({
  [tabs.LIST]: List,
  [tabs.ABOUT]: About,
});

HomeTabs.navigationOptions = {
  header: null,
};
