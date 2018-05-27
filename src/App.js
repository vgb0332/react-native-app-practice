
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from "mobx-react";
import authStore from './mobx/authStore';
import RootStack from './routes';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={authStore}>
          <RootStack />
        </Provider>
    )
  }
}
