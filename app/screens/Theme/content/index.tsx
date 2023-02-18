import { Text } from '@ui-kitten/components'
import React from 'react'
import { View } from 'react-native'
import { SwColor } from '../../../comps/SwColor'
import { style } from '../../../styles'
import { ColorType, CommonProps } from '../../../types'

export const Content: React.FC<CommonProps & { palette: ColorType }> = (props) => {

    return (
        <View style={[style.padding16, { flex: 1 }]}>
            <Text status='primary' category='h3' style={[style.paddingB16]}>{"15 Ready Themes"}
                <Text>{" Press on the button to see the effect"}</Text>
            </Text>
            <SwColor {...props} />
        </View>
    )
}
