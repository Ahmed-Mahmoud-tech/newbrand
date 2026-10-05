import type { MetadataRoute } from 'next'

import { SITE_URL } from '@/lib/site'

// Private tools only. /_next/ must stay crawlable: Google renders the page with its CSS and JS.
const DISALLOW = ['/api/', '/admin', '/stats/']

/**
 * AI search and assistant crawlers, allowed by name so the site can be cited in ChatGPT, Claude,
 * Perplexity, Gemini, Copilot and Apple Intelligence answers. A crawler that matches a named group
 * ignores the `*` group, so each one repeats the same rules.
 */
const AI_CRAWLERS = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot',
    'Applebot-Extended',
    'Bingbot',
    'DuckAssistBot',
    'Amazonbot',
    'meta-externalagent',
    'CCBot',
]

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: '*', allow: '/', disallow: DISALLOW },
            { userAgent: AI_CRAWLERS, allow: '/', disallow: DISALLOW },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    }
}
