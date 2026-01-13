import { Image, StyleSheet, View } from 'react-native'
import { Gaps } from '../../shared/tokens'
import { useState } from 'react'
import { ImageUploader } from '../../shared/ImageUploader/ImageUploader'

export default function Profile() {
    const [image, setImage] = useState<string | null>(null)

    return (
        <View style={styles.container}>
            {image ? (
                <Image style={styles.image} source={{ uri: image }} />
            ) : (
                <Image source={require('../../assets/images/user-no-photo.png')} />
            )}
            <ImageUploader onUpload={setImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: Gaps.g20,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
})
