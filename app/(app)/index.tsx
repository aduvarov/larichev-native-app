import { Text, View } from 'react-native'
import { Colors } from '../../shared/tokens'
import { CustomLink } from '../../shared/CustomLink/CustomLink'
import { profileAtom } from '../../entities/user/model/user.state'
import { useAtom, useAtomValue } from 'jotai'
import { authAtom } from '../../entities/auth/model/auth.state'
import { useEffect } from 'react'
import { router, useRootNavigationState } from 'expo-router'

export default function AppLayout() {
    const [profile] = useAtom(profileAtom)
    const { accessToken } = useAtomValue(authAtom)
    const state = useRootNavigationState()

    useEffect(() => {
        if (!state?.key) return
        if (!accessToken) {
            router.replace('/login')
        }
    }, [accessToken])

    return (
        <View>
            <Text style={{ color: Colors.primary }}>{profile.profile?.name} Мои курсы</Text>
            <CustomLink href={'/login'} text={'Логин'} />
            <CustomLink href={'/restore'} text={'Восстановить пароль'} />
            <CustomLink href={'/course/typescript'} text={'Курс ts'} />
        </View>
    )
}
