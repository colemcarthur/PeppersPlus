"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function PepperCard({
  id,
  name,
  price,
  secondaryName,
  image,
  description,
  scoville,
  stock,
}) {
  const scovillePercentage = (scoville / 1000000) * 100;

  const formattedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "CAD",
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", duration: 0.3, delay: 0.15 },
      }}
      variants={{
        hidden: {
          scale: 0.9,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { type: "spring", duration: 2, delay: 0.15 },
        },
        exit: {
          scale: 0.9,
          opacity: 0,
        },
      }}
      className="bg-stone-100 w-[19rem] h-[37rem] rounded-2xl font-semibold shadow-lg shadow-black flex flex-col justify-between overflow-hidden"
    >
      <Image
        src={`/pepper_photos/${image}`}
        alt={name}
        width={200}
        height={200}
        className="w-full object-contain"
        draggable={false}
      />
      <div className="p-4 gap-2 flex flex-col">
        <div className="flex items-center">
          <Image
            src={`/img/pepper_logo.webp`}
            alt="Pepper Plus Logo"
            width={100}
            height={100}
            className="w-[15%] ml-[-4%] object-contain"
            draggable={false}
          />
          <div className="w-[89%] relative h-[1rem] bg-gradient-to-t from-stone-400 to-stone-100 rounded overflow-hidden shadow-black shadow">
            <div
              style={{ width: `${scovillePercentage - 4}%` }}
              className={`absolute top-0 left-0 h-[50%] bg-gradient-to-t from-red-800 to-red-500 m-1 rounded shadow-stone-700 shadow-inner`}
            ></div>
          </div>
        </div>
        <div className="h-[3rem]">
          <h2 className="font-extrabold text-xl">{name}</h2>
          <p className="font-bold text-sm">
            {secondaryName ? `(${secondaryName})` : ""}
          </p>
        </div>
        <div className="flex flex-col gap-3 h-[5rem]">
          <p className="font-normal text-sm">{description}</p>
          <div>
            <p className="font-bold text-xl text-yellow-600">
              {formattedPrice || "$0.00"}
            </p>
            <p className="font-normal text-xs">{stock} in stock!</p>
          </div>
        </div>
      </div>
      <Link
        className="m-4 bg-red-800 text-stone-100 font-bold p-2 rounded-3xl w-[8rem] text-sm uppercase shadow-sm shadow-black text-center"
        href="/pepper/[id]"
        as={`/pepper/${id}`}
        draggable={false}
      >
        View
      </Link>
    </motion.div>
  );
}

export { PepperCard };
