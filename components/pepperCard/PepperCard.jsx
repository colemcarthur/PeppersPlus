"use client"
import Image from 'next/image'

function PepperCard({ id, name, secondaryName, image, description, scoville, stock }) {
  const scovillePercentage = (scoville / 1000000) * 100;

  return (
    <div className='bg-stone-100 w-[19rem] h-[37rem] rounded-2xl font-semibold shadow-lg shadow-black flex flex-col justify-between overflow-hidden'>
      <Image src={`/pepper_photos/${image}`} alt={name} width={200} height={200} className='w-full object-contain' />
      <div className='p-4 gap-2 flex flex-col'>
        <div className='flex items-center'>
          <Image src={`/img/pepper_logo.webp`} alt="Pepper Plus Logo" width={100} height={100} className='w-[15%] ml-[-4%] object-contain' />
          <div className="w-[89%] relative h-[1rem] bg-gradient-to-t from-stone-400 to-stone-100 rounded overflow-hidden shadow-black shadow">
            <div style={{ width: `${scovillePercentage - 4}%` }} className={`absolute top-0 left-0 h-[50%] bg-gradient-to-t from-red-800 to-red-500 m-1 rounded shadow-black shadow`}></div>
          </div>
        </div>
        <div className='h-[3rem]'>
          <p className='font-extrabold text-xl'>{name}</p>
          <p className='font-bold text-sm'>{secondaryName ? `(${secondaryName})` : ""}</p>
        </div>
        <div className='flex flex-col gap-3 h-[5rem]'>
          <p className='font-normal text-sm'>{description}</p>
          <div>
            <p className='font-bold text-xl text-yellow-600'>$0.00</p>
            <p className='font-normal text-xs'>{stock} in stock!</p>
          </div>
        </div>
      </div>
      <button className='m-4 bg-red-800 text-stone-100 font-bold p-2 rounded-3xl w-[8rem] text-sm uppercase shadow-sm shadow-black'>Add To Cart</button>
    </div>
  )
}

export { PepperCard }