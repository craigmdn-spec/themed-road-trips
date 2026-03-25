import { supabase } from '@/lib/supabaseClient';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: theme } = await supabase
    .from('themes')
    .select('name, description, tagline')
    .eq('slug', slug)
    .single();

  return {
    title: theme ? `${theme.name} | Themed Road Trips` : 'Theme Not Found | Themed Road Trips',
    description: theme?.description || theme?.tagline || 'Themed U.S. Road Trips',
  };
}

export default async function ThemePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data: theme, error } = await supabase
    .from('themes')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !theme) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Theme Not Found</h1>
        <p>Slug: {slug}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5ede4] text-[#3f2a1d]">
      <div className="container mx-auto p-8 max-w-4xl">
        <h1 className="text-5xl font-bold mb-4">{theme.name}</h1>
        <p className="text-2xl mb-12 text-[#e07a5f]">{theme.description || theme.tagline}</p>

        <div className="bg-white border-4 border-[#3f2a1d] p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6">Routes for this theme</h2>
          <p className="text-lg">Routes coming soon. (This is a placeholder—next we'll list related routes from DB.)</p>
        </div>
      </div>
    </div>
  );
}