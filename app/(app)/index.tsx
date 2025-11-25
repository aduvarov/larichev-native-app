import { Text, View } from 'react-native'
import { Colors } from '../../shared/tokens'
import { CustomLink } from '../../shared/CustomLink/CustomLink'
import { profileAtom } from '../../entities/user/model/user.state'
import { useAtom } from 'jotai'
import { loginAtom } from '../../entities/auth/model/auth.state'
import { useEffect } from 'react'

export default function AppLayout() {
    const [profile] = useAtom(profileAtom)
    const [auth, login] = useAtom(loginAtom)

    useEffect(() => {
        login({ email: 'a.b.uvarov@gmail.com', password: '12345678' })
    }, [])

    return (
        <View>
            <Text style={{ color: Colors.primary }}>
                {profile.profile?.name} Мои курсы {auth?.accessToken}
            </Text>
            <CustomLink href={'/login'} text={'Логин'} />
            <CustomLink href={'/restore'} text={'Восстановить пароль'} />
            <CustomLink href={'/course/typescript'} text={'Курс ts'} />
        </View>
    )
}
