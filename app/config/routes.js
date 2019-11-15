import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Swap from '../screens/Swap';
import Detail from '../screens/Detail';
import Search from '../screens/Search';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';

import Styles from '../shared/Styles';
import color from '../config/colors';

const SearchStack = createStackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        header: null,
      },
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    cardShadowEnabled: true,
    cardOverlayEndabled: true,
    transparentCard: true,
  },
);

const Stack = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerLeft: null,
        headerTitle: 'Home',
        tabBarIcon: props => (
          <Icon
            name="home"
            size={props.focused ? 28 : 25}
            color={props.tintColor}
          />
        ),
      },
    },
    Messages: {
      screen: Messages,
      navigationOptions: {
        headerLeft: null,
        headerTitle: 'Messages',
        tabBarIcon: props => (
          <Icon
            name="comments"
            size={props.focused ? 28 : 25}
            color={props.tintColor}
          />
        ),
      },
    },
    Search: {
      screen: SearchStack,
      navigationOptions: {
        headerLeft: null,
        headerTitle: null,
        tabBarIcon: props => (
          <Icon
            name="search"
            size={props.focused ? 28 : 25}
            color={props.tintColor}
          />
        ),
      },
    },
    Swap: {
      screen: Swap,
      navigationOptions: {
        headerLeft: null,
        headerTitle: 'Swap',
        tabBarIcon: props => (
          <Icon
            name="beer"
            size={props.focused ? 28 : 25}
            color={props.tintColor}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerLeft: null,
        headerTitle: 'Profile',
        tabBarIcon: props => (
          <Icon
            name="user"
            size={props.focused ? 28 : 25}
            color={props.tintColor}
          />
        ),
      },
    },
  },
  {
    order: ['Home', 'Messages', 'Search', 'Swap', 'Profile'],
    initialRouteName: 'Home',
    backBehavior: 'history',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      allowFontScaling: false,
      keyboardHidesTabBar: true,
      style: [Styles.tabBar, Styles.shadow],
      activeTintColor: color.black,
      inactiveTintColor: color.black + '65',
    },
  },
);

export default createAppContainer(
  createStackNavigator(
    {
      // Welcome: {
      //   screen: Welcome,
      //   navigationOptions: ({navigation}) => ({
      //     header: null,
      //   }),
      // },
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
        backBehavior: 'history',
        headerStyle: Styles.header,
        headerTitleStyle: {
          color: color.primaryColor,
        },
        headerBackTitleStyle: {
          color: color.primaryColorAccent,
        },
        headerLeft: (
          <HeaderBackButton
            tintColor={color.primaryColor}
            onPress={() => {
              navigation.goBack(null);
            }}
          />
        ),
        headerTintColor: color.primaryColorAccent,
      }),
    },
  ),
);
