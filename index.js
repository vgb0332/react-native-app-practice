import { AppRegistry } from 'react-native';
import App from './src/App';

// Temporary blocking for isMounted issue in react-navigation
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('mjApp', () => App);
