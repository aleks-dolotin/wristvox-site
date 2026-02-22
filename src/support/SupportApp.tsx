import { useState } from 'react'

const SUPPORT_EMAIL = 'support@wristvox.app'

// ─── FAQ ────────────────────────────────────────────────────

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: 'How do I grant Accessibility permission on macOS?',
    answer:
      'Open System Settings → Privacy & Security → Accessibility, then toggle WristVox on. ' +
      'If WristVox is not listed, click the "+" button and add it from your Applications folder. ' +
      'You may need to unlock the settings by clicking the lock icon first.',
  },
  {
    question: 'My Watch doesn\'t see the Mac — what should I do?',
    answer:
      'Make sure Bluetooth is enabled on both devices and WristVox is running on your Mac. ' +
      'On your Watch, open WristVox and wait a few seconds — the first connection can take 5–10 seconds. ' +
      'If it still doesn\'t connect, try toggling Bluetooth off and on again on the Mac.',
  },
  {
    question: 'Dictation doesn\'t start when I tap the button.',
    answer:
      'WristVox uses the system Dictation feature. Make sure it\'s enabled: ' +
      'System Settings → Keyboard → Dictation → toggle On. ' +
      'If you see a prompt asking to enable Dictation, click "Enable" and try again.',
  },
  {
    question: 'I have to re-grant Accessibility after every app update.',
    answer:
      'This is a macOS security requirement. When the app binary changes (after an update), ' +
      'macOS may revoke its Accessibility access. You\'ll need to re-enable it in ' +
      'System Settings → Privacy & Security → Accessibility. ' +
      'We\'re exploring ways to minimize this in future updates.',
  },
  {
    question: 'Does WristVox work with non-English keyboard layouts?',
    answer:
      'Yes! WristVox uses a layout-independent method to activate dictation (Fn key double-tap), ' +
      'which works reliably across all keyboard layouts and input methods.',
  },
  {
    question: 'Does WristVox collect any data?',
    answer:
      'No. WristVox has no servers, no accounts, no analytics, and no tracking. ' +
      'Everything works over a direct Bluetooth connection between your Watch and your Mac. ' +
      'Nothing ever leaves your devices.',
  },
]

// ─── Known Issues ───────────────────────────────────────────

interface KnownIssue {
  title: string
  description: string
  status: 'investigating' | 'workaround' | 'planned-fix'
}

const knownIssues: KnownIssue[] = [
  {
    title: 'Accessibility permission resets after app update',
    description:
      'macOS revokes Accessibility access when the app binary changes. ' +
      'You need to re-enable it in System Settings after each update.',
    status: 'investigating',
  },
  {
    title: 'First BLE connection may take 5–10 seconds',
    description:
      'The initial Bluetooth connection after launching the app requires a radio warmup period. ' +
      'Subsequent reconnections are faster.',
    status: 'workaround',
  },
]

const statusLabels: Record<KnownIssue['status'], { text: string; color: string }> = {
  investigating: { text: 'Investigating', color: 'text-yellow-400' },
  workaround: { text: 'Has workaround', color: 'text-blue-400' },
  'planned-fix': { text: 'Fix planned', color: 'text-green-400' },
}

// ─── Components ─────────────────────────────────────────────

function FaqAccordion({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-border rounded-2xl overflow-hidden transition-colors duration-300 hover:border-accent/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
      >
        <span className="font-medium text-text-primary leading-snug">{item.question}</span>
        <svg
          className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-text-secondary leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  )
}

function KnownIssueCard({ issue }: { issue: KnownIssue }) {
  const status = statusLabels[issue.status]
  return (
    <div className="p-6 rounded-2xl border border-border bg-surface/40 backdrop-blur-sm">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-medium text-text-primary leading-snug">{issue.title}</h3>
        <span className={`text-xs font-medium whitespace-nowrap ${status.color}`}>{status.text}</span>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed">{issue.description}</p>
    </div>
  )
}

// ─── Page ───────────────────────────────────────────────────

export default function SupportApp() {
  return (
    <div className="relative z-10 min-h-screen">
      {/* Header */}
      <header className="px-6 py-6">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-text-muted hover:text-text-secondary transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to WristVox
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-12 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Need help?
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            Find answers below or reach out — we're happy to help.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3">
            {faqItems.map((item) => (
              <FaqAccordion key={item.question} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Known Issues */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-3">Known Issues</h2>
          <p className="text-text-secondary mb-8">
            Issues we're aware of and actively working on.
          </p>
          <div className="flex flex-col gap-4">
            {knownIssues.map((issue) => (
              <KnownIssueCard key={issue.title} issue={issue} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 sm:p-10 rounded-2xl border border-border bg-surface/40 backdrop-blur-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold tracking-tight mb-3">Still stuck?</h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Drop us an email and we'll get back to you as soon as we can.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-2xl transition-all duration-300 glow-accent hover:scale-[1.02]"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/" className="text-accent font-bold text-lg hover:opacity-80 transition-opacity">
            WristVox
          </a>
          <span className="text-sm text-text-muted">© 2025 WristVox</span>
        </div>
      </footer>
    </div>
  )
}
