const styles = {
  background: {
    flex: 1,
    flexDirection: 'column',
  },

  background_img: {
    width: '100%',
    height: '100%',
  },

  loginContainer : {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent : 'center',
    flex: 1,
  },

  loginWrapper : {
    height: 200,
    width: 300,
    marginBottom: 30,
    // backgroundColor: 'white',
  },

  loginTitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },

  loginTitleText : {
    fontSize: 30,
    color: '#F5FFFA',
    marginBottom: 20,
    // fontWeight: 'bold',
  },

  loginInput: {
    // backgroundColor: 'black',
    flexDirection: 'column',
    flex: 1,
  },

  loginInputWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    height: '100%',
  },

  loginInputText: {
    fontSize: 15,
    color: '#F5FFFA',
    lineHeight: 50,
    textAlign:'center',
    flex: 0.3,
    // borderColor: '#ffffff',
    // borderBottomWidth: 1,
    // borderRightWidth: 1,
  },

  loginInputTextInput: {
    flex: 0.7,
    // height: 50,
    marginRight: 20,
    color: '#F5FFFA',
    borderColor: '#ffffff',
    borderBottomWidth: 1,
    // borderBottomColor: '#F5FFFA',
  },

  submitWrapper : {
    width: 300,
    flexDirection: 'row',
  },

  forgotPassword : {
    color: '#87CEFA',
    textAlign: 'center',
    fontSize: 10,
    flex: 0.3,
    paddingLeft: 10,
  },

  signupButton: {
    backgroundColor: '#03dac5',
    borderRadius: 10,
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,

  },

  loginButton: {
    backgroundColor: '#87ceeb',
    borderRadius: 10,
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    padding: 5,
  },

  centerPadding: {
    flex: 0.2
  },

  signup: {
    color: '#333',
    textAlign: 'center',
  },

  login: {
    color: '#333',
    textAlign: 'center',
  }

}

export default styles;
