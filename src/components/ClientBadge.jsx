// Picks up src/assets/clients/<code>.(png|svg|webp|jpg) automatically.
// If the file is missing, a coloured monogram badge is shown instead.
const logoFiles = import.meta.glob('../assets/clients/*.{png,svg,webp,jpg,jpeg}', {
  eager: true,
  import: 'default',
})

const logoFor = (code) => {
  const key = Object.keys(logoFiles).find((k) => {
    const file = k.split('/').pop().replace(/\.[^.]+$/, '')
    return file.toLowerCase() === code.toLowerCase()
  })
  return key ? logoFiles[key] : null
}

export default function ClientBadge({ client }) {
  const logo = logoFor(client.code)

  return (
    <div className="group relative flex flex-col h-full bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="flex items-center justify-center h-28 px-6 bg-white">
        {logo ? (
          <img
            src={logo}
            alt={`${client.name} logo`}
            loading="lazy"
            decoding="async"
            className="max-h-16 max-w-full w-auto object-contain grayscale-[30%] group-hover:grayscale-0 transition duration-300"
          />
        ) : (
          <span
            className="flex items-center justify-center h-16 min-w-[4.5rem] px-4 rounded-sm text-white font-extrabold text-lg tracking-tight shadow-sm"
            style={{ backgroundColor: client.color }}
          >
            {client.code}
          </span>
        )}
      </div>
      <div className="border-t border-gray-100 px-4 py-3 text-center bg-brand-light/60 flex-1 flex items-center justify-center">
        <span className="text-sm font-semibold text-brand-navy leading-snug">{client.name}</span>
      </div>
      <span
        className="absolute left-0 top-0 h-[3px] w-0 group-hover:w-full transition-all duration-300"
        style={{ backgroundColor: client.color }}
      />
    </div>
  )
}
