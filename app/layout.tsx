import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: "--font-source-sans"
});

export const metadata: Metadata = {
  title: 'KonspirasiNews - Portal Berita Independen',
  description: 'Portal berita terpercaya dengan informasi terkini seputar hukum, politik, dan demokrasi Indonesia',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${sourceSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
