
import React from 'react'
import { ScrollView, View } from 'react-native'
import { Text } from '@ui-kitten/components'
import { style } from '../../../styles'


export const Content: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={[{ flex: 1 }, style.padding16]}>
            <Text category='h2' style={[style.paddingB8]}>Welcome,</Text>
            <Text category='s1' style={[style.fontBold]}>The Repo has total solution for any react Native App</Text>
            <Text category='s2' style={[style.paddingY8]}>Reday UI, Multi theming, Realm database, Redux/Toolkit, Written in typescript.</Text>

            <Text category='s1'>
                <Text category='s1'>{"01."}</Text>
                <Text category='s1' status='primary' style={[style.fontBold]}>{" "}{"UIKitten"}{" "}</Text>
                {"component library"}
            </Text>
            <Text category='s1'>
                {"02."}
                <Text category='s1' status='primary' style={[style.fontBold]}>{" "}{"15 Ready Color"}{" "}</Text>
                <Text category='s1'>{"themes"}</Text>
            </Text>
            <Text category='s1'>
                <Text category='s1'>{"03. Switching between"}</Text>
                <Text category='s1' status='primary' style={[style.fontBold]}>{" "}{"light & dark"}{" "}</Text>
                <Text category='s1'>{"theme"}</Text>
            </Text>
            <Text category='s1'>
                {"04."}
                <Text category='s1' status='primary' style={[style.fontBold]}>{" "}{"React native vector icons"}{" "}</Text>
                <Text category='s1'>{" "}{"included"}</Text>
            </Text>
            <Text category='s1'>
                {"05."}
                <Text category='s1' status='primary' style={[style.fontBold]}>{" "}{"Async storage & Redux"}{" "}</Text>
                {"included"}
            </Text>
            <Text category='s1'>
                <Text category='s1'>{"06."}</Text>
                <Text category='s1' status='primary' style={[style.fontBold]}>{" "}{"Realm Database"}{" "}</Text>
                <Text category='s1'>{"integrated"}</Text>
            </Text>
            <Text category='s1'>
                <Text category='s1'>{"07. Realm"}</Text>
                <Text category='s1' status='primary' style={[style.fontBold]}>{" "} {"Offline / Flexible Sync"}</Text>
            </Text>
            <Text category='s1'>
                {"08. Realm"}
                <Text category='s1' status='primary' style={[style.fontBold]}>{" "}{" Login, Registration & Crud"}{" "}</Text>
                {"demo"}
            </Text>
            <Text category='s1'>{"08. Written fully in"}
                <Text category='s1' status='primary' style={[style.fontBold]}>{" "}{"typescript"}</Text>
            </Text>
            <Text category='s1'>{"09. Build with "}
                <Text category='s1' status='primary' style={[style.fontBold]}>{" "}{"Hermes"}</Text>
            </Text>
            <Text category='s1'>{"10. Release App has "}
                <Text category='s1' status='primary' style={[style.fontBold]}>{" "}{"excellent performance"}</Text>
            </Text>
            <Text category='s1' style={[style.fontBold, style.marginY16,style.fontItalic,style.textCenter]}>{"React Native: 0.70.6"}{" "}{"Realm: 11.3.1"}{" "}{"Typescript: 4.4.8"}{" "}{"UIKitten: 5.1.2"}</Text>

            <Text category='h6' style={[style.fontBold, style.marginY16,style.fontUpper,style.textCenter]}>{"You got a perfect start, Build your cherished dream app now"}</Text>
        </ScrollView>

    )
}
