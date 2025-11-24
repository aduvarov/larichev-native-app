import { Text, View } from 'react-native'
import { Colors } from '../../shared/tokens'
import { useLocalSearchParams } from 'expo-router'

export default function CoursePage() {
    const { alias } = useLocalSearchParams()
    return (
        <View>
            <Text style={{ color: Colors.white }}>Страница курса по {alias}</Text>
        </View>
    )
}
