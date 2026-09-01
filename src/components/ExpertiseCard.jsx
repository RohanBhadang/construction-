export default function ExpertiseCard({ text }) {
  return (
    <div className="flex items-start gap-4 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow p-5">
      <span className="flex items-center justify-center h-10 w-10 shrink-0 rounded-full bg-brand-gold/15 text-brand-gold">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <p className="text-sm text-brand-gray leading-relaxed">{text}</p>
    </div>
  )
}
