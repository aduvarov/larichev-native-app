import { Image, Linking, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts, Gaps, Radius } from '../../../../shared/tokens'
import { StudentCourseDescription } from '../../model/course.model'
import { Button } from '../../../../shared/Button/Button'
import { Chip } from '../../../../shared/Chip/Chip'
import MaskedView from '@react-native-masked-view/masked-view'
import { LinearGradient } from 'expo-linear-gradient'

export const CourseCard = ({
    id,
    shortTitle,
    image,
    courseOnDirection,
    alias,
    tariffs,
}: Partial<StudentCourseDescription>) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} height={200} style={styles.image} />
            <View style={styles.header}>
                <Text style={styles.title}>{shortTitle}</Text>
                <View style={styles.chips}>
                    {courseOnDirection?.length &&
                        courseOnDirection?.map((c) => <Chip text={c.direction.name} key={id} />)}
                </View>
                <MaskedView
                    maskElement={
                        <Text style={styles.tariff}>
                            Тариф &laquo;{tariffs?.[0]?.name ?? '-'}&raquo;
                        </Text>
                    }
                >
                    <LinearGradient
                        colors={['#D77BE5', '#6C38CC']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ ...styles.tariff, ...styles.tariffWithOpacity }}>
                            Тариф &laquo;{tariffs?.[0]?.name ?? '-'}&raquo;
                        </Text>
                    </LinearGradient>
                </MaskedView>
            </View>
            <View style={styles.footer}>
                <Button
                    text="Купить"
                    onPress={() => Linking.openURL(`http://purpleschool.ru/course/${alias}`)}
                />
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
    tariff: {
        marginTop: 10,
        fontSize: Fonts.f16,
        fontFamily: Fonts.regular,
    },
    tariffWithOpacity: {
        opacity: 0,
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
