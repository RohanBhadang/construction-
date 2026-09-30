// Real site photos of Akhilesh Construction.
// Files live in src/assets/photos/full (1600px) and src/assets/photos/thumb (640px).
// To add a new photo: drop the SAME file name into both folders, then add one line to `list` below.
// Vite's import.meta.glob picks the files up and bundles/hashes them automatically.

const fullFiles = import.meta.glob('../assets/photos/full/*.jpg', { eager: true, import: 'default' })
const thumbFiles = import.meta.glob('../assets/photos/thumb/*.jpg', { eager: true, import: 'default' })

export const photoCategories = [
  { key: 'all', label: 'All' },
  { key: 'hdd', label: 'HDD Machines' },
  { key: 'laying', label: 'Pipeline Laying' },
  { key: 'fittings', label: 'Fittings & Tap-off' },
  { key: 'png', label: 'PNG Connections' },
  { key: 'station', label: 'Stations' },
  { key: 'corridor', label: 'Flyover & Corridor' },
  { key: 'ceremony', label: 'Site Events' },
]

const list = [
  { slug: "hdd-xz200-rig", cat: "hdd", caption: "XCMG XZ200 HDD rig on site", w: 1280, h: 960 },
  { slug: "hdd-road-crossing", cat: "hdd", caption: "HDD set-up for a road crossing", w: 1600, h: 1200 },
  { slug: "hdd-rig-pooja", cat: "hdd", caption: "Pooja of the HDD rig before start of work", w: 1280, h: 960 },
  { slug: "hdd-rig-city-street", cat: "hdd", caption: "HDD rig set up in a city street", w: 1600, h: 900 },
  { slug: "hdd-rig-crew", cat: "hdd", caption: "HDD rig with site crew", w: 960, h: 1280 },
  { slug: "hdd-rig-orange", cat: "hdd", caption: "HDD rig moving on site", w: 1600, h: 900 },
  { slug: "hdd-drill-rods", cat: "hdd", caption: "Drill rods during a bore", w: 780, h: 1040 },
  { slug: "hdd-rig-nala-bank", cat: "hdd", caption: "HDD rig at a nala crossing", w: 1200, h: 1600 },
  { slug: "steel-pipe-laying-field", cat: "laying", caption: "Steel pipeline being laid with JCBs", w: 1599, h: 899 },
  { slug: "pipe-in-trench", cat: "laying", caption: "Pipe lowered into an open trench", w: 900, h: 1600 },
  { slug: "pipe-cutting-grinding", cat: "laying", caption: "Pipe end preparation on the roadside", w: 900, h: 1600 },
  { slug: "pipe-welding-sunset", cat: "laying", caption: "Welding a steel pipeline at dusk", w: 900, h: 1600 },
  { slug: "pipe-stack-pooja", cat: "laying", caption: "Pooja on a stack of pipes before laying", w: 1600, h: 1600 },
  { slug: "trench-works-corridor", cat: "corridor", caption: "Trench works along a road corridor", w: 1600, h: 900 },
  { slug: "black-pipe-trench", cat: "laying", caption: "Black HDPE pipe in a trench", w: 576, h: 1280 },
  { slug: "mdpe-nala-crossing", cat: "laying", caption: "MDPE gas pipe across a nala", w: 1280, h: 960 },
  { slug: "bridge-nala-works", cat: "laying", caption: "Crossing works beside a bridge", w: 1280, h: 960 },
  { slug: "mdpe-in-trench", cat: "laying", caption: "MDPE gas line in a trench", w: 640, h: 1280 },
  { slug: "mdpe-trench-road", cat: "laying", caption: "MDPE line laid in a road-side trench", w: 900, h: 1600 },
  { slug: "trench-with-jcb", cat: "laying", caption: "Trenching with a JCB", w: 900, h: 1600 },
  { slug: "pipes-near-nala", cat: "laying", caption: "MDPE coils and RCC pipes near a nala", w: 1152, h: 864 },
  { slug: "mdpe-tee-connection", cat: "laying", caption: "MDPE line with tee connection", w: 1280, h: 640 },
  { slug: "excavator-site", cat: "laying", caption: "Excavator at work with MDPE stacked", w: 1280, h: 960 },
  { slug: "tapping-tee-1", cat: "fittings", caption: "Tapping tee on an MDPE main", w: 1600, h: 1600 },
  { slug: "electrofusion-tee", cat: "fittings", caption: "Electrofusion tee on MDPE line", w: 1280, h: 1280 },
  { slug: "tapping-tee-3", cat: "fittings", caption: "Tap-off with fusion cable connected", w: 1280, h: 1280 },
  { slug: "saddle-fitting", cat: "fittings", caption: "Saddle fitting close-up", w: 1600, h: 1600 },
  { slug: "png-regulator-cabinet", cat: "png", caption: "Gas regulator and meter cabinet", w: 720, h: 1280 },
  { slug: "png-meter-wall", cat: "png", caption: "PNG riser with meter on a wall", w: 1200, h: 1600 },
  { slug: "png-house-connection", cat: "png", caption: "PNG house connection", w: 899, h: 1599 },
  { slug: "png-meter-installed", cat: "png", caption: "Gas meter installed for a home", w: 899, h: 1599 },
  { slug: "png-riser-pair", cat: "png", caption: "Yellow GI risers on a building", w: 1280, h: 1280 },
  { slug: "gas-meter-closeup", cat: "png", caption: "Gas meter close-up", w: 1536, h: 1536 },
  { slug: "png-riser-warning", cat: "png", caption: "Riser with safety warning plate", w: 900, h: 1600 },
  { slug: "service-line-valve", cat: "png", caption: "Service line valve arrangement", w: 720, h: 1280 },
  { slug: "station-commissioning-1", cat: "station", caption: "Station ready for commissioning", w: 1600, h: 900 },
  { slug: "station-inauguration-crowd", cat: "station", caption: "Officials at a station inauguration", w: 900, h: 1600 },
  { slug: "station-inauguration-3", cat: "station", caption: "Team present at commissioning", w: 900, h: 1600 },
  { slug: "regulator-cage", cat: "station", caption: "Regulator set inside a protective cage", w: 720, h: 1280 },
  { slug: "regulator-panel-piping", cat: "station", caption: "Regulator panel piping", w: 1280, h: 720 },
  { slug: "bhoomi-pujan-1", cat: "ceremony", caption: "Bhoomi pujan at the start of work", w: 1200, h: 1600 },
  { slug: "bhoomi-pujan-2", cat: "ceremony", caption: "Bhoomi pujan with client team", w: 1600, h: 1200 },
  { slug: "inauguration-pooja-1", cat: "ceremony", caption: "Pooja and garlanding at site", w: 1280, h: 720 },
  { slug: "inauguration-pooja-2", cat: "ceremony", caption: "Client and team at the ceremony", w: 1156, h: 651 },
  { slug: "machine-pooja", cat: "ceremony", caption: "Machine pooja before a bore", w: 1600, h: 900 },
  { slug: "site-crew", cat: "ceremony", caption: "Site crew in safety gear", w: 1600, h: 716 },
  { slug: "hdd-garlanded", cat: "ceremony", caption: "HDD rig garlanded for the start", w: 648, h: 1152 },
  { slug: "flyover-pipes", cat: "corridor", caption: "Pipes along a flyover corridor", w: 1600, h: 900 },
  { slug: "crane-lifting-pipe", cat: "corridor", caption: "Crane lifting pipe on a corridor job", w: 900, h: 1600 },
  { slug: "site-flyover-crew", cat: "ceremony", caption: "On site beneath a flyover corridor", w: 900, h: 1600 },
  { slug: "event-globe-installation", cat: "ceremony", caption: "At an event venue beside a globe installation", w: 900, h: 1600 },
  { slug: "event-venue-entrance", cat: "ceremony", caption: "Event venue decorated for the convention", w: 900, h: 1600 },
  { slug: "event-pbd-convention-1", cat: "ceremony", caption: "17th PBD Convention, Indore (Jan 2023)", w: 1600, h: 900 },
  { slug: "event-pbd-convention-2", cat: "ceremony", caption: "Attending the PBD Convention in Indore", w: 1600, h: 900 },
  { slug: "event-g20-india-2023", cat: "ceremony", caption: "At the G20 Bharat 2023 display", w: 1600, h: 900 },
  { slug: "event-mp-odop-display", cat: "ceremony", caption: "Madhya Pradesh ODOP display at the event", w: 1600, h: 900 },
]

export const photos = list.map((p) => ({
  ...p,
  src: fullFiles[`../assets/photos/full/${p.slug}.jpg`],
  thumb: thumbFiles[`../assets/photos/thumb/${p.slug}.jpg`],
}))

export const photoBySlug = Object.fromEntries(photos.map((p) => [p.slug, p]))

// pick('a', 'b') -> [photoA, photoB]; unknown slugs are skipped with a console warning
export const pick = (...slugs) =>
  slugs
    .map((s) => {
      if (!photoBySlug[s]) console.warn('Unknown photo slug:', s)
      return photoBySlug[s]
    })
    .filter(Boolean)

export const img = (slug) => photoBySlug[slug]?.src
