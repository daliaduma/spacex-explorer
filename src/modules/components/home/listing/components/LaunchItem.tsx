import { FC } from 'react'
import { Launch } from '@/modules/types'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import StatusBadge from '@/modules/components/home/listing/components/StatusBadge'
import FavouriteButton from '@/modules/components/core/FavouriteButton'

type LaunchesListProps = {
  launch: Launch
}

const LaunchItem: FC<LaunchesListProps> = ({ launch }) => {
  return (
    <article className="group rounded-3xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-cyan-400 hover:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">{launch.name}</h2>
          <p className="mt-1 text-sm text-slate-400">{formatDate(launch.date_utc)}</p>
        </div>
        <StatusBadge success={launch.success} upcoming={launch.upcoming} />
      </div>

      <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.03] p-3">
        <p className="line-clamp-1 overflow-hidden">
          {launch.details ?? 'No mission summary available for this launch.'}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <FavouriteButton launch={launch} />
        <Link href={`/launches/${launch.id}`}>View details</Link>
      </div>
    </article>
  )
}

export default LaunchItem
