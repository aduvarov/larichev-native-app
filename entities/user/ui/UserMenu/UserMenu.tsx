import { Image, StyleSheet, View, Text } from 'react-native'
import { Colors, Fonts, Gaps } from '../../../../shared/tokens'
import { UserMenuProps } from './UserMenu.props'

export const UserMenu = ({ user }: UserMenuProps) => {
    console.log(user)
    return (
        <View style={styles.container}>
            {user.photo ? (
                <Image style={styles.image} source={{ uri: user.photo }} resizeMode="contain" />
            ) : (
                <Image
                    style={styles.image}
                    source={require('../../../../assets/images/user-no-photo.png')}
                    resizeMode="contain"
                />
            )}
            <View>
                <Text style={styles.text}>
                    {user.name} {user?.surname}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // menu: {
    //     flex: 1,
    //     width: '100%',
    // },
    container: {
        marginTop: 10,
        // justifyContent: 'center',
        alignItems: 'center',
        gap: Gaps.g16,
        // flex: 1,
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    text: {
        color: Colors.white,
        fontSize: Fonts.f16,
        fontFamily: Fonts.regular,
    },
})
