"use client"
import Image from 'next/image'

function PepperCard({ id, name, secondaryName, image, description, scoville, stock }) {
  const scovillePercentage = (scoville / 1000000) * 100;

  return (
    // <div className='bg-stone-100 w-[19rem] h-[30rem] rounded-md bg-opacity-90 p-4 font-semibold shadow-md flex gap-4'>
    //   <div className='w-[99%]'>
    //     <div className='h-[4rem]'>
    //       <p className='font-extrabold text-xl'>{name}</p>
    //       <p className='font-bold text-sm'>{secondaryName ? `(${secondaryName})` : ""}</p>
    //     </div>
    //     <Image src={`/pepper_photos/${image}`} alt={name} width={200} height={200} className='rounded-md w-full' />
    //     <p>{description}</p>
    //     <p className='font-bold text-lg mt-6'>{stock} in stock!</p>
    //   </div>
    //   <div className="relative w-[1rem] bg-gradient-to-t from-stone-400 to-stone-100 rounded overflow-hidden shadow-lg">
    //     <div style={{ height: `${scovillePercentage}%` }} className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-red-800 to-red-500`}></div>
    //   </div>
    // </div>
    <div className='bg-stone-100 w-[19rem] h-[36rem] rounded-2xl font-semibold shadow-md flex flex-col justify-between overflow-hidden'>
      <Image src={`/pepper_photos/${image}`} alt={name} width={200} height={200} className='w-full object-contain' />
      <div className='p-4 gap-2 flex flex-col'>
        <div>
          {/* <Image src={`/img/pepper_logo.webp`} alt="Pepper Plus Logo" width={100} height={100} className='w-[3rem] object-contain' /> */}
          <div className="relative h-[1rem] bg-gradient-to-t from-stone-400 to-stone-100 rounded overflow-hidden shadow-xl border">
            <div style={{ width: `${scovillePercentage}%` }} className={`absolute top-0 left-0 h-full bg-gradient-to-t from-red-800 to-red-500`}></div>
          </div>
        </div>
        <div className='h-[3rem]'>
          <p className='font-extrabold text-xl'>{name}</p>
          <p className='font-bold text-sm'>{secondaryName ? `(${secondaryName})` : ""}</p>
        </div>
        <div>
          <p className='font-normal text-sm'>{description}</p>
          <p className='font-bold text-xl text-yellow-600'>$0.00</p>
          <p className='font-normal text-xs'>{stock} in stock!</p>
        </div>
      </div>
      <button className='m-4 bg-red-800 text-stone-100 font-bold p-2 rounded-3xl w-[8rem] text-sm uppercase'>Add To Cart</button>
    </div>
  )
}

export { PepperCard }