import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { UserProfile } from '../../model/user.model'

export type UserMenuProps = DrawerContentComponentProps & {
    user: UserProfile
}
