import Card from "@/app/ui/home/card";
import { FilterOptions, FilterSearchForm } from "@/app/ui/home/filter";
import { SkeletonCard } from "@/app/ui/skeletons";

export default function Home() {
  return (
    <div className="text-sm px-8 pb-11 ">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-11 md:gap-x-3">
          <FilterSearchForm />
          <FilterOptions />
        </div>
        <main className="max-w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center md:gap-x-[75px] gap-y-12 md:gap-y-[70px] mt-9 md:mt-11">
          <Card
            url="https://flagcdn.com/de.svg"
            name="Germany"
            population={83240525}
            region="Europe"
            capital="Berlin"
          />
          <Card
            url="https://flagcdn.com/de.svg"
            name="Germany"
            population={83240525}
            region="Europe"
            capital="Berlin"
          />
          <Card
            url="https://flagcdn.com/de.svg"
            name="Germany"
            population={83240525}
            region="Europe"
            capital="Berlin"
          />
          <SkeletonCard />
        </main>
      </div>
    </div>
  );
}
