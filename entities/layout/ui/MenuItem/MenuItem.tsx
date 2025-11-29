import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts, Gaps } from '../../../../shared/tokens'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { ReactNode, useState } from 'react'

interface MenuItemProps {
    drawer: DrawerContentComponentProps
    icon: ReactNode
    text: string
    path: string
}

export const MenuItem = ({
    drawer,
    icon,
    text,
    path,
    ...props
}: MenuItemProps & PressableProps) => {
    const [clicked, setClicked] = useState<boolean>(false)
    const isActive = drawer.state.routes[drawer.state.index].name === path

    return (
        <Pressable
            {...props}
            onPress={() => drawer.navigation.navigate(path)}
            onPressIn={() => setClicked(true)}
            onPressOut={() => setClicked(false)}
        >
            <View
                style={{
                    ...styles.menuLine,
                    borderColor: isActive ? Colors.primary : Colors.black,
                    backgroundColor: clicked || isActive ? Colors.violetDark : Colors.black,
                }}
            >
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
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingVertical: 16,
        gap: Gaps.g20,
        borderRightWidth: 5,
        // alignItems: 'center',
    },
})
