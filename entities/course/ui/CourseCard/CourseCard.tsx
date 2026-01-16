import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts, Gaps, Radius } from '../../../../shared/tokens'
import { StudentCourseDescription } from '../../model/course.model'
import { Button } from '../../../../shared/Button/Button'
import { Chip } from '../../../../shared/Chip/Chip'

export const CourseCard = ({
    shortTitle,
    image,
    courseOnDirection,
}: Partial<StudentCourseDescription>) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} height={200} style={styles.image} />
            <View style={styles.header}>
                <Text style={styles.title}>{shortTitle}</Text>
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
    image: {
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    title: {
        fontSize: Fonts.f21,
        color: Colors.white,
        fontFamily: Fonts.regular,
        marginBottom: 12,
    },
    chips: {
        flexDirection: 'row',
        gap: Gaps.g8,
    },
    header: {
        paddingHorizontal: 24,
        paddingVertical: 18,
    },
    footer: {
        backgroundColor: Colors.violetDark,
        paddingHorizontal: 24,
        paddingVertical: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
})
