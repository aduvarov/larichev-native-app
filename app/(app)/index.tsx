import { Text, View } from 'react-native'
import { Colors } from '../../shared/tokens'
import { useSetAtom } from 'jotai'
import { logoutAtom } from '../../entities/auth/model/auth.state'
import { Button } from '../../shared/Button/Button'

const logout = useSetAtom(logoutAtom)

export default function AppLayout() {
    return (
        <View>
            <Text style={{ color: Colors.primary }}> Мои курсы</Text>
            <Button onPress={logout} text={'Выход'} />
        </View>
    )
}
