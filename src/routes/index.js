import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { createMaterialBottomTabNavigator, createMaterialTopTabNavigator, StackActions , NavigationActions , createSwitchNavigator, createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Insta from '../screens/Insta';
import Insta2 from '../screens/Insta2';
import authStore from '../mobx/authStore';
import AuthLoading from '../screens/AuthLoading';


const AppStack = createMaterialTopTabNavigator(
  {
    Insta: Insta,
    Insta2: Insta2,
  },
  {
    initialRouteName: 'Insta',
    passProps: {
      store: authStore,
    }
  }
)

const AuthStack = createStackNavigator(
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
    AuthLoading: AuthLoading,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',

  }
);

export default RootStack;
