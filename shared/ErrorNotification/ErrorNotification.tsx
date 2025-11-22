import { Dimensions, StyleSheet, Text, TextProps, View } from 'react-native'
import { Colors, Fonts } from '../tokens'
import { ErrorNotificationProps } from './ErrorNotification.props'
import { useEffect, useState } from 'react'

export const ErrorNotification = ({ error }: ErrorNotificationProps) => {
    const [isShown, setIsShown] = useState<boolean>(false)

    useEffect(() => {
        if (!error) {
            return
        }
        setIsShown(true)
        const timerId = setTimeout(() => {
            setIsShown(false)
        }, 3000)
        return () => {
            clearTimeout(timerId)
        }
    }, [error])

    if (!isShown) {
        return <></>
    }
    return (
        <View style={styles.error}>
            <Text style={styles.errorText}>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        position: 'absolute',
        top: 40,
        backgroundColor: Colors.red,
        height: 100,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    errorText: {
        fontSize: Fonts.f16,
        color: Colors.white,
        textAlign: 'center',
    },
})
