'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import styles from './stats.module.css'

/**
 * Re-renders the page from the server every `seconds` while the tab is visible, so the numbers
 * move as visitors arrive. Counting itself is already immediate (app/api/track).
 */
export default function LiveRefresh({ seconds = 15 }: { seconds?: number }) {
    const router = useRouter()
    const [at, setAt] = useState(() => new Date())

    useEffect(() => {
        let timer: ReturnType<typeof setInterval> | undefined
        const tick = () => {
            router.refresh()
            setAt(new Date())
        }
        const start = () => {
            clearInterval(timer)
            if (document.visibilityState === 'visible') timer = setInterval(tick, seconds * 1000)
        }
        // coming back to the tab: catch up at once, then keep going
        const onVisible = () => {
            if (document.visibilityState === 'visible') tick()
            start()
        }
        start()
        document.addEventListener('visibilitychange', onVisible)
        return () => {
            clearInterval(timer)
            document.removeEventListener('visibilitychange', onVisible)
        }
    }, [router, seconds])

    return (
        <p className={styles.live} aria-live="polite">
            <span className={styles.liveDot} aria-hidden /> لايف · آخر تحديث {at.toLocaleTimeString('ar-EG', { hour: 'numeric', minute: '2-digit', second: '2-digit' })}
        </p>
    )
}
