
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import RootStack from './routes';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
