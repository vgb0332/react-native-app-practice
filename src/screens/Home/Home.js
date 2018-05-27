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
import styles from './HomeStyles';

@observer
export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null,
  };

  componentDidMount() {
    alert(authStore.isLoggedIn);
  }

  constructor(props){
    super(props);
    this.state = {
      id: '',
      password: '',
    }
  }

  onIdChangeText = (text) => {
    this.setState({
      id: text,
    })
  }

  onPassChangeText = (text) => {
    this.setState({
      password: text,
    })
  }

  onForgotClick = () => {
    alert('did you forget something?');
  }

  onSignUpClick = () => {
    alert('wanna sign up?');
  }

  onLoginClick = () => {
    const { id, password } = this.state;
    if(validateOnSubmit( id, password )){
      alert('Login Successful!');
      authStore.setUser();
      alert(authStore.getUserStatus());
      // this.props.navigation.navigate('Details');
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.background}>
        <Image
          style={styles.background_img}
          source={require('../../public/image/background-img2.jpg')}
          resizeMode={'cover'}
          opacity = {1}
        />

        <View style={styles.loginContainer}>
          <View style={styles.loginWrapper}>
            <View style={styles.loginTitle}>
              <Text style={styles.loginTitleText}> WELCOME! </Text>
            </View>

            <View style={ styles.loginInput }>

              <View style={styles.loginInputWrapper}>
                <Text style={styles.loginInputText}> ID </Text>
                <TextInput
                  onChangeText={this.onIdChangeText}
                  style={styles.loginInputTextInput}
                  blurOnSubmit={true}
                />
              </View>

              <View style={styles.loginInputWrapper}>
                <Text style={styles.loginInputText}> PWD </Text>
                <TextInput
                  onChangeText={this.onPassChangeText}
                  style={styles.loginInputTextInput}
                  blurOnSubmit={true}
                />
              </View>
            </View>
          </View>

          <View style={styles.submitWrapper}>
            <Text style={styles.forgotPassword} onPress={this.onForgotClick}>
               Forgot Password?
            </Text>
            <View style={styles.centerPadding}></View>

            <TouchableOpacity
              style={styles.signupButton}
              onPress={this.onSignUpClick}
            >
              <Text style={styles.signup}> SignUp </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={this.onLoginClick}
            >
              <Text style={styles.login}> Login </Text>
            </TouchableOpacity>

          </View>
        </View>



      </View>
    );
  }
}
