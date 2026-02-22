import { useEffect, useState, useRef } from 'react'

const phrases = [
  'Schedule meeting at 9',
  'Sounds good to me',
  'Remind me at 5pm',
  'Search nearby cafes',
  'Call Alex after lunch',
  'Send the report',
  'Book flight to London',
  'Turn off the lights',
  'Play workout playlist',
  'Order more coffee',
  'Set timer 10 minutes',
  'I Love You',
  'Text mom be late',
  'Add milk to the list',
  'Check Tokyo weather',
  'Open presentation',
  'Cancel 3pm meeting',
  'Translate to French',
  'Find a restaurant',
  'Buy flowers Friday',
  'Read last email',
]

export default function HowItWorks() {
  const [phase, setPhase] = useState(0)
  const [visiblePhrases, setVisiblePhrases] = useState<{ text: string; id: number }[]>([
    { text: phrases[0], id: 0 },
  ])
  const nextId = useRef(1)
  const phraseIdx = useRef(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((p) => (p + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Add new phrase each time Mac phase activates
  useEffect(() => {
    if (phase === 2) {
      const newPhrase = {
        text: phrases[phraseIdx.current % phrases.length],
        id: nextId.current,
      }
      phraseIdx.current++
      nextId.current++

      setVisiblePhrases((prev) => [...prev, newPhrase])

      // Remove old phrases after animation (keep last 4)
      setTimeout(() => {
        setVisiblePhrases((prev) => prev.slice(-4))
      }, 600)
    }
  }, [phase])

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-text-secondary text-lg max-w-md mx-auto">
            Three steps. No setup. No pairing codes.
          </p>
        </div>

        {/* Animation */}
        <div className="relative flex items-center justify-center gap-6 sm:gap-12 py-8">

          {/* Apple Watch */}
          <div className="flex flex-col items-center gap-3 shrink-0">
            <div
              className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-[1.2rem] border-2 transition-all duration-500"
              style={{
                borderColor: phase === 0 ? '#6C5CE7' : '#222236',
                boxShadow: phase === 0 ? '0 0 30px rgba(108, 92, 231, 0.4), 0 0 60px rgba(108, 92, 231, 0.15)' : 'none',
              }}
            >
              <div className="absolute inset-2 rounded-xl bg-surface flex items-center justify-center overflow-hidden">
                <div
                  className="absolute w-10 h-10 rounded-full transition-all duration-500"
                  style={{
                    background: phase === 0 ? 'rgba(108, 92, 231, 0.3)' : 'transparent',
                    transform: phase === 0 ? 'scale(1.5)' : 'scale(0)',
                  }}
                />
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 transition-colors duration-500"
                  fill="none" viewBox="0 0 24 24"
                  stroke={phase === 0 ? '#6C5CE7' : '#5A5A6E'}
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div className="absolute -right-1 top-6 w-1.5 h-4 rounded-full bg-border" />
            </div>
            <span
              className="text-sm font-medium transition-colors duration-500"
              style={{ color: phase === 0 ? '#6C5CE7' : '#5A5A6E' }}
            >
              Tap
            </span>
          </div>

          {/* BLE Signal */}
          <div className="relative w-24 sm:w-40 h-8 flex items-center justify-center shrink-0">
            <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                style={{
                  backgroundColor: phase === 1 ? '#6C5CE7' : '#222236',
                  left: phase >= 1 ? `${(i + 1) * 16}%` : '0%',
                  opacity: phase === 1 ? 1 - i * 0.15 : 0,
                  transition: `all 0.5s ease-out ${i * 0.08}s`,
                  boxShadow: phase === 1 ? '0 0 8px rgba(108, 92, 231, 0.6)' : 'none',
                }}
              />
            ))}
            {/* No label needed — dots animation speaks for itself */}
          </div>

          {/* MacBook */}
          <div className="flex flex-col items-center gap-3 shrink-0">
            <div className="relative">
              {/* Screen bezel */}
              <div
                className="w-36 h-24 sm:w-52 sm:h-32 rounded-t-xl border-2 transition-all duration-500 relative"
                style={{
                  borderColor: phase === 2 ? '#6C5CE7' : '#222236',
                  boxShadow: phase === 2 ? '0 0 30px rgba(108, 92, 231, 0.4), 0 0 60px rgba(108, 92, 231, 0.15)' : 'none',
                }}
              >
                {/* Screen inner */}
                <div className="absolute inset-[6px] rounded-md bg-surface overflow-hidden">
                  {/* Chat-like message list */}
                  <div className="absolute inset-0 flex flex-col justify-end p-2 sm:p-3 gap-1.5">
                    {visiblePhrases.map((phrase, idx) => {
                      const isLatest = idx === visiblePhrases.length - 1
                      return (
                        <div
                          key={phrase.id}
                          className="chat-msg"
                          style={{
                            opacity: isLatest ? 1 : 0.3,
                            transform: isLatest ? 'translateY(0)' : 'translateY(0)',
                            animation: isLatest ? 'slideUp 0.4s ease-out' : undefined,
                          }}
                        >
                          <span className="inline-block px-2 py-1 rounded-lg bg-accent/15 text-[9px] sm:text-xs text-white font-mono whitespace-nowrap">
                            {phrase.text}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              {/* Keyboard base — same width as screen */}
              <div
                className="w-36 h-1.5 sm:w-52 sm:h-2 rounded-b-lg border-x-2 border-b-2 transition-colors duration-500"
                style={{ borderColor: phase === 2 ? '#6C5CE7' : '#222236' }}
              />
            </div>
            <span
              className="text-sm font-medium transition-colors duration-500"
              style={{ color: phase === 2 ? '#6C5CE7' : '#5A5A6E' }}
            >
              Done
            </span>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
