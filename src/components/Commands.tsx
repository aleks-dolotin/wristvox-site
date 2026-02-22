const commands = [
  {
    name: 'Dictate',
    description: 'Start and stop voice dictation',
    shortcut: 'Fn × 2',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    name: 'Send',
    description: 'Press Enter',
    shortcut: '↵ Return',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    name: 'Clear',
    description: 'Select all and delete',
    shortcut: '⌘A + ⌫',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
      </svg>
    ),
  },
]

export default function Commands() {
  return (
    <section className="relative py-32 px-6">
      {/* Background accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Three commands. That's all you need.
          </h2>
          <p className="text-text-secondary text-lg max-w-lg mx-auto">
            Every command is a single byte over Bluetooth. Instant. Reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {commands.map((cmd) => (
            <div
              key={cmd.name}
              className="group relative p-8 rounded-2xl border border-border bg-surface/40 backdrop-blur-sm hover:border-accent/40 transition-all duration-500 text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
                {cmd.icon}
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold mb-2">{cmd.name}</h3>
              <p className="text-text-secondary mb-4">{cmd.description}</p>

              {/* Shortcut badge */}
              <span className="inline-block px-3 py-1 rounded-lg bg-bg text-text-muted text-sm font-mono border border-border">
                {cmd.shortcut}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
