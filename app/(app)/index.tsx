import { Text, View } from 'react-native'
import { Colors } from '../../shared/tokens'
import { useAtomValue, useSetAtom } from 'jotai'
import { courseAtom, loadCourseAtom } from '../../entities/course/model/course.state'
import { useEffect } from 'react'

export default function AppLayout() {
    const { isLoading, error, courses } = useAtomValue(courseAtom)
    const loadCourse = useSetAtom(loadCourseAtom)

    useEffect(() => {
        loadCourse()
    }, [])

    return (
        <View>
            <Text style={{ color: Colors.primary }}> Мои курсы</Text>
            {courses.length > 0 && courses.map((c) => <Text key={c.id}>{c.title}</Text>)}
        </View>
    )
}
