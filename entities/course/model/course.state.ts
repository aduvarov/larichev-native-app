import { atom } from 'jotai'
import { authAtom } from '../../auth/model/auth.state'
import axios, { AxiosError } from 'axios'
import { API } from '../api/api'
import { CourcesResponse, StudentCourseDescription } from './course.model'

export const courseAtom = atom<CourseState>({
    courses: [],
    isLoading: false,
    error: null,
})

export const loadCourseAtom = atom(
    async (get) => {
        return get(courseAtom)
    },
    async (get, set) => {
        const { accessToken } = await get(authAtom)
        set(courseAtom, {
            isLoading: true,
            courses: [],
            error: null,
        })
        try {
            const { data } = await axios.get<CourcesResponse>(API.my, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            set(courseAtom, { isLoading: false, courses: data.my, error: null })
        } catch (error) {
            console.error('ERROR! Axios')
            if (error instanceof AxiosError) {
                set(courseAtom, {
                    isLoading: false,
                    courses: [],
                    error: error.response?.data.message,
                })
            }
        }
    },
)

export interface CourseState {
    courses: StudentCourseDescription[]
    isLoading: boolean
    error: string | null
}
