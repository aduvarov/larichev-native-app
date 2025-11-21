import React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

export const Input = (props: TextInputProps) => {
    return <TextInput style={styles.input} {...props} placeholderTextColor={'#AFB2BF'} />
}

const styles = StyleSheet.create({
    input: {
        height: 58,
        backgroundColor: '#2E2D3D',
        paddingHorizontal: 24,
        borderRadius: 10,
        fontSize: 16,
    },
})
