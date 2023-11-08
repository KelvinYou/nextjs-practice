import Head from 'next/head'
import './globals.css'
import { Quicksand } from 'next/font/google'
import ReactDOM from 'react-dom'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio | Kelvin',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}