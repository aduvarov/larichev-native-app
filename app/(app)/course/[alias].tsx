import { Text, View } from 'react-native'
import { Colors } from '../../../shared/tokens'
import { useLocalSearchParams } from 'expo-router'

export default function CoursePage() {
    const { alias } = useLocalSearchParams()
    console.log('alias: ', alias)
    return (
        <View>
            <Text style={{ color: Colors.black }}>Страница курса по {alias}</Text>
        </View>
    )
}
