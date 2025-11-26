import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IAuthResponse, ILoginRequest } from './auth.interfaces'
import axios, { AxiosError } from 'axios'
import { API } from '../api/api'
import { atom } from 'jotai'

// создание JSON хранилища
const storage = createJSONStorage<AuthState>(() => AsyncStorage)

const INITIAL_STATE = {
    accessToken: null,
    isLoading: false,
    error: null,
}

// Создание атома с хранилищем для хранения состояния авторизации
export const authAtom = atomWithStorage<AuthState>('auth', INITIAL_STATE, storage)

// Создание производного атома для обнуления состояния авторизации  (Derived atom)
export const logoutAtom = atom(null, (_get, set) => {
    set(authAtom, INITIAL_STATE)
})

// Создание производного атома для заполнения состояния авторизации (Derived atom)
export const loginAtom = atom(
    (get) => get(authAtom), // Функция чтения состояния авторизации из хранилища
    // Функция авторизации и записи состояния авторизации в хранилище
    async (_get, set, { email, password }: ILoginRequest) => {
        set(authAtom, { isLoading: true, accessToken: null, error: null })
        try {
            await new Promise<void>(
                (resolve) =>
                    setTimeout(() => {
                        resolve()
                    }, 100), // Имитация задержки для отрисовки индикатора (тест)
            )
            // Отправляем пост запрос на сервер с логином и паролем
            const { data } = await axios.post<IAuthResponse>(API.login, {
                email,
                password,
            })
            // Авторизация прошла успешно. Сохраняем токен.
            set(authAtom, { isLoading: false, accessToken: data.accessToken, error: null })
        } catch (error) {
            // Если ошибка Axiosа, Сохраняем состояние неуспешной авторизации
            if (error instanceof AxiosError) {
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
