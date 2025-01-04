"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function Card({
  url,
  name,
  population,
  region,
  capital,
}: {
  url: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}) {
  const router = useRouter();
  return (
    <>
      <article
        onClick={() => router.push(`/${name}`)}
        className="max-w-[263px] text-lightGrayBg cursor-pointer shadow-md shadow-gray-200 dark:shadow-none"
      >
        <section>
          <Image
            src={url}
            alt={`${name} Flag`}
            width={263}
            height={160}
            className="rounded-t-md"
          />
        </section>
        <section
          className="bg-white dark:bg-darkBlue pt-6 pb-11 px-6 rounded-b-md
           text-darkBlueText dark:text-lightGrayBg"
        >
          <h2 className="text-[19px] font-extrabold tracking-[3%] mb-4">
            Germany
          </h2>
          <p className="mb-1">
            <span className="font-semibold">Population</span>: {population}
          </p>
          <p className="mb-1">
            <span className="font-semibold mb-1">Region</span>: {region}
          </p>
          <p>
            <span className="font-semibold">Capital</span>: {capital}
          </p>
        </section>
      </article>
    </>
  );
}
