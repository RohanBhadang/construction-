// A faint schematic of flanged pipe runs + weld rings, used as texture on
// navy sections so the brand's dark panels read as "pipeline" rather than a
// plain flat color. Fully decorative — aria-hidden, no interactive role.
export default function PipelinePattern({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-[0.07] ${className}`}
      viewBox="0 0 800 300"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <path d="M-20 60 H260 a20 20 0 0 1 20 20 v40 a20 20 0 0 0 20 20 H820" stroke="#f2a900" strokeWidth="6" />
      <path d="M-20 150 H180" stroke="#f2a900" strokeWidth="6" />
      <path d="M-20 240 H340 a20 20 0 0 0 20 -20 v-10 a20 20 0 0 1 20 -20 H820" stroke="#f2a900" strokeWidth="6" />
      {[80, 160, 320, 460, 560, 700].map((x) => (
        <circle key={x} cx={x} cy="60" r="11" stroke="#f2a900" strokeWidth="3" />
      ))}
      {[40, 260, 420, 620, 760].map((x) => (
        <circle key={x} cx={x} cy="240" r="11" stroke="#f2a900" strokeWidth="3" />
      ))}
    </svg>
  )
}
