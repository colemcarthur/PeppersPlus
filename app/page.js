import Image from 'next/image'
import pepperBackgroundImage from '@/public/img/pepper_background.webp'

export default function Home() {
  return (
    <main>
      <div className='relative'>
        <Image src={pepperBackgroundImage} alt='Pepper background image' className='w-full blur-lg brightness-75 relative z-[-20]'/>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center">
          <div className="w-[80rem] bg-stone-500 bg-opacity-75 p-8">
            <h1 className='font-bold text-xl'>Pepper Plus</h1>
          </div>
        </div>
      </div>
    </main>
  )
}
