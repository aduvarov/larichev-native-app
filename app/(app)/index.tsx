import { Text, View } from 'react-native'
import { Colors } from '../../shared/tokens'
import { useSetAtom } from 'jotai'
import { logoutAtom } from '../../entities/auth/model/auth.state'
import { Button } from '../../shared/Button/Button'

export default function AppLayout() {
    const logout = useSetAtom(logoutAtom)
    return (
        <View>
            <Text style={{ color: Colors.primary }}> Мои курсы</Text>
            <Button onPress={logout} text={'Выход'} />
        </View>
    )
}
