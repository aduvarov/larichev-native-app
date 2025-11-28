import { Redirect } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { useAtomValue } from 'jotai'
import { authAtom } from '../../entities/auth/model/auth.state'
import { Colors, Fonts } from '../../shared/tokens'
import { MenuButton } from '../../features/layout/ui/MenuButton/MenuButton'

export default function AppLayout() {
    const { accessToken } = useAtomValue(authAtom)
    if (!accessToken) {
        return <Redirect href={'/login'} />
    }

    return (
        <Drawer
            screenOptions={({ navigation }) => ({
                safeAreaInsets: { top: 0 }, // ← ключевое

                headerStyle: {
                    backgroundColor: Colors.blackLight,
                    shadowColor: Colors.blackLight,
                    shadowOpacity: 0,
                },
                headerLeft: () => {
                    return <MenuButton navigation={navigation} />
                },
                headerTitleStyle: {
                    color: Colors.white,
                    fontFamily: Fonts.regular,
                    fontSize: Fonts.f20,
                },
                headerTitleAlign: 'center',
                sceneContainerStyle: {
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
