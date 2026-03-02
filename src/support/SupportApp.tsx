import { useState } from 'react'
import { t, getLocale, SUPPORTED_LOCALES, LOCALE_NAMES, localePath } from '../i18n'
import type { Locale } from '../i18n'

const SUPPORT_EMAIL = 'support@wristvox.app'

const setupStepKeys = [
  { step: 1, titleKey: 'sup.step1.title', descKey: 'sup.step1.desc', icon: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25' },
  { step: 2, titleKey: 'sup.step2.title', descKey: 'sup.step2.desc', icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' },
  { step: 3, titleKey: 'sup.step3.title', descKey: 'sup.step3.desc', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
  { step: 4, titleKey: 'sup.step4.title', descKey: 'sup.step4.desc', icon: 'M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z' },
]

const faqKeys = [
  { q: 'sup.faq1.q', a: 'sup.faq1.a' },
  { q: 'sup.faq2.q', a: 'sup.faq2.a' },
  { q: 'sup.faq3.q', a: 'sup.faq3.a' },
  { q: 'sup.faq4.q', a: 'sup.faq4.a' },
  { q: 'sup.faq5.q', a: 'sup.faq5.a' },
  { q: 'sup.faq6.q', a: 'sup.faq6.a' },
]

const issueKeys = [
  { titleKey: 'sup.issue1.title', descKey: 'sup.issue1.desc', statusKey: 'sup.issue1.status', color: 'text-yellow-400' },
  { titleKey: 'sup.issue2.title', descKey: 'sup.issue2.desc', statusKey: 'sup.issue2.status', color: 'text-blue-400' },
]

function FaqAccordion({ qKey, aKey }: { qKey: string; aKey: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-border rounded-2xl overflow-hidden transition-colors duration-300 hover:border-accent/30">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer">
        <span className="font-medium text-text-primary leading-snug">{t(qKey)}</span>
        <svg className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-text-secondary leading-relaxed">{t(aKey)}</p>
        </div>
      </div>
    </div>
  )
}

export default function SupportApp() {
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

      <section className="px-6 pt-12 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">{t('sup.title')}</h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">{t('sup.sub')}</p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-3">{t('sup.getting_started')}</h2>
          <p className="text-text-secondary mb-8">{t('sup.getting_started_sub')}</p>
          <div className="flex flex-col gap-4">
            {setupStepKeys.map((s) => (
              <div key={s.step} className="flex gap-5 p-6 rounded-2xl border border-border bg-surface/40 backdrop-blur-sm">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center font-bold text-lg">{s.step}</div>
                </div>
                <div>
                  <h3 className="font-medium text-text-primary mb-1.5">{t(s.titleKey)}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{t(s.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-8">{t('sup.faq')}</h2>
          <div className="flex flex-col gap-3">
            {faqKeys.map((f) => <FaqAccordion key={f.q} qKey={f.q} aKey={f.a} />)}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-3">{t('sup.known_issues')}</h2>
          <p className="text-text-secondary mb-8">{t('sup.known_issues_sub')}</p>
          <div className="flex flex-col gap-4">
            {issueKeys.map((issue) => (
              <div key={issue.titleKey} className="p-6 rounded-2xl border border-border bg-surface/40 backdrop-blur-sm">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-medium text-text-primary leading-snug">{t(issue.titleKey)}</h3>
                  <span className={`text-xs font-medium whitespace-nowrap ${issue.color}`}>{t(issue.statusKey)}</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{t(issue.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 sm:p-10 rounded-2xl border border-border bg-surface/40 backdrop-blur-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold tracking-tight mb-3">{t('sup.contact_title')}</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">{t('sup.contact_sub')}</p>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-2xl transition-all duration-300 glow-accent hover:scale-[1.02]">
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/" className="text-accent font-bold text-lg hover:opacity-80 transition-opacity">WristVox</a>
          <div className="flex items-center gap-6 text-sm text-text-muted">
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
