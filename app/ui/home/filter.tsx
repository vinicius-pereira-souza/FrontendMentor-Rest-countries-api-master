import { IoSearchSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function FilterSearchForm() {
  return (
    <>
      <form
        action=""
        className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-y-11 md:gap-x-3"
      >
        <FilterSearchInput />
        <FilterSearchOptions />
      </form>
    </>
  );
}

export function FilterSearchInput() {
  return (
    <>
      <div className="flex-1 max-w-[475px] theme-bg relative theme-shadow rounded">
        <input
          type="search"
          name="search"
          id="serach"
          placeholder="Search for a country..."
          className="block w-full text-sm py-5 pl-[75px] pr-4 bg-transparent outline-none placeholder:font-medium"
        />
        <label
          htmlFor="search"
          className="text-2xl absolute top-1/2 -translate-y-1/2 left-8"
        >
          <IoSearchSharp />
        </label>
      </div>
    </>
  );
}

const options: string[] = ["africa", "america", "asia", "europa", "oceania"];

export function FilterSearchOptions() {
  return (
    <>
      <div className="relative w-[245px] theme-shadow ">
        <span className="absolute top-1/2 -translate-y-1/2 right-5 text-lg ">
          <MdKeyboardArrowDown />
        </span>
        <select
          name="region"
          id="region"
          className="w-full outline-none py-5 pl-7 pr-6 rounded text-darkBlueText dark:text-lightGrayBg 
        theme-bg"
        >
          <option className="block pt-2 hover:bg-transparent">
            Filter by Region
          </option>

          {options.map((option: string) => (
            <option key={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
