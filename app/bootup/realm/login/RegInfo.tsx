import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { CommonProps } from '../../../types';
import { style } from '../../../styles';

export const RegInfo: React.FC<CommonProps & { login: Function }> = ({ login }) => {
  return (
    <View style={[style.flexRowStart]}>
      <Text category={'h6'} style={[style.rowFull]}>Register,</Text>
      <Text category={'s1'}>{'If you have an account, Just '}</Text>
      <TouchableOpacity onPress={() => { login() }}>
        <Text category={'s1'} style={[style.fontBold, { textDecorationLine: "underline" }]}>{'Login'}</Text>
      </TouchableOpacity>
    </View>
  )

}

