import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation/Navigation'
import { Footer } from '@/components/footer/Footer'
import { cn } from '@/lib/utils/mergeCss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Peppers Plus',
  description: 'DMIT 2008 Assignment 2 | Cole McArthur',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-stone-600')}>
        <Navigation/>
        {children}
        <Footer>Created By Cole McArthur For DMIT 2008 | <span className='font-thin'>For Educational Purposes Only</span></Footer>
      </body>
    </html>
  )
}
