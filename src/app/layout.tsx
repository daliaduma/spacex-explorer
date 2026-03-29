import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/modules/layout/components/Navbar'
import { ReactNode } from 'react'
import Footer from '@/modules/layout/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'SpaceX Explorer',
  description: 'A React + Next.js application with SpaceX API'
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html
    lang="en"
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
  >
    <body className="min-h-screen grid grid-rows-[1fr_auto] bg-slate-950 text-white">
      <main>
        <Navbar />
        {children}
      </main>
      <Footer />
    </body>
  </html>
)

export default RootLayout
