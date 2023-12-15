import Image from "next/image";
import { getPeppers } from "@/lib/firebase/getPeppers";
import { BuyNowButton } from "@/components/buyNowButton/BuyNowButton";

async function getPepper(id) {
  const payload = await getPeppers();
  const peppers = Object.values(payload);
  const pepper = peppers.find((pepper) => pepper.id == id);
  return pepper;
}

async function PepperPage({ params }) {
  const pepper = await getPepper(params.id);

  const scovillePercentage = (pepper.scoville / 1000000) * 100;

  const formattedPrice = pepper.price.toLocaleString("en-US", {
    style: "currency",
    currency: "CAD",
  });

  return (
    <main className="max-w-[80rem] m-auto py-6">
      <div className="bg-stone-100 rounded-2xl font-semibold shadow-lg shadow-black p-8 flex justify-between gap-6 text-slate-900">
        <div className="flex flex-col justify-between gap-4 w-[33%]">
          <div>
            <Image
              src={`/pepper_photos/${pepper.image}`}
              alt={pepper.name}
              width={200}
              height={200}
              className="rounded-2xl w-full object-contain mb-4 shadow-lg shadow-stone-600"
            />
            <div className="flex items-center">
              <Image
                src={`/img/pepper_logo.webp`}
                alt="Pepper Plus Logo"
                width={100}
                height={100}
                className="w-[15%] ml-[-4%] object-contain"
              />
              <div className="w-[89%] relative h-[1rem] bg-gradient-to-t from-stone-400 to-stone-100 rounded overflow-hidden shadow-black shadow">
                <div
                  style={{ width: `${scovillePercentage - 4}%` }}
                  className={`absolute top-0 left-0 h-[50%] bg-gradient-to-t from-red-800 to-red-500 m-1 rounded shadow-stone-700 shadow-inner`}
                ></div>
              </div>
            </div>
          </div>
          <p>{pepper.description}</p>

          <BuyNowButton priceId={pepper.priceID} />
        </div>
        <div className="flex flex-col justify-between gap-6 border shadow-lg shadow-stone-600 p-6 rounded-2xl w-[33%]">
          <div>
            <h2 className="text-5xl">{pepper.name}</h2>
            {pepper.secondaryName != null && (
              <p>
                Know As:{" "}
                <span className="font-bold">{pepper.secondaryName}</span>
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <p>Colour: {pepper.color}</p>
            <p>Country Of Orign: {pepper.origin}</p>
            <p>Growing Season: {pepper.growingSeason}</p>
            <p>Harvest Time: {pepper.harvestTime}</p>
            <p>Heat Level: {pepper.heatLevel}</p>
          </div>

          <div>
            <p className="font-bold text-4xl text-yellow-600">
              {formattedPrice}
            </p>
            <p className="text-">{pepper.stock} in stock!</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 border shadow-lg shadow-stone-600 p-6 rounded-2xl w-[33%]">
          <div>
            <h3 className="text-3xl">Uses</h3>
            <ul className="list-disc ml-6">
              {pepper.uses.map((use, index) => (
                <li key={index}>{use}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-3xl">Nutrition Information</h3>
            <ul className="list-disc ml-6">
              <li>Calories: {pepper.nutritionInfo.calories}</li>
              <li>Fiber: {pepper.nutritionInfo.fiber}</li>
              <li>Vitamin A: {pepper.nutritionInfo.vitamin_a}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl">Recipes</h3>
            <ul className="list-disc ml-6">
              {pepper.recipes.map((recipe, index) => (
                <li key={index}>{recipe}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PepperPage;
