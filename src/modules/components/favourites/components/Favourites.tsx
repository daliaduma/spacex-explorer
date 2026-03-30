'use client'
import FavouriteCard from '@/modules/components/favourites/components/FavouriteCard'
import NoFavourites from '@/modules/components/favourites/components/NoFavourites'
import Skeleton from '@/modules/components/ui/Skeleton'
import Link from 'next/link'
import { useFavoritesStore } from '@/modules/components/favourites/stores/useFavouritesStore'

const Favorites = () => {
  const { favorites, removeFavorite } = useFavoritesStore()
  const isHydrated = typeof window !== 'undefined'

  if (!isHydrated) {
    return <Skeleton />
  }

  return (
    <section className="py-16 lg:py-24">
      <p className="mb-8">
        <Link href="/">⬅ Back to launches</Link>
      </p>
      <h1 className="text-2xl md:text-5xl mb-8">Favourites</h1>
      {favorites.length === 0 && <NoFavourites />}
      <div className="grid gap-6">
        {favorites.map(launch => (
          <FavouriteCard
            key={launch.id}
            launch={launch}
            removeFavorite={removeFavorite}
          />
        ))}
      </div>
    </section>
  )
}

export default Favorites
