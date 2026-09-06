// Central content store for Akhilesh Construction, sourced from the firm's
// official profile document.

// All site imagery below is high-resolution (2000px+ wide) and sourced from a
// free-to-use stock library, licensed for commercial/website use.
const pexels = (id, w = 2000) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}`

const heroMainImage = pexels(24245327, 2400) // pipe laying at sunset, coastal site
const heroPipeLaying = heroMainImage
const hddMachine = pexels(31249536) // directional drilling / boring machine on site
const excavatorWork = pexels(13098128) // excavator at construction site
const roadRoller = pexels(12228684) // road roller & construction machinery
const cranePipeCoastal = pexels(18399899) // tower crane against sky
const cngStation = pexels(7168505) // gas pump / fuel station
const terminalPiping = pexels(36825977) // industrial pipeline system, plant
const controlPanelInstall = pexels(33706880) // industrial electrical control room
const pipeTrenchingTeam = pexels(37627672) // trench with pipes at construction site
const gasRegulatorPanel = pexels(5711732) // industrial pipes & valves

export const siteInfo = {
  name: 'Akhilesh Construction',
  fullName: 'Akhilesh Construction',
  formerName: 'Civil & Mechanical Engineering Contractors — Oil & Gas Pipeline Projects',
  tagline: 'Building Reliable Pipeline & Civil Infrastructure Since 2017',
  phones: ['70000 32606', '90096 22223', '70000 19505'],
  phone: '70000 32606',
  emails: ['akhilesh.construction88@gmail.com', 'akhileshsingh65@ymail.com'],
  email: 'akhilesh.construction88@gmail.com',
  address: 'B-209, Veena Nagar, Indore Sukhaliya, Near MR-10 Square, Indore- 452010.',
  founder: 'Mr. Akhilesh Singh',
  founded: 2017,
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
    image: heroMainImage,
  },
  {
    title: 'City Gas Distribution, Delivered End to End',
    subtitle: 'MDPE Pipeline · Plant Piping · Terminal Works · HDD',
    image: terminalPiping,
  },
  {
    title: 'Six Years. Six Major Gas Companies. Zero Compromise.',
    subtitle: 'Trusted by Aavantika Gas, IOCL, Green Gas, CUGL and more',
    image: cngStation,
  },
]

export const firmProfile = {
  heading: 'FIRM PROFILE',
  paragraphs: [
    'Akhilesh Construction (AC) introduces itself for Oil & Gas Pipeline projects, City Gas Distribution Network Projects, Terminal Works, HDD etc. We are a leading Mechanical & Civil contractor mainly dealing with private sector organizations in India.',
    `Akhilesh Construction Energy Projects firm was founded by ${'Mr. Akhilesh Singh'} in the year 2017, and successfully completed various pipeline projects within three years of its establishment. With a diversified team, AC has commissioned various City Gas Distribution Projects, MDPE Pipelines, Plant Piping, Terminal Fabrication, etc., and works as a Civil Contractor for the M.P. Government.`,
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
  { name: 'HDD Machine', qty: '02 Nos' },
  { name: 'Welding Machine', qty: '04 Nos' },
  { name: '63 KVA DG Set', qty: '02 Nos' },
  { name: 'JCB', qty: '01 No' },
  { name: 'Hydra', qty: '01 No' },
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
]

// Headline figures shown on the home page — each one derived directly from the
// firm data above rather than invented, so the numbers stay honest as content changes.
export const stats = [
  { value: new Date().getFullYear() - siteInfo.founded, suffix: '+', label: 'Years in Pipeline & Civil Works' },
  { value: clients.length, suffix: '', label: 'Major Gas Companies Served' },
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
  },
  {
    slug: 'mdpe-pipeline',
    title: 'MDPE & Steel Pipeline Laying',
    description:
      'Laying and commissioning of MDPE, steel and GI gas pipelines along with communication pipelines across urban terrain.',
    image: pipeTrenchingTeam,
  },
  {
    slug: 'plant-terminal-piping',
    title: 'Plant & Terminal Piping',
    description:
      'Mechanical piping, structural work, flare jobs, insulation and painting at plants, terminals and dispatch stations.',
    image: terminalPiping,
  },
  {
    slug: 'hdd-boring',
    title: 'Horizontal Directional Drilling (HDD)',
    description:
      'Horizontal boring below roads, railway tracks and canals using dedicated HDD rigs for trenchless pipeline crossings.',
    image: hddMachine,
  },
  {
    slug: 'cng-terminal-works',
    title: 'CNG Pump & Terminal Works',
    description:
      'Installation and associated works for CNG pumps and terminal infrastructure for city gas retail outlets.',
    image: cngStation,
  },
  {
    slug: 'road-civil-works',
    title: 'Road & Civil Construction',
    description:
      'Road development, boundary wall construction and RCC block construction for oil & gas sector buildings.',
    image: roadRoller,
  },
]

export const galleryImages = [
  heroPipeLaying,
  hddMachine,
  excavatorWork,
  roadRoller,
  cranePipeCoastal,
  cngStation,
  terminalPiping,
  controlPanelInstall,
  pipeTrenchingTeam,
  gasRegulatorPanel,
]
