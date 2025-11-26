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
import { router } from 'expo-router'

export default function Login() {
    const [localError, setLocalError] = useState<string | undefined>() // Лоальное состояние для ошибок
    const [email, setEmail] = useState<string>('') // Состояние для хранения email
    const [password, setPassword] = useState<string>('') // Состояние для хранения пароля
    const [{ accessToken, isLoading, error }, login] = useAtom(loginAtom) // Вытаскиваем атом авторизации

    // Если случится ошибка, отобразить её
    useEffect(() => {
        if (error) {
            setLocalError(error)
        }
    }, [error])

    // Если появился токен, перенаправить на гланую
    useEffect(() => {
        if (accessToken) {
            router.replace('/(app)')
        }
    })

    // Запускаем авторизацию с данными из формы
    const submit = async () => {
        if (!email) {
            return setLocalError('Не введён Email')
        }
        if (!password) {
            return setLocalError('Не введён пароль')
        }
        login({ email, password })
    }

    return (
        <View style={styles.container}>
            <ErrorNotification error={localError} />
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
                    <Button text={'Войти'} onPress={submit} isLoading={isLoading} />
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
