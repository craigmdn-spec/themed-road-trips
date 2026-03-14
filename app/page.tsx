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
{/* Hero */}
<section 
  className="relative h-[65vh] md:h-[75vh] bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
  style={{ backgroundImage: `url('/hero.png')` }}
>
  {/* Dark overlay for perfect readability + retro postcard feel */}
  <div className="absolute inset-0 bg-black/45"></div>
  
  <div className="relative z-10 text-center px-6 max-w-4xl">
    <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Themed Road Trips</h2>
    <p className="text-2xl md:text-3xl mb-10">Topical Getaways Across America</p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-white text-blue-800 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition">Browse Themes</button>
      <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition">Try Cost Calculator</button>
    </div>
    
    <p className="mt-8 text-sm opacity-90">Updated for 2026 gas prices • 100% free tools • Retro visuals you won’t find anywhere else</p>
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