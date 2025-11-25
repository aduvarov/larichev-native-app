import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import AsyncStorage from '@react-native-async-storage/async-storage'

const storage = createJSONStorage<AuthState>(() => AsyncStorage)

export const authAtom = atomWithStorage<AuthState>(
    'auth',
    {
        accessToken: null,
        isLoading: false,
        error: null,
    },
    storage,
)

export interface AuthState {
    accessToken: string | null
    isLoading: boolean
    error: string | null
}
