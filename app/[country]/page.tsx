import Link from "next/link";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";

export default async function Page() {
  return (
    <div className="text-base px-8 pb-28">
      <div className="max-w-[1280px] mx-auto min-h-[80vh] ">
        <Link
          href={"/"}
          className="text-sm md:text-base lg:text-base flex items-center gap-x-5 lg:gap-x-3 py-5 px-11 md:py-2 md:px-8 shadow-md shadow-gray-200 dark:shadow-none rounded theme-bg max-w-max"
        >
          <FaArrowLeftLong /> Back
        </Link>
        <article className="mt-14 md:mt-[122px] lg:mt-[77px]">
          <section>
            <Image
              src={"https://flagcdn.com/de.svg"}
              alt={`teste Flag`}
              width={560}
              height={400}
            />
          </section>
          <section className="theme-bg pt-6 pb-11 px-6 rounded-b-md">
            <h2 className="text-[19px] font-extrabold tracking-[3%] mb-4">
              Germany
            </h2>
            <p className="mb-1">
              <span className="font-semibold">Population</span>: 645
            </p>
            <p className="mb-1">
              <span className="font-semibold mb-1">Region</span>: fdsfdsf
            </p>
            <p>
              <span className="font-semibold">Capital</span>: fdsfsfds
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
