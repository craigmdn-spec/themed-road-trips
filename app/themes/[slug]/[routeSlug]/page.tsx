import { getRoute, getRoutesByTheme, type AlongEntry, type Photo, type RouteSection } from '@/lib/routes';
import { supabase } from '@/lib/supabaseClient';
import { Source_Serif_4 } from 'next/font/google';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';

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

function HouseRule({ orientation }: { orientation: 'h' | 'v' }) {
  if (orientation === 'h') {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src="/house/rule-horizontal.png"
        alt=""
        className="block w-full max-h-16 object-contain my-8"
      />
    );
  }
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/house/rule-vertical.png"
      alt=""
      className="hidden md:block w-10 h-auto object-contain object-top justify-self-center pt-2"
    />
  );
}

function Aside({
  entries,
  flourish,
}: {
  entries: AlongEntry[];
  flourish?: string;
}) {
  return (
    <aside className="mt-12 md:mt-0 md:pl-2">
      <img
        src="/house/rule-horizontal.png"
        alt=""
        className="md:hidden block w-full max-h-14 object-contain mb-8"
      />
      {flourish && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={flourish} alt="" className="mx-auto mb-5 w-28 h-auto" />
      )}
      <h2 className="text-lg font-semibold tracking-wide mb-5">Along the way</h2>
      {entries.map((entry) => (
        <div key={entry.title} className="mb-8">
          <h3 className="text-base font-semibold mb-2">{entry.title}</h3>
          {entry.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-[0.95rem] leading-relaxed mb-3">
              {paragraph}
            </p>
          ))}
          {entry.practical && (
            <p className="italic text-[#3f2a1d]/80 text-sm">{entry.practical}</p>
          )}
        </div>
      ))}
    </aside>
  );
}

function DaySection({ section }: { section: RouteSection }) {
  const asides = section.alongTheWay ?? [];
  const hasAside = asides.length > 0;

  return (
    <section className="mt-16 md:grid md:grid-cols-[minmax(0,1fr)_3.25rem_minmax(15rem,18rem)] md:gap-x-12 md:gap-y-4 items-start">
      <div className="min-w-0 md:pr-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">{section.heading}</h2>
        {section.image && <Figure photo={section.image} />}
        {section.paragraphs.map((paragraph, index) => (
          <Fragment key={paragraph.slice(0, 48)}>
            <p className="leading-relaxed mb-5">{paragraph}</p>
            {index === 1 && section.flourish && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={section.flourish} alt="" className="mx-auto my-8 w-40 h-auto" />
            )}
          </Fragment>
        ))}
        {section.practical && (
          <p className="italic text-[#3f2a1d]/80 mt-5 mb-2">{section.practical}</p>
        )}
      </div>
      {hasAside ? (
        <>
          <HouseRule orientation="v" />
          <Aside entries={asides} flourish={section.asideFlourish} />
        </>
      ) : (
        <>
          <div className="hidden md:block" />
          <div className="hidden md:block" />
        </>
      )}
    </section>
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
    <div className={`min-h-screen bg-[#f5d4a1] text-[#3f2a1d] ${serif.className}`}>
      <header className="sticky top-0 bg-[#f5d4a1] px-6 sm:px-10 py-4 flex flex-wrap justify-between items-center gap-4">
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

      <article className="mx-auto max-w-6xl px-10 sm:px-14 lg:px-20 py-16">
        <p className="text-sm tracking-wide text-[#c2410c] mb-3">
          {theme?.name || 'Historic America'}
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold mb-5 leading-tight max-w-3xl">{route.title}</h1>
        <p className="text-sm mb-2">
          {route.start} to {route.end}. {route.days} days.
        </p>
        <HouseRule orientation="h" />

        {route.introImage && (
          <div className="max-w-3xl">
            <Figure photo={route.introImage} />
          </div>
        )}

        {route.lede.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed mb-5 max-w-3xl">
            {paragraph}
          </p>
        ))}

        {route.sections.map((section) => (
          <DaySection key={section.heading} section={section} />
        ))}

        {siblings.length > 0 && (
          <div className="mt-20 max-w-3xl">
            <HouseRule orientation="h" />
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
