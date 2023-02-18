import React from 'react'
import { View } from 'react-native'
import { useTheme } from '@ui-kitten/components'
import { Header } from './Header'
import { LogInfo } from './LogInfo'
import { RegInfo } from './RegInfo'
import { Form } from './Form'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { CommonProps } from '../../../types'
import { style } from '../../../styles'
import { Footer } from '../../../comps/Footer'
import { SafeArea } from '../../../comps/SafeArea'
import { Row } from '../../../comps/Row'

export const Login: React.FC = () => {

    const theme = useAppSelector((state) => state.theme.value)
    const color = useTheme()[`color-primary-500`];
    const border = theme === 'light' ? useTheme()['color-basic-400'] : useTheme()['color-basic-1100'];
    const dispatch = useAppDispatch()
    const props: CommonProps = { theme, color, border, dispatch }
    const [login, setLogin] = React.useState(true);
    const [register, setRegister] = React.useState(false);

    const loginView = () => {
        setRegister(false)
        setLogin(true);
    }
    const registerView = () => {
        setLogin(false);
        setRegister(true)
    }

    return (
        <SafeArea insets="top" style={[{ flex: 1 }]} level={theme == "dark" ? "2" : "1"}>
            <Header {...props} />
            <View style={[{ flex: 1 }, style.paddingX16]}>
                {login && <LogInfo {...props} register={registerView} />}
                {register && <RegInfo {...props} login={loginView} />}
                <Form {...props} login={login} register={register} />
            </View>
            <Row {...props} height={30} level="2" borderPos='top'>
                <Footer border={border} color={color} />
            </Row>
        </SafeArea>
    )
}

