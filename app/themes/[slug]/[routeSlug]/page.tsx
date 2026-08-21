import { getRoute, getRoutesByTheme, type Photo } from '@/lib/routes';
import { supabase } from '@/lib/supabaseClient';
import { Source_Serif_4 } from 'next/font/google';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const serif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const dynamic = 'force-dynamic';

async function getThemeName(slug: string) {
  const { data } = await supabase
    .from('themes')
    .select('name, slug')
    .eq('slug', slug)
    .single();
  return data;
}

function Figure({ photo }: { photo: Photo }) {
  return (
    <figure className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={photo.alt} className="w-full" />
      <figcaption className="mt-2 pt-2 border-t border-[#3f2a1d]/15 text-sm text-[#3f2a1d]/75">
        {photo.caption}{' '}
        <span className="text-[#3f2a1d]/55">{photo.credit}</span>
      </figcaption>
    </figure>
  );
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
    <div className={`min-h-screen bg-[#f5ede4] text-[#3f2a1d] ${serif.className}`}>
      <header className="sticky top-0 bg-[#f5ede4] p-4 flex flex-wrap justify-between items-center gap-4 border-b border-[#3f2a1d]/10">
        <Link href="/" className="text-2xl font-semibold text-[#3f2a1d]">ThemedRoadTrips</Link>
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

      <article className="container mx-auto px-6 sm:px-8 py-12 max-w-2xl">
        <p className="text-sm tracking-wide text-[#c2410c] mb-3">
          {theme?.name || 'Historic America'}
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold mb-8 leading-tight">{route.title}</h1>

        {route.introImage && <Figure photo={route.introImage} />}

        <div className="text-sm mb-10 pb-6 border-b border-[#3f2a1d]/15">
          <p>{route.start} to {route.end}. {route.days} days.</p>
        </div>

        {route.lede.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed mb-5">
            {paragraph}
          </p>
        ))}

        {route.sections.map((section) => (
          <section key={section.heading} className="mt-14">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{section.heading}</h2>
            {section.image && <Figure photo={section.image} />}
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
            {section.practical && (
              <p className="italic text-[#3f2a1d]/80 mt-4 mb-2">{section.practical}</p>
            )}
          </section>
        ))}

        {route.alongTheWay && route.alongTheWay.length > 0 && (
          <section className="mt-16 pt-10 border-t border-[#3f2a1d]/20">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Along the way</h2>
            {route.alongTheWay.map((entry) => (
              <div key={entry.title} className="mb-8">
                <h3 className="text-xl font-semibold mb-2">{entry.title}</h3>
                {entry.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="leading-relaxed mb-3">
                    {paragraph}
                  </p>
                ))}
                {entry.practical && (
                  <p className="italic text-[#3f2a1d]/80">{entry.practical}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {siblings.length > 0 && (
          <div className="mt-16 pt-8 border-t border-[#3f2a1d]/15">
            <h2 className="text-xl font-semibold mb-3">More in this theme</h2>
            <ul className="space-y-2">
              {siblings.map((item) => (
                <li key={item.slug}>
                  <Link href={`/themes/${slug}/${item.slug}`} className="text-[#c2410c] font-semibold hover:underline">
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
