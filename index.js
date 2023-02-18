import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Core } from './app/bootup/Core';
AppRegistry.registerComponent(appName, () => Core);
