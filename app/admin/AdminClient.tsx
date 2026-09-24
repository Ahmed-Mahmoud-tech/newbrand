'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import styles from './admin.module.css'

interface TourSummary {
    slug: string
    name: string
    sweeps: number
    hotspots: number
    updatedAt: string
}

export default function AdminClient({ localOnly }: { localOnly: boolean }) {
    const [tours, setTours] = useState<TourSummary[]>([])
    const [file, setFile] = useState<File | null>(null)
    const [slug, setSlug] = useState('')
    const [progress, setProgress] = useState<number | null>(null)
    const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const refresh = useCallback(async () => {
        const res = await fetch('/api/admin/tours', { cache: 'no-store' })
        const json = (await res.json()) as { tours?: TourSummary[]; error?: string }
        if (json.tours) setTours(json.tours)
        else if (json.error) setMessage({ ok: false, text: json.error })
    }, [])

    useEffect(() => {
        if (!localOnly) void refresh()
    }, [localOnly, refresh])

    const pick = (f: File | null) => {
        setFile(f)
        setMessage(null)
        // suggest the name the export was made with: "<slug>-tour.zip"
        if (f && !slug) setSlug(f.name.replace(/\.zip$/i, '').replace(/-tour$/i, ''))
    }

    const upload = () => {
        if (!file) return
        setMessage(null)
        setProgress(0)
        // XHR rather than fetch: a tour is hundreds of MB and fetch cannot report upload progress
        const xhr = new XMLHttpRequest()
        xhr.open('POST', `/api/admin/tours${slug.trim() ? `?slug=${encodeURIComponent(slug.trim())}` : ''}`)
        xhr.upload.onprogress = (e) => e.lengthComputable && setProgress(e.loaded / e.total)
        xhr.onload = () => {
            setProgress(null)
            let json: { tour?: { slug: string; name: string; files: number; replaced: boolean }; error?: string } = {}
            try {
                json = JSON.parse(xhr.responseText)
            } catch {
                /* keep generic error */
            }
            if (xhr.status >= 200 && xhr.status < 300 && json.tour) {
                const t = json.tour
                setMessage({ ok: true, text: `${t.replaced ? 'Updated' : 'Imported'} “${t.name}” as /tour/${t.slug} (${t.files} files).` })
                setFile(null)
                setSlug('')
                if (inputRef.current) inputRef.current.value = ''
                void refresh()
            } else {
                setMessage({ ok: false, text: json.error ?? `Import failed (HTTP ${xhr.status}).` })
            }
        }
        xhr.onerror = () => {
            setProgress(null)
            setMessage({ ok: false, text: 'Upload failed — is the dev server running?' })
        }
        xhr.send(file)
    }

    const remove = async (t: TourSummary) => {
        if (!window.confirm(`Delete “${t.name}” (/tour/${t.slug})? This removes its files from public/tours.`)) return
        const res = await fetch(`/api/admin/tours?slug=${encodeURIComponent(t.slug)}`, { method: 'DELETE' })
        if (!res.ok) setMessage({ ok: false, text: ((await res.json()) as { error?: string }).error ?? 'Delete failed.' })
        void refresh()
    }

    if (localOnly) {
        return (
            <main className={styles.page} dir="ltr">
                <h1>Tour admin</h1>
                <p className={styles.muted}>
                    The tour admin runs on your computer only. Start the site with <code>npm run dev</code>, open{' '}
                    <code>http://localhost:3000/admin</code>, import the tour, then commit and push.
                </p>
            </main>
        )
    }

    return (
        <main className={styles.page} dir="ltr">
            <h1>Tour admin</h1>
            <p className={styles.muted}>Import a tour exported from TourForge (Edit → Export .zip).</p>

            <section className={styles.card}>
                <label
                    className={`${styles.drop} ${file ? styles.hasFile : ''}`}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        e.preventDefault()
                        pick(e.dataTransfer.files[0] ?? null)
                    }}
                >
                    <input ref={inputRef} type="file" accept=".zip,application/zip" hidden onChange={(e) => pick(e.target.files?.[0] ?? null)} />
                    {file ? (
                        <>
                            <strong>{file.name}</strong>
                            <span className={styles.muted}>{(file.size / 1048576).toFixed(1)} MB</span>
                        </>
                    ) : (
                        <span>Drop the tour .zip here, or click to choose</span>
                    )}
                </label>

                <label className={styles.field}>
                    <span>Page address</span>
                    <div className={styles.slugRow}>
                        <span className={styles.muted}>/tour/</span>
                        <input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="apartment-smouha" />
                    </div>
                    <small className={styles.muted}>English letters, numbers and dashes. Importing to an existing address replaces that tour.</small>
                </label>

                <button type="button" className={styles.primary} disabled={!file || progress !== null} onClick={upload}>
                    {progress === null ? 'Import tour' : progress < 1 ? `Uploading ${Math.round(progress * 100)}%` : 'Unpacking…'}
                </button>
                {progress !== null && (
                    <div className={styles.bar}>
                        <span style={{ width: `${Math.max(2, progress * 100)}%` }} />
                    </div>
                )}
                {message && <p className={message.ok ? styles.ok : styles.error}>{message.text}</p>}
            </section>

            <section className={styles.card}>
                <h2>Tours on this site</h2>
                {tours.length === 0 ? (
                    <p className={styles.muted}>No tours imported yet.</p>
                ) : (
                    <ul className={styles.list}>
                        {tours.map((t) => (
                            <li key={t.slug}>
                                <div>
                                    <strong>{t.name}</strong>
                                    <div className={styles.muted}>
                                        /tour/{t.slug} · {t.sweeps} points{t.hotspots ? ` · ${t.hotspots} image spots` : ''} · {new Date(t.updatedAt).toLocaleString()}
                                    </div>
                                </div>
                                <div className={styles.actions}>
                                    <a href={`/tour/${t.slug}`} target="_blank" rel="noreferrer">
                                        Open
                                    </a>
                                    <button type="button" onClick={() => void remove(t)}>
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            <section className={styles.card}>
                <h2>Make it live</h2>
                <p className={styles.muted}>Imported tours are files in this project. Publish them by committing and pushing:</p>
                <pre className={styles.code}>{`git add public/tours public/tourforge\ngit commit -m "Add tour"\ngit push`}</pre>
                <p className={styles.muted}>
                    A new tour page (/tour/…) appears on the live site after the next deploy, because tour pages are built at deploy time.
                </p>
            </section>
        </main>
    )
}
