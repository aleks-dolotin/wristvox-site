import { t } from '../i18n'

const moreCommandKeys = [
  { key: 'cmd.lang', icon: '🌐' },
  { key: 'cmd.undo', icon: '↩' },
  { key: 'cmd.stop', icon: '⏹' },
  { key: 'cmd.delword', icon: '⌫' },
  { key: 'cmd.lock', icon: '🔒' },
  { key: 'cmd.save', icon: '💾' },
  { key: 'cmd.playpause', icon: '⏯' },
  { key: 'cmd.appswitch', icon: '⌘⇥' },
  { key: 'cmd.browser', icon: '🌍' },
  { key: 'cmd.scroll', icon: '↕️' },
  { key: 'cmd.mouse', icon: '🖱️' },
]

export default function Commands() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {t('cmd.title')}
          </h2>
          <p className="text-text-secondary text-lg max-w-lg mx-auto">
            {t('cmd.sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <CommandCard name={t('cmd.dictate')} desc={t('cmd.dictate.desc')} shortcut="Fn × 2" icon={<MicIcon />} />
          <CommandCard name={t('cmd.send')} desc={t('cmd.send.desc')} shortcut="↵ Return" icon={<SendIcon />} />
          <CommandCard name={t('cmd.clear')} desc={t('cmd.clear.desc')} shortcut="⌘A + ⌫" icon={<ClearIcon />} />
        </div>

        <div className="text-center mb-6">
          <p className="text-text-muted text-sm uppercase tracking-widest">{t('cmd.more')}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {moreCommandKeys.map((cmd) => (
            <span
              key={cmd.key}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-surface/30 text-sm text-text-secondary hover:border-accent/30 transition-colors duration-300"
            >
              <span>{cmd.icon}</span>
              {t(cmd.key)}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function CommandCard({ name, desc, shortcut, icon }: { name: string; desc: string; shortcut: string; icon: React.ReactNode }) {
  return (
    <div className="group relative p-8 rounded-2xl border border-border bg-surface/40 backdrop-blur-sm hover:border-accent/40 transition-all duration-500 text-center">
      <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-text-secondary mb-4">{desc}</p>
      <span className="inline-block px-3 py-1 rounded-lg bg-bg text-text-muted text-sm font-mono border border-border">
        {shortcut}
      </span>
    </div>
  )
}

function MicIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  )
}

function ClearIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
    </svg>
  )
}
