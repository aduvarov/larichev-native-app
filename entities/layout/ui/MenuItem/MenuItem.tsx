import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts, Gaps } from '../../../../shared/tokens'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { ReactNode, useState } from 'react'

type MenuItemProps = {
    icon: ReactNode
    text: string
    path: string
} & Pick<DrawerContentComponentProps, 'navigation'>

export const MenuItem = ({
    navigation,
    icon,
    text,
    path,
    ...props
}: MenuItemProps & PressableProps) => {
    const [clicked, setClicked] = useState<boolean>(false)
    console.log(clicked)
    return (
        <Pressable
            style={styles.menuLine}
            {...props}
            onPress={() => navigation.navigate(path)}
            onPressIn={() => setClicked(true)}
            onPressOut={() => setClicked(false)}
        >
            <View>
                {icon}
                <Text style={styles.text}>{text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: Colors.white,
        fontSize: Fonts.f16,
        fontFamily: Fonts.regular,
        // textAlign: 'left',
    },
    menuLine: {
        // width: '100%',
        flexDirection: 'row',
        // flex: 1,
        // justifyContent: 'flex-end',
        justifyContent: 'flex-start',
        height: 56,
        gap: Gaps.g8,
        // backgroundColor: Colors.red,
        // borderWidth: 1,
    },
})
