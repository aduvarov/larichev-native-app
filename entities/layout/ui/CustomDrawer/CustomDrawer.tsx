import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { Image, StyleSheet, View } from 'react-native'
import { Colors } from '../../../../shared/tokens'
import { CustomLink } from '../../../../shared/CustomLink/CustomLink'
import { CloseDrawer } from '../CloseDrawer/CloseDrawer'
import { useAtom, useSetAtom } from 'jotai'
import { logoutAtom } from '../../../auth/model/auth.state'
import { loadProfileAtom } from '../../../user/model/user.state'
import { useEffect } from 'react'
import { UserMenu } from '../../../user/ui/UserMenu/UserMenu'
import { User } from '../../../user/model/user.model'
import CourseIcon from '../../../../assets/icons/CoursesIcon'
import ProfileIcon from '../../../../assets/icons/ProfileIcon'
import { MenuItem } from '../MenuItem/MenuItem'

const MENU = [
    { text: 'Курсы', icon: <CourseIcon />, path: '/(app)' },
    { text: 'Профиль', icon: <ProfileIcon />, path: '/profile' },
]

export const CustomDrawer = (props: DrawerContentComponentProps) => {
    const logout = useSetAtom(logoutAtom)
    const [profile, loadProfile] = useAtom(loadProfileAtom)
    const user: Pick<User, 'name' | 'photo' | 'surname'> = {
        name: profile.profile?.name || '',
        surname: profile.profile?.surname,
        photo: profile.profile?.photo,
    }

    useEffect(() => {
        loadProfile()
    }, [])

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollview}>
            <View style={styles.content}>
                <View>
                    <CloseDrawer {...props} />
                </View>
                <View style={styles.menu}>
                    <UserMenu user={user} {...props} />
                    {MENU.map((menu) => (
                        <MenuItem key={menu.path} {...menu} navigation={props.navigation} />
                    ))}
                </View>
            </View>
            <View style={styles.footer}>
                <CustomLink text="Выход" href="/login" onPress={() => logout()} />
                <Image
                    style={styles.logo}
                    source={require('../../../../assets/logo.png')}
                    resizeMode="contain"
                />
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    content: { flex: 1 },
    footer: {
        gap: 50,
        paddingBottom: 40,
        alignItems: 'center',
    },
    logo: {
        width: 160,
    },
    menu: {
        marginTop: 25,
        flex: 1,
        backgroundColor: Colors.red,
    },
})
