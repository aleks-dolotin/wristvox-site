// ============================================
// WristVox Site Configuration
//
// Version is injected at build time via env:
//   VITE_APP_VERSION=0.9.2 npm run build
//
// For local dev, fallback to DEFAULT_VERSION
// ============================================

const DEFAULT_VERSION = '0.9.1'

export const APP_VERSION = import.meta.env.VITE_APP_VERSION || DEFAULT_VERSION
export const APP_TAG = `v${APP_VERSION}`

export const DOWNLOAD_URL = `https://github.com/aleks-dolotin/wristvox-releases/releases/download/${APP_TAG}/WristVox-Mac-${APP_VERSION}.dmg`
export const GITHUB_URL = 'https://github.com/aleks-dolotin/wristvox-releases'
