import { getPeppers } from '@/lib/firebase/getPeppers'
import { PepperCard } from '@/components/pepperCard/PepperCard'

export default async function Home() {
  const payload = await getPeppers()
  const peppers = Object.values(payload)

  return (
    <main>
      <div style={{
        backgroundImage: 'url("/img/pepper_background_2.webp")'
      }}
        className="top-0 left-0 w-full h-full flex justify-center bg-cover bg-center">
        <div className="py-6 bg-center w-[80rem] bg-opacity-75 flex flex-wrap gap-4 justify-between">
          {peppers.map(pepper => (<PepperCard key={pepper.id} {...pepper} />))}
        </div>
      </div>
    </main >
  )
}