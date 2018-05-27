import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { StackActions , NavigationActions , createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from '../screens/Home';

const RootStack = createBottomTabNavigator(
  {
    Home: Home,
  },
  {
    initialRouteName: 'Home',
    tabBarOptions : {
      activeTintColor: '#ffffff',
      activeBackgroundColor: '#333',
      style : {
        height: 30,
      },
      labelStyle: {
        fontSize: 15,
        fontWeight: 'bold',
      },
    }
  }
);


export default RootStack;
