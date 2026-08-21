export type RouteSection = {
  heading: string;
  paragraphs: string[];
};

export type Route = {
  slug: string;
  themeSlug: string;
  title: string;
  start: string;
  end: string;
  days: number;
  lede: string[];
  sections: RouteSection[];
};

export const routes: Route[] = [
  {
    slug: "from-the-stacks-to-the-lake",
    themeSlug: "historic-america",
    title: "From the Stacks to the Lake",
    start: "Bethlehem, Pennsylvania",
    end: "Cleveland, Ohio",
    days: 7,
    lede: [
      "Bethlehem, Pennsylvania, to Cleveland, Ohio. Seven days.",
      "We start under the Bethlehem furnaces and follow the work west: coal, the railroad over the mountains, the river mills, then the lake that brought the ore. The people who built this stretch of the country left a lot still standing. We go look at it.",
    ],
    sections: [
      {
        heading: "Day 1 — Bethlehem and the Furnaces",
        paragraphs: [
          "South Bethlehem still has its blast furnaces. There are five of them, lined up for about a quarter of a mile on the old Bethlehem Steel site. They last made iron in November 1995. Nobody hauled them off. That turns out to be a gift.",
          "The yard is SteelStacks now, run by ArtsQuest. There is a concert lawn and a few places to eat, all of it sitting in the shade of the stacks. You may hear a band doing a sound check while you stare up at something that used to run day and night. The mix is funny, and it works. The furnaces are still the reason you came.",
          "Walk the Hoover-Mason Trestle. It used to carry material into the plant. Now it carries us along the stoves and skip hoists, close enough to see the rust-red paint and the size of the thing. Plaques around campus name bridges and towers that are said to have used this steel. Read them if you like lists. The walk is the part you will remember.",
          "The National Museum of Industrial History is in the old Electric Repair Shop on the same site. It is a Smithsonian Affiliate with machines from the 1876 Centennial and plenty of iron and textile gear. Go in after the trestle. Your eyes will already be used to big objects.",
          "Stay in the Lehigh Valley. Allentown is right next door. In the morning we drive toward the coal towns.",
        ],
      },
      {
        heading: "Day 2 — Eckley, Then Over the Hills",
        paragraphs: [
          "About an hour northwest of Bethlehem the trees open onto a dirt-and-gravel street that looks like it is still waiting for the next shift.",
          "Eckley Miners' Village is an anthracite patch town the state kept standing. Double houses, a company store, a church, a breaker site at the end of the row. The whole place was laid out so a man could walk to work in the dark. The grounds stay open most of the day. The museum desk is usually Wednesday through Sunday. In summer some of the houses open too. If the interiors are closed, walk the street. You can still see how close the porches sat to the road and how much care went into a small yard.",
          "Give Eckley the morning. You leave knowing what a coal town actually looked like.",
          "Then we head west for two and a half or three hours, past Hazleton and into the longer ridges. The coal country fades. After a while the road starts to feel like railroad country. Altoona confirms it: brick shops, a lot of track, a town that grew because the Pennsylvania Railroad needed one.",
          "We stay the night. Tomorrow we see how they got the trains over the mountain.",
        ],
      },
      {
        heading: "Day 3 — Altoona and the Curve",
        paragraphs: [
          "The Pennsylvania Railroad needed shops at the foot of the Alleghenies, so Altoona got built. The erecting shops could take a locomotive apart and put it back together without sending it somewhere else. The town grew up around that work, which is a pretty good reason for a town.",
          "The Railroaders Memorial Museum sits right in that story. You get engines on the floor and the smaller stuff that kept a shop alive: wrenches, time cards, lockers. Hours change with the season, so look them up before you go. Spend the morning. There is more here than a quick walk-through can handle, and the people who worked these shops would have had opinions about anyone who rushed.",
          "A few miles west is Horseshoe Curve, where the main line swings around the valley so freight can climb without stalling. Norfolk Southern still runs the bend. The visitor center and the little funicular operate from spring into late fall. In winter the overlook still does the job. You stand above the tracks and wait. A train comes through. People have been coming here to watch that since 1854, and it is still a pleasure.",
          "Overnight in Altoona. Johnstown is about an hour south. We will want a full morning there.",
        ],
      },
      {
        heading: "Day 4 — Johnstown",
        paragraphs: [
          "Johnstown sits in a tight valley where the Stonycreek and the Little Conemaugh meet. The mills liked the water. In May 1889 the South Fork dam failed upstream and the city took the flood. Then the people rebuilt, which tells you most of what you need to know about the place.",
          "The Johnstown Flood Museum spends the morning on that story: a private lake in the mountains, a dam that was not kept up, a crowded mill town with almost no high ground. The Cambria Iron works were already here. Folks lived in the notch because the work was here. The museum is closed on Tuesdays.",
          "Afterward, drive up to the Inclined Plane. After the flood they built a cable railway on a steep grade so people and freight could get off the valley floor. The cars have been in rehab. If they are running, take the ride. If they are not, the viewing area at the top is still worth the trip. You look down the tracks at the two rivers and the old street grid and you understand why they stayed.",
          "Pittsburgh is a little over an hour west. We make that drive in the afternoon so tomorrow's furnace tour is close by.",
        ],
      },
      {
        heading: "Day 5 — Carrie Furnaces and Homestead",
        paragraphs: [
          "Carrie Blast Furnaces 6 and 7 stand on the Monongahela in Rankin and Swissvale. They are huge, and they are still there, which is rarer than it should be. Rivers of Steel runs guided tours from May through October. That is how you get on the site. Book ahead. They close bits of it when they are stabilizing something.",
          "The tour is mostly looking up. The hot-blast stoves are bigger than your sense of a \"stove\" can handle. The brick has gone a warm rust color. These are prewar furnaces that never got cut down. Standing next to them is the day's treat.",
          "Then follow the river a short way to Homestead. The Pump House is on the old mill waterfront, now a trailhead on the Great Allegheny Passage. The 1892 strike was fought on this ground. The riverbank tells a lot even when the building is closed. If you want the indoor version, the Bost Building in Homestead is often open on weekdays. Pick one. Both are honest.",
          "If you come in the off months, the Heinz History Center downtown covers Pittsburgh industry well. Try to hit Carrie in season if you can. Those stoves are worth arranging a week around.",
        ],
      },
      {
        heading: "Day 6 — Youngstown, Then the Lake Road",
        paragraphs: [
          "Pittsburgh to Youngstown is about an hour and a quarter north. The Mahoning Valley poured steel for a long time. A lot of the mill skyline came down, but the city is still here, and it kept the story.",
          "The Youngstown Historical Center of Industry and Labor is what people mean when they say the Steel Museum. You get the last heats and the union halls, and you also get the kitchens and front rooms that ran on a mill check. Photos of ball teams and church dinners sit next to the mill floor. It is open Wednesday through Saturday, usually noon to four. Build the week around those hours and you will have a good visit.",
          "That museum is the stop. If you want a little more of the valley, take the slower road in or out and look around. The standing furnaces are already behind you in Rankin. Youngstown is where you meet the people who worked them.",
          "Then another hour and a quarter northwest. The hills ease off. Cleveland comes in as a lake city, brighter and wider after a week of river towns. Stay near the water if you can. Tomorrow we try to get on the ore boat.",
        ],
      },
      {
        heading: "Day 7 — The Boat in Cleveland",
        paragraphs: [
          "The Steamship William G. Mather sits at North Coast Harbor next to the Great Lakes Science Center. Cleveland-Cliffs launched her in 1925 to haul ore, coal, and stone. She worked more than fifty years. Now she takes visitors, when the season allows. In summer the decks are usually open Tuesday through Sunday. Mondays and winter, you wave from the pier. If she is boarding, go aboard. The cargo hold is a long, stained room that makes the whole week add up. The pilothouse is brass and oak. Give it ten unhurried minutes. Locals call her the ship that built Cleveland. After you have been in the hold, the name makes sense.",
          "Then drop into the Flats and follow a stretch of the Cuyahoga. No ticket. Lift bridges, old bulkheads, a river that has been put back to work more than once. Walk or drive until the water feels like part of the city, not a postcard. On a clear day you can see the lake beyond the harbor, the wide water that made it cheap to move ore and possible to build a place like this.",
          "That is the end of the line. From the Bethlehem stacks to this boat is a full trip. Detroit can wait.",
        ],
      },
    ],
  },
];

export function getRoutesByTheme(themeSlug: string): Route[] {
  return routes.filter((route) => route.themeSlug === themeSlug);
}

export function getRoute(themeSlug: string, slug: string): Route | undefined {
  return routes.find((route) => route.themeSlug === themeSlug && route.slug === slug);
}

export function getLatestRoutes(limit = 3): Route[] {
  return routes.slice(0, limit);
}
