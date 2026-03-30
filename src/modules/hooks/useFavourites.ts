'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { FavoriteLaunch } from '@/modules/types'

const STORAGE_KEY = 'spacex-explorer-favorites'

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteLaunch[]>([])
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    try {
      const storedValue = window.localStorage.getItem(STORAGE_KEY)
      if (storedValue) {
        const parsed = JSON.parse(storedValue) as FavoriteLaunch[]
        setFavorites(parsed)
      }
    } catch {
      setFavorites([])
    } finally {
      setIsHydrated(true)
    }
  }, [])

  useEffect(() => {
    if (!isHydrated) {
      return
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites, isHydrated])

  const favoriteIds = useMemo(
    () => new Set(favorites.map(favorite => favorite.id)),
    [favorites]
  )

  const toggleFavorite = useCallback((launch: FavoriteLaunch) => {
    setFavorites(currentFavorites => {
      const exists = currentFavorites.some(item => item.id === launch.id)
      if (exists) {
        return currentFavorites.filter(item => item.id !== launch.id)
      }

      return [launch, ...currentFavorites]
    })
  }, [])

  const removeFavorite = useCallback((id: string) => {
    setFavorites(currentFavorites => currentFavorites.filter(item => item.id !== id))
  }, [])

  return {
    favorites,
    favoriteIds,
    isHydrated,
    toggleFavorite,
    removeFavorite
  }
}
