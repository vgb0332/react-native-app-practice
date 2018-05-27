import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { StackActions , NavigationActions , createSwitchNavigator, createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Home from '../screens/Home';
import authStore from '../mobx/authStore';

const AppStack = createStackNavigator(
  {
    Home: Home,
  },
  {
    initialRouteName: 'Home',
    passProps: {
      store: authStore,
    }
  }
)

const RootStack = createSwitchNavigator(
  {
    App: AppStack,
  },
  {
    initialRouteName: 'App',

  }
);

export default RootStack;
