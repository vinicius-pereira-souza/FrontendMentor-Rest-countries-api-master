import Image from "next/image";
import { fetchCountryByName } from "@/app/lib/data";
import {
  countryDetailKeys,
  countryDetailLabels,
} from "@/app/lib/countryDetailsConfig";

export default async function CardDetails({ name }: { name: string }) {
  const data = await fetchCountryByName(name);

  return (
    <>
      <article className="mt-[75px] md:mt-[122px] lg:mt-[77px] mx-auto lg:flex lg:gap-x-[122px] items-center justify-around">
        <section className="flex-1">
          <Image
            src={data.flags.png}
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
          <div className="details-country md:flex items-start">
            <ul className="flex flex-col gap-y-4 mb-14 flex-1">
              {countryDetailKeys.map((title: string) => (
                <CountryDetail
                  key={title}
                  detailName={countryDetailLabels[title]}
                  value={data[title]}
                />
              ))}
            </ul>
            {/* <ul className="flex flex-col gap-y-4 flex-1">
              <li>
                Top Level Domain:{" "}
                {data.topLevelDomain.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </li>

              <li>
                Currencies:{" "}
                <span>
                  {data.currencies.map((item) => (
                    <span key={item.name}>{item.name}</span>
                  ))}
                </span>
              </li>
              <li>
                Languages:{" "}
                <span>
                  {data.topLevelDomain.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </span>
              </li>
            </ul> */}
          </div>
          <footer className="lg:flex items-center gap-3">
            <h3 className="font-semibold text-nowrap text-[21px] lg:text-[17px] mb-4 md:mb-0 tracking-[-2%]">
              Border Countries:
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              {data.borders.map((item: string) => (
                <BorderContry key={item} name={item} />
              ))}
            </div>
          </footer>
        </section>
      </article>
    </>
  );
}

export function CountryDetail({
  detailName,
  value,
}: {
  detailName: string;
  value: string;
}) {
  return (
    <>
      <li className="text-[17px] font-light text-lightGrayBg">
        {detailName}:<span className="text-darkGray ml-1">{value}</span>
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
