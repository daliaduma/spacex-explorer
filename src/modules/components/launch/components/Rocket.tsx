import { FC } from 'react'
import { Rocket as RocketType } from '@/modules/types'

type RocketProps = {
  rocket: RocketType
}

const Rocket: FC<RocketProps> = ({ rocket }) => (
  <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-5">
    <h2 className="text-xl font-semibold text-white">
      Rocket: <span className="text-primary uppercase">{rocket.name}</span>
    </h2>
    <p className="mt-3">
      {rocket.company} · {rocket.country} · success rate {rocket.success_rate_pct}%
    </p>
    <p className="mt-3">{rocket.description}</p>
  </div>
)

export default Rocket
