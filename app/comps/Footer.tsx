
import React from 'react'
import { Text } from '@ui-kitten/components'
import { WebBrowserService } from '../services/web-browser.service'
import { TouchableOpacity, View } from 'react-native'
import { style } from '../styles'
import { AppInfoService } from '../services/app-info.service'


export const Footer = ({ color, border }: { color: string, border: string }) => {
    return (
        <View style={[style.flexRowSpace, style.row, { borderBottomWidth: 0, borderColor: border }]}>
            <Text category={'c2'} style={[style.fontBold, style.paddingX12]}>{'Version:' + AppInfoService.getVersion()}</Text>
            <TouchableOpacity onPress={() => WebBrowserService.openBrowserAsync('http://google.com')}><Text category={'c2'} style={[style.fontBold, style.paddingX12]}>{'ZaaSTech'}</Text></TouchableOpacity>
        </View>
    )
}
