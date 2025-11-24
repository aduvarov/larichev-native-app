import { Text, View } from 'react-native'
import { Colors } from '../shared/tokens'
import { Link } from 'expo-router'

export default function Restore() {
    return (
        <View>
            <Link href={'/'}>
                <Text style={{ color: Colors.white }}>Restore</Text>
            </Link>
        </View>
    )
}
