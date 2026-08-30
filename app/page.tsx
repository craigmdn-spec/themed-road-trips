export const dynamic = 'force-dynamic';

import { supabase } from '@/lib/supabaseClient';
import { getLatestRoutes } from '@/lib/routes';
import Link from 'next/link';

async function getThemes() {
  const { data: themes, error } = await supabase
    .from('themes')
    .select('*')
    .order('sort_order', { ascending: true });
  
  if (error) {
    console.error(error);
    return [];
  }
  return themes || [];
}

export default async function Home() {
  const themes = await getThemes();
  const latest = getLatestRoutes(3);

  return (
    <div className="min-h-screen bg-[#f5ede4] flex flex-col">
      <header className="sticky top-0 bg-[#f5ede4] shadow-md p-4 flex flex-wrap justify-between items-center gap-4 border-b border-[#3f2a1d]/10">
        <h1 className="text-2xl font-bold text-[#3f2a1d]">ThemedRoadTrips</h1>
        <nav className="flex-grow">
          <ul className="flex flex-wrap space-x-4 sm:space-x-6 text-sm sm:text-base">
            <li><a href="/" className="text-[#3f2a1d] hover:underline">Home</a></li>
            <li><a href="/#themes" className="text-[#3f2a1d] hover:underline">Themes</a></li>
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

      <section id="themes" className="p-4 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-[#3f2a1d]">
          Our Flagship Themes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme) => (
            <div 
              key={theme.id} 
              className="bg-[#f5ede4] border border-[#3f2a1d]/20 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-lg sm:text-xl font-bold text-[#3f2a1d]">{theme.name}</h4>
              <p className="text-sm sm:text-base mt-2 text-[#3f2a1d]/90">{theme.description}</p>
              <a 
                href={`/themes/${theme.slug}`} 
                className="inline-block mt-4 text-[#e07a5f] font-semibold hover:underline"
              >
                See Routes →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f5ede4] p-4 sm:p-8 border-t border-[#3f2a1d]/10">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-[#3f2a1d]">
          Inspiration Starters
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow text-sm sm:text-base border border-[#3f2a1d]/10">
            Route 66 Centennial Timeline (Coming Soon)
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-sm sm:text-base border border-[#3f2a1d]/10">
            Find Your Theme Quiz (Coming Soon)
          </div>
        </div>
      </section>

      <section className="p-4 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-[#3f2a1d]">
          Latest Routes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((route) => (
            <Link
              key={route.slug}
              href={`/themes/${route.themeSlug}/${route.slug}`}
              className="bg-white p-6 rounded-2xl shadow text-sm sm:text-base border border-[#3f2a1d]/10 hover:shadow-lg transition block"
            >
              <h4 className="text-lg font-bold text-[#3f2a1d]">{route.title}</h4>
              <p className="mt-2 text-[#3f2a1d]/80">
                {route.start} to {route.end}. {route.days} days.
              </p>
              <span className="inline-block mt-3 text-[#e07a5f] font-semibold">Read the route →</span>
            </Link>
          ))}
          <div className="bg-white p-6 rounded-2xl shadow text-sm sm:text-base border border-[#3f2a1d]/10">
            Route 66 Centennial (Coming Soon)
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-sm sm:text-base border border-[#3f2a1d]/10">
            Baseball Pilgrimage (Coming Soon)
          </div>
        </div>
      </section>

      <footer className="bg-[#3f2a1d] text-[#f5ede4] p-6 text-center">
        <p className="text-sm sm:text-base">Built with real data & retro love • © 2026 ThemedRoadTrips</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <input 
            type="email" 
            placeholder="Get new routes & updates" 
            className="px-5 py-3 rounded-xl w-full sm:w-80 bg-white/10 text-white placeholder:text-[#f5ede4]/70" 
          />
          <button className="bg-[#e07a5f] text-white px-8 py-3 rounded-xl font-semibold w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </footer>
    </div>
  );
}
