import { Redirect } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { useAtomValue } from 'jotai'
import { authAtom } from '../../entities/auth/model/auth.state'
import { Colors, Fonts } from '../../shared/tokens'
import { Text } from 'react-native'

export default function AppLayout() {
    const { accessToken } = useAtomValue(authAtom)
    if (!accessToken) {
        return <Redirect href={'/login'} />
    }

    return (
        <Drawer
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: Colors.blackLight,
                },
                headerLeft: () => {
                    return <Text>!!!</Text>
                },
                headerTitleStyle: {
                    color: Colors.white,
                    fontFamily: Fonts.regular,
                    fontSize: Fonts.f20,
                },
                headerTitleAlign: 'center',
                sceneStyle: {
                    backgroundColor: Colors.black,
                },
            })}
        >
            <Drawer.Screen
                name="index"
                options={{
                    title: 'Мои курсы',
                }}
            />
        </Drawer>
    )
}
