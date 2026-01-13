import * as ScreenOrientation from 'expo-screen-orientation'
import { useEffect, useState } from 'react'

export function useScreenOrientation() {
    const [orienation, setOrientation] = useState<ScreenOrientation.Orientation>()

    useEffect(() => {
        let subscription: ScreenOrientation.Subscription | null = null

        ScreenOrientation.getOrientationAsync().then((o) => setOrientation(o))
        subscription = ScreenOrientation.addOrientationChangeListener((e) => {
            setOrientation(e.orientationInfo.orientation)
        })
        return () => {
            ScreenOrientation.removeOrientationChangeListener(subscription)
        }
    }, [])

    return orienation
}
