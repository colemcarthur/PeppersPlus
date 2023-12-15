import { getPeppers } from "@/lib/firebase/getPeppers";
import { PepperCard } from "@/components/pepperCard/PepperCard";
import pepperBackgroundImage from "@/public/img/pepper_background_2.webp";
import { Banner } from "@/components/banner/Banner";

export default async function Home() {
  const payload = await getPeppers();
  const peppers = Object.values(payload);

  peppers.sort((a, b) => b.scoville - a.scoville);

  return (
    <main className="max-w-[80rem] m-auto">
      <Banner
        headerText="Shop Our Store"
        backgroundImage={pepperBackgroundImage}
      />
      <div className="py-6 bg-opacity-75 flex flex-wrap gap-4 justify-between">
        {peppers.map((pepper) => (
          <PepperCard key={pepper.id} {...pepper} />
        ))}
      </div>
    </main>
  );
}
