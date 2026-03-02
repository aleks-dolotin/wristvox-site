import { useState } from 'react'
import { t, getLocale, SUPPORTED_LOCALES, LOCALE_NAMES, localePath } from '../i18n'
import type { Locale } from '../i18n'

const SUPPORT_EMAIL = 'support@wristvox.app'

function Section({ titleKey, children }: { titleKey: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold tracking-tight mb-4">{t(titleKey)}</h2>
      <div className="text-text-secondary leading-relaxed space-y-4">{children}</div>
    </section>
  )
}

export default function PrivacyApp() {
  const [langOpen, setLangOpen] = useState(false)
  const current = getLocale()

  return (
    <div className="relative z-10 min-h-screen">
      <header className="px-6 py-6">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="inline-flex items-center gap-2 text-text-muted hover:text-text-secondary transition-colors text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            {t('nav.back')}
          </a>
        </div>
      </header>

      <section className="px-6 pt-12 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{t('priv.title')}</h1>
          <p className="text-text-muted text-sm">{t('priv.effective')}</p>
        </div>
      </section>

      <div className="px-6 pb-32">
        <div className="max-w-3xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl border border-accent/20 bg-accent/5 mb-16">
            <h2 className="text-lg font-bold mb-3">{t('priv.tldr_title')}</h2>
            <p className="text-text-secondary leading-relaxed">{t('priv.tldr')}</p>
          </div>

          <Section titleKey="priv.collection_title">
            <p><strong className="text-text-primary">{t('priv.collection_bold')}</strong></p>
            <p>{t('priv.collection')}</p>
          </Section>

          <Section titleKey="priv.how_title">
            <p>{t('priv.how1')}</p>
            <p>{t('priv.how2')}</p>
          </Section>

          <Section titleKey="priv.perms_title">
            <div className="space-y-6">
              <div>
                <h3 className="text-text-primary font-medium mb-2">{t('priv.perms_mac')}</h3>
                <p><strong className="text-text-primary">Bluetooth</strong> — {t('priv.perms_bt')}</p>
                <p className="mt-2"><strong className="text-text-primary">Accessibility</strong> — {t('priv.perms_ax')}</p>
              </div>
              <div>
                <h3 className="text-text-primary font-medium mb-2">{t('priv.perms_mobile')}</h3>
                <p><strong className="text-text-primary">Bluetooth</strong> — {t('priv.perms_mobile_bt')}</p>
              </div>
            </div>
          </Section>

          <Section titleKey="priv.third_title"><p>{t('priv.third')}</p></Section>
          <Section titleKey="priv.storage_title"><p>{t('priv.storage')}</p></Section>
          <Section titleKey="priv.children_title"><p>{t('priv.children')}</p></Section>
          <Section titleKey="priv.rights_title"><p>{t('priv.rights')}</p></Section>
          <Section titleKey="priv.changes_title"><p>{t('priv.changes')}</p></Section>

          <Section titleKey="priv.contact_title">
            <p>{t('priv.contact')}</p>
            <p><a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:text-accent-hover transition-colors">{SUPPORT_EMAIL}</a></p>
          </Section>

          <div className="pt-8 border-t border-border text-sm text-text-muted">© 2026 WristVox. All rights reserved.</div>
        </div>
      </div>

      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/" className="text-accent font-bold text-lg hover:opacity-80 transition-opacity">WristVox</a>
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a href="/support/" className="hover:text-text-secondary transition-colors">{t('footer.support')}</a>
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)} className="inline-flex items-center gap-1.5 hover:text-text-secondary transition-colors cursor-pointer">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                {LOCALE_NAMES[current]}
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div className="absolute bottom-full mb-2 right-0 z-50 py-2 rounded-xl border border-border bg-surface/95 backdrop-blur-sm shadow-lg min-w-[160px] max-h-[320px] overflow-y-auto">
                    {SUPPORTED_LOCALES.map((loc: Locale) => (
                      <a key={loc} href={localePath(loc)} className={`block px-4 py-2 text-sm transition-colors ${loc === current ? 'text-accent font-medium' : 'text-text-secondary hover:text-text-primary hover:bg-white/5'}`}>
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
    </div>
  )
}
