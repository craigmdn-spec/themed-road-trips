import { supabase } from '@/lib/supabaseClient';

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
  return (
    <div className="min-h-screen bg-[#f5ede4] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-[#f5ede4] shadow-md p-4 flex flex-wrap justify-between items-center gap-4 border-b border-[#3f2a1d]/10">
        <h1 className="text-2xl font-bold text-[#3f2a1d]">ThemedRoadTrips</h1>
        <nav className="flex-grow">
          <ul className="flex flex-wrap space-x-4 sm:space-x-6 text-sm sm:text-base">
            <li><a href="/" className="text-[#3f2a1d] hover:underline">Home</a></li>
            <li><a href="/themes" className="text-[#3f2a1d] hover:underline">Themes</a></li>
            <li><a href="/tools" className="text-[#3f2a1d] hover:underline">Tools</a></li>
            <li><a href="/blog" className="text-[#3f2a1d] hover:underline">Blog</a></li>
            <li><a href="/about" className="text-[#3f2a1d] hover:underline">About</a></li>
          </ul>
        </nav>
        <button className="bg-[#e07a5f] text-white px-5 py-2 rounded-xl text-sm sm:text-base font-semibold">Start Planning</button>
      </header>

      {/* Hero - NO overlay */}
      <section 
        className="relative min-h-[50vh] sm:h-[620px] md:h-[680px] bg-cover bg-center flex items-end justify-center pb-8 sm:pb-12 text-white overflow-hidden"
        style={{ backgroundImage: `url('/hero.png')` }}
      >
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#e07a5f] text-white px-8 sm:px-10 py-4 rounded-2xl text-base sm:text-lg font-semibold hover:bg-[#c2410c] transition-all">
              Browse Themes
            </button>
            <button className="border-2 border-white text-white px-8 sm:px-10 py-4 rounded-2xl text-base sm:text-lg font-semibold hover:bg-white/10 transition-all">
              Try Cost Calculator
            </button>
          </div>
          
          <p className="mt-6 sm:mt-8 text-xs sm:text-sm opacity-90">
            Updated for 2026 gas prices • 100% free tools • Retro visuals you won’t find anywhere else
          </p>
        </div>
      </section>

      {/* Themes Showcase */}
      <section className="p-4 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-[#3f2a1d]">Our Flagship Themes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme) => (
            <div key={theme.id} className="bg-[#f5ede4] border border-[#3f2a1d]/20 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h4 className="text-lg sm:text-xl font-bold text-[#3f2a1d]">{theme.name}</h4>
              <p className="text-sm sm:text-base mt-2 text-[#3f2a1d]/90">{theme.description}</p>
              <a href={`/themes/${theme.slug}`} className="inline-block mt-4 text-[#e07a5f] font-semibold hover:underline">See Routes →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="bg-[#f5ede4] p-4 sm:p-8 border-t border-[#3f2a1d]/10">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-[#3f2a1d]">Featured Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow text-sm sm:text-base border border-[#3f2a1d]/10">2026 Road Trip Cost Calculator (Coming Soon)</div>
          <div className="bg-white p-6 rounded-2xl shadow text-sm sm:text-base border border-[#3f2a1d]/10">Route 66 Centennial Timeline (Coming Soon)</div>
          <div className="bg-white p-6 rounded-2xl shadow text-sm sm:text-base border border-[#3f2a1d]/10">Find Your Theme Quiz (Coming Soon)</div>
        </div>
      </section>

      {/* Latest Routes */}
      <section className="p-4 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-[#3f2a1d]">Latest Routes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow text-sm sm:text-base border border-[#3f2a1d]/10">Route 66 Centennial (Coming Soon)</div>
          <div className="bg-white p-6 rounded-2xl shadow text-sm sm:text-base border border-[#3f2a1d]/10">Space Exploration USA (Coming Soon)</div>
          <div className="bg-white p-6 rounded-2xl shadow text-sm sm:text-base border border-[#3f2a1d]/10">Baseball Pilgrimage (Coming Soon)</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3f2a1d] text-[#f5ede4] p-6 text-center">
        <p className="text-sm sm:text-base">Built with real data & retro love • © 2026 ThemedRoadTrips</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <input type="email" placeholder="Get new routes & updates" className="px-5 py-3 rounded-xl w-full sm:w-80 bg-white/10 text-white placeholder:text-[#f5ede4]/70" />
          <button className="bg-[#e07a5f] text-white px-8 py-3 rounded-xl font-semibold w-full sm:w-auto">Subscribe</button>
        </div>
      </footer>
    </div>
  );
}