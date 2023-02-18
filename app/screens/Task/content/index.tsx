import React from 'react'
import { View } from 'react-native'
import { style } from '../../../styles'
import { ColorType, CommonProps } from '../../../types'
import { TaskManager } from './TaskManager'

export const Content: React.FC<CommonProps & { palette: ColorType }> = (props) => {

    return (
        <View style={[style.padding16, { flex: 1 }]}>
            <TaskManager {...props} />
        </View>
    )
}
