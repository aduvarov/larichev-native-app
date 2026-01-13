import { StyleSheet, View, Text } from 'react-native'
import { Colors, Fonts, Gaps } from '../../../../shared/tokens'
import { UserMenuProps } from './UserMenu.props'
import { Avatar } from '../../../../entities/user/ui/Avatar/Avatar'

export const UserMenu = ({ user }: UserMenuProps) => {
    console.log(user)
    return (
        <View style={styles.container}>
            <Avatar image={user.photo ?? null} />
            <Text style={styles.text}>
                {user.name} {user?.surname}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 40,
        // justifyContent: 'center',
        alignItems: 'center',
        gap: Gaps.g16,
        // flex: 1,
    },

    text: {
        color: Colors.white,
        fontSize: Fonts.f16,
        fontFamily: Fonts.regular,
    },
})
