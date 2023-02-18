import React from 'react';
import { Icon, IconElement, IconProps } from '@ui-kitten/components';
import { ImageStyle } from 'react-native';

export const CheckmarkIcon = (style: IconProps): IconElement => (
  <Icon {...style} name='checkmark' />
);
export const LogoutIcon = (props: IconProps) => (
  <Icon {...props} name='log-out' />
);
export const AssetAuthIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} pack='app' name='auth' />
);
export const StoreIcon = (props: IconProps) => (
  <Icon {...props} name='store-marker-outline' pack='matcom' />
);
export const RestaurantIcon = (props: IconProps) => (
  <Icon {...props} name='restaurant-outline' pack='ion' />
);









