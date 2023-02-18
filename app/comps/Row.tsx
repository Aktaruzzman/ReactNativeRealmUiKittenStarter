import React, { PropsWithChildren } from 'react'
import { ViewStyle } from 'react-native'
import { Layout } from '@ui-kitten/components'
import { CommonProps } from '../types'
import { style as rowStyle } from '../styles'


export const Row: React.FC<
    PropsWithChildren<CommonProps & {
        height?: number;
        level?: '1' | '2' | '3' | '4'
        borderPos?: "top" | "bottom";
        style?: ViewStyle | undefined
    }>
> = ({ children, border, height = 40, level = "2", borderPos = "bottom", style }) => (
    <Layout level={level} style={[
        rowStyle.row,
        rowStyle.flexRowSpace,
        rowStyle.paddingX16,
        borderPos == "top" && rowStyle.borderT1,
        borderPos == "bottom" && rowStyle.borderB1,
        { borderColor: border, height: height }, { ...style }
    ]}>
        {children}
    </Layout>
)

