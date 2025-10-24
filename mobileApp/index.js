import 'expo-dev-client';

import { registerRootComponent } from 'expo';
// import { firebase } from '@react-native-firebase/app';
import App from './src/App';

// Initialize Firebase
// TODO: Setup firebase
// firebase.initializeApp();

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
