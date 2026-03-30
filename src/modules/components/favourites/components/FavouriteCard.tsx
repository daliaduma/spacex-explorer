import StatusBadge from '@/modules/components/home/listing/components/StatusBadge'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import { FC } from 'react'
import Button from '@/modules/components/ui/Button'
import { FavoriteLaunch } from '@/modules/components/favourites/types'

type FavouriteCardProps = {
  launch: FavoriteLaunch
  removeFavorite: (id: string) => void
}

const FavouriteCard: FC<FavouriteCardProps> = ({ launch, removeFavorite }) => {
  const handleRemoveFavourite = () => removeFavorite(launch.id)

  return (
    <article
      key={launch.id}
      className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
    >
      <StatusBadge success={launch.success} upcoming={launch.upcoming} />
      <div>
        <h2 className="text-3xl mt-3">{launch.name}</h2>
        <p className="mt-3 text-sm">{formatDate(launch.date_utc)}</p>
      </div>
      <p className="my-8">
        {launch.details ?? 'No mission summary available for this launch.'}
      </p>
      <div className="flex items-center justify-between">
        <Button onClick={handleRemoveFavourite}>Remove</Button>
        <Link href={`/launches/${launch.id}`} className="link-button">
          View details
        </Link>
      </div>
    </article>
  )
}

export default FavouriteCard
