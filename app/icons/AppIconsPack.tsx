import React from 'react';
import { Image, ImageRequireSource } from 'react-native';

const IconProvider = (source: ImageRequireSource) => ({
  toReactElement: ({ animation, ...style }: { animation: any }) => (
    <Image style={style} source={source} />
  ),
});

export const AppIconsPack = {
  name: 'app',
  icons: {
    'avatar': IconProvider(require(`../assets/images/icon-avatar.png`)),
  },
};
