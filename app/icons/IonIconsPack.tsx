import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const IonIconsPack = {
    name: 'ion',
    icons: createIconsMap(),
};

function createIconsMap() {
    return new Proxy({}, {
        get(target, name) {
            return IconProvider(name);
        },
    });
}

const IconProvider = (name: any) => ({
    toReactElement: (props: any) => FeatherIcon({ name, ...props }),
});

function FeatherIcon({ name, style }: { name: any, style: any }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
        <Icon name={name} size={height} color={tintColor} style={iconStyle} />
    );
}