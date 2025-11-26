import { Animated, Dimensions, StyleSheet, Text } from 'react-native'
import { Colors, Fonts } from '../tokens'
import { ErrorNotificationProps } from './ErrorNotification.props'
import { useEffect, useState } from 'react'

export const ErrorNotification = ({ error }: ErrorNotificationProps) => {
    const [isShown, setIsShown] = useState<boolean>(false)
    const animatedValue = new Animated.Value(-100)

    const onEnter = () => {
        Animated.timing(animatedValue, {
            duration: 300,
            toValue: 0,
            useNativeDriver: true,
        }).start()
    }

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
        <Animated.View
            style={{ ...styles.error, transform: [{ translateY: animatedValue }] }}
            onLayout={onEnter}
        >
            <Text style={styles.errorText}>{error}</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    error: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        backgroundColor: Colors.red,
        padding: 15,
        top: 0,
    },
    errorText: {
        fontSize: Fonts.f16,
        color: Colors.white,
        textAlign: 'center',
        fontFamily: 'FiraSans',
    },
})
