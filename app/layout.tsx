import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Bake Shop at Crescent',
  description: 'Created by Ve3z',
  generator: 've3z',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
