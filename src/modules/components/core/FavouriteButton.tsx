import Button from '@/modules/components/ui/Button'
import { FC, useMemo } from 'react'
import { FavoriteLaunch } from '@/modules/components/favourites/types'
import { useFavoritesStore } from '@/modules/components/favourites/stores/useFavouritesStore'

type FavouriteButtonProps = {
  launch: FavoriteLaunch
}

const FavouriteButton: FC<FavouriteButtonProps> = ({ launch }) => {
  const { favorites, toggleFavorite } = useFavoritesStore()

  const isHydrated = typeof window !== 'undefined'

  const isFavorite = useMemo(() => {
    return favorites.find(itm => itm.id === launch.id)
  }, [launch, favorites])

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
