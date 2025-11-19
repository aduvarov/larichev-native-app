import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const ourStyle = {
    textStyle: { color: 'blue' },
}
const textStyle = { color: 'magenta' }

export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ color: 'white', backgroundColor: 'blue', padding: 10 }}>
                    REACT NATIVE
                </Text>
            </View>
            <Text style={styles.textStyle}>Моё первое приложение</Text>\
            <Text style={ourStyle.textStyle}>EXPO</Text>
            <StatusBar style="auto" />
            <TextInput value="привет" style={textStyle} />
            <Button title="Я кнопка" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'green',
        fontSize: 24,
        borderWidth: 1,
        borderColor: 'red',
        padding: 10,
        margin: 10,
    },
})
