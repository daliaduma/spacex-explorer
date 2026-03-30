import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { FavoriteLaunch } from '@/modules/components/favourites/types'

type FavoritesStore = {
  favorites: FavoriteLaunch[]
  toggleFavorite: (launch: FavoriteLaunch) => void
  removeFavorite: (id: string) => void
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: launch => {
        const current = get().favorites
        const exists = current.some(item => item.id === launch.id)

        set({
          favorites: exists
            ? current.filter(item => item.id !== launch.id)
            : [launch, ...current]
        })
      },

      removeFavorite: id => {
        set(state => ({
          favorites: state.favorites.filter(item => item.id !== id)
        }))
      }
    }),
    {
      name: 'spacex-explorer-favorites'
    }
  )
)