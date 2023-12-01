import { getPeppers } from '@/lib/firebase/getPeppers'
import { PepperCard } from '@/components/pepperCard/PepperCard'
import { Banner } from '@/components/banner/Banner'

export default async function Home() {
  const payload = await getPeppers()
  const peppers = Object.values(payload)

  peppers.sort((a, b) => b.scoville - a.scoville);

  return (
    <main>
      <div className="max-w-[80rem] m-auto">
        <Banner headerText="Shop Our Store" />
        <div className="py-6 bg-opacity-75 flex flex-wrap gap-4 justify-between">
          {peppers.map(pepper => (<PepperCard key={pepper.id} {...pepper} />))}
        </div>
      </div>
    </main >
  )
}