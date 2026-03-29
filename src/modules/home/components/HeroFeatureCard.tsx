import { FC } from 'react'

type HeroFeatureCardProps = {
  label: string
  value: string
}

const HeroFeatureCard: FC<HeroFeatureCardProps> = ({ value, label }) => (
  <div
    key={label}
    className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/10"
  >
    <p className="text-2xl font-semibold text-white">{value}</p>
    <p className="mt-1 text-sm text-slate-400">{label}</p>
  </div>
)

export default HeroFeatureCard
