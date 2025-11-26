import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IAuthResponse, ILoginRequest } from './auth.interfaces'
import axios, { AxiosError } from 'axios'
import { API } from '../api/api'
import { atom } from 'jotai'

const storage = createJSONStorage<AuthState>(() => AsyncStorage)

const INITIAL_STATE = {
    accessToken: null,
    isLoading: false,
    error: null,
}
export const authAtom = atomWithStorage<AuthState>('auth', INITIAL_STATE, storage)

export const logoutAtom = atom(null, (_get, set) => {
    console.log('inside logoutAtom')
    set(authAtom, INITIAL_STATE)
})

export const loginAtom = atom(
    (get) => get(authAtom),
    async (_get, set, { email, password }: ILoginRequest) => {
        set(authAtom, { isLoading: true, accessToken: null, error: null })
        try {
            const { data } = await axios.post<IAuthResponse>(API.login, {
                email,
                password,
            })
            console.log('AUTH_SUCESS: ' + data)
            set(authAtom, { isLoading: false, accessToken: data.accessToken, error: null })
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log('AUTH_ERROR: ' + error.response?.data.message)
                set(authAtom, {
                    isLoading: false,
                    accessToken: null,
                    error: error.response?.data.message,
                })
            }
        }
    },
)

export interface AuthState {
    accessToken: string | null
    isLoading: boolean
    error: string | null
}
