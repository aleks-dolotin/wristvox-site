import { DOWNLOAD_URL } from '../config'

const APP_STORE_URL = 'https://apps.apple.com/app/wristvox/id6759512143'

export default function Download() {
  return (
    <section className="relative py-32 px-6">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/6 blur-[120px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
          Ready to try?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={DOWNLOAD_URL}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-accent hover:bg-accent-hover text-white font-semibold text-lg rounded-2xl transition-all duration-300 glow-accent hover:scale-[1.02]"
          >
            <svg className="w-6 h-6 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download for Mac
          </a>

          <a
            href={APP_STORE_URL}
            className="group inline-flex items-center gap-3 px-10 py-5 border border-border bg-surface/60 hover:border-accent/40 text-text-primary font-semibold text-lg rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Watch &amp; iPhone
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 mt-6 text-sm text-text-muted">
          <span>macOS 14.6+</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>iOS 18+</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>watchOS 11.2+</span>
        </div>
      </div>
    </section>
  )
}
