import { useInfiniteQuery } from '@tanstack/react-query'
import { useDebounce } from '@/modules/hooks/useDebounce'
import { fetchLaunches } from '@/modules/apis/launches'
import { LaunchesPage, LaunchQueryFilters, UseLaunchesReturn } from '@/modules/types'
import { useMemo } from 'react'

type UseLaunchesProps = {
  filters: LaunchQueryFilters
}

export const useLaunches = ({ filters }: UseLaunchesProps): UseLaunchesReturn => {
  const debouncedFilters = useDebounce(filters, 450)

  const query = useInfiniteQuery<LaunchesPage, Error>({
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
