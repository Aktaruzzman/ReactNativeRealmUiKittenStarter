import React from 'react'
import { Icon } from '@ui-kitten/components'
import { CommonProps } from '../types'
import { Pressable, ViewStyle } from 'react-native'

import { setTheme } from '../redux/features/reducers'

export const SwTheme: React.FC<CommonProps & {
    size?: number;
    style?: ViewStyle | undefined
}> = ({ color, theme, dispatch, size = 20, style }) => (
    <Pressable style={[{ ...style }]} onPress={() => dispatch(setTheme(theme == "light" ? "dark" : "light"))}>
        <Icon name={theme == "dark" ? "sun-outline" : "moon-outline"} style={[{ width: size, height: size, color: color }]} fill={color} />
    </Pressable>
)

