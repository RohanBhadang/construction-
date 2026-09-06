import * as Icons from './Icons'

const iconMap = {
  road: Icons.RoadIcon,
  wall: Icons.WallIcon,
  building: Icons.BuildingIcon,
  pipeline: Icons.PipelineIcon,
  weld: Icons.WeldIcon,
  network: Icons.NetworkIcon,
  gauge: Icons.GaugeIcon,
  valve: Icons.ValveIcon,
  drill: Icons.DrillIcon,
  shield: Icons.ShieldBoltIcon,
  pump: Icons.FuelPumpIcon,
  pipesegment: Icons.PipeSegmentIcon,
  check: Icons.CheckBadgeIcon,
}

export default function ExpertiseCard({ text, icon = 'check' }) {
  const Icon = iconMap[icon] || Icons.CheckBadgeIcon
  return (
    <div className="group flex items-start gap-4 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow p-5">
      <span className="flex items-center justify-center h-11 w-11 shrink-0 rounded-sm bg-brand-navy/5 text-brand-navy group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
        <Icon className="w-5 h-5" />
      </span>
      <p className="text-sm text-brand-gray leading-relaxed pt-1.5">{text}</p>
    </div>
  )
}
