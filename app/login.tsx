// import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Image } from 'react-native'
import { Input } from '../shared/Input/Input'
import { Colors, Gaps } from '../shared/tokens'
import { Button } from '../shared/Button/Button'
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification'
import { useEffect, useState } from 'react'
import { CustomLink } from '../shared/CustomLink/CustomLink'
import { loginAtom } from '../entities/auth/model/auth.state'
import { useAtom } from 'jotai'

export default function Login() {
    const [error, setError] = useState<string | undefined>()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [auth, login] = useAtom(loginAtom)

    const alert = () => {
        setError('Неверный логин или пароль')
        setTimeout(() => {
            setError(undefined)
        }, 4000)
    }

    useEffect(() => {
        console.log('auth changed', auth)
    }, [auth])

    const loginUser = () => {
        console.log(email, password, auth)
        login({ email: email, password: password })
        setPassword('')
    }

    return (
        <View style={styles.container}>
            <ErrorNotification error={error} />
            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                    resizeMode="contain"
                />
                <View style={styles.form}>
                    <Input placeholder="Email" onChangeText={setEmail} value={email} />
                    <Input
                        isPassword
                        placeholder="Пароль"
                        onChangeText={setPassword}
                        value={password}
                    />
                    <Button text={'Войти'} onPress={loginUser} />
                </View>
                <CustomLink href={'/restore'} text={'Восстановить пароль'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        padding: 55,
        backgroundColor: Colors.black,
    },
    content: {
        alignItems: 'center',
        gap: Gaps.g50,
    },
    form: {
        alignSelf: 'stretch',
        gap: Gaps.g16,
    },
    logo: {
        width: 220,
    },
})
