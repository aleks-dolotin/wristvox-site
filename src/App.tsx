import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Commands from './components/Commands'
import Privacy from './components/Privacy'
import Download from './components/Download'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative z-10 min-h-screen">
      <Hero />
      <HowItWorks />
      <Commands />
      <Privacy />
      <Download />
      <Footer />
    </div>
  )
}
