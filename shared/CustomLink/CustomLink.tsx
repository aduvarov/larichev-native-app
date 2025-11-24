import { StyleSheet, Text } from 'react-native'
import { Colors, Fonts } from '../tokens'
import { Link, LinkProps } from 'expo-router'
// import { CustomLinkProps } from './CustomLink.props'

export const CustomLink = ({ text, ...props }: LinkProps & { text: string }) => {
    return (
        <Link {...props} style={styles.text}>
            <Text>{text}</Text>
        </Link>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: Fonts.regular,
        fontSize: Fonts.f18,
        color: Colors.primary,
    },
})
