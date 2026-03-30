import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/modules/components/layout/Navbar'
import { ReactNode } from 'react'
import Footer from '@/modules/components/layout/Footer'
import { QueryProvider } from '@/modules/providers/QueryProvider'

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
      <QueryProvider>
        <main className="relative">
          <div className="-z-10 absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_24%)]" />

          <Navbar />
          <div className="container mx-auto px-6 xl:px-0">{children}</div>
        </main>
        <Footer />
      </QueryProvider>
    </body>
  </html>
)

export default RootLayout
