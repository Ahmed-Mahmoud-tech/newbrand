/** Line icons (24 px grid, currentColor). Decorative unless a label is passed. */
type P = { className?: string; label?: string }

function Svg({ className = 'icon', label, children, fill }: P & { children: React.ReactNode; fill?: boolean }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill={fill ? 'currentColor' : 'none'}
            stroke={fill ? 'none' : 'currentColor'}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden={label ? undefined : true}
            role={label ? 'img' : undefined}
            aria-label={label}
        >
            {children}
        </svg>
    )
}

export const ArrowIcon = (p: P) => (
    <Svg {...p} className={`${p.className ?? 'icon'} icon-arrow`}>
        <path d="M4 12h15M13 6l6 6-6 6" />
    </Svg>
)
export const PlusIcon = (p: P) => (
    <Svg {...p}>
        <path d="M12 5v14M5 12h14" />
    </Svg>
)
export const MinusIcon = (p: P) => (
    <Svg {...p}>
        <path d="M5 12h14" />
    </Svg>
)
export const CheckIcon = (p: P) => (
    <Svg {...p}>
        <path d="M4.5 12.5l4.5 4.5L19.5 7" />
    </Svg>
)
export const CloseIcon = (p: P) => (
    <Svg {...p}>
        <path d="M6 6l12 12M18 6L6 18" />
    </Svg>
)
export const MenuIcon = (p: P) => (
    <Svg {...p}>
        <path d="M3 7h18M3 12h18M3 17h18" />
    </Svg>
)
export const MailIcon = (p: P) => (
    <Svg {...p}>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="M3.5 6l8.5 7 8.5-7" />
    </Svg>
)
export const PhoneIcon = (p: P) => (
    <Svg {...p}>
        <path d="M5 3.5h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 6.8 6.8l1.4-2.2 4.3 1.7V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5z" />
    </Svg>
)
export const PinIcon = (p: P) => (
    <Svg {...p}>
        <path d="M12 21s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.8" r="2.3" />
    </Svg>
)
export const ClockIcon = (p: P) => (
    <Svg {...p}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
    </Svg>
)
export const FullscreenIcon = (p: P) => (
    <Svg {...p}>
        <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
    </Svg>
)
export const DragIcon = (p: P) => (
    <Svg {...p}>
        <path d="M7 9l-3 3 3 3M17 9l3 3-3 3M4 12h16" />
    </Svg>
)
export const PlayIcon = (p: P) => (
    <Svg {...p} fill>
        <path d="M8 5.5v13l11-6.5z" />
    </Svg>
)
export const WhatsAppIcon = (p: P) => (
    <Svg {...p} fill>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </Svg>
)
export const InstagramIcon = (p: P) => (
    <Svg {...p}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </Svg>
)
export const FacebookIcon = (p: P) => (
    <Svg {...p} fill>
        <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" />
    </Svg>
)
export const TikTokIcon = (p: P) => (
    <Svg {...p} fill>
        <path d="M16.6 3c.3 2.3 1.6 3.8 3.9 4v2.6c-1.4.1-2.6-.3-3.9-1.1v5.9c0 3.6-3.1 6.2-6.6 5.5-3.9-.8-5.2-5.6-2.5-8.3 1.3-1.3 3-1.8 4.8-1.5v2.8c-.4-.1-.8-.2-1.2-.2-1.9-.1-3.1 1.8-2.2 3.4.8 1.5 3 1.6 3.9.2.3-.4.4-.9.4-1.4V3h3.4z" />
    </Svg>
)
