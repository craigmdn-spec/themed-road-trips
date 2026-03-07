import { supabase } from '@/lib/supabaseClient';

async function getThemes() {
  const { data, error } = await supabase.from('themes').select('*');
  if (error) console.error(error);
  return data || [];
}

export default async function Home() {
  const themes = await getThemes();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">ThemedRoadTrips</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
            <li><a href="/themes" className="text-blue-600 hover:underline">Themes</a></li>
            <li><a href="/tools" className="text-blue-600 hover:underline">Tools</a></li>
            <li><a href="/blog" className="text-blue-600 hover:underline">Blog</a></li>
            <li><a href="/about" className="text-blue-600 hover:underline">About</a></li>
          </ul>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Start Planning</button>
      </header>

      {/* Hero */}
      <section className="bg-blue-800 text-white p-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Road Trips for Your Obsession</h2>
        <p className="text-xl mb-8">Themed U.S. driving routes with real cost calculators, vintage photos, historical data, and interactive tools.</p>
        <button className="bg-white text-blue-800 px-6 py-3 rounded mr-4">Browse Themes</button>
        <button className="bg-white text-blue-800 px-6 py-3 rounded">Try Cost Calculator</button>
        <p className="mt-4 text-sm">Updated for 2026 gas prices • 100% free tools • Retro visuals you won’t find anywhere else</p>
      </section>

      {/* Themes Showcase */}
      <section className="p-8">
        <h3 className="text-3xl font-bold mb-6 text-center">Our Flagship Themes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {themes.map((theme) => (
            <div key={theme.id} className="bg-white p-4 rounded shadow">
              <h4 className="text-xl font-bold">{theme.name}</h4>
              <p>{theme.description}</p>
              <a href={`/themes/${theme.slug}`} className="text-blue-600 hover:underline">See Routes</a>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="bg-gray-200 p-8">
        <h3 className="text-3xl font-bold mb-6 text-center">Featured Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">2026 Road Trip Cost Calculator (Coming Soon)</div>
          <div className="bg-white p-4 rounded shadow">Route 66 Centennial Timeline (Coming Soon)</div>
          <div className="bg-white p-4 rounded shadow">Find Your Theme Quiz (Coming Soon)</div>
        </div>
      </section>

      {/* Latest Routes */}
      <section className="p-8">
        <h3 className="text-3xl font-bold mb-6 text-center">Latest Routes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Placeholder for now — we'll add dynamic later */}
          <div className="bg-white p-4 rounded shadow">Route 66 Centennial (Coming Soon)</div>
          <div className="bg-white p-4 rounded shadow">Space Exploration USA (Coming Soon)</div>
          <div className="bg-white p-4 rounded shadow">Baseball Pilgrimage (Coming Soon)</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>Built with real data & retro love • © 2026 ThemedRoadTrips</p>
        <input type="email" placeholder="Get new routes & updates" className="mt-2 px-4 py-2 rounded" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded ml-2">Subscribe</button>
      </footer>
    </div>
  );
}