import { Image, StyleSheet } from 'react-native'

export const Avatar = ({ image }: { image: string | null }) => {
    return (
        <>
            {image ? (
                <Image style={styles.image} source={{ uri: image }} resizeMode="contain" />
            ) : (
                <Image
                    style={styles.image}
                    source={require('../../../../assets/images/user-no-photo.png')}
                    resizeMode="contain"
                />
            )}
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
})
