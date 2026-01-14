import { View, Pressable, StyleSheet } from 'react-native'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import CloseIcon from '../../../../assets/icons/CloseIcon'

export const CloseDrawer = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <Pressable onPress={() => navigation.closeDrawer()}>
            <View style={styles.button}>
                <CloseIcon />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 20,
        // backgroundColor: 'blue',
    },
})
