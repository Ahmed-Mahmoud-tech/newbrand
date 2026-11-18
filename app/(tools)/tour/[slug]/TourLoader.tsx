import type { CSSProperties } from 'react'

import styles from './tourLoader.module.css'

/** Full-screen 3D loading screen shown until the tour player is ready. */
export default function TourLoader({
    name,
    progress,
    label,
    error,
    leaving,
}: {
    name: string
    /** 0..1 */
    progress: number
    label: string
    error: boolean
    /** true while fading out after the tour became ready */
    leaving: boolean
}) {
    const pct = Math.round(Math.min(1, Math.max(0, progress)) * 100)

    return (
        <div className={`${styles.root} ${leaving ? styles.leaving : ''}`}>
            <div className={styles.grid} aria-hidden />

            <div className={styles.scene} aria-hidden>
                <div className={styles.cube}>
                    {FACES.map((f) => (
                        <span key={f} className={`${styles.face} ${styles[f]}`} />
                    ))}
                    <div className={styles.core} style={{ '--p': progress } as CSSProperties}>
                        <div className={styles.coreSpin}>
                            {FACES.map((f) => (
                                <span key={f} className={`${styles.coreFace} ${styles[f]}`} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.shadow} />
            </div>

            <h1 className={styles.title}>{name}</h1>

            {error ? (
                <div className={styles.error} role="alert">
                    <p>تعذّر تحميل الجولة. حاول تحديث الصفحة.</p>
                    <button type="button" onClick={() => location.reload()}>
                        إعادة المحاولة
                    </button>
                </div>
            ) : (
                <>
                    <div
                        className={styles.bar}
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={pct}
                        aria-label="تقدّم تحميل الجولة"
                    >
                        <div className={styles.fill} style={{ width: `${pct}%` }} />
                    </div>
                    <div className={styles.meta}>
                        <span role="status">{label}</span>
                        <span className={styles.pct}>{pct}%</span>
                    </div>
                </>
            )}
        </div>
    )
}

const FACES = ['front', 'back', 'right', 'left', 'top', 'bottom'] as const
