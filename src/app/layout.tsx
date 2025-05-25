import type { Metadata } from 'next';
import { Kosugi_Maru } from 'next/font/google';
import './globals.css';

const kosugiMaru = Kosugi_Maru({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})
export const metadata: Metadata = {
  title: 'Simrah Shabandri | Portfolio',
  description: "My home on the web, showcasing my projects, skills, and experiences.",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kosugiMaru.className}>
        {children}
      </body>
    </html>
  )
}