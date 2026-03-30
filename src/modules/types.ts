import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query'

export type LaunchQueryFilters = {
  search: string
  timing: 'all' | 'upcoming' | 'past'
  outcome: 'all' | 'success' | 'failure'
  sort: 'date-desc' | 'date-asc' | 'name-asc' | 'name-desc'
  dateFrom: string
  dateTo: string
}
export type Launch = {
  id: string
  name: string
  date_utc: string
  upcoming: boolean
  success: boolean | null
  details: string | null
  flight_number: number
  links: {
    article: string | null
    webcast: string | null
    wikipedia: string | null
    patch: {
      small: string | null
      large: string | null
    }
    flickr: {
      original: string[]
      small: string[]
    }
  }
  rocket: string
  launchpad: string
}

export type LaunchesPage = {
  docs: Launch[]
  nextPage: number | null
  totalDocs: number
}

export type FetchNextPage = UseInfiniteQueryResult<
  InfiniteData<LaunchesPage>,
  Error
>['fetchNextPage']

export type UseLaunchesQuery = {
  isLoading: boolean
  isFetchingNextPage: boolean
  hasNextPage: boolean
  isError: boolean
  fetchNextPage: FetchNextPage
}

export type UseLaunchesReturn = {
  launches: Launch[]
  launchesQuery: UseLaunchesQuery
}

export type Rocket = {
  id: string
  name: string
  type: string
  description: string
  active: boolean
  first_flight: string
  success_rate_pct: number
  company: string
  country: string
  flickr_images: string[]
}

export type Launchpad = {
  id: string
  name: string
  full_name: string
  locality: string
  region: string
  details: string
  launches: string[]
  status: string
}

export type FavoriteLaunch = Pick<
  Launch,
  'id' | 'name' | 'date_utc' | 'success' | 'upcoming' | 'details'
>
