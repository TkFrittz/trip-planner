# Trip planner

A good-looking, single-page travel plan you fill in with your own trip: an interactive route map, a day-by-day itinerary with travel times, hotels and booking status, a budget, and a booking timeline. It works on phones, prints well, and needs no build step, no account and no server.

**[See the example trip →](https://tkfrittz.github.io/trip-planner/)**

## What you get

- **Route map**: the whole trip at a glance, or pick a day to zoom in with numbered stops and lines for each leg (dotted for walking, dashed for ferries, ropeways and flights).
- **Day by day**: a photo (or a big title tile), tags, a timed plan, and each journey broken into legs. Train, bus and walking times are added up for you.
- **Stays**: a nights timeline, hotel cards with "Booked" or "Not booked yet" badges, and what each stay costs.
- **Budget**: a split bar and line items, plus a check of hotel spend against your hotel budget.
- **Booking timeline**, **what matters most**, **still to decide** and **saving for another trip** lists.
- Dates, weekdays and currency are all worked out from your settings, in any language format.

## Make it yours

Everything about your trip lives in **one file, `trip.js`**. You don't need to touch `index.html`.

### Option A: on your computer (easiest)

1. Click **Code → Download ZIP** on this page and unzip it.
2. Open `trip.js` in any text editor (Notepad, TextEdit, VS Code…).
3. Replace the example Portugal trip with yours. Every field has a comment explaining it.
4. Double-click `index.html` to open it in your browser. Refresh after each save.

### Option B: on GitHub, with a free web page

1. Click **Use this template → Create a new repository** (or fork this repository).
2. In your new repository, open `trip.js`, click the pencil icon, and edit it.
3. Go to **Settings → Pages**, choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.
4. After a minute your plan is live at `https://<your-username>.github.io/<repo-name>/`.

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

Put your images in the `images` folder and refer to them by path:

```js
image: 'images/day1.jpg'
```

To credit a photo (for example one from Wikimedia Commons), use the longer form. Credits are collected in the footer automatically.

```js
image: { src: 'images/day1.jpg', credit: 'Photographer name', license: 'CC BY 4.0',
         link: 'https://commons.wikimedia.org/wiki/File:...', position: '50% 40%' }
```

`position` decides which part of the photo stays in view when it's cropped. Days without a photo show their `badge` text on a coloured tile instead. Photos around 1600 px wide and saved as JPEG at about 80% quality keep the page fast.

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

## Credits

Map by [Leaflet](https://leafletjs.com) with [Esri World Topographic](https://www.arcgis.com/home/item.html?id=30e5fe3149c34df1ba922e6f5bbf808f) tiles (data from Esri, HERE, Garmin, USGS and [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors). You can switch to another tile provider with `map.tiles` and `map.attribution` in `trip.js`. Fonts from [Google Fonts](https://fonts.google.com).

The example trip and its hotels are made up for illustration.

## License

[MIT](LICENSE). Use it, change it, share it.
