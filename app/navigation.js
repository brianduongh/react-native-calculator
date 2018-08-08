import React from 'react';
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Login from './containers/login';
import Profile from './containers/profile';
import Home from './containers/home';

export const HomeNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => <Icon name="ios-home" />,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Message',
      tabBarIcon: () => <Icon name="ios-chatboxes" />,
    },
  },
});

export const RootNavigator = createSwitchNavigator(
  {
    Login,
    HomeNavigator,
  },
  {
    initialRouteName: 'Login',
  },
);

export default RootNavigator;
