import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'MirageSentinel_Deception_Lab',
    template: '%s | MirageSentinel_Deception_Lab'
  },
  description: 'Industrial-grade cybersecurity deception platform with autonomous honeypots, real-time threat detection, and CRDT synchronization for distributed security operations.',
  keywords: ['cybersecurity', 'deception', 'honeypot', 'threat detection', 'security', 'MITRE ATT&CK'],
  authors: [{ name: 'Ayush Anand' }],
  openGraph: {
    title: 'MirageSentinel_Deception_Lab',
    description: 'Deceive. Detect. Defend. Advanced cybersecurity deception technology.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0c1222',
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="">
      <body className="font-sans antialiased min-h-screen bg-background" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <footer className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-white/10 bg-slate-950/75 px-4 py-2 text-center text-xs text-white/70 backdrop-blur-md">
            © 2026 Ayush Anand · MirageSentinel_Deception_Lab™ · All rights reserved.
          </footer>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}