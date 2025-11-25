import { Text, View } from 'react-native'
import { Colors } from '../../shared/tokens'
import { CustomLink } from '../../shared/CustomLink/CustomLink'
import { profileAtom } from '../../entities/user/model/user.state'
import { useAtom } from 'jotai'

export default function AppLayout() {
    const [profile] = useAtom(profileAtom)
    return (
        <View>
            <Text style={{ color: Colors.primary }}>{profile.profile?.name} Мои курсы</Text>
            <CustomLink href={'/login'} text={'Логин'} />
            <CustomLink href={'/restore'} text={'Восстановить пароль'} />
            <CustomLink href={'/course/typescript'} text={'Курс ts'} />
        </View>
    )
}
