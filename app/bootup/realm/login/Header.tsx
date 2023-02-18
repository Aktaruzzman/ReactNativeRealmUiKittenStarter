
import React from 'react'
import { Text } from '@ui-kitten/components'
import { SwTheme } from '../../../comps'
import { Row } from '../../../comps/Row'
import { CommonProps } from '../../../types'

export const Header: React.FC<CommonProps> = (props) => {
    return (
        <Row {...props} height={50} level="3" borderPos='bottom'>
            <Text category="h3">React Native Starter</Text>
            <SwTheme {...props} size={32} />
        </Row>
    )
}

