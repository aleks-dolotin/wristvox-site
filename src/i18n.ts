// Minimal i18n: language from URL path, fallback to navigator.language.
// No dependencies. All translations are static imports (tree-shaken).

import en from './locales/en.json'
import de from './locales/de.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import it from './locales/it.json'
import ja from './locales/ja.json'
import ko from './locales/ko.json'
import ptBR from './locales/pt-BR.json'
import ru from './locales/ru.json'
import uk from './locales/uk.json'
import zhHans from './locales/zh-Hans.json'
import zhHant from './locales/zh-Hant.json'

export const SUPPORTED_LOCALES = ['en', 'de', 'es', 'fr', 'it', 'ja', 'ko', 'pt-BR', 'ru', 'uk', 'zh-Hans', 'zh-Hant'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]

const messages: Record<Locale, Record<string, string>> = {
  en, de, es, fr, it, ja, ko, 'pt-BR': ptBR, ru, uk, 'zh-Hans': zhHans, 'zh-Hant': zhHant,
}

/** Extract locale from URL path: /ja/ → 'ja', /pt-BR/ → 'pt-BR', / → detect */
function localeFromPath(): Locale | null {
  const seg = window.location.pathname.split('/').filter(Boolean)[0]
  if (!seg) return null
  // Exact match (case-sensitive for pt-BR)
  if (SUPPORTED_LOCALES.includes(seg as Locale)) return seg as Locale
  // Case-insensitive fallback
  const lower = seg.toLowerCase()
  const found = SUPPORTED_LOCALES.find(l => l.toLowerCase() === lower)
  return found ?? null
}

/** Detect from navigator.language: 'ja-JP' → 'ja', 'pt-BR' → 'pt-BR', 'zh-CN' → 'zh-Hans' */
function localeFromBrowser(): Locale {
  for (const lang of navigator.languages ?? [navigator.language]) {
    // Exact match first: pt-BR, zh-Hans, zh-Hant
    if (SUPPORTED_LOCALES.includes(lang as Locale)) return lang as Locale
    // Chinese mapping: zh-CN/zh-SG → zh-Hans, zh-TW/zh-HK → zh-Hant
    if (lang.startsWith('zh')) {
      if (lang === 'zh-TW' || lang === 'zh-HK' || lang === 'zh-Hant') return 'zh-Hant'
      if (lang.startsWith('zh')) return 'zh-Hans' // zh, zh-CN, zh-SG, etc.
    }
    // Primary subtag: ja-JP → ja
    const primary = lang.split('-')[0]
    const found = SUPPORTED_LOCALES.find(l => l === primary)
    if (found) return found
  }
  return 'en'
}

/** Resolve current locale. Priority: URL path > browser > 'en' */
export function detectLocale(): Locale {
  return localeFromPath() ?? localeFromBrowser()
}

/** Get the current locale (cached after first call) */
let _locale: Locale | null = null
export function getLocale(): Locale {
  if (!_locale) _locale = detectLocale()
  return _locale
}

/** Translate a key. Falls back to English if key missing in current locale. */
export function t(key: string): string {
  const locale = getLocale()
  return messages[locale]?.[key] ?? messages.en[key] ?? key
}

/** Get locale display name for language switcher */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  'pt-BR': 'Português',
  ru: 'Русский',
  uk: 'Українська',
  'zh-Hans': '简体中文',
  'zh-Hant': '繁體中文',
}

/** Build path for a different locale: preserves /support/ and /privacy/ */
export function localePath(locale: Locale): string {
  const path = window.location.pathname
  // Remove current locale prefix if any
  const stripped = path.replace(/^\/(en|de|es|fr|it|ja|ko|pt-BR|ru|uk|zh-Hans|zh-Hant)(\/|$)/i, '/')
  if (locale === 'en') return stripped || '/'
  return `/${locale}${stripped === '/' ? '/' : stripped}`
}
