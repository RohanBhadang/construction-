export default function ClientBadge({ client }) {
  return (
    <div className="group relative flex items-center gap-3 bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 p-5 h-full">
      <span
        className="flex items-center justify-center h-11 w-11 shrink-0 rounded-sm text-white font-extrabold text-[13px] tracking-tight"
        style={{ backgroundColor: client.color }}
      >
        {client.code}
      </span>
      <span className="text-sm font-semibold text-brand-navy leading-snug">{client.name}</span>
      <span
        className="absolute left-0 top-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
        style={{ backgroundColor: client.color }}
      />
    </div>
  )
}
