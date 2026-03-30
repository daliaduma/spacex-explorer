import Button from '@/modules/components/ui/Button'
import { useFavorites } from '@/modules/components/favourites/hooks/useFavourites'
import { FC, useMemo } from 'react'
import { FavoriteLaunch } from '@/modules/components/favourites/types'

type FavouriteButtonProps = {
  launch: FavoriteLaunch
}

const FavouriteButton: FC<FavouriteButtonProps> = ({ launch }) => {
  const { favoriteIds, isHydrated, toggleFavorite } = useFavorites()

  const isFavorite = favoriteIds.has(launch.id)

  const favoritePayload = useMemo(
    () => ({
      id: launch.id,
      name: launch.name,
      details: launch.details,
      date_utc: launch.date_utc,
      success: launch.success,
      upcoming: launch.upcoming
    }),
    [launch]
  )

  const handleToggleFavourite = () => toggleFavorite(favoritePayload)

  if (!isHydrated) return null

  return (
    <Button variant="secondary" onClick={handleToggleFavourite}>
      {isFavorite ? 'Remove favourite' : 'Add to Favourites'}
    </Button>
  )
}

export default FavouriteButton
