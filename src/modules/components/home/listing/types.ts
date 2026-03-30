import { OUTCOME, SORT, TIMING } from '@/modules/components/home/listing/constants'
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query'
import { Launch } from '@/modules/types'

export type Timing = (typeof TIMING)[number]

export type Outcome = (typeof OUTCOME)[number]

export type SortingOption = (typeof SORT)[number]

export type LaunchQueryFilters = {
  search: string
  timing: Timing
  outcome: Outcome
  sort: SortingOption
  dateFrom: string
  dateTo: string
}

export type LaunchesResponse = {
  docs: Launch[]
  nextPage: number | null
  totalDocs: number
}

export type FetchNextPage = UseInfiniteQueryResult<
  InfiniteData<LaunchesResponse>,
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
