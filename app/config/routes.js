import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Swap from '../screens/Swap';
import Search from '../screens/Search';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';

import Styles from '../shared/Styles';
import color from '../config/colors';

const Stack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home',
        tabBarIcon: props => (
          <Icon name="home" size={25} color={props.tintColor} />
        ),
      },
    },
    Messages: {
      screen: Messages,
      navigationOptions: {
        headerTitle: 'Messages',
        tabBarIcon: props => (
          <Icon name="comments" size={25} color={props.tintColor} />
        ),
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        headerTitle: null,
        tabBarIcon: props => (
          <Icon name="search" size={25} color={props.tintColor} />
        ),
      },
    },
    Swap: {
      screen: Swap,
      navigationOptions: {
        headerTitle: 'Swap',
        tabBarIcon: props => (
          <Icon name="beer" size={25} color={props.tintColor} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerTitle: 'Profile',
        tabBarIcon: props => (
          <Icon name="user" size={25} color={props.tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    backBehavior: 'history',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      allowFontScaling: false,
      keyboardHidesTabBar: true,
      style: Styles.tabBar,
      activeTintColor: color.primaryColor,
    },
  },
);

export default createAppContainer(
  createStackNavigator(
    {
      Welcome: {
        screen: Welcome,
        navigationOptions: ({navigation}) => ({
          headerTitle: 'Welcome',
          headerStyle: Styles.header,
          headerTitleStyle: {
            color: color.primaryColor,
          },
          headerBackTitleStyle: {
            color: color.primaryColorAccent,
          },
          headerTintColor: color.primaryColorAccent,
        }),
      },
      Stack: {
        screen: Stack,
      },
    },
    {
      mode: 'modal',
      headerMode: 'float',
      defaultNavigationOptions: ({navigation}) => ({
        headerTitle: 'Swap the Hop',
        headerBackTitle: null,
        headerStyle: Styles.header,
        headerTitleStyle: {
          color: color.primaryColor,
        },
        headerBackTitleStyle: {
          color: color.primaryColorAccent,
        },
        headerLeft: null,
        headerTintColor: color.primaryColorAccent,
      }),
    },
  ),
);

// initialRouteName
