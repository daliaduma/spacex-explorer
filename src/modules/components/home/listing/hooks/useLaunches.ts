import { useInfiniteQuery } from '@tanstack/react-query'
import { useDebounce } from '@/modules/hooks/useDebounce'
import { fetchLaunches } from '@/modules/components/home/listing/apis/launches'
import { useMemo } from 'react'
import {
  LaunchesResponse,
  UseLaunchesReturn
} from '@/modules/components/home/listing/types'
import { useFilterStore } from '@/modules/components/home/listing/stores/useFilterStore'

export const useLaunches = (): UseLaunchesReturn => {
  const filters = useFilterStore(state => state.filters)
  const debouncedFilters = useDebounce(filters, 450)
  const query = useInfiniteQuery<LaunchesResponse, Error>({
    queryKey: ['launches', debouncedFilters],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      fetchLaunches({
        pageParam: pageParam as number,
        filters: debouncedFilters
      }),
    getNextPageParam: lastPage => lastPage.nextPage ?? undefined
  })

  const launches = useMemo(
    () => query.data?.pages.flatMap(page => page.docs) ?? [],
    [query.data]
  )

  return {
    launches,
    launchesQuery: {
      isLoading: query.isLoading,
      isFetchingNextPage: query.isFetchingNextPage,
      hasNextPage: Boolean(query.hasNextPage),
      isError: query.isError,
      fetchNextPage: query.fetchNextPage
    }
  }
}
