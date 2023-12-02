"use client"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import pepperLogo from "@/public/img/pepper_logo.webp"

function Navigation() {
  const pathname = usePathname()

  return (
    <div className='p-4 px-10 bg-stone-900 text-stone-300 shadow-md shadow-stone-950'>
      <div className='flex items-center justify-between max-w-[80rem] m-auto'>
        <Link href="/" draggable={false}>
          <div className="flex items-center gap-2 font-bold">
            <Image src={pepperLogo} alt="Pepper Plus Logo" className='w-[5rem] h-[5rem]' draggable={false} />
            <h1 className="text-xl">Peppers Plus</h1>
          </div>
        </Link>

        <nav>
          <ul className='flex gap-12 items-centertext-lg font-semibold'>
            <li><Link href="/" className={pathname === '/' ? 'underline underline-offset-4 decoration-[.125rem] font-bold' : ''} draggable={false}>Home</Link></li>
            <li><Link href="/shop" className={pathname === '/shop' ? 'underline underline-offset-4 decoration-[.125rem] font-bold' : ''} draggable={false}>Shop</Link></li>
          </ul>
        </nav>
      </div>
    </div >
  )
}

export { Navigation }