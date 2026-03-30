import { Launch } from '@/modules/types'

export type FavoriteLaunch = Pick<
  Launch,
  'id' | 'name' | 'date_utc' | 'success' | 'upcoming' | 'details'
>
