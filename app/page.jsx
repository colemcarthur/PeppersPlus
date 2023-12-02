import { Banner } from "@/components/banner/Banner";

export default function Home() {
  return (
    <main className="max-w-[80rem] m-auto">
      <Banner headerText='Spice Up Your Life with Flavorful Heat!' />

      <div className='bg-stone-100 p-6 rounded-2xl flex flex-col gap-8 mb-6 shadow-lg shadow-black'>
        <div className='max-w-[40rem]'>
          <h2 className='text-2xl font-bold text-red-800'>The Scoville Scale: A Heat Odyssey</h2>
          <p>Ever wonder how we measure the heat of peppers? Enter the Scoville Scale, a spicy journey that rates peppers based on their capsaicin content. From sweet Bells to fiery Ghosts, explore the spectrum of heat!</p>
        </div>

        <div className='max-w-[40rem] ml-auto'>
          <h2 className='text-2xl font-bold text-red-800'>From Bell to Bhut Jolokia: A Pepper's Tale</h2>
          <p>Peppers come in all shapes, sizes, and heat levels. Whether it's the mild crunch of a Bell or the explosive kick of a Ghost, each pepper tells a unique story on your taste buds.</p>
        </div>

        <div className='max-w-[40rem]'>
          <h2 className='text-2xl font-bold text-red-800'>Heat Unleashed: Exploring the Scoville Scale</h2>
          <p>Brace yourself for the Scoville Scale! From the mild embrace of Bell Peppers to the blazing intensity of Ghost Peppers, discover the diverse world of peppers and their fiery personalities.</p>
        </div>

        <div className='max-w-[40rem] ml-auto'>
          <h2 className='text-2xl font-bold text-red-800'>Pepper Palates: Mild to Wild</h2>
          <p>Are you a culinary adventurer seeking the thrill of heat? Our pepper collection spans the Scoville Scale, offering mild delights like the Cubanelle to the fiery inferno of the Ghost Pepper. Spice up your dishes and your life!</p>
        </div>

        <div className='max-w-[40rem]'>
          <h2 className='text-2xl font-bold text-red-800'>Scoville Safari: Navigating Pepper Territory</h2>
          <p>Embark on a flavor expedition through the Scoville Scale! Trek from the mild landscapes of Poblano to the scorching deserts of the Ghost Pepper. Let your taste buds explore the diverse terrain of pepper paradise.</p>
        </div>

        <div className='max-w-[40rem] ml-auto'>
          <h2 className='text-2xl font-bold text-red-800'>Spice Up Your Culinary Canvas with Peppers</h2>
          <p>Elevate your cooking game with the Scoville Scale's palette of peppers! From the vibrant colors of Bell Peppers to the bold heat of Habaneros, let your kitchen become the canvas for a spicy masterpiece.</p>
        </div>

      </div>
    </main>
  )
}
