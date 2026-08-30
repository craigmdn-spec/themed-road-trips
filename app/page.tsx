export const dynamic = 'force-dynamic';

import { getLatestRoutes } from '@/lib/routes';
import Link from 'next/link';

export default function Home() {
  const latest = getLatestRoutes(1);
  const route = latest[0];

  return (
    <div className="min-h-screen bg-[#f5ede4] flex flex-col text-[#3f2a1d]">
      <header className="sticky top-0 z-10 bg-[#f5ede4] shadow-md p-4 flex flex-wrap justify-between items-center gap-4 border-b border-[#3f2a1d]/10">
        <Link href="/" className="text-2xl font-bold text-[#3f2a1d]">ThemedRoadTrips</Link>
        <nav>
          <ul className="flex flex-wrap space-x-4 sm:space-x-6 text-sm sm:text-base">
            <li><Link href="/" className="text-[#3f2a1d] hover:underline">Home</Link></li>
          </ul>
        </nav>
      </header>

      <section className="w-full bg-[#f5ede4]" aria-label="Themed Road Trips">
        <img
          src="/hero.png"
          alt="A family in a vintage convertible on an open road, heading toward a distant Ferris wheel. Themed Road Trips. Topical getaways across America."
          className="block w-full h-auto max-w-full"
        />
      </section>

      {route && (
        <section className="w-full px-4 py-10 sm:px-8 sm:py-14">
          <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <img
              src="/spot-stacks.png"
              alt="Screen-print of five blast furnaces in a row"
              className="block w-full h-auto max-w-full"
            />
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-wide text-[#3f2a1d]/70">Latest route</p>
              <h2 className="mt-2 text-2xl sm:text-4xl font-bold">{route.title}</h2>
              <p className="mt-3 text-base sm:text-lg">
                {route.start} to {route.end}. {route.days} days.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed">
                {route.lede[1]}
              </p>
              <Link
                href={`/themes/${route.themeSlug}/${route.slug}`}
                className="inline-block mt-6 font-semibold text-[#c2410c] hover:underline"
              >
                Read the route
              </Link>
            </div>
          </div>
        </section>
      )}

      <footer className="mt-auto bg-[#3f2a1d] text-[#f5ede4] p-6 text-center">
        <p className="text-sm sm:text-base">{'\u00A9'} 2026 ThemedRoadTrips</p>
      </footer>
    </div>
  );
}
