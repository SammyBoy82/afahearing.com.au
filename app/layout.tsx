import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AFA hearing - Professional Hearing Aid Services Melbourne',
  description: 'Quality hearing aid services and audiological care in Melbourne, Victoria. Modern hearing solutions for your family.',
  keywords: 'hearing aids, audiologist, hearing services, Melbourne, Victoria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
