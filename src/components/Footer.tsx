import { GITHUB_URL } from '../config'
import { t, getLocale, SUPPORTED_LOCALES, LOCALE_NAMES, localePath } from '../i18n'
import type { Locale } from '../i18n'
import { useState } from 'react'

export default function Footer() {
  const [langOpen, setLangOpen] = useState(false)
  const current = getLocale()

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-accent font-bold text-lg">WristVox</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-text-muted">
          <a href="/support/" className="hover:text-text-secondary transition-colors">{t('footer.support')}</a>
          <a href="/privacy/" className="hover:text-text-secondary transition-colors">{t('footer.privacy')}</a>
          <a href={GITHUB_URL} className="hover:text-text-secondary transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="inline-flex items-center gap-1.5 hover:text-text-secondary transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              {LOCALE_NAMES[current]}
            </button>

            {langOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                <div className="absolute bottom-full mb-2 right-0 z-50 py-2 rounded-xl border border-border bg-surface/95 backdrop-blur-sm shadow-lg min-w-[160px] max-h-[320px] overflow-y-auto">
                  {SUPPORTED_LOCALES.map((loc: Locale) => (
                    <a
                      key={loc}
                      href={localePath(loc)}
                      className={`block px-4 py-2 text-sm transition-colors ${loc === current ? 'text-accent font-medium' : 'text-text-secondary hover:text-text-primary hover:bg-white/5'}`}
                    >
                      {LOCALE_NAMES[loc]}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          <span>© 2026 WristVox</span>
        </div>
      </div>
    </footer>
  )
}
