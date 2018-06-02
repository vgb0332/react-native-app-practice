import React, { Component } from 'react';
import {
  View, ActivityIndicator, StatusBar, StyleSheet
} from 'react-native';
import { observer } from 'mobx-react/native';
import authStore from '../../mobx/authStore';

@observer
export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this.userCheck();
  }

  userCheck = () => {
    this.props.navigation.navigate(authStore.getUserStatus() ? 'App' : 'Auth');
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
