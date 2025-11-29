export interface User {
    id: number
    name: string
    surname?: string
    photo?: string
}

export interface UserRequest {
    profile: User
}

export type UserProfile = Pick<User, 'name' | 'photo' | 'surname'>
