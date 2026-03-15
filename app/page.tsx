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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header - Responsive */}
      <header className="sticky top-0 bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold text-black">ThemedRoadTrips</h1>
          
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 text-sm">
              <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
              <li><a href="/themes" className="text-blue-600 hover:underline">Themes</a></li>
              <li><a href="/tools" className="text-blue-600 hover:underline">Tools</a></li>
              <li><a href="/blog" className="text-blue-600 hover:underline">Blog</a></li>
              <li><a href="/about" className="text-blue-600 hover:underline">About</a></li>
            </ul>
          </nav>

          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 transition w-full sm:w-auto">
            Start Planning
          </button>
        </div>
      </header>

      {/* Hero - Optimized for your 1280×619 PNG */}
      <section 
        className="relative h-[520px] sm:h-[620px] md:h-[680px] bg-cover bg-center flex items-end justify-center pb-8 sm:pb-12 text-white overflow-hidden"
        style={{ backgroundImage: `url('/hero.png')` }}
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 px-8 py-4 rounded-2xl text-base font-semibold hover:bg-gray-100 transition-all">
              Browse Themes
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl text-base font-semibold hover:bg-white/10 transition-all">
              Try Cost Calculator
            </button>
          </div>
          
          <p className="mt-8 text-xs sm:text-sm opacity-90 px-4">
            Updated for 2026 gas prices • 100% free tools • Retro visuals you won’t find anywhere else
          </p>
        </div>
      </section>

      {/* Themes Showcase */}
      <section className="p-6 sm:p-8 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Our Flagship Themes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme) => (
            <div key={theme.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <h4 className="text-xl font-bold mb-2">{theme.name}</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{theme.description}</p>
              <a href={`/themes/${theme.slug}`} className="text-blue-600 font-medium hover:underline inline-flex items-center">
                See Routes →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="bg-gray-200 p-6 sm:p-8 max-w-7xl mx-auto w-full">
        <h3 className="text-3xl font-bold mb-8 text-center">Featured Tools</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow text-center">2026 Road Trip Cost Calculator (Coming Soon)</div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">Route 66 Centennial Timeline (Coming Soon)</div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">Find Your Theme Quiz (Coming Soon)</div>
        </div>
      </section>

      {/* Latest Routes */}
      <section className="p-6 sm:p-8 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Latest Routes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">Route 66 Centennial (Coming Soon)</div>
          <div className="bg-white p-6 rounded-2xl shadow">Space Exploration USA (Coming Soon)</div>
          <div className="bg-white p-6 rounded-2xl shadow">Baseball Pilgrimage (Coming Soon)</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center mt-auto">
        <div className="max-w-7xl mx-auto">
          <p className="mb-6">Built with real data & retro love • © 2026 ThemedRoadTrips</p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <input 
              type="email" 
              placeholder="Get new routes & updates" 
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder:text-white/60 w-full max-w-xs focus:outline-none focus:border-white"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}