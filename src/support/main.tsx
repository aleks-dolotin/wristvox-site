import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import SupportApp from './SupportApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SupportApp />
  </StrictMode>,
)
