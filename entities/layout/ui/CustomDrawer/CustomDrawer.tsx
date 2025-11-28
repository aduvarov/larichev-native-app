import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../../../shared/tokens'
import { CustomLink } from '../../../../shared/CustomLink/CustomLink'
import { CloseDrawer } from '../CloseDrawer/CloseDrawer'
import { useSetAtom } from 'jotai'
import { logoutAtom } from '../../../auth/model/auth.state'

export const CustomDrawer = (props: DrawerContentComponentProps) => {
    const logout = useSetAtom(logoutAtom)
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollview}>
            <View style={styles.content}>
                <Text>Text</Text>
                <CloseDrawer {...props} />
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
    footer: { gap: 50, marginBottom: 40, alignItems: 'center' },
    logo: {
        width: 160,
    },
})
