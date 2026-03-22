import { supabase } from '@/lib/supabaseClient';  // ← your existing import

export const dynamic = 'force-dynamic';  // keep to prevent caching gotchas

export default async function ThemePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
        <p>No theme matches slug: {slug}</p>
        <p className="mt-4 text-gray-600">Check the slug or database entry.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{theme.name}</h1>
      <p className="text-xl mb-8">{theme.description || theme.tagline}</p>
      <div className="bg-cream p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Routes for this theme</h2>
        <p className="text-lg">Routes coming soon. (This is a placeholder—next we'll list related routes from DB.)</p>
      </div>
    </div>
  );
}