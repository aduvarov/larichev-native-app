import { Text, View } from 'react-native'
import { Colors } from '../../shared/tokens'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Button } from '../../shared/Button/Button'

export default function Profile() {
    const [image, setImage] = useState(null)

    const pickAvatar = async () => {
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        })
        console.log(result)
    }

    return (
        <View>
            <Text style={{ color: Colors.primary }}>Profile</Text>
            <Button text="Выбрать изображение" onPress={pickAvatar} />
        </View>
    )
}
