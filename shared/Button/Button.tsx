import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts, Radius } from '../tokens'

export const Button = ({ text, ...props }: PressableProps & { text: string }) => {
    return (
        <Pressable {...props} onPress={() => console.log('press')}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
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
