// A small hand-picked icon set grounded in pipeline & civil construction work —
// used in place of generic numbered markers wherever content isn't a sequence.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function RoadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M9 3 4 21" />
      <path d="M15 3l5 18" />
      <path d="M11.2 9h1.6" />
      <path d="M10.4 14h3.2" />
      <path d="M9.6 19h4.8" />
    </svg>
  )
}

export function WallIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="4" width="7" height="4.5" />
      <rect x="10" y="4" width="7" height="4.5" />
      <rect x="17" y="4" width="4" height="4.5" />
      <rect x="3" y="8.5" width="4" height="4.5" />
      <rect x="7" y="8.5" width="7" height="4.5" />
      <rect x="14" y="8.5" width="7" height="4.5" />
      <rect x="3" y="13" width="7" height="4.5" />
      <rect x="10" y="13" width="7" height="4.5" />
      <rect x="17" y="13" width="4" height="4.5" />
      <line x1="2.5" y1="17.5" x2="21.5" y2="17.5" />
    </svg>
  )
}

export function BuildingIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="7" width="10" height="14" />
      <rect x="14" y="11" width="6" height="10" />
      <path d="M7 10.5h1M10.5 10.5h1M7 14h1M10.5 14h1M7 17.5h1M10.5 17.5h1" />
      <path d="M16.5 14.5h1M16.5 17.5h1" />
      <path d="M4 7 9 3l5 4" />
    </svg>
  )
}

export function PipelineIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 16h5a3 3 0 0 0 3-3v-2a3 3 0 0 1 3-3h7" />
      <circle cx="4.2" cy="16" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="19.8" cy="8" r="1.3" fill="currentColor" stroke="none" />
      <path d="M8.5 16h1.5M14 8h1.5" />
    </svg>
  )
}

export function WeldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 12h4l2-3 3 6 2-4 2 2h5" />
      <path d="M17 3l1.5 1.5L17 6M20 3l1.5 1.5L20 6" opacity="0.7" />
    </svg>
  )
}

export function NetworkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M6.6 7.3 10.5 16.2M17.4 7.3 13.5 16.2M7 6h10" />
    </svg>
  )
}

export function GaugeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="M12 15 16 9" />
      <circle cx="12" cy="15" r="1.1" fill="currentColor" stroke="none" />
      <path d="M4 15h1.5M18.5 15H20M6.3 9.3l1 1M17.7 9.3l-1 1" />
    </svg>
  )
}

export function ValveIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 12h4M17 12h4" />
      <rect x="9" y="9" width="6" height="6" rx="0.5" />
      <path d="M12 5v4M12 15v4M8.5 5h7M8.5 19h7" />
    </svg>
  )
}

export function DrillIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="9" width="8" height="6" rx="1" />
      <path d="M11 10.5h3M11 13.5h3" />
      <path d="M14 12h3.5" />
      <path d="M18 9.5v5M19.6 10.3v3.4M21.2 11v2" />
    </svg>
  )
}

export function ShieldBoltIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3.5 19 6.5v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9v-5Z" />
      <path d="M13 8.5 10 13h2.3L11 16.5 15.5 11h-2.3Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FuelPumpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="4" width="9" height="16" rx="1" />
      <path d="M6.5 8h4" />
      <path d="M13 9h2.2c.7 0 1 .3 1 1v2.3l1.6 1.4" />
      <path d="M17.8 13.7v4.3a1.3 1.3 0 0 0 2.6 0v-5l-2-2.4" />
    </svg>
  )
}

export function PipeSegmentIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <ellipse cx="5" cy="12" rx="2.2" ry="5.2" />
      <path d="M5 6.8v10.4" strokeDasharray="0" />
      <path d="M7.2 8.5h9.6a2.2 2.2 0 0 1 0 7H7.2" />
    </svg>
  )
}

export function CheckBadgeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3.2 14.4 5l3 .3 1 2.8 2.1 2.1-1 2.8-.3 3-2.8 1L14.4 19l-2.4 1.8L9.6 19l-3-.3-1-2.8L3.5 13.8l1-2.8.3-3 2.8-1L9.6 5Z" />
      <path d="M8.7 12.3l2.2 2.2 4.4-4.9" />
    </svg>
  )
}

export function CraneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 21V8l9-5v6" />
      <path d="M13 9h8" />
      <path d="M19 9v3.5" />
      <path d="M4 21h9" />
      <path d="M9 16v5" />
      <circle cx="19" cy="14" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
