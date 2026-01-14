// import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Image, Dimensions, KeyboardAvoidingView, Platform } from 'react-native'
import { Input } from '../shared/Input/Input'
import { Colors, Gaps } from '../shared/tokens'
import { Button } from '../shared/Button/Button'
import { ErrorNotification } from '../shared/ErrorNotification/ErrorNotification'
import { useEffect, useState } from 'react'
import { CustomLink } from '../shared/CustomLink/CustomLink'
import { loginAtom } from '../entities/auth/model/auth.state'
import { useAtom } from 'jotai'
import { router } from 'expo-router'
import { useScreenOrientation } from '../shared/hooks'
import { Orientation } from 'expo-screen-orientation'

export default function Login() {
    const [localError, setLocalError] = useState<string | undefined>() // Лоальное состояние для ошибок
    const [email, setEmail] = useState<string>('') // Состояние для хранения email
    const [password, setPassword] = useState<string>('') // Состояние для хранения пароля
    const [{ accessToken, isLoading, error }, login] = useAtom(loginAtom) // Вытаскиваем атом авторизации
    const orientation = useScreenOrientation()
    console.log('orientation: ', orientation)

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
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.content}
            >
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                    resizeMode="contain"
                />
                <View style={styles.form}>
                    <View
                        style={{
                            flexDirection:
                                orientation === Orientation.PORTRAIT_UP ? 'column' : 'row',
                            gap: Gaps.g16,
                        }}
                    >
                        <Input
                            style={{
                                width:
                                    orientation === Orientation.PORTRAIT_UP
                                        ? 'auto'
                                        : Dimensions.get('window').width / 2 - 16 - 24,
                            }}
                            placeholder="Email"
                            onChangeText={setEmail}
                            value={email}
                        />
                        <Input
                            style={{
                                width:
                                    orientation === Orientation.PORTRAIT_UP
                                        ? 'auto'
                                        : Dimensions.get('window').width / 2 - 16 - 24,
                            }}
                            isPassword
                            placeholder="Пароль"
                            onChangeText={setPassword}
                            value={password}
                        />
                    </View>
                    <Button text={'Войти'} onPress={submit} isLoading={isLoading} />
                </View>
                <CustomLink href={'/restore'} text={'Восстановить пароль'} />
            </KeyboardAvoidingView>
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
        width: Platform.select({ ios: 220, android: 300 }),
    },
})
