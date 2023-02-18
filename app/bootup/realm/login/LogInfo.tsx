import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { CommonProps } from '../../../types';
import { style } from '../../../styles';

export const LogInfo: React.FC<CommonProps & { register: Function }> = ({ register }) => {
  return (
    <View style={[style.flexRowStart, style.rowFull, style.paddingB12]}>
      <Text category={'h5'} style={[style.rowFull]}>Login</Text>
      <Text  category='s1'>{'If you have no account, Please '}</Text>
      <TouchableOpacity onPress={() => { register() }}>
        <Text category='s1' style={[style.fontBold,{ textDecorationLine: "underline" }]}>{'Register'}</Text>
      </TouchableOpacity>
    </View>
  )
}

