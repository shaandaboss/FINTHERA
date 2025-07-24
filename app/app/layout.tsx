import './globals.css'
  import { Inter } from 'next/font/google'

  const inter = Inter({ subsets: ['latin'] })

  export const metadata = {
    title: 'FinThera - Feel Better About Your Money',
    description: 'AI Financial Therapy Platform with Voice Conversation',
  }

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    )
  }

