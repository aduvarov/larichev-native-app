import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const ourStyle = {
    textStyle: { color: 'blue' },
}
const textStyle = { color: 'magenta' }

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.textStyle}>Моё первое приложение</Text>
                <Button title="Я кнопка" />
            </View>
            <View
                style={{
                    backgroundColor: 'yellow',
                    alignItems: 'flex-start',
                    height: 500,
                    justifyContent: 'space-evenly',
                }}>
                <View style={{ backgroundColor: 'tomato', height: 100 }}>
                    <Text>1</Text>
                </View>
                <View
                    style={{ backgroundColor: 'purple', width: 100, height: 100 }}></View>
                <View
                    style={{ backgroundColor: 'green', width: 100, height: 100 }}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
    },
    textStyle: {
        color: 'green',
        fontSize: 24,
        borderWidth: 1,
        borderColor: 'red',
    },
    top: {
        flexDirection: 'row',
    },
})
