import { Text, View } from 'react-native'
import { Colors } from '../../shared/tokens'
import { CustomLink } from '../../shared/CustomLink/CustomLink'
import { profileAtom } from '../../entities/user/model/user.state'
import { useAtom } from 'jotai'
import { API } from '../../entities/auth/api/api'
import { useEffect } from 'react'
import axios from 'axios'
import { IAuthResponse } from '../../entities/auth/model/auth.interfaces'

export default function AppLayout() {
    const [profile] = useAtom(profileAtom)

    const login = async () => {
        const { data } = await axios.post<IAuthResponse>(API.login, {
            email: 'a.b.uvarov@gmail.com',
            password: '12345678',
        })
        console.log(data)
    }

    useEffect(() => {
        login()
    }, [])

    return (
        <View>
            <Text style={{ color: Colors.primary }}>{profile.profile?.name} Мои курсы</Text>
            <CustomLink href={'/login'} text={'Логин'} />
            <CustomLink href={'/restore'} text={'Восстановить пароль'} />
            <CustomLink href={'/course/typescript'} text={'Курс ts'} />
        </View>
    )
}
