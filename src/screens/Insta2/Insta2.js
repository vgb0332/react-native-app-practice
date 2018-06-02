import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import { validateOnSubmit } from '../../util/auth';
import { observer, inject } from 'mobx-react/native';
import authStore from '../../mobx/authStore';
import styles from './Insta2Styles';

@observer
export default class Insta2 extends Component {
  static navigationOptions = {
    title: 'Insta2',
    header: null,
  };

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
      <View style={{}}>
      <Text>
      Insta2
      </Text>
      </View>
    );
  }
}
