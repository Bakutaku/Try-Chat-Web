import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Try-Chat',
  description: 'Try-Chat Web Apllication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp" className='light '>
      <body className={inter.className}>
        <Theme>
          <div className='bg-slate-400 min-h-screen dark:bg-slate-950'>
            {children}
          </div>
          {/* <ThemePanel /> */}

          <footer className='p-3 bg-black text-white text-center'>
            @Try-Chat
          </footer>
        </Theme>
      </body>
    </html>
  )
}
