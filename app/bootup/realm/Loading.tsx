
import React from 'react'
import { Spinner } from '@ui-kitten/components';
import { SafeArea } from '../../comps/SafeArea';
import { style } from '../../styles';
import { View } from 'react-native';


export const Loading = () => {

    return (
        <SafeArea insets="top" style={[{ flex: 1 }]} level={'1'}>
            <View style={[{ flex: 1 }, style.flexColumnCenter]}>
                <Spinner />
            </View>
        </SafeArea>
    )
}

