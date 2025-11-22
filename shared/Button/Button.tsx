import { Animated, Pressable, PressableProps, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts, Radius } from '../tokens'

export const Button = ({ text, ...props }: PressableProps & { text: string }) => {
    const animatedValue = new Animated.ValueXY({ x: 0, y: 0 })
    Animated.timing(animatedValue, {
        toValue: {
            x: 100,
            y: 100,
        },
        duration: 2000,
        useNativeDriver: true,
    }).start()
    return (
        <Pressable {...props} onPress={() => console.log('press')}>
            <Animated.View
                style={{
                    ...styles.button,
                    transform: [
                        { translateX: animatedValue.x },
                        { translateY: animatedValue.y },
                    ],
                }}>
                <Text style={styles.buttonText}>{text}</Text>
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
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
