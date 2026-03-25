import { supabase } from '@/lib/supabaseClient';

export const dynamic = 'force-dynamic';

async function getTheme(slug: string) {
  const { data, error } = await supabase
    .from('themes')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(`Supabase error fetching theme ${slug}:`, error);
  }

  return { data, error };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: theme } = await getTheme(slug);

  return {
    title: theme 
      ? `${theme.name} | Themed Road Trips` 
      : `Theme Not Found | Themed Road Trips`,
    description: theme?.description || theme?.tagline || 'Curated themed U.S. road trips',
  };
}

export default async function ThemePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: theme, error } = await getTheme(slug);

  if (error || !theme) {
    return (
      <div className="min-h-screen bg-[#f5ede4] flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-[#3f2a1d] mb-4">Theme Not Found</h1>
          <p className="text-[#e07a5f]">Slug: {slug}</p>
          <p className="mt-4 text-sm">Check database slug spelling or policy.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5ede4] text-[#3f2a1d]">
      <div className="container mx-auto p-8 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">{theme.name}</h1>
        <p className="text-2xl mb-12 text-[#e07a5f]">
          {theme.description || theme.tagline}
        </p>

        <div className="bg-white border-4 border-[#3f2a1d] p-10 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6">Routes for this theme</h2>
          <p className="text-lg">Routes coming soon. (Next: pull real routes from DB.)</p>
        </div>
      </div>
    </div>
  );
}