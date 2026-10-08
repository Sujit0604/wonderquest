import tailwindcss from '@tailwindcss/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

const baseSecurityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
}

// Keep in sync with public/_headers
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://images.unsplash.com https://www.youtube.com https://i.ytimg.com",
  "media-src 'self' data: blob: https://commondatastorage.googleapis.com",
  'frame-src https://www.youtube-nocookie.com',
  "connect-src 'self' https://api.emailjs.com https://emailjs.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    headers: baseSecurityHeaders,
  },
  preview: {
    headers: {
      ...baseSecurityHeaders,
      'Content-Security-Policy': contentSecurityPolicy,
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    },
  },
})
