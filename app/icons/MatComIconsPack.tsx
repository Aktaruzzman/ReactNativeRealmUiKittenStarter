import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MatComIconsPack = {
    name: 'matcom',
    icons: createIconsMap(),
};

function createIconsMap() {
    return new Proxy({}, {
        get(target, name) {
            return MatComIconProvider(name);
        },
    });
}

const MatComIconProvider = (name: any) => ({
    toReactElement: (props: any) => MaterialComIcon({ name, ...props }),
});

function MaterialComIcon({ name, style }: { name: any, style: any }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
        <Icon name={name} size={height} color={tintColor} style={iconStyle} />
    );
}