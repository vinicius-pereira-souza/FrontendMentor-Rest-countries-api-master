import Image from "next/image";

export default async function CardDetails({ name }: { name: string }) {
  console.log(name);
  return (
    <>
      <article className="mt-[75px] md:mt-[122px] lg:mt-[77px] mx-auto lg:flex lg:gap-x-[122px] items-center justify-around">
        <section className="flex-1">
          <Image
            src={"https://flagcdn.com/w320/de.png"}
            alt={`${name} Flag`}
            width={560}
            height={400}
            className="max-w-full block mx-auto"
          />
        </section>
        <section className="flex-1 mx-auto">
          <h2 className="font-extrabold text-[27px] mt-14 md:mt-0 mb-7">
            Germany
          </h2>
          <div className="details-country md:flex items-start">
            <ul className="flex flex-col gap-y-4 mb-14 flex-1">
              <li>
                Native Name: <span>German</span>
              </li>
              <li>
                Population: <span>83240525</span>
              </li>
              <li>
                Region: <span>Europe</span>
              </li>
              <li>
                Sub Region: <span>Central Europe</span>
              </li>
              <li>
                Capital: <span>Berlin</span>
              </li>
            </ul>
            <ul className="flex flex-col gap-y-4 flex-1">
              <li>
                Top Level Domain: <span>.de</span>
              </li>
              <li>
                Currencies: <span>Euro</span>
              </li>
              <li>
                Languages: <span>German</span>
              </li>
            </ul>
          </div>
          <footer className="lg:flex items-center gap-3">
            <h3 className="font-semibold text-nowrap text-[21px] lg:text-[17px] mb-4 md:mb-0 tracking-[-2%]">
              Border Countries:
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <BorderContry name="Deutsch" />
            </div>
          </footer>
        </section>
      </article>
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
