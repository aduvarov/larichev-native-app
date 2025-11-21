import React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import { Colors, Radius } from '../tokens'

export const Input = (props: TextInputProps) => {
    return (
        <TextInput style={styles.input} {...props} placeholderTextColor={Colors.gray} />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 58,
        backgroundColor: Colors.violetDark,
        paddingHorizontal: 24,
        borderRadius: Radius.r10,
        fontSize: 16,
    },
})
