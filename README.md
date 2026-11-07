# Trip planner

A good-looking, single-page travel plan you fill in with your own trip: an interactive route map, a day-by-day itinerary with travel times, hotels and booking status, a budget, and a booking timeline. It works on phones, prints well, and needs no build step, no account and no server.

**[See the example trip →](https://tkfrittz.github.io/trip-planner/)**

## What you get

- **Route map**: the whole trip at a glance, or pick a day to zoom in with numbered stops and lines for each leg (dotted for walking, dashed for ferries, ropeways and flights).
- **Day by day**: your own photo for each day (or a big title tile), tags, a timed plan, and each journey broken into legs. Train, bus and walking times are added up for you.
- **Header photo** with caption, and photo credits gathered in the footer automatically.
- **Stays**: a nights timeline, hotel cards with "Booked" or "Not booked yet" badges, and what each stay costs.
- **Budget**: a split bar and line items, plus a check of hotel spend against your hotel budget.
- **Booking timeline**, **what matters most**, **still to decide** and **saving for another trip** lists.
- Dates, weekdays and currency are all worked out from your settings, in any language format.
- **Print or save as PDF**: a clean, ink-friendly printout of the whole plan.
- **Save as one file**: one click downloads the whole plan as a single HTML file with your photos and trip details built in, ready to email or keep.

## Make it yours

Everything about your trip lives in **one file, `trip.js`**. You don't need to touch `index.html`.

### Option A: on your computer (easiest)

1. Click **Code → Download ZIP** on this page and unzip it.
2. Open `trip.js` in any text editor (Notepad, TextEdit, VS Code…).
3. Replace the example Portugal trip with yours. Every field has a comment explaining it.
4. Copy your photos into the `images` folder (and delete the example ones), then point to them from `trip.js`. See [Adding photos](#adding-photos).
5. Double-click `index.html` to open it in your browser. Refresh after each save.

### Option B: on GitHub, with a free web page

1. Click **Use this template → Create a new repository** (or fork this repository).
2. In your new repository, open `trip.js`, click the pencil icon, and edit it.
3. To add photos, open the `images` folder, click **Add file → Upload files**, and drag your photos in. Delete the example photos you don't use.
4. Go to **Settings → Pages**, choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.
5. After a minute your plan is live at `https://<your-username>.github.io/<repo-name>/`.

> Anyone with the link can see a GitHub Pages site. If your plan contains hotel details or dates you'd rather keep private, use Option A, or keep the repository private and share the files directly.

## Filling in trip.js

The example file is the best guide. Here's what each part does.

| Section | What it is |
|---|---|
| `startDate` | Day 1, written `YYYY-MM-DD`. Every day's date comes from this. |
| `locale`, `currency` | How dates and money are written, e.g. `'en-GB'` and `'GBP'`, or `'ja-JP'` and `'JPY'`. |
| `hero` | The big header: title, intro and an optional photo. |
| `places` | Every location, with an id you make up: `ribeira: [41.1406, -8.6131, 'Ribeira']`. |
| `stays` | Your hotels in order: check-in date, nights, booked or not, and cost. |
| `days` | One entry per day: title, plan, travel legs and the map stops. |
| `route`, `dayTrips`, `markers` | Extra lines and points on the whole-trip map. |
| `budget` | Your budget lines. Mark one `stays: true` to compare it with hotel costs. |
| `bookings` | What to book and when. |
| `priorities`, `toDecide`, `saveForLater` | The lists near the end of the page. |
| `theme` | Optional colours and fonts. |

### Finding coordinates

In Google Maps, right-click a spot and click the two numbers at the top of the menu to copy them. Paste them as the first two values of a place: `[latitude, longitude, 'Name']`.

### Adding photos

You can give the header a photo, and each day its own photo. The example trip uses photos for the header and days 1–6. Day 7 has none, to show the coloured title tile you get instead.

1. Put your photos in the `images` folder. Your own holiday photos, or free ones from [Wikimedia Commons](https://commons.wikimedia.org) or [Unsplash](https://unsplash.com), all work.
2. In `trip.js`, add an `image` line to the day (or to `hero` for the header):

```js
image: 'images/day1.jpg',
```

3. To credit a photo, use the longer form. Credits appear on the photo and are collected in the footer automatically.

```js
image: { src: 'images/day1.jpg', credit: 'Photographer name', license: 'CC BY 4.0',
         link: 'https://commons.wikimedia.org/wiki/File:...', position: '50% 40%' },
```

- `position` decides which part of the photo stays in view when it's cropped: `'50% 50%'` is the centre, `'50% 20%'` keeps the top.
- The day's `caption` is shown across the bottom of its photo.
- A full `https://` link to a photo online works in place of a file in `images`.
- Photos around 1600 px wide, saved as JPEG, keep the page fast. Phone photos are often 4000 px or more, so shrink them first, or let **Save as one file** shrink them when you share.
- If you use someone else's photo, check its license allows it and credit them as it asks.

### Printing

Click **Print or save as PDF** in the page header, or use your browser's Print. The printout leaves out the interactive map and buttons, shows each photo as a short banner above its day, and lets long days flow across pages without gaps. To make a PDF, choose **Save as PDF** (or **Microsoft Print to PDF**) as the printer.

### Sharing your plan as one file

Your plan is normally a few files: `index.html`, `trip.js` and the `images` folder. Email just `index.html` and the photos and map pins are lost. To send it to someone, click **Save as one file** in the page header. You get a single `.html` file with the photos and all the trip details inside, which works on any computer or phone. Photos wider than 1800 px are shrunk to keep the file small. The map tiles still need an internet connection.

If you opened `index.html` by double-clicking it, the browser won't let the page read your photos on its own. The button will ask you to pick them: open the `images` folder, select them all and click Open.

The saved file is a snapshot. To make changes, edit `trip.js` and save a new copy.

### Travel legs

Each step in a day's `plan` can list the legs of a journey as `[mode, minutes, 'description']`:

```js
legs: [['walk', 8, 'Hotel → station'], ['train', 43, 'Express to the city']]
```

The modes are `walk`, `train`, `highspeed`, `shinkansen`, `subway`, `metro`, `tram`, `cable`, `funicular`, `ropeway`, `bus`, `coach`, `taxi`, `car`, `drive`, `ferry`, `boat`, `flight` and `bike`. The page adds up train, bus, car and walking time for each step and for the whole day. Mark a step `optional: true` to leave it out of the totals.

### Map lines that follow real roads

By default each day's stops are joined with straight lines. To follow real roads or rail lines, add point lists under `paths`, keyed by `'fromId>toId'`. You can export these from a routing tool such as [OSRM](https://project-osrm.org) or [GraphHopper](https://www.graphhopper.com). The reverse direction is used automatically.

### Japanese, Chinese or other scripts

Set `theme.verticalBadges: true` to write badges top-to-bottom, and choose fonts that cover your script:

```js
theme: {
  verticalBadges: true,
  fonts: { display: 'Shippori Mincho', body: 'Zen Kaku Gothic New',
           url: 'https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@700;800&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap' }
}
```

## If something goes wrong

- **A red box appears at the bottom of the page**: it names the field to fix, such as a stop that uses a place id you haven't added.
- **The page is blank or unstyled**: there's probably a missing comma or quote in `trip.js`. Press F12, open the **Console** tab, and it will name the line.
- **No map**: the map tiles and the Leaflet library load from the internet. Everything else works offline.
- **A photo doesn't show**: check that the file name in `trip.js` matches the file in `images` exactly, including capitals and the `.jpg` or `.png` ending.

## Credits

Map by [Leaflet](https://leafletjs.com) with [Esri World Topographic](https://www.arcgis.com/home/item.html?id=30e5fe3149c34df1ba922e6f5bbf808f) tiles (data from Esri, HERE, Garmin, USGS and [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors). You can switch to another tile provider with `map.tiles` and `map.attribution` in `trip.js`. Fonts from [Google Fonts](https://fonts.google.com).

The example trip and its hotels are made up for illustration. Its photos come from Wikimedia Commons, used under their own licenses:

| File | Photo | By | License |
|---|---|---|---|
| `porto-rabelo-boats.jpg` | [Rabelo boats and Ribeira, Porto](https://commons.wikimedia.org/wiki/File:Rabelo_boats_and_Ribeira_seen_from_Cais_de_Gaia,_20250605_1623_9879.jpg) | Jakub Hałun | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| `lisbon-tram-28.jpg` | [Tram 28 at Largo de Santa Luzia, Lisbon](https://commons.wikimedia.org/wiki/File:Tram_28_at_Largo_de_Santa_Luzia_in_Lisbon,_20250606_1958_0419.jpg) | Jakub Hałun | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| `belem-tower.jpg` | [Belém Tower, Lisbon](https://commons.wikimedia.org/wiki/File:Torre_de_Bel%C3%A9m,_Lisboa,_Portugal,_2012-05-12,_DD_16.JPG) | Diego Delso | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) |
| `pena-palace.jpg` | [Pena Palace, Sintra](https://commons.wikimedia.org/wiki/File:Pal%C3%A1cio_Nacional_da_Pena,_Sintra,_Portugal,_20250606_1155_0102.jpg) | Jakub Hałun | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| `porto-ribeira.jpg` | [Ribeira from Cais de Gaia, Porto](https://commons.wikimedia.org/wiki/File:View_of_Ribeira_from_Cais_de_Gaia,_20250605_1628_9890.jpg) | Jakub Hałun | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) |
| `sao-bento-tiles.jpg` | [São Bento station, Porto](https://commons.wikimedia.org/wiki/File:Estaci%C3%B3n_de_tren_S%C3%A3o_Bento,_Oporto,_Portugal,_2019-06-02,_DD_06.jpg) | Diego Delso | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| `douro-pinhao.jpg` | [Pinhão, Alto Douro](https://commons.wikimedia.org/wiki/File:Pinh%C3%A3o,_heart_of_Alto_Douro_Wine_Region,_UNESCO_World_Heritage_Site.jpg) | Sanjorgepinho | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |

The photos are resized copies of the originals and are not covered by the MIT license below.

## License

The code is [MIT](LICENSE): use it, change it, share it. The example photos keep their own licenses, listed above.
