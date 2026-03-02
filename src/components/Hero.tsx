import { DOWNLOAD_URL } from '../config'
import { t } from '../i18n'

const APP_STORE_URL = 'https://apps.apple.com/app/wristvox/id6759512143'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="animate-fade-up animate-delay-1 inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border bg-surface/60 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-sm text-text-secondary tracking-wide">{t('hero.badge')}</span>
        </div>

        <h1 className="animate-fade-up animate-delay-2 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
          {t('hero.headline1')}
          <br />
          <span className="text-accent">{t('hero.headline2')}</span>
        </h1>

        <p className="animate-fade-up animate-delay-3 text-lg sm:text-xl text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed">
          {t('hero.sub')}
        </p>

        <div className="animate-fade-up animate-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={DOWNLOAD_URL}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-2xl transition-all duration-300 glow-accent hover:scale-[1.02]"
          >
            <DownloadIcon />
            {t('hero.download')}
          </a>
          <a
            href={APP_STORE_URL}
            className="group inline-flex items-center gap-3 px-8 py-4 border border-border bg-surface/60 hover:border-accent/40 text-text-primary font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppStoreIcon />
            {t('hero.appstore')}
          </a>
        </div>
        <span className="animate-fade-up animate-delay-4 inline-block mt-4 text-sm text-text-muted">{t('hero.req')}</span>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up animate-delay-6">
        <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-text-muted animate-bounce" />
        </div>
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg className="w-5 h-5 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

function AppStoreIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )
}
