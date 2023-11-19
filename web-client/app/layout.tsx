import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hosea Tong-Ho',
  description: 'Hosea Tong-Ho\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar></Navbar>
        {children}
        </body>
    </html>
  )
}
