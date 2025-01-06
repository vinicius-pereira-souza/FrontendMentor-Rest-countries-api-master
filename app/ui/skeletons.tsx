export function CardsWrapperCards() {
  return (
    <>
      {Array(8)
        .fill(null)
        .map((_, idx) => (
          <CardSkeleton key={idx} />
        ))}
    </>
  );
}

export function CardSkeleton() {
  return (
    <article className="w-[263px] cursor-pointer theme-shadow">
      <section>
        <div className="h-[160px] w-full bg-gray-200 rounded-t-md animate-pulse"></div>
      </section>
      <section className="theme-bg pt-6 pb-11 px-6 rounded-b-md">
        <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
      </section>
    </article>
  );
}

export function CardDetailsSkeleton() {
  return (
    <article className="mt-[75px] md:mt-[122px] lg:mt-[77px] mx-auto lg:flex lg:gap-x-[122px] items-center justify-around animate-pulse">
      <section className="flex-1">
        <div className="w-[560px] h-[400px] bg-gray-300 dark:bg-darkGray rounded-md mx-auto"></div>
      </section>
      <section className="flex-1 mx-auto">
        <div className="h-[32px] bg-gray-300 dark:bg-darkGray rounded-md w-[200px] mt-14 md:mt-0 mb-7"></div>
        <div className="details-country md:flex items-start">
          <ul className="flex flex-col gap-y-4 mb-14 flex-1">
            {Array(5)
              .fill(null)
              .map((_, idx) => (
                <li key={idx}>
                  <div className="h-[20px] bg-gray-300 dark:bg-darkGray rounded-md w-[80%]"></div>
                </li>
              ))}
          </ul>
          <ul className="flex flex-col gap-y-4 flex-1">
            {Array(3)
              .fill(null)
              .map((_, idx) => (
                <li key={idx}>
                  <div className="h-[20px] bg-gray-300 dark:bg-darkGray rounded-md w-[70%]"></div>
                </li>
              ))}
          </ul>
        </div>
        <footer className="lg:flex items-center gap-3">
          <div className="h-[24px] bg-gray-300 dark:bg-darkGray rounded-md w-[150px] mb-4 md:mb-0"></div>
          <div className="flex items-center gap-3 flex-wrap">
            {Array(3)
              .fill(null)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="w-[120px] h-[35px] bg-gray-300 dark:bg-darkGray rounded-md"
                ></div>
              ))}
          </div>
        </footer>
      </section>
    </article>
  );
}
