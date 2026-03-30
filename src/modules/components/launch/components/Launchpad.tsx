import { FC } from 'react'
import { Launchpad as LaunchpadType } from '@/modules/types'

type LaunchpadProps = {
  launchpad: LaunchpadType
}

const Launchpad: FC<LaunchpadProps> = ({ launchpad }) => (
  <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
    <h2 className="text-xl font-semibold text-white">
      Launchpad: <span className="text-primary uppercase">{launchpad.full_name}</span>
    </h2>
    <p className="mt-3">
      {launchpad.locality}, {launchpad.region}
    </p>
    <p className="mt-3">{launchpad.details}</p>
  </div>
)

export default Launchpad
