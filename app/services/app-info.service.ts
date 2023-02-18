import DeviceInfo from 'react-native-device-info';

export class AppInfoService {
  static getVersion = (): string => {
    return DeviceInfo.getVersion();
  };
  static getBuildNumber = (): string => {
    return DeviceInfo.getBuildNumber();
  };
  static isLandscape = (): boolean => {
    return DeviceInfo.isLandscapeSync();
  };
  static isTablet = (): boolean => {
    return DeviceInfo.isTablet();
  };
  static getDeviceType = (): string => {
    return DeviceInfo.getDeviceType();
  };
}
