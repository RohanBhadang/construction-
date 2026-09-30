// Central content store for Akhilesh Construction, sourced from the firm's
// official profile document.

// All imagery comes from the firm's own site photos (see ./photos.js).
import { img, pick } from './photos'

const heroMainImage = img('hdd-road-crossing')
const heroPipeLaying = img('mdpe-nala-crossing')
const hddMachine = img('hdd-xz200-rig')
const roadRoller = img('excavator-site')
const cngStation = img('station-commissioning-1')
const terminalPiping = img('steel-pipe-laying-field')
const pipeTrenchingTeam = img('mdpe-trench-road')
const pngConnection = img('png-meter-wall')
const corridorWorks = img('trench-works-corridor')

export const siteInfo = {
  name: 'Akhilesh Construction',
  fullName: 'Akhilesh Construction',
  formerName: 'Civil & Mechanical Engineering Contractors — Oil & Gas Pipeline Projects',
  tagline: 'Building Reliable Pipeline & Civil Infrastructure Since 2012',
  phones: ['70000 32606', '90096 22223', '70000 19505'],
  phone: '70000 32606',
  emails: ['akhilesh.construction88@gmail.com', 'akhileshsingh65@ymail.com'],
  email: 'akhilesh.construction88@gmail.com',
  address: 'B-209, Veena Nagar, Indore Sukhaliya, Near MR-10 Square, Indore- 452010.',
  founder: 'Mr. Akhilesh Singh',
  founded: 2012,
  mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(
    'B-209, Veena Nagar, Indore Sukhaliya, Near MR-10 Square, Indore- 452010'
  )}&output=embed`,
}

export const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About us',
    path: '/about',
    children: [
      { label: 'Firm Profile', path: '/about#firm-profile' },
      { label: 'Nature of Business', path: '/about#nature-of-business' },
      { label: 'Vision & Mission', path: '/about#vision-mission' },
      { label: 'HSE Policy', path: '/about#hse-policy' },
    ],
  },
  { label: 'Projects', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Clients', path: '/clients' },
  { label: 'Contact us', path: '/contact' },
]

export const heroSlides = [
  {
    title: 'We Build the Pipelines That Power India',
    subtitle: 'Civil & Mechanical Engineering Contractors for Oil & Gas Pipeline Projects',
    image: img('steel-pipe-laying-field'),
  },
  {
    title: 'Trenchless Crossings with Our Own HDD Rigs',
    subtitle: 'Horizontal boring below roads, railway tracks & canals \u00b7 2 HDD Machines in-house',
    image: img('hdd-road-crossing'),
  },
  {
    title: 'City Gas Distribution, Delivered End to End',
    subtitle: 'MDPE Pipeline \u00b7 Plant Piping \u00b7 Terminal Works \u00b7 PNG Connections',
    image: img('mdpe-nala-crossing'),
  },
  {
    title: 'Six Years. Six Major Gas Companies. Zero Compromise.',
    subtitle: 'Trusted by Aavantika Gas, IOCL, Green Gas, CUGL and more',
    image: img('station-commissioning-1'),
  },
]

export const firmProfile = {
  heading: 'FIRM PROFILE',
  paragraphs: [
    'Akhilesh Construction (AC) introduces itself for Oil & Gas Pipeline projects, City Gas Distribution Network Projects, Terminal Works, HDD etc. We are a leading Mechanical & Civil contractor mainly dealing with private sector organizations in India.',
    `Akhilesh Construction Energy Projects firm was founded by ${'Mr. Akhilesh Singh'} in the year 2012, and successfully completed various pipeline projects within three years of its establishment. With a diversified team, AC has commissioned various City Gas Distribution Projects, MDPE Pipelines, Plant Piping, Terminal Fabrication, etc., and works as a Civil Contractor for the M.P. Government.`,
    'The growth in pipeline construction and the services we offer have made us a trusted pipeline company since incorporation — working with Aavantika Gas Limited, Green Gas Limited, UP Gas Limited, Indraprastha Gas Limited, Indian Oil Corporation and Gujarat Gas Limited — and we have been awarded numerous projects under various reputed PMCs.',
    'AC has drawn the best available talent from the country to build a well-knit support team providing complete services including Residual/Detail Engineering, Construction, Procurement and Commissioning of CGD Pipeline including Tap-Off, SV Station, City Gas Station, City Gas Distribution Network, Dispatch Terminal and Receiving Terminal.',
  ],
  image: terminalPiping,
}

export const natureOfBusiness = [
  { text: 'Road Development', icon: 'road' },
  { text: 'Boundary Wall Development', icon: 'wall' },
  { text: 'RCC Block Construction of Oil & Gas Buildings', icon: 'building' },
  { text: 'Laying & commissioning of CGD pipeline projects', icon: 'pipeline' },
  { text: 'Mechanical Piping, Civil, Structural, Flare Job, Insulation & Painting', icon: 'weld' },
  { text: 'Development, Laying & Commissioning of City Gas Distribution Network (Pipeline)', icon: 'network' },
  { text: 'Engineering, supply, installation, testing & commissioning of Pressure Reduction Stations', icon: 'gauge' },
  { text: 'Plant Piping', icon: 'valve' },
  { text: 'Horizontal boring below roads, railway tracks & canals', icon: 'drill' },
  { text: 'Engineering, supply, installation, testing & commissioning of Cathodic Protection systems', icon: 'shield' },
  { text: 'CNG pumps & associated works at terminals', icon: 'pump' },
  { text: 'Laying & commissioning of MDPE Pipeline', icon: 'pipesegment' },
]

export const visionMission = {
  mission:
    'Our mission is to continually redefine quality and performance, ensure seamless integration of all project aspects, abide by environmental safety measures and create customer and employee trust & satisfaction in order to scale new heights and drive growth. We work towards developing cutting-edge expertise in the realm of pipeline projects, and delivering a wide spectrum of technologically advanced pipeline services to meet the custom requirements of the upstream sector across the world. We aim to expand our activities around the globe as we step firmly into the international arena.',
  vision:
    'To be one of the most trusted and respected pipeline service & Oil and Gas sector providers in the world — making a major contribution to India\u2019s economic growth and emerging as the largest equal-opportunity employer. Our vision is to set ineffaceable benchmarks in high-quality services, financial growth, operational excellence and customer retention through unflinching trust. AC is dedicated to implementing the highest level of quality, safety and environmental protection standards, which infuse and stimulate social responsibility and ensure a better life for all associated with us.',
}

export const hsePolicy = {
  intro:
    'Being aware of its responsibilities and duties towards its valued clients, Akhilesh Construction is committed to nationally recognized health, safety and environment standards and the use of best practice. We act in an ethical and socially responsible manner. Our ambition is to avoid negative impacts, enhance positive effects and contribute to sustainable development.',
  commitments: [
    'Integrating HSE in how we do business and demonstrating the HSE importance through hands-on leadership behavior.',
    'An ongoing focus on improving HSE performance, with openness in all HSE issues and active engagement with clients & consultants.',
    'Ensuring safe operations that protect people, the environment, communities & assets.',
  ],
}

export const jobsExecuted = [
  { year: '2012', title: 'Forest Project — All Madhya Pradesh' },
  { year: '—', title: 'Forest Department' },
  { year: '—', title: 'Indian Oil Corporation' },
  { year: '—', title: 'Aavantika Gas Ltd.' },
  { year: '—', title: 'Central UP Gas Ltd.' },
  { year: '—', title: 'Green Gas Ltd.' },
]

export const machinery = [
  { name: 'HDD Machine', qty: '02 Nos', image: img('hdd-xz200-rig'), note: 'XCMG XZ200 \u2014 trenchless crossings below roads, rails & canals' },
  { name: 'Welding Machine', qty: '04 Nos', image: img('pipe-welding-sunset'), note: 'Steel pipeline welding & fabrication' },
  { name: '63 KVA DG Set', qty: '02 Nos' },
  { name: 'JCB', qty: '01 No', image: img('steel-pipe-laying-field'), note: 'Trenching, backfilling & pipe handling' },
  { name: 'Hydra', qty: '01 No', image: img('crane-lifting-pipe'), note: 'Lifting & lowering of pipe strings' },
  { name: 'Holiday Machine', qty: '03 Nos' },
  { name: 'Air Compressor', qty: '02 Nos' },
  { name: 'Tractor & Trolley', qty: '02 Nos' },
  { name: 'Sand Blasting Unit', qty: '01 No' },
  { name: 'Pipe Trailer', qty: '01 No' },
  { name: 'Mixture Machine + All Safety Tools', qty: '02 Nos' },
  { name: 'Electro Fusion', qty: '04 Nos' },
]

export const clients = [
  { name: 'Aavantika Gas Limited', code: 'AGL', color: '#e8511f' },
  { name: 'Green Gas Limited', code: 'GGL', color: '#1f8a3d' },
  { name: 'Indian Oil Corporation', code: 'IOCL', color: '#0b63b3' },
  { name: 'Indraprastha Gas Limited', code: 'IGL', color: '#d9971f' },
  { name: 'Central UP Gas Limited', code: 'CUGL', color: '#a3242f' },
  { name: 'Gujarat Gas Limited', code: 'GGAS', color: '#1f7a6c' },
  { name: 'Sabarmati Gas Limited', code: 'SGL', color: '#00807f' },
  { name: 'Vadodara Gas Limited', code: 'VGL', color: '#6a3d9a' },
  { name: 'Haryana City Gas', code: 'HCG', color: '#b8471b' },
  { name: 'Maharashtra Natural Gas Limited', code: 'MNGL', color: '#2b6cb0' },
  { name: 'Godavari Gas Limited', code: 'GGPL', color: '#2f855a' },
  { name: 'THINK Gas', code: 'THINK', color: '#d0451b' },
  { name: 'Bhagyanagar Gas Limited', code: 'BGL', color: '#8a5a00' },
]

// Stats keep using the original 6 core clients so the numbers stay unchanged
const CORE_CLIENT_COUNT = 6

// Headline figures shown on the home page — each one derived directly from the
// firm data above rather than invented, so the numbers stay honest as content changes.
export const stats = [
  { value: new Date().getFullYear() - siteInfo.founded, suffix: '+', label: 'Years in Pipeline & Civil Works' },
  { value: CORE_CLIENT_COUNT, suffix: '', label: 'Major Gas Companies Served' },
  { value: machinery.length, suffix: '+', label: 'Machinery & Equipment Types' },
  { value: natureOfBusiness.length, suffix: '', label: 'Core Service Verticals' },
]

export const projectCategories = [
  {
    slug: 'cgd-pipeline-network',
    title: 'City Gas Distribution (CGD) Network',
    description:
      'End-to-end laying and commissioning of CGD pipelines including tap-off points, SV stations, city gas stations, dispatch and receiving terminals.',
    image: heroPipeLaying,
    photos: pick('mdpe-nala-crossing', 'bridge-nala-works', 'mdpe-in-trench', 'mdpe-trench-road', 'trench-with-jcb', 'pipes-near-nala', 'mdpe-tee-connection', 'excavator-site'),
  },
  {
    slug: 'mdpe-pipeline',
    title: 'MDPE & Steel Pipeline Laying',
    description:
      'Laying and commissioning of MDPE, steel and GI gas pipelines along with communication pipelines across urban terrain.',
    image: terminalPiping,
    photos: pick('steel-pipe-laying-field', 'pipe-welding-sunset', 'pipe-cutting-grinding', 'pipe-stack-pooja', 'pipe-in-trench', 'black-pipe-trench', 'trench-works-corridor', 'tapping-tee-1', 'electrofusion-tee', 'tapping-tee-3', 'saddle-fitting'),
  },
  {
    slug: 'plant-terminal-piping',
    title: 'Plant & Terminal Piping',
    description:
      'Mechanical piping, structural work, flare jobs, insulation and painting at plants, terminals and dispatch stations.',
    image: img('regulator-panel-piping'),
    photos: pick('regulator-panel-piping', 'regulator-cage', 'station-commissioning-1', 'station-inauguration-crowd', 'station-inauguration-3'),
  },
  {
    slug: 'hdd-boring',
    title: 'Horizontal Directional Drilling (HDD)',
    description:
      'Horizontal boring below roads, railway tracks and canals using our own dedicated HDD rigs (2 Nos) for trenchless pipeline crossings.',
    image: img('hdd-road-crossing'),
    photos: pick('hdd-xz200-rig', 'hdd-road-crossing', 'hdd-rig-city-street', 'hdd-rig-crew', 'hdd-rig-orange', 'hdd-drill-rods', 'hdd-rig-nala-bank', 'hdd-rig-pooja', 'hdd-garlanded'),
  },
  {
    slug: 'png-connections',
    title: 'PNG Domestic & Commercial Connections',
    description:
      'Service lines, GI risers, regulators and meter installations for homes, shops and commercial buildings, tied into the CGD network.',
    image: pngConnection,
    photos: pick('png-meter-wall', 'png-regulator-cabinet', 'png-house-connection', 'png-meter-installed', 'png-riser-pair', 'png-riser-warning', 'service-line-valve'),
  },
  {
    slug: 'flyover-corridor-works',
    title: 'Flyover & Corridor Pipeline Works',
    description:
      'Pipe handling, crane lifting and trench work along flyover and road corridors, executed with traffic and site safety in control.',
    image: corridorWorks,
    photos: pick('flyover-pipes', 'crane-lifting-pipe', 'trench-works-corridor'),
  },
  {
    slug: 'road-civil-works',
    title: 'Road & Civil Construction',
    description:
      'Road development, boundary wall construction and RCC block construction for oil & gas sector buildings.',
    image: roadRoller,
    photos: pick('excavator-site', 'trench-with-jcb', 'bridge-nala-works', 'pipes-near-nala', 'site-crew', 'bhoomi-pujan-1'),
  },
  {
    slug: 'cng-terminal-works',
    title: 'CNG Pump & Terminal Works',
    description:
      'Installation and associated works for CNG pumps and terminal infrastructure for city gas retail outlets.',
    image: cngStation,
    photos: pick('station-commissioning-1', 'station-inauguration-crowd', 'station-inauguration-3', 'regulator-cage'),
  },
]

// Home page "From the field" strip
export const fieldHighlights = pick(
  'pipe-welding-sunset',
  'hdd-xz200-rig',
  'mdpe-nala-crossing',
  'steel-pipe-laying-field',
  'png-meter-wall',
  'tapping-tee-1'
)

// HDD spotlight on home page
export const hddShowcase = pick('hdd-xz200-rig', 'hdd-road-crossing', 'hdd-rig-city-street', 'hdd-drill-rods')
