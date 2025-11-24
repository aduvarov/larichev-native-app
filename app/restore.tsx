import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../shared/tokens'
import { Link } from 'expo-router'

export default function Restore() {
    return (
        <View style={styles.view}>
            <Link href={'/'}>
                <Text style={styles.text}>Restore</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        height: 200,
        justifyContent: 'center',
        alignContent: 'center',
    },
    text: {
        height: 200,
        textAlign: 'center',
        width: 200,
        color: Colors.black,
    },
})
