export function SkeletonCard() {
  return (
    <article className="max-w-[263px] cursor-pointer theme-shadow">
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
