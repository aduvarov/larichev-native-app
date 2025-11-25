import { Text, View } from 'react-native'
import { Colors } from '../../shared/tokens'
import { CustomLink } from '../../shared/CustomLink/CustomLink'
import { profileAtom } from '../../entities/user/model/user.state'
import { useAtom, useSetAtom } from 'jotai'
import { logoutAtom } from '../../entities/auth/model/auth.state'
import { Button } from '../../shared/Button/Button'

export default function AppLayout() {
    const [profile] = useAtom(profileAtom)
    const logout = useSetAtom(logoutAtom)

    const logoutUser = () => {
        console.log('logout')
        logout()
    }

    return (
        <View>
            <Text style={{ color: Colors.primary }}>{profile.profile?.name} Мои курсы</Text>
            <CustomLink href={'/login'} text={'Логин'} />
            <CustomLink href={'/restore'} text={'Восстановить пароль'} />
            <CustomLink href={'/course/typescript'} text={'Курс ts'} />
            <Button text={'Logout'} onPress={logoutUser} />
        </View>
    )
}
