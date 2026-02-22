export default function Download() {
  return (
    <section className="relative py-32 px-6">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/6 blur-[120px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
          Ready to try?
        </h2>

        <a
          href="https://github.com/aleks-dolotin/wristvox-releases/releases/download/v0.9.1/WristVox-Mac-0.9.1.dmg"
          className="group inline-flex items-center gap-3 px-10 py-5 bg-accent hover:bg-accent-hover text-white font-semibold text-lg rounded-2xl transition-all duration-300 glow-accent hover:scale-[1.02]"
        >
          <svg className="w-6 h-6 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download for Mac
        </a>

        <div className="flex items-center justify-center gap-6 mt-6 text-sm text-text-muted">
          <span>macOS 12.0+</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Apple Watch required</span>
        </div>
      </div>
    </section>
  )
}
