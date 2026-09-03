'use client'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '#benefits', label: 'ليه إحنا' },
  { href: '#portfolio', label: 'شغلنا' },
  { href: '#pricing', label: 'الأسعار' },
  { href: '#process', label: 'إزاي بنشتغل' },
  { href: '#faq', label: 'الأسئلة الشائعة' },
]

export default function NavToggle() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        className="nav-toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? '✕' : '☰'}
      </button>
      {open && (
        <div id="mobile-menu" className="mobile-menu" role="navigation" aria-label="قائمة الموبايل">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#pricing" className="nav-cta" onClick={() => setOpen(false)}>
            احجز الآن
          </a>
        </div>
      )}
    </>
  )
}
