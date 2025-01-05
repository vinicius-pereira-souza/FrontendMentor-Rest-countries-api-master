import { CardsWrapperCards } from "@/app/ui/skeletons";
import FilterSearchForm from "@/app/ui/home/filter";

export default function Home() {
  return (
    <div className="text-sm px-8 pb-11 ">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-11 md:gap-x-3">
          <FilterSearchForm />
        </div>
        <main className="max-w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center md:gap-x-[75px] gap-y-12 md:gap-y-[70px] mt-9 md:mt-11">
          <CardsWrapperCards />
        </main>
      </div>
    </div>
  );
}
