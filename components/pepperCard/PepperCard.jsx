"use client"
import Image from 'next/image'

function PepperCard({ id, name, secondaryName, image, description, scoville, stock }) {
  const scovillePercentage = (scoville / 1000000) * 100;

  return (
    <div className='bg-stone-500 w-[19rem] h-[30rem] rounded-md bg-opacity-90 p-4 font-semibold shadow-md flex gap-4'>
      <div className='w-[99%]'>
        <div className='h-[4rem]'>
          <p className='font-extrabold text-xl'>{name}</p>
          <p className='font-bold text-sm'>{secondaryName ? `(${secondaryName})` : ""}</p>
        </div>
        <Image src={`/pepper_photos/${image}`} alt={name} width={200} height={200} className='rounded-md w-full' />
        <p>{description}</p>
        <p className='font-bold text-lg mt-6'>{stock} in stock!</p>
      </div>
      <div className="relative w-[1rem] bg-gradient-to-t from-stone-400 to-stone-100 rounded overflow-hidden shadow-lg">
        <div style={{ height: `${scovillePercentage}%` }} className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-red-800 to-red-500`}></div>
      </div>
    </div>
  )
}

export { PepperCard }