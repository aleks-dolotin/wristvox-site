import { GITHUB_URL } from '../config'

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-accent font-bold text-lg">WristVox</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-text-muted">
          <a
            href="/support/"
            className="hover:text-text-secondary transition-colors"
          >
            Support
          </a>
          <a
            href="/privacy/"
            className="hover:text-text-secondary transition-colors"
          >
            Privacy
          </a>
          <a
            href={GITHUB_URL}
            className="hover:text-text-secondary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span>© 2025 WristVox</span>
        </div>
      </div>
    </footer>
  )
}
