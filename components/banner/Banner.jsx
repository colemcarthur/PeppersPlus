"use client"

import Image from 'next/image'
import pepperBackgroundImage from '@/public/img/pepper_background.webp'

function Banner({ headerText, backgroundImage }) {
  return (
    <div className="h-[15rem] my-6 relative overflow-hidden bg-stone-500 flex items-center px-[5%] rounded-2xl shadow-lg shadow-black">
      <Image src={backgroundImage || pepperBackgroundImage} alt='Pepper background image.' className="absolute inset-0 w-full h-full object-cover blur-lg m[-4rem]" />
      <div className="relative z-10">
        <h2 className="font-bold text-stone-100 text-4xl">{headerText || "Banner Component"}</h2>
      </div>
    </div>
  )
}

export { Banner }