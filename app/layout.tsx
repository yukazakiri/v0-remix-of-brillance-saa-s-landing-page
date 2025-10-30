import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { Inter, Instrument_Serif, Acme as V0_Font_Acme } from 'next/font/google'

// Initialize fonts
const _acme = V0_Font_Acme({ subsets: ['latin'], weight: ["400"], variable: '--v0-font-acme' })
const _v0_fontVariables = `${_acme.variable}`

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Data Center College Of The Philippines - Baguio City",
  description:
    "Excellence in Education. Data Center College Of The Philippines offers innovative programs in technology, business, and professional development in Baguio City.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400&display=swap" />
      </head>
      <body className={`font-sans antialiased ${_v0_fontVariables}`}>{children}</body>
    </html>
  )
}
