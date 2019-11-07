import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../screens/Home';
import Swap from '../screens/Swap';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';

const HomeStack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Home',
      },
    },
    Messages: {
      screen: Messages,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Messages',
      },
    },
    Swap: {
      screen: Swap,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Swap',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Profile',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

export default createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: HomeStack,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    },
  ),
);
