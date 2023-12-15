import Link from "next/link";

export default function Cancel({ children }) {
  return (
    <div className="max-w-lg mx-auto h-[80vh] flex flex-col items-center justify-center">
      <div>
        <h1 className="bg-rose-500 rounded-lg text-sm  mb-5 w-fit mx-auto px-4 py-1 text-red-50 font-medium">
          Transaction Canceled
        </h1>
        <p className="px-4 text-center">
          The payment was declined by your bank.
        </p>
      </div>
      <div className="mt-10 text-center">
        <Link
          className="bg-red-800 text-stone-100 font-bold p-4 rounded-3xl text-sm uppercase shadow-sm shadow-black text-center"
          href="/shop"
          draggable={false}
        >
          Return To Shop
        </Link>
      </div>
    </div>
  );
}
