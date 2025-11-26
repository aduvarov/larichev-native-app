import { Text, View } from 'react-native'
import { Colors } from '../../shared/tokens'

export default function AppLayout() {
    return (
        <View>
            <Text style={{ color: Colors.primary }}> Мои курсы</Text>
        </View>
    )
}
