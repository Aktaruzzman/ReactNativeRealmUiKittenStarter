import React from 'react'
import { Icon } from '@ui-kitten/components'
import { useUser } from '@realm/react'
import { CommonProps } from '../types'
import { TouchableOpacity, ViewStyle } from 'react-native'


export const Logout: React.FC<CommonProps & {

    size?: number;
    style?: ViewStyle | undefined

}> = ({ color, size = 20, style }) => {

    const user = useUser();

    return (
        <TouchableOpacity style={[{ ...style }]} onPress={() => user?.logOut()}>
            <Icon name={"log-out-outline"} style={[{ width: size, height: size, color: color }]} fill={color} />
        </TouchableOpacity>
    )
}

