import { DOWNLOAD_URL } from '../config'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="animate-fade-up animate-delay-1 inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-border bg-surface/60 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-text-secondary tracking-wide">Now in Public Beta</span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up animate-delay-2 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
          Control your Mac
          <br />
          <span className="text-accent">from your wrist</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up animate-delay-3 text-lg sm:text-xl text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed">
          WristVox turns your Apple Watch into a Bluetooth remote.
          Dictate, send, clear — one tap away.
        </p>

        {/* CTA */}
        <div className="animate-fade-up animate-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={DOWNLOAD_URL}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-2xl transition-all duration-300 glow-accent hover:scale-[1.02]"
          >
            <DownloadIcon />
            Download for Mac
          </a>
          <span className="text-sm text-text-muted">macOS 12+ · Apple Watch required</span>
        </div>
      </div>

      {/* Scroll indicator */}
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
