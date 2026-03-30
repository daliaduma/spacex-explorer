'use client'
import { useFavorites } from '@/modules/components/favourites/hooks/useFavourites'
import FavouriteCard from '@/modules/components/favourites/components/FavouriteCard'
import NoFavourites from '@/modules/components/favourites/components/NoFavourites'
import Skeleton from '@/modules/components/ui/Skeleton'
import Link from 'next/link'

const Favorites = () => {
  const { favorites, isHydrated, removeFavorite } = useFavorites()

  if (!isHydrated) {
    return <Skeleton />
  }

  return (
    <section className="py-16 lg:py-24">
      <p className="mb-8">
        <Link href="/">⬅ Back to launches</Link>
      </p>
      <h1 className="text-4xl mb-8">Favourites</h1>
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
