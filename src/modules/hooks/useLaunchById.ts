import { useQuery } from '@tanstack/react-query'
import { getLaunchById } from '@/modules/apis/launch'

type UseLauncheProps = {
  id: string
}

export const useLaunchById = ({ id }: UseLauncheProps) => {
  const { data: launchData } = useQuery({
    queryKey: ['launch', id],
    queryFn: () => getLaunchById(id)
  })

  return {
    launch: launchData
  }

  // const launches = useMemo(
  //   () => query.data?.pages.flatMap(page => page.docs) ?? [],
  //   [query.data]
  // )
  //
  // return {
  //   launches,
  //   launchesQuery: {
  //     isLoading: query.isLoading,
  //     isFetchingNextPage: query.isFetchingNextPage,
  //     hasNextPage: Boolean(query.hasNextPage),
  //     isError: query.isError,
  //     fetchNextPage: query.fetchNextPage
  //   }
  // }
}
