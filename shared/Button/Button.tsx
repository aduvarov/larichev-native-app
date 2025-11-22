import { Animated, Pressable, PressableProps, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts, Radius } from '../tokens'

export const Button = ({ text, ...props }: PressableProps & { text: string }) => {
    const animatedValue = new Animated.Value(100)
    const color = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.primaryHover, Colors.primary],
    })

    Animated.timing(animatedValue, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
    }).start()
    return (
        <Pressable {...props} onPress={() => console.log('press')}>
            <Animated.View
                style={{
                    ...styles.button,
                    backgroundColor: color,
                }}>
                <Text style={styles.buttonText}>{text}</Text>
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 58,
        borderRadius: Radius.r10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: Colors.white,
        fontSize: Fonts.f18,
    },
})
