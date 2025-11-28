import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../../../shared/tokens'
import { CustomLink } from '../../../../shared/CustomLink/CustomLink'

export const CustomDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollview}>
            <Text>Drawer</Text>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../../../../assets/logo.png')}
                    resizeMode="contain"
                />
                <CustomLink text="Выход" href="/login" />
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    logo: {},
})
