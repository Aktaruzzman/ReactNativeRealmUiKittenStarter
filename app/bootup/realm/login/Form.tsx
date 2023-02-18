import React from 'react'
import { Keyboard, ScrollView, TouchableOpacity, View } from 'react-native'
import { Input, Text, Button, Spinner, CheckBox } from '@ui-kitten/components'
import { WebBrowserService } from '../../../services/web-browser.service';
import { Realm, useApp } from '@realm/react';
import { verifyEmail, verifyPassword } from '../../../utility/verify';
import { style } from '../../../styles';
import { CommonProps, FieldError } from '../../../types';

export enum AuthState { None, Loading, LoginError, RegisterError }
interface IForm { email: string, password: string };
const formDataInit: IForm = { email: "", password: "" }
interface IFormErrors { email: FieldError, password: FieldError }
const formErrorsInit: IFormErrors = { email: { hasError: true, showError: false }, password: { hasError: true, showError: false } }

export const Form: React.FC<CommonProps & { login: boolean, register: boolean }> = ({ login, register }) => {

    const app = useApp();
    const ref1 = React.createRef<Input>();
    const ref2 = React.createRef<Input>();
    const [formData, setFormData] = React.useState(formDataInit);
    const [formErrors, setFormErrors] = React.useState(formErrorsInit);
    const [saved, setSaved] = React.useState(false);
    const [agreed, setAggreed] = React.useState(false);
    const [authState, setAuthState] = React.useState(AuthState.None);
    const [msg, setMsg] = React.useState('');

    const hasFormError = () => {
        return formErrors.email.hasError || formErrors.password.hasError
    }


    const handleLogin = React.useCallback(async () => {
        setAuthState(AuthState.Loading);
        const credentials = Realm.Credentials.emailPassword(formData.email, formData.password);
        try {
            await app.logIn(credentials);
            setAuthState(AuthState.None);
        } catch (e: any) {
            setMsg('Invalid Credentials Or Network Error')
            console.log('Error logging in', e['Error']);
            setAuthState(AuthState.LoginError);
            setTimeout(() => setMsg(''), 5000)

        }
    }, [formData.email, formData.password, setAuthState, app]);


    const handleRegister = React.useCallback(async () => {
        setAuthState(AuthState.Loading);
        try {
            await app.emailPasswordAuth.registerUser({ email: formData.email, password: formData.password });
            const credentials = Realm.Credentials.emailPassword(formData.email, formData.password);
            await app.logIn(credentials);
            setAuthState(AuthState.None);
        } catch (e: unknown) {
            setMsg('Duplicate Registration / Network Error')
            console.log('Error registering', e);
            setAuthState(AuthState.RegisterError);
            setTimeout(() => setMsg(''), 5000)
        }
    }, [formData.email, formData.password, setAuthState, app]);


    return (
        <ScrollView>
            <View style={[style.flexColumnCenter, style.marginY16]}>
                <Input
                    size='large'
                    ref={ref1}
                    style={[style.rowFull, style.marginY4]}
                    textStyle={[style.fontBold]}
                    autoCapitalize='none'
                    returnKeyType="next"
                    onSubmitEditing={() => formErrors.email.hasError ? ref1.current?.focus : ref2.current?.focus()}
                    label={(props) => <Text {...props} category={"label"}>{"Email Address"}{formErrors.email.showError && formErrors.email.hasError ? formData.email ? " : Invalid" : (formData.email ? " : Required" : "") : ""}</Text>}
                    value={formData.email} keyboardType='email-address'
                    onChangeText={(txt) => {
                        setFormData(formData => ({ ...formData, email: txt }))
                        setFormErrors({ ...formErrors, email: { hasError: !verifyEmail(txt), showError: true } });
                    }}
                    status={formErrors.email.hasError && formErrors.email.showError ? "danger" : "basic"}
                />

                <Input
                    size='large'
                    ref={ref2}
                    style={[style.rowFull, style.marginY8]}
                    textStyle={[style.fontBold]}
                    autoCapitalize='none'
                    returnKeyType={'send'}
                    onSubmitEditing={() => (hasFormError()) ? Keyboard.dismiss : login ? handleLogin() : handleRegister()}
                    label={(props) => <Text {...props} category={"label"}>{"Password"}{formErrors.password.showError && formErrors.password.hasError ? formData.password ? " : Min 8 chars, including a letter and a digit" : (formData.password ? " : Required" : "") : ""}</Text>}
                    secureTextEntry={true} value={formData.password}
                    onChangeText={(txt) => {
                        setFormData(formData => ({ ...formData, password: txt }))
                        setFormErrors({ ...formErrors, password: { hasError: !verifyPassword(txt), showError: true } });
                    }}
                    status={formErrors.password.hasError && formErrors.password.showError ? "danger" : "basic"}
                />
                {register && <View style={[style.flexRowStart, style.rowFull, style.marginY4]}>
                    <CheckBox checked={saved} onChange={nextChecked => setSaved(nextChecked)}>{(props) => <Text {...props} style={[style.paddingL8]}>{"I have saved the "}<Text style={[style.fontBold, { textDecorationLine: "underline" }]}>{"credentials"}</Text></Text>}</CheckBox>
                </View>}
                {register && <View style={[style.flexRowStart, style.rowFull, style.marginY4]}>
                    <CheckBox checked={agreed} onChange={nextChecked => setAggreed(nextChecked)}>{(props) => <Text {...props} style={[style.paddingL8]}>{"I do aggree with"}{" "}</Text>}</CheckBox>
                    <TouchableOpacity onPress={() =>WebBrowserService.openBrowserAsync("https://google.com")}><Text style={[style.fontBold, { textDecorationLine: "underline" }]}>{"terms & conditions"}</Text></TouchableOpacity>
                </View>}

            </View>

            <View style={[style.flexRowStart]}>
                {login && (<View style={[style.rowFull, style.flexRowSpace, style.marginY4]}>
                    <Button size='large' onPress={handleLogin} disabled={authState === AuthState.Loading || hasFormError()} style={[style.buttonWidth]}>Connect</Button>
                    {(authState === AuthState.Loading) && <Spinner />}
                    {msg.length > 0 && <Text category='label' status='danger'>{msg}</Text>}
                </View>)}
                {register && (<View style={[style.rowFull, style.flexRowSpace, style.marginY4]}>
                    <Button size='large' onPress={handleRegister} disabled={authState === AuthState.Loading || hasFormError() || !saved || !agreed} style={[style.buttonWidth]}>Create</Button>
                    {(authState === AuthState.Loading) && <Spinner />}
                    {msg.length > 0 && <Text category='label' status='danger'>{msg}</Text>}
                </View>)}
            </View>
        </ScrollView>

    )
}


