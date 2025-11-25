import { Text, View } from 'react-native'
import { Colors } from '../../shared/tokens'
import { CustomLink } from '../../shared/CustomLink/CustomLink'
import { profileAtom } from '../../entities/user/model/user.state'
import { useAtom } from 'jotai'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'

export default function AppLayout() {
    const [profile] = useAtom(profileAtom)

    useEffect(() => {
        AsyncStorage.setItem('demo', 'test').then(async () => {
            console.log(await AsyncStorage.getAllKeys())
            console.log(await AsyncStorage.getItem('demo'))
            console.log(await AsyncStorage.removeItem('demo'))
            console.log(await AsyncStorage.getItem('demo'))
        })
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
