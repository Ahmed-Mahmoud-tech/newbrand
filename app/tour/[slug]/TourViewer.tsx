'use client'

import { useEffect, useRef, useState } from 'react'

/** The slice of the TourForge player API this page uses. */
interface TourForgePlayer {
    destroy(): void
}
interface TourForgeModule {
    TourForge: {
        mount(el: HTMLElement, opts: Record<string, unknown>): Promise<TourForgePlayer>
    }
}

// Written by the tour import (lib/tourImport.ts); a plain ES module with no dependencies.
const PLAYER_SRC = '/tourforge/player.js'

export default function TourViewer({ slug, name }: { slug: string; name: string }) {
    const ref = useRef<HTMLDivElement>(null)
    const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading')

    useEffect(() => {
        const el = ref.current
        if (!el) return
        let player: TourForgePlayer | null = null
        let cancelled = false
            ; (async () => {
                try {
                    // webpackIgnore: load the file from public/ at runtime instead of bundling it
                    const mod = (await import(/* webpackIgnore: true */ PLAYER_SRC)) as TourForgeModule
                    const p = await mod.TourForge.mount(el, {
                        manifestUrl: `/tours/${slug}/tour.json`,
                        hud: true,
                        nadir: { url: '/tourforge/nadir.jpg' },
                    })
                    if (cancelled) return p.destroy()
                    player = p
                    setState('ready')
                } catch (e) {
                    console.error('[tour]', e)
                    if (!cancelled) setState('error')
                }
            })()
        return () => {
            cancelled = true
            player?.destroy()
        }
    }, [slug])

    return (
        <div style={{ position: 'fixed', inset: 0, background: '#000' }}>
            <div ref={ref} style={{ position: 'absolute', inset: 0 }} aria-label={name} />
            <a
                href="/"
                style={{
                    position: 'absolute',
                    top: 14,
                    // physical left, not inline-start: this page is RTL, and the player's
                    // locations panel opens from the RIGHT edge
                    left: 14,
                    // under the player's overlay (z 2), so an open locations panel covers it
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '6px 12px 6px 6px',
                    borderRadius: 999,
                    background: 'rgba(18,20,24,.72)',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: 14,
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logo.png" alt="GateVerse" style={{ height: 28, width: 'auto' }} />
                <span style={{ padding: '0 0.5rem' }}>{name}</span>
            </a>
            {state !== 'ready' && (
                <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', color: '#cfd8e0', fontSize: 16 }}>
                    {state === 'loading' ? 'جاري تحميل الجولة…' : 'تعذّر تحميل الجولة. حاول تحديث الصفحة.'}
                </div>
            )}
        </div>
    )
}
