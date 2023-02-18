import { Appearance, ColorSchemeName, Platform } from "react-native";

export const getDeviceColorScheme = (): ColorSchemeName => {
    if (Platform.OS === 'android') {
        return Platform.Version >= 10 ? Appearance.getColorScheme() : 'light';
    }
};