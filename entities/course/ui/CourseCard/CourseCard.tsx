import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Radius } from '../../../../shared/tokens'
import { StudentCourseDescription } from '../../model/course.model'
import { Button } from '../../../../shared/Button/Button'
import { Chip } from '../../../../shared/Chip/Chip'

export const CourseCard = ({
    title,
    image,
    courseOnDirection,
}: Partial<StudentCourseDescription>) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} height={200} style={styles.image} />
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.chips}>
                    {courseOnDirection?.length > 0 &&
                        courseOnDirection?.map((c) => <Chip text={c.direction.name} />)}
                </View>
            </View>
            <View style={styles.footer}>
                <Button text="Купить" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        borderRadius: Radius.r10,
        backgroundColor: Colors.blackLight,
    },
    image: {},
    title: {},
    chips: {},
    header: {},
    footer: {},
})
