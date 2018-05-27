import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';

import styles from './HomeStyles';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      password: '',
    }
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ styles.container }>
        <Text style={ styles.loginTitle }>LOGIN</Text>
        <View style = { styles.loginWrapper }>
          <Text style= { styles.loginLabel }> ID </Text>
          <TextInput style= { styles.loginInput } />
        </View>
        <View style = { styles.loginWrapper }>
          <Text style= { styles.loginLabel }> PASSWORD </Text>
          <TextInput style= { styles.loginInput } />
        </View>

        <Text style= { styles.loginLabel }> PASSWORD </Text>
        <TextInput />
      </View>
    );
  }
}
