import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const PlusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Leadster',
  description: 'teste criado com Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={PlusJakartaSans.className}>{children}</body>
    </html>
  )
}
