/* =====================================================================
   YOUR TRIP
   ---------------------------------------------------------------------
   This is the only file you need to edit. Replace the example trip
   below with your own, save, and refresh index.html in your browser.

   Photos
   - Put your photos in the images folder and point to them below, e.g.
     image: 'images/day1.jpg'. The example photos are in that folder too;
     delete the ones you don't use.
   - Add credit, license and link to a photo and it's credited in the footer.
   - A day with no image shows its badge on a coloured tile instead.

   Sharing
   - "Print or save as PDF" in the page header gives a clean printout:
     no map, photos as small banners, days flowing across pages.
   - "Save as one file" downloads a single .html file with your photos and
     this trip built in, ready to email. Edit this file, not the saved one.

   Tips
   - Keep the commas between items, and the quotes around text.
   - If you need an apostrophe inside 'single quotes', write it as \'
     or use a curly one (’), or wrap the text in "double quotes".
   - If something is wrong, a red box at the bottom of the page tells
     you what. For syntax errors, press F12 and look at the Console.
   - Any field marked (optional) can be deleted.
   ===================================================================== */

window.TRIP = {

  /* ---------- Basics ---------- */
  pageTitle: 'Portugal, slowly',            // browser tab title
  description: 'Seven days in Lisbon, Sintra, Porto and the Douro Valley.',
  startDate: '2027-05-10',                  // Day 1, written YYYY-MM-DD. Every day's date is worked out from this.
  locale: 'en-US',                          // how dates and money are written: 'en-GB', 'fr-FR', 'ja-JP' ...
  currency: 'EUR',                          // any ISO currency code: 'USD', 'GBP', 'JPY', 'AUD' ...
  lastDayNote: 'fly home',                  // (optional) shown under the stays timeline

  /* ---------- Header ---------- */
  hero: {
    eyebrow: 'Our Portugal story',
    local: 'Boa viagem',                    // (optional) small text before the eyebrow, e.g. in the local language
    title: 'Portugal, slowly.',
    lede: 'Tiled streets and custard tarts in Lisbon, palaces in the Sintra hills, port cellars in Porto and a train ride up the Douro.',
    // (optional) a header photo. Put the file in the images folder, or use a full https:// link.
    // position picks which part stays in view when the photo is cropped: '50% 50%' is the centre.
    image: { src: 'images/porto-rabelo-boats.jpg', caption: 'Rabelo boats on the Douro, Porto', position: '50% 55%',
             credit: 'Jakub Hałun', license: 'CC BY 4.0',
             link: 'https://commons.wikimedia.org/wiki/File:Rabelo_boats_and_Ribeira_seen_from_Cais_de_Gaia,_20250605_1623_9879.jpg' },
  },

  /* ---------- Colours and fonts (all optional) ---------- */
  theme: {
    colors: {
      // primary: '#25406a',   // overnight bases, headings
      // accent:  '#cf5f2b',   // the selected day
      // optional:'#5d6e43',   // optional stops and day trips
      // paper:   '#f5f2ec',   // page background
    },
    // fonts: { display: 'Shippori Mincho', body: 'Zen Kaku Gothic New',
    //          url: 'https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@700;800&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap' },
    verticalBadges: false,  // true writes badges top-to-bottom, which suits Japanese or Chinese characters
  },

  /* ---------- Places ----------
     Every location you mention, with an id you make up (no spaces).
     Get coordinates in Google Maps: right-click a spot and click the numbers at the top of the menu.
     Format: id: [latitude, longitude, 'Name on the map', 'Optional second line'] */
  places: {
    lis_airport: [38.7742, -9.1342, 'Lisbon Airport'],
    lis_hotel:   [38.7139, -9.1394, 'Example Hotel Rossio', 'Our Lisbon base'],
    santaluzia:  [38.7118, -9.1301, 'Miradouro de Santa Luzia', 'Alfama viewpoint'],
    se:          [38.7097, -9.1335, 'Lisbon Cathedral'],
    jeronimos:   [38.6979, -9.2068, 'Jerónimos Monastery'],
    pasteis:     [38.6975, -9.2032, 'Pastéis de Belém'],
    belemtower:  [38.6916, -9.2160, 'Belém Tower'],
    lxfactory:   [38.7037, -9.1784, 'LX Factory'],
    rossio_stn:  [38.7142, -9.1410, 'Rossio Station'],
    sintra_stn:  [38.7985, -9.3874, 'Sintra Station'],
    pena:        [38.7876, -9.3906, 'Pena Palace'],
    regaleira:   [38.7963, -9.3960, 'Quinta da Regaleira'],
    apolonia:    [38.7139, -9.1225, 'Santa Apolónia Station'],
    campanha:    [41.1486, -8.5856, 'Porto Campanhã Station'],
    opo_hotel:   [41.1470, -8.6110, 'Example Hotel Aliados', 'Our Porto base'],
    saobento:    [41.1456, -8.6105, 'São Bento Station'],
    lello:       [41.1468, -8.6149, 'Livraria Lello'],
    clerigos:    [41.1457, -8.6140, 'Clérigos Tower'],
    ribeira:     [41.1406, -8.6131, 'Ribeira'],
    gaia:        [41.1374, -8.6127, 'Port cellars, Gaia'],
    pinhao:      [41.1906, -7.5466, 'Pinhão', 'Douro Valley'],
    opo_airport: [41.2421, -8.6781, 'Porto Airport'],
  },

  /* ---------- Stays ----------
     One entry per hotel, in order. Dates are worked out from checkIn and nights.
     Two stays with the same name (e.g. 'Tokyo' at the start and end) share one marker on the map. */
  stays: [
    {
      name: 'Lisbon',
      place: 'lis_hotel',                   // an id from places
      badge: 'L',                           // 1–2 characters for the map marker
      checkIn: '2027-05-10',
      nights: 3,
      hotel: 'Example Hotel Rossio',
      details: 'Double room for 2 adults. Check in from 3:00 PM, check out by 11:00 AM. Two minutes from Rossio Station.',
      extra: { label: 'Breakfast', text: 'Included, 7:00–10:30 AM.' },   // (optional) highlighted box
      link: 'https://www.google.com/maps/search/?api=1&query=Rossio+Lisbon',  // (optional) booking or map link
      booked: true,
      cost: { total: 480, paid: true, note: 'Booked: 3 nights, breakfast included.' },  // or { perNight: 150, note: '...' }
    },
    {
      name: 'Porto',
      place: 'opo_hotel',
      badge: 'P',
      checkIn: '2027-05-13',
      nights: 3,
      hotel: 'Example Hotel Aliados',
      details: 'Double room, room only. Free cancellation until 1 May. A short walk from São Bento Station.',
      booked: false,
      cost: { perNight: 140, note: 'Estimate from booking sites for our dates.' },
    },
  ],

  /* ---------- The whole-trip line on the overview map (optional) ----------
     Place ids in order. Leave it out to join the stays in order. */
  route: ['lis_airport', 'lis_hotel', 'apolonia', 'campanha', 'opo_hotel', 'opo_airport'],

  /* Day trips drawn as dotted green lines on the overview. day is the day number (1 = first day). */
  dayTrips: [
    { from: 'lis_hotel', to: 'pena',   label: 'Sintra · day trip', day: 3 },
    { from: 'opo_hotel', to: 'pinhao', label: 'Douro Valley · day trip', day: 6 },
  ],

  /* Extra points on the overview map, such as airports. */
  markers: [
    { place: 'lis_airport', label: 'Lisbon Airport', sub: 'Arrive May 10' },
    { place: 'opo_airport', label: 'Porto Airport',  sub: 'Fly home May 16' },
  ],

  /* Text for the panel beside the map when "Whole trip" is selected (optional). */
  overview: {
    title: 'Two cities, two day trips',
    text: 'Three nights in Lisbon, three in Porto, with day trips to Sintra and the Douro Valley. Tap a base to jump to its first day.',
    badge: '✦',
  },

  /* ---------- Days ----------
     One entry per day, in order.
     stops:  numbered markers on the map, as [placeId, 'note', optional?, 'mode'].
             mode is how you reach that stop: 'walk' draws dots, 'ferry' / 'ropeway' / 'flight' draw dashes.
     plan:   the itinerary. Each step can have legs: [mode, minutes, 'description'].
             Modes: walk, train, highspeed, subway, metro, tram, cable, funicular, ropeway, bus, coach,
                    taxi, car, drive, ferry, boat, flight, bike. The page adds up the minutes for you.
     image:  'images/day1.jpg' or { src, credit, license, link, position }. No image shows the badge instead.
     note:   a yellow tip box. This one field may contain HTML such as <b>bold</b>. */
  days: [
    {
      title: 'Olá, Lisboa',
      short: 'Lisbon',           // label on the day chip above the map
      badge: 'Lisboa',           // big word on days without a photo
      caption: 'Tram 28 at Largo de Santa Luzia, by tonight’s sunset viewpoint',
      image: { src: 'images/lisbon-tram-28.jpg', position: '50% 40%', credit: 'Jakub Hałun', license: 'CC BY 4.0',
               link: 'https://commons.wikimedia.org/wiki/File:Tram_28_at_Largo_de_Santa_Luzia_in_Lisbon,_20250606_1958_0419.jpg' },
      summary: 'Land at Lisbon Airport, take the metro into town, check in and wander up to an Alfama viewpoint for sunset.',
      tags: ['Arrival', 'Easy evening'],
      travel: 'Airport → Rossio by metro (red then green line) ~30 min, or a taxi ~20 min',
      plan: [
        { time: 'On arrival', title: 'Land in Lisbon', text: 'Collect bags and buy a Viva Viagem card for the metro.' },
        { time: 'After landing', title: 'Travel to the hotel', text: 'Metro into the centre, then a short walk.',
          legs: [['walk', 8, 'Arrivals → Aeroporto metro station'], ['metro', 25, 'Red line to Alameda, change to green line for Rossio'], ['walk', 4, 'Rossio Station → hotel']] },
        { time: 'Or', title: 'Taxi with heavy bags', optional: true, legs: [['taxi', 20, 'Taxi rank at arrivals → hotel']] },
        { time: '6:30 PM', title: 'Sunset at Santa Luzia', text: 'Walk up through Alfama past the cathedral.',
          legs: [['walk', 20, 'Hotel → Lisbon Cathedral → Miradouro de Santa Luzia, uphill']] },
        { time: '8:00 PM', title: 'Dinner in Alfama', text: 'Grilled sardines or a fado house if we have the energy.' },
      ],
      note: 'Lisbon is hilly and the pavements are slippery when wet. <b>Shoes with grip</b> help.',
      stops: [['lis_airport', 'Land'], ['lis_hotel', 'Check in'], ['se', 'On the way up', false, 'walk'], ['santaluzia', 'Sunset', false, 'walk']],
    },
    {
      title: 'Belém and LX Factory',
      short: 'Belém',
      badge: 'Belém',
      caption: 'Belém Tower on the Tagus, built to guard the harbour in the 1500s',
      image: { src: 'images/belem-tower.jpg', position: '40% 50%', credit: 'Diego Delso', license: 'CC BY-SA 3.0',
               link: 'https://commons.wikimedia.org/wiki/File:Torre_de_Bel%C3%A9m,_Lisboa,_Portugal,_2012-05-12,_DD_16.JPG' },
      summary: 'Tram 15 out to Belém for the monastery, custard tarts and the tower, then LX Factory on the way back.',
      tags: ['Jerónimos', 'Pastéis de nata', 'LX Factory'],
      travel: 'Tram 15E from Praça da Figueira to Belém ~30 min each way',
      plan: [
        { time: '9:00 AM', title: 'Tram to Belém', legs: [['walk', 5, 'Hotel → Praça da Figueira'], ['tram', 30, 'Tram 15E to Mosteiro dos Jerónimos']] },
        { time: '10:00 AM', title: 'Jerónimos Monastery', text: 'Book a timed ticket ahead to skip the queue.' },
        { time: '12:00 PM', title: 'Pastéis de Belém', text: 'Eat in: the back rooms move faster than the takeaway line.' },
        { time: '1:30 PM', title: 'Belém Tower', legs: [['walk', 15, 'Along the river to the tower']] },
        { time: '4:00 PM', title: 'LX Factory', text: 'Bookshops and cafés in an old textile mill.', legs: [['tram', 10, 'Tram 15E back towards town, off at Calvário']] },
      ],
      stops: [['lis_hotel', 'Leave 9:00 AM'], ['jeronimos', '10:00 AM'], ['pasteis', 'Lunch', false, 'walk'], ['belemtower', '1:30 PM', false, 'walk'], ['lxfactory', 'Afternoon'], ['lis_hotel', 'Back for dinner']],
    },
    {
      title: 'Palaces in the Sintra hills',
      short: 'Sintra',
      badge: 'Sintra',
      dayTrip: true,             // dashed day chip
      caption: 'Pena Palace above the forests of the Sintra hills',
      image: { src: 'images/pena-palace.jpg', position: '50% 30%', credit: 'Jakub Hałun', license: 'CC BY 4.0',
               link: 'https://commons.wikimedia.org/wiki/File:Pal%C3%A1cio_Nacional_da_Pena,_Sintra,_Portugal,_20250606_1155_0102.jpg' },
      summary: 'Early train to Sintra, bus up to Pena Palace, walk down to Quinta da Regaleira, train back for dinner.',
      tags: ['Day trip', 'Pena Palace', 'Regaleira'],
      travel: 'Rossio → Sintra by train ~40 min; bus 434 to Pena ~15 min',
      plan: [
        { time: '8:30 AM', title: 'Train to Sintra', legs: [['walk', 3, 'Hotel → Rossio Station'], ['train', 40, 'Rossio → Sintra, every 20 minutes']] },
        { time: '9:30 AM', title: 'Pena Palace', text: 'Timed entry; go first, before the tour buses.', legs: [['bus', 15, 'Bus 434 from the station up to Pena']] },
        { time: '1:30 PM', title: 'Quinta da Regaleira', text: 'Gardens, grottoes and the initiation well.', legs: [['walk', 35, 'Downhill through the old town']] },
        { time: '5:00 PM', title: 'Back to Lisbon', legs: [['walk', 10, 'Regaleira → Sintra Station'], ['train', 40, 'Sintra → Rossio']] },
      ],
      stops: [['lis_hotel', 'Leave 8:30 AM'], ['rossio_stn', 'Train'], ['sintra_stn', 'Arrive ~9:15 AM'], ['pena', '9:30 AM'], ['regaleira', '1:30 PM', false, 'walk'], ['sintra_stn', 'Train back', false, 'walk']],
      focus: [2, 3, 4, 5],       // (optional) zoom the map to these stops (counting from 0)
    },
    {
      title: 'North to Porto',
      short: 'Porto',
      badge: 'Porto',
      caption: 'Porto’s Ribeira, seen from across the river in Gaia',
      image: { src: 'images/porto-ribeira.jpg', position: '60% 50%', credit: 'Jakub Hałun', license: 'CC BY 4.0',
               link: 'https://commons.wikimedia.org/wiki/File:View_of_Ribeira_from_Cais_de_Gaia,_20250605_1628_9890.jpg' },
      summary: 'Check out, take the fast train to Porto, check in and walk down to the river.',
      tags: ['Alfa Pendular', 'Ribeira'],
      travel: 'Santa Apolónia → Porto Campanhã by Alfa Pendular ~2 hr 50 min; local train to São Bento ~5 min',
      plan: [
        { time: '10:00 AM', title: 'Check out and travel to Porto',
          legs: [['taxi', 10, 'Hotel → Santa Apolónia'], ['highspeed', 170, 'Alfa Pendular, reserved seats'], ['train', 5, 'Campanhã → São Bento'], ['walk', 5, 'São Bento → hotel']] },
        { time: '5:00 PM', title: 'Down to the Ribeira', text: 'Watch the boats and the bridge lights come on.', legs: [['walk', 15, 'Hotel → Ribeira, downhill']] },
      ],
      stops: [['lis_hotel', 'Check out 10:00 AM'], ['apolonia', 'Train 10:30 AM'], ['campanha', 'Arrive ~1:20 PM'], ['opo_hotel', 'Check in'], ['ribeira', 'Evening', false, 'walk']],
    },
    {
      title: 'Books, tiles and port',
      short: 'Porto',
      badge: 'Porto',
      caption: 'Tile murals in the entrance hall of São Bento station',
      image: { src: 'images/sao-bento-tiles.jpg', credit: 'Diego Delso', license: 'CC BY-SA 4.0',
               link: 'https://commons.wikimedia.org/wiki/File:Estaci%C3%B3n_de_tren_S%C3%A3o_Bento,_Oporto,_Portugal,_2019-06-02,_DD_06.jpg' },
      summary: 'A walking day: São Bento’s azulejos, Livraria Lello, the Clérigos Tower, then over the bridge for a port tasting.',
      tags: ['Azulejos', 'Livraria Lello', 'Port tasting'],
      plan: [
        { time: '9:30 AM', title: 'São Bento Station', text: 'Twenty thousand blue-and-white tiles in the entrance hall.' },
        { time: '10:30 AM', title: 'Livraria Lello', text: 'Timed tickets online; the voucher counts towards a book.' },
        { time: '12:00 PM', title: 'Clérigos Tower', text: '240 steps for the best view of the old town.' },
        { time: '3:00 PM', title: 'Port cellar tour in Gaia', legs: [['walk', 25, 'Down through the Ribeira and over the Dom Luís I bridge']] },
      ],
      stops: [['opo_hotel', 'Leave 9:30 AM'], ['saobento', '9:30 AM', false, 'walk'], ['lello', '10:30 AM', false, 'walk'], ['clerigos', 'Noon', false, 'walk'], ['ribeira', 'Lunch', false, 'walk'], ['gaia', '3:00 PM', false, 'walk']],
    },
    {
      title: 'Up the Douro Valley',
      short: 'Douro',
      badge: 'Douro',
      dayTrip: true,
      caption: 'Pinhão and the terraced vineyards of the Douro',
      image: { src: 'images/douro-pinhao.jpg', position: '50% 35%', credit: 'Sanjorgepinho', license: 'CC BY-SA 4.0',
               link: 'https://commons.wikimedia.org/wiki/File:Pinh%C3%A3o,_heart_of_Alto_Douro_Wine_Region,_UNESCO_World_Heritage_Site.jpg' },
      summary: 'One of Europe’s great train rides, along the river through terraced vineyards to Pinhão and back.',
      tags: ['Day trip', 'Scenic railway', 'Vineyards'],
      travel: 'São Bento → Pinhão by regional train ~2 hr 30 min each way',
      plan: [
        { time: '9:10 AM', title: 'Train to Pinhão', text: 'Sit on the right-hand side for the river.', legs: [['walk', 5, 'Hotel → São Bento'], ['train', 150, 'Douro Line to Pinhão']] },
        { time: '12:00 PM', title: 'Lunch and a quinta visit', text: 'Several wine estates are a short walk from the station.' },
        { time: 'Ideas', title: 'River cruise', text: 'A one-hour boat trip from the Pinhão quay.', optional: true },
        { time: '4:00 PM', title: 'Train back to Porto', legs: [['train', 150, 'Pinhão → São Bento']] },
      ],
      stops: [['opo_hotel', 'Leave 9:00 AM'], ['saobento', 'Train', false, 'walk'], ['pinhao', 'Arrive ~11:40 AM'], ['opo_hotel', 'Back ~6:45 PM']],
    },
    {
      title: 'Até já, Portugal',
      short: 'Home',
      badge: 'Adeus',
      caption: 'Metro to the airport and the flight home',
      // No image on this day, so the page shows the badge ('Adeus') on a coloured tile instead.
      summary: 'Check out and take the metro to Porto Airport.',
      tags: ['Departure'],
      sleep: '',                 // set to '' to hide the "Sleep" line on the last day
      plan: [
        { time: '10:00 AM', title: 'Check out and travel to the airport', legs: [['walk', 5, 'Hotel → Trindade metro'], ['metro', 35, 'Line E to Aeroporto']] },
      ],
      stops: [['opo_hotel', 'Check out'], ['opo_airport', 'Fly home']],
    },
  ],

  /* ---------- Optional precise route shapes ----------
     By default the map draws straight lines between stops. To follow real roads or rails, add paths:
     'fromId>toId': [[mode, [[lat, lon], [lat, lon], ...]], ...]   (mode: rail, road, walk, air, link)
     The reverse direction is used automatically. */
  paths: {},

  /* ---------- Map tiles (optional) ----------
     Leave this out to use Esri's topographic map. To use another provider, give its tile URL and credit, e.g.:
     map: { tiles: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
            attribution: '© OpenStreetMap contributors © CARTO',
            creditHtml: 'Tiles © CARTO, data © OpenStreetMap contributors.', warm: false }, */

  /* ---------- Budget ----------
     amount is in your currency. Mark one line stays: true to compare it with what the stays cost. */
  budget: {
    totalNote: 'for two, excluding international flights',
    excludes: 'flights',   // (optional) shown in the header stat
    lines: [
      { label: 'Hotels · 6 nights', amount: 950, note: 'Lisbon is paid; Porto is an estimate until booked.', stays: true },
      { label: 'Food + local transport', amount: 700, note: 'Meals, coffee, metro and trams for 7 days.' },
      { label: 'Trains', amount: 180, note: 'Alfa Pendular, Sintra and the Douro Line, for two.' },
      { label: 'Sights + buffer', amount: 320, note: 'Palaces, Lello, a cellar tour and a modest buffer.' },
    ],
    // Paragraphs beside the budget. HTML is allowed here.
    notes: [
      'The hotel line is what we have actually paid or been quoted. The other lines are planning allowances.',
      'Alfa Pendular fares are cheapest when booked a few weeks ahead on the CP website.',
    ],
  },

  /* ---------- Booking timeline (optional) ----------
     Groups of things to book. when is the date to book; for is the trip day it's for. */
  bookings: {
    groups: [
      { title: 'Book online ahead', items: [
        { when: 'Mid April', whenNote: 'about 30 days before', for: 'Thu 13 May', title: 'Alfa Pendular, Lisbon → Porto', text: 'The ~10:30 AM train. Promo fares sell out first.', how: 'CP website or app.' },
        { when: 'Early May', for: 'Wed 12 May', title: 'Pena Palace timed entry', text: 'Pick the first slot of the day.', how: 'Parques de Sintra website.' },
        { when: 'Early May', for: 'Fri 14 May', title: 'Livraria Lello', text: 'Timed tickets; the price comes off a book.', how: 'Livraria Lello website.' },
      ]},
      { title: 'Buy on the day', items: [
        { for: 'Mon 10 May', title: 'Viva Viagem card', text: 'Rechargeable card for Lisbon metro, trams and the Sintra train.' },
        { for: 'Sat 15 May', title: 'Douro Line tickets', text: 'Regional trains can’t be reserved; buy at São Bento.' },
      ]},
    ],
  },

  /* ---------- What matters most (optional) ---------- */
  priorities: [
    { title: 'Lisbon', text: 'Sunset in Alfama, the Belém custard tarts, and a slow day without a list.' },
    { title: 'Sintra', text: 'Pena Palace at opening and the Regaleira well.' },
    { title: 'Porto', text: 'The Ribeira at dusk, a port tasting and the Douro train.' },
  ],
  toDecide: [
    'Book the Porto hotel before free-cancellation prices go up.',
    'Check the Douro Line timetable for Saturday 15 May.',
  ],
  saveForLater: [
    'The Algarve coast',
    'Madeira',
  ],
  saveForLaterNote: 'These are left out on purpose. They aren’t missing stops.',

  /* ---------- Footer ---------- */
  footer: {
    sign: 'Até já · See you soon',
    text: 'Made for our trip · May 10 – 16, 2027. Times, prices and opening hours are planning estimates until confirmed.',
    // credits: 'Anything else you want to credit. HTML allowed.',
  },

  templateRepo: 'TkFrittz/trip-planner',   // link back to the template in the footer (delete to hide)
};
