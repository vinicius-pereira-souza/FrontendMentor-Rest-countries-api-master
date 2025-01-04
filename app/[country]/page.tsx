import Link from "next/link";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";

export default async function Page({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  console.log((await params).country);
  return (
    <div className="text-base px-8 pb-28 pt-4">
      <div className="max-w-[1280px] mx-auto min-h-[80vh] ">
        <Link
          href={"/"}
          className="text-[17px] md:text-base lg:text-base flex items-center gap-x-5 lg:gap-x-3 py-2 px-8 md:py-2 md:px-8 shadow-md shadow-gray-200 dark:shadow-none rounded theme-bg max-w-max"
        >
          <FaArrowLeftLong /> Back
        </Link>

        <article className="mt-[75px] md:mt-[122px] lg:mt-[77px] mx-auto">
          <section>
            <Image
              src={"https://flagcdn.com/w320/de.png"}
              alt={`<nome> Flag`}
              width={560}
              height={400}
            />
          </section>
          <section>
            <h2 className="font-extrabold text-[27px] mt-14 mb-7">Germany</h2>
            <div className="details-country">
              <ul className="flex flex-col gap-y-4 mb-14">
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
              <ul className="flex flex-col gap-y-4">
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
            <footer>
              <h3>Border Countries:</h3>
              <div>
                <span>ARM</span>
                <span>AZE</span>
                <span>RUS</span>
                <span>TUR</span>
              </div>
            </footer>
          </section>
        </article>
      </div>
    </div>
  );
}
