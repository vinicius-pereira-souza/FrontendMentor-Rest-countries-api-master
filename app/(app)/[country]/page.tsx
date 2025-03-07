import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import CardDetails from "@/app/ui/country/cardDetails";
import { Suspense } from "react";
import { CardDetailsSkeleton } from "@/app/ui/skeletons";

export default async function Page({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;

  return (
    <div className="text-base px-8 pb-28 pt-4">
      <div className="max-w-[1280px] mx-auto min-h-[80vh] ">
        <Link
          href={"/"}
          className="text-[17px] md:text-base lg:text-base flex items-center gap-x-5 lg:gap-x-3 py-2 px-8 md:py-2 md:px-8 shadow-md shadow-gray-200 dark:shadow-none rounded theme-bg max-w-max"
        >
          <FaArrowLeftLong /> Back
        </Link>
        <Suspense fallback={<CardDetailsSkeleton />}>
          <CardDetails name={country} />
        </Suspense>
      </div>
    </div>
  );
}
