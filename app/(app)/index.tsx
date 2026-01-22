import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import { useAtomValue, useSetAtom } from 'jotai'
import { courseAtom, loadCourseAtom } from '../../entities/course/model/course.state'
import { useEffect } from 'react'
import { CourseCard } from '../../widget/course/ui/CourseCard/CourseCard'
import { StudentCourseDescription } from '../../entities/course/model/course.model'
import { Colors } from '../../shared/tokens'
import { Button } from '../../shared/Button/Button'
import * as Notifications from 'expo-notifications'

export default function AppLayout() {
    // const { , error, courses } = useAtomValue(courseAtom)
    const { isLoading, courses } = useAtomValue(courseAtom)
    const loadCourse = useSetAtom(loadCourseAtom)

    useEffect(() => {
        loadCourse()
    }, [])

    const renderCourse = ({ item }: { item: StudentCourseDescription }) => {
        return (
            <View style={styles.item}>
                <CourseCard {...item} />
            </View>
        )
    }

    const allowsNotification = async () => {
        const settings = await Notifications.getPermissionsAsync()
        return (
            settings.granted ||
            settings.ios?.status == Notifications.IosAuthorizationStatus.PROVISIONAL
        )
    }

    const requestPermissions = async () => {
        return Notifications.requestPermissionsAsync({
            ios: {
                allowAlert: true,
                allowBadge: true,
                allowSound: true,
            },
        })
    }

    const scheduleNotification = async () => {
        const granted = await allowsNotification()
        if (!granted) {
            await requestPermissions()
        }
        Notifications.scheduleNotificationAsync({
            content: {
                title: 'Новый курс TypeScript',
                body: 'Начни учиться уже сейчас!',
                data: {
                    alias: 'typescript',
                },
            },
            trigger: {
                type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
                seconds: 5,
            },
        })
    }

    return (
        <>
            {isLoading && (
                <ActivityIndicator style={styles.activity} size="large" color={Colors.primary} />
            )}
            <Button text="Напомнить" onPress={scheduleNotification} />
            {courses.length > 0 && (
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={loadCourse}
                            tintColor={Colors.primary}
                            titleColor={Colors.primary}
                        />
                    }
                    data={courses}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderCourse}
                />
            )}
        </>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
    },
    activity: {
        marginTop: 30,
    },
})
