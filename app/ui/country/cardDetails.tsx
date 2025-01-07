import Image from "next/image";
import { fetchCountryByName } from "@/app/lib/data";
import {
  countryDetailKeys,
  countryDetailLabels,
  countryDetailKeysLoop,
} from "@/app/lib/countryDetailsConfig";

export default async function CardDetails({ name }: { name: string }) {
  const data = await fetchCountryByName(name);

  return (
    <>
      <article className="mt-[75px] md:mt-[122px] lg:mt-[77px] mx-auto lg:flex lg:gap-x-[122px] items-center justify-around">
        <section className="flex-1">
          <Image
            src={data.flag}
            alt={`${name} Flag`}
            width={560}
            height={400}
            className="max-w-full block mx-auto"
          />
        </section>
        <section className="flex-1 mx-auto">
          <h2 className="font-extrabold text-[27px] mt-14 md:mt-0 mb-7">
            {data.name}
          </h2>
          <div className="details-country md:flex items-start mb-14">
            <ul className="flex flex-col gap-y-4 mb-14 md:mb-0 flex-1">
              {countryDetailKeys.map((title: string) => (
                <CountryDetail
                  key={title}
                  detailName={countryDetailLabels[title]}
                  value={data[title]}
                />
              ))}
            </ul>
            <ul className="flex flex-col gap-y-4 flex-1">
              {countryDetailKeysLoop.map((title: string) => (
                <CountryDetail
                  key={title}
                  detailName={countryDetailLabels[title]}
                  value={data[title]}
                />
              ))}
            </ul>
          </div>
          <footer className="lg:flex items-center gap-3">
            <h3 className="font-semibold text-nowrap text-[21px] lg:text-[17px] mb-4 md:mb-0 tracking-[-2%]">
              Border Countries:
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              {data.languages.map((item: { name: string }) => (
                <BorderContry key={item.name} name={item.name} />
              ))}
            </div>
          </footer>
        </section>
      </article>
    </>
  );
}

type Props = {
  detailName: string;
  value: string | Array<{ name: string }>;
};

export function CountryDetail({ detailName, value }: Props) {
  const renderDetail = ({ value }: Props) => {
    if (!Array.isArray(value)) {
      return <span className="text-darkGray ml-1">{value}</span>;
    } else {
      if (value.every((item) => typeof item == "string")) {
        return value.map((item) => (
          <span key={item} className="text-darkGray ml-1">
            {item}
          </span>
        ));
      } else {
        return value.map((item: { name: string }) => (
          <span key={item.name} className="text-darkGray ml-1">
            {item.name},
          </span>
        ));
      }
    }
  };

  return (
    <>
      <li className="text-[17px] font-light text-lightGrayBg">
        {detailName}:{renderDetail({ detailName, value })}
      </li>
    </>
  );
}

export function BorderContry({ name }: { name: string }) {
  return (
    <>
      <span className="flex items-center justify-center w-[120px] h-[35px] text-[15px] rounded theme-bg theme-shadow font-light">
        {name}
      </span>
    </>
  );
}
