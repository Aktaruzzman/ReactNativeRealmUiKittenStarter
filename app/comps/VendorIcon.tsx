
import React from 'react'
import { Icon } from '@ui-kitten/components'
import { CommonProps } from '../types'

export const VendorIcon: React.FC<CommonProps> = ({ color }) => {
    return <Icon name='sync-circle-outline' pack='ion' style={{ width: 150, height: 150, color: color }} fill={color} />
}
