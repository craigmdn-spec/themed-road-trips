export type Photo = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
};

export type RouteSection = {
  heading: string;
  paragraphs: string[];
  practical?: string;
  image?: Photo;
  alongTheWay?: AlongEntry[];
  flourish?: string;
  asideFlourish?: string;
};

export type AlongEntry = {
  title: string;
  paragraphs: string[];
  practical?: string;
};

export type Route = {
  slug: string;
  themeSlug: string;
  title: string;
  start: string;
  end: string;
  days: number;
  lede: string[];
  introImage?: Photo;
  sections: RouteSection[];
  alongTheWay?: AlongEntry[];
};

const img = "/routes/from-the-stacks-to-the-lake";

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
      "We start under the Bethlehem furnaces and follow the work west: coal, the railroad over the mountains, the river mills, then the lake that brought the ore. The people who built this stretch of the country left a lot still standing. We're going to see all of it.",
    ],
    introImage: {
      src: `${img}/intro-bethlehem-furnaces.jpg`,
      alt: "Preserved Bethlehem Steel blast furnaces at SteelStacks",
      caption: "The preserved blast furnaces at SteelStacks.",
      credit: "Photo: Acroterion / Wikimedia Commons (CC BY-SA 4.0)",
    },
    sections: [
      {
        heading: "Day 1 — Bethlehem and the Furnaces",
        image: {
          src: `${img}/day1-steelstacks-traincar.jpg`,
          alt: "Train car on the SteelStacks campus with blast furnaces behind it",
          caption: "A train car on the SteelStacks campus, furnaces behind it.",
          credit: "Photo: Jim Dickson / Wikimedia Commons (CC BY 2.0)",
        },
        paragraphs: [
          "South Bethlehem still has its blast furnaces. There are five of them, lined up for about a quarter of a mile on the old Bethlehem Steel site. They last made iron here in November 1995. Nobody hauled them off, and that turned out to be a gift.",
          "The yard is SteelStacks now, run by ArtsQuest. There is a concert lawn and a few places to eat, all of it sitting in the shade of the stacks. You may hear a band doing a sound check while you stare up at furnaces that once poured molten steel night and day. The mix is funny, and it works.",
          "Walk the Hoover-Mason Trestle. It used to carry material into the plant. Now it carries us along the stoves and skip hoists, close enough to see the rust-red paint and the size of the thing. Plaques around campus name bridges and towers that were built with this steel.",
          "The National Museum of Industrial History is in the old Electric Repair Shop on the same site. It is a Smithsonian Affiliate with machines from the 1876 Centennial and plenty of iron and textile gear.",
          "Stay in the Lehigh Valley. Allentown is right next door. In the morning we drive to the coal towns.",
        ],
        flourish: `${img}/spot-furnace.png`,
        asideFlourish: `${img}/spot-ladle.png`,
        alongTheWay: [
          {
            title: "Historic Moravian Bethlehem",
            paragraphs: [
              "The steel plant is south of the river. North of it the town is 18th-century stone. The Moravians laid this settlement out in 1741. The church, the Sisters' House, and the burial ground called God's Acre sit close enough that we can walk from one to the next. In 2024 the district joined other Moravian church settlements on the UNESCO list. We can take the furnaces in the afternoon and still reach the older town before dark.",
            ],
          },
          {
            title: "Historic Hotel Bethlehem",
            paragraphs: [
              "The distinctive bed in town sits on Main Street, next to the Moravian buildings, on the site of Bethlehem's First House. Rooms look over the old settlement and, on a clear night, the star on the mountain. We have not stayed. We are noting it because it belongs to this street in a way a highway chain does not.",
            ],
          },
        ],
      },
      {
        heading: "Day 2 — Eckley, Then Over the Hills",
        image: {
          src: `${img}/day2-eckley-double-home.jpg`,
          alt: "Company double housing at Eckley Miners' Village",
          caption: "Company double housing at Eckley Miners' Village.",
          credit: "Photo: Worldtraveller00 / Wikimedia Commons (CC BY-SA 4.0)",
        },
        paragraphs: [
          "About an hour northwest of Bethlehem the trees open onto a dirt-and-gravel street that looks like it is still waiting for the next shift.",
          "Eckley Miners' Village is a town in the anthracite patch that the state kept standing. Double houses, a company store, a church, a breaker site at the end of the row. The whole place was laid out so a man could walk to work in the dark.",
          "Walk the street. You can see how close the porches sat to the road and how much care went into a small yard.",
          "Give Eckley the morning and you leave knowing what a coal town actually looked like.",
          "Then we head west for three hours, past Hazleton and into the longer ridges of the Alleghenies. The coal country fades. After a while the land starts to feel like it belongs to the railroad. Altoona confirms it: brick shops, a lot of track, a town that grew because the Pennsylvania Railroad needed it.",
          "We stay the night. Tomorrow we see how they got the trains over the mountain.",
        ],
        practical: "The grounds stay open most of the day. The museum desk is usually open Wednesday through Sunday. In summer some of the houses are open too.",
      },
      {
        heading: "Day 3 — Altoona and the Curve",
        image: {
          src: `${img}/day3-horseshoe-curve.jpg`,
          alt: "Display locomotive at the Horseshoe Curve overlook",
          caption: "The display locomotive at the Horseshoe Curve overlook.",
          credit: "Photo: Niagara / Wikimedia Commons (CC BY 3.0)",
        },
        paragraphs: [
          "The Pennsylvania Railroad needed shops at the foot of the Alleghenies, so Altoona got built. The shops could take a locomotive apart and put it back together, keeping the heavy trains running over the mountains. The town grew up around that work, which is a pretty good reason for a town.",
          "The Railroaders Memorial Museum is built right into that history. You get engines on the floor and the smaller stuff that kept a shop alive: wrenches, time cards, lockers. There is more here than a quick walk-through can handle, and the people who worked these shops would have had opinions about anyone who rushed.",
          "A few miles west is Horseshoe Curve, where the main line swings around the valley so freight can climb without stalling. Norfolk Southern still runs the bend.",
          "Go to the overlook. Stand above the tracks and wait. A train comes through. People have been coming here to watch that since 1854, and it is still a pleasure.",
          "Overnight in Altoona. Johnstown is about an hour south.",
        ],
        practical: "Museum hours change with the season, so look them up before you go. The visitor center and the little funicular at the Curve operate from spring into late fall.",
      },
      {
        heading: "Day 4 — Johnstown",
        image: {
          src: `${img}/day4-johnstown-incline.jpg`,
          alt: "Johnstown Inclined Plane above the Little Conemaugh",
          caption: "The Inclined Plane above the Little Conemaugh.",
          credit: "Photo: David Brossard / Wikimedia Commons (CC BY-SA 2.0)",
        },
        paragraphs: [
          "Johnstown sits in a tight valley where the Stonycreek and the Little Conemaugh meet. The mills needed the water. In May 1889 the South Fork dam failed upstream and the city took the flood. Over two thousand people died that afternoon, and whole blocks of the city were simply gone. Then they rebuilt, which tells you what you need to know about the people.",
          "The Johnstown Flood Museum spends the morning on that story: a private lake in the mountains, a dam that was not kept up, a crowded mill town with almost no high ground.",
          "Afterward, drive up to the Inclined Plane. From the viewing area at the top we look down the tracks at the two rivers, the old street grid, and the entire valley.",
          "Pittsburgh is a little over an hour west. We make that drive in the afternoon so tomorrow's furnace tour is close by.",
        ],
        practical: "The museum is closed on Tuesdays.",
      },
      {
        heading: "Day 5 — Carrie Furnaces and Homestead",
        image: {
          src: `${img}/day5-carrie-furnace.jpg`,
          alt: "Carrie Furnace No. 7 and Cowper stoves in 1989",
          caption: "Carrie Furnace No. 7 and its stoves, 1989.",
          credit: "Martin Stupich, HAER / National Park Service / Library of Congress",
        },
        paragraphs: [
          "Carrie Blast Furnaces 6 and 7 stand on the Monongahela in Rankin and Swissvale. They are huge, and they are still there, which is rarer than it should be.",
          "The tour is mostly looking up. The hot-blast stoves are silent giants that once heated air to the temperature of molten lava before sending it into the furnaces. The steel shells have rusted to a dark, uneven red. These are prewar furnaces that never got cut down.",
          "Next follow the river a short way to Homestead. The Pump House is on the old mill waterfront where the 1892 strike was fought. The Bost Building nearby was the strikers' headquarters in 1892. It is now the visitor center for the Rivers of Steel National Heritage Area.",
        ],
        practical: "Rivers of Steel runs guided tours from May through October. Book ahead.",
        alongTheWay: [
          {
            title: "The Duquesne Incline",
            paragraphs: [
              "Pittsburgh's mill story is on the river. The view of that river is from a wooden cable car that has been climbing Mount Washington since 1877. The cars are original. Fares work like the bus. From the upper deck the city is a map: the Point, the bridges, the brown rivers that made the mills possible.",
            ],
            practical: "Open every day, 6:30 in the morning until 12:30 at night.",
          },
        ],
      },
      {
        heading: "Day 6 — Youngstown, Then the Lake Road",
        image: {
          src: `${img}/day6-youngstown-mill-1941.jpg`,
          alt: "Interior of Republic Steel in Youngstown, 1941",
          caption: "Republic Steel, Youngstown, November 1941. Not the museum building.",
          credit: "Alfred T. Palmer, U.S. Office of War Information / Library of Congress",
        },
        paragraphs: [
          "Pittsburgh to Youngstown is an hour north. The Mahoning Valley poured steel for decades. The mills that dominated the skyline are gone, but the city is still here.",
          "The Youngstown Historical Center of Industry and Labor is what people mean when they say the Steel Museum. You get the last days of the steel mills and the union halls. You also get the kitchens and front rooms that ran on a mill worker's paycheck. Photos of ball teams and church dinners sit next to the mill floor.",
          "An hour and a quarter northwest, the hills ease off and reveal Cleveland on the shore of Lake Erie.",
          "Tomorrow we go aboard the ore boat.",
        ],
        practical: "The museum is open Wednesday through Saturday, usually noon to four.",
      },
      {
        heading: "Day 7 — The Boat in Cleveland",
        image: {
          src: `${img}/day7-mather.jpg`,
          alt: "Steamship William G. Mather at North Coast Harbor, Cleveland",
          caption: "Steamship William G. Mather at North Coast Harbor.",
          credit: "Photo: Erik Drost / Wikimedia Commons (CC BY 2.0)",
        },
        paragraphs: [
          "The Steamship William G. Mather sits at North Coast Harbor next to the Great Lakes Science Center. Cleveland-Cliffs launched her in 1925 to haul ore, coal, and stone. She worked more than fifty years. Now she takes visitors.",
          "Go aboard. The pilothouse is brass and oak. The cargo hold is a long, stained room. Locals call her the ship that built Cleveland. After you have been in the hold, the name makes sense.",
          "From the boat, head into the Flats along the Cuyahoga. This is the old industrial riverfront: lift bridges, bulkheads, and a working waterway that still shows how ore and steel moved through the city.",
          "We followed the work from Bethlehem to Cleveland. The stacks, the curve, the furnaces, the boat, and from here the same story keeps going toward Detroit and the big lake mills beyond.",
        ],
        practical: "In summer the decks are usually open Tuesday through Sunday.",
        alongTheWay: [
          {
            title: "West Side Market",
            paragraphs: [
              "Cleveland's public market has been in the same brick hall at West 25th and Lorain since 1912. Meat, produce, baked goods, and a lot of standing around. If the Mather is boarding in the morning, this fills the other half of the day without getting back in the car.",
            ],
            practical: "Open Monday, Wednesday, Friday, and Saturday 8 to 5, Sunday 10 to 4. Closed Tuesday and Thursday.",
          },
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
