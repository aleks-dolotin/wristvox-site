const EFFECTIVE_DATE = 'February 21, 2026'
const SUPPORT_EMAIL = 'support@wristvox.app'

// ─── Section Component ──────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold tracking-tight mb-4">{title}</h2>
      <div className="text-text-secondary leading-relaxed space-y-4">{children}</div>
    </section>
  )
}

// ─── Page ───────────────────────────────────────────────────

export default function PrivacyApp() {
  return (
    <div className="relative z-10 min-h-screen">
      {/* Header */}
      <header className="px-6 py-6">
        <div className="max-w-3xl mx-auto">
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
      <section className="px-6 pt-12 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-text-muted text-sm">
            Effective {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="px-6 pb-32">
        <div className="max-w-3xl mx-auto">

          {/* TLDR Box */}
          <div className="p-6 sm:p-8 rounded-2xl border border-accent/20 bg-accent/5 mb-16">
            <h2 className="text-lg font-bold mb-3">In short</h2>
            <p className="text-text-secondary leading-relaxed">
              WristVox doesn't collect any data about you. All communication happens locally
              via Bluetooth between your Apple Watch and your Mac. No servers, no accounts,
              no analytics, no tracking. Your privacy is fully protected.
            </p>
          </div>

          <Section title="Data Collection">
            <p>
              <strong className="text-text-primary">We do not collect any personal data.</strong>
            </p>
            <p>
              WristVox operates entirely on your local devices and does not collect personal information,
              track usage or analytics, send data to remote servers, use third-party analytics services,
              store data in the cloud, or require account creation.
            </p>
          </Section>

          <Section title="How WristVox Works">
            <p>
              WristVox uses Bluetooth Low Energy (BLE) to communicate between your Apple Watch and Mac.
              This communication happens entirely locally between your devices, does not pass through any servers,
              is not monitored or logged, and contains only simple command signals (e.g., "start dictation").
            </p>
            <p>
              WristVox does not require an internet connection to function. All features work completely offline.
            </p>
          </Section>

          <Section title="Permissions Required">
            <div className="space-y-6">
              <div>
                <h3 className="text-text-primary font-medium mb-2">macOS App</h3>
                <p>
                  <strong className="text-text-primary">Bluetooth</strong> — to receive commands from your Apple Watch.
                  Limited to local device communication. WristVox does not access any data through Bluetooth.
                </p>
                <p className="mt-2">
                  <strong className="text-text-primary">Accessibility</strong> — to trigger keyboard shortcuts on your Mac.
                  Limited to sending predefined keyboard commands. WristVox does not read, access, or store any data
                  from other applications.
                </p>
              </div>
              <div>
                <h3 className="text-text-primary font-medium mb-2">watchOS &amp; iOS Apps</h3>
                <p>
                  <strong className="text-text-primary">Bluetooth</strong> — to send commands to your Mac.
                  Limited to local device communication. Only sends simple command signals.
                </p>
              </div>
            </div>
          </Section>

          <Section title="Third-Party Services">
            <p>
              WristVox does not use any third-party services, including analytics providers,
              crash reporting services, advertising networks, cloud storage providers,
              or social media integrations.
            </p>
          </Section>

          <Section title="Data Storage">
            <p>
              All app settings and preferences are stored locally on your devices using standard
              Apple frameworks (UserDefaults). If you enable iCloud sync in your device settings,
              Apple may sync WristVox preferences between your devices — this is controlled by your
              iCloud settings and is subject to Apple's Privacy Policy.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              WristVox does not collect any data from anyone, including children under 13.
              The app is rated 4+ and contains no age-inappropriate content.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>
              Since we don't collect any data, there is no personal data to request access to,
              request deletion of, request correction of, or export. You maintain complete control
              over your data at all times.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. If we make material changes,
              we will update the "Effective Date" above and publish a new version on our website.
              Continued use of WristVox after changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have questions about this Privacy Policy or WristVox's privacy practices:
            </p>
            <p>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-accent hover:text-accent-hover transition-colors"
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
          </Section>

          <div className="pt-8 border-t border-border text-sm text-text-muted">
            © 2026 WristVox. All rights reserved.
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/" className="text-accent font-bold text-lg hover:opacity-80 transition-opacity">
            WristVox
          </a>
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a href="/support/" className="hover:text-text-secondary transition-colors">Support</a>
            <span>© 2026 WristVox</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
