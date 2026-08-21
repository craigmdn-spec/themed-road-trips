import { getRoute, getRoutesByTheme } from '@/lib/routes';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

async function getThemeName(slug: string) {
  const { data } = await supabase
    .from('themes')
    .select('name, slug')
    .eq('slug', slug)
    .single();
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; routeSlug: string }>;
}) {
  const { slug, routeSlug } = await params;
  const route = getRoute(slug, routeSlug);
  if (!route) {
    return { title: 'Route not found | Themed Road Trips' };
  }
  return {
    title: `${route.title} | Themed Road Trips`,
    description: `${route.days} days from ${route.start} to ${route.end}.`,
  };
}

export default async function RoutePage({
  params,
}: {
  params: Promise<{ slug: string; routeSlug: string }>;
}) {
  const { slug, routeSlug } = await params;
  const route = getRoute(slug, routeSlug);
  if (!route) notFound();

  const theme = await getThemeName(slug);
  const siblings = getRoutesByTheme(slug).filter((item) => item.slug !== route.slug);

  return (
    <div className="min-h-screen bg-[#f5ede4] text-[#3f2a1d]">
      <header className="sticky top-0 bg-[#f5ede4] shadow-md p-4 flex flex-wrap justify-between items-center gap-4 border-b border-[#3f2a1d]/10">
        <Link href="/" className="text-2xl font-bold text-[#3f2a1d]">ThemedRoadTrips</Link>
        <nav>
          <ul className="flex flex-wrap space-x-4 sm:space-x-6 text-sm sm:text-base">
            <li><Link href="/" className="text-[#3f2a1d] hover:underline">Home</Link></li>
            <li>
              <Link href={`/themes/${slug}`} className="text-[#3f2a1d] hover:underline">
                {theme?.name || 'Theme'}
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <article className="container mx-auto px-4 sm:px-8 py-10 max-w-3xl">
        <p className="text-sm uppercase tracking-wide text-[#e07a5f] mb-3">
          {theme?.name || 'Historic America'}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">{route.title}</h1>

        <div className="bg-white border border-[#3f2a1d]/20 rounded-2xl p-5 mb-10 text-sm sm:text-base">
          <p><span className="font-semibold">Start:</span> {route.start}</p>
          <p><span className="font-semibold">End:</span> {route.end}</p>
          <p><span className="font-semibold">Days:</span> {route.days}</p>
        </div>

        {route.lede.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed mb-5">
            {paragraph}
          </p>
        ))}

        {route.sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        {siblings.length > 0 && (
          <div className="mt-16 pt-8 border-t border-[#3f2a1d]/15">
            <h2 className="text-xl font-semibold mb-3">More in this theme</h2>
            <ul className="space-y-2">
              {siblings.map((item) => (
                <li key={item.slug}>
                  <Link href={`/themes/${slug}/${item.slug}`} className="text-[#e07a5f] font-semibold hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </div>
  );
}
