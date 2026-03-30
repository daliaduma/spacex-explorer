import LaunchItem from '@/modules/components/home/listing/LaunchItem'
import { Launch, UseLaunchesQuery } from '@/modules/types'
import { FC, useMemo, useRef } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import Button from '@/modules/components/ui/Button'
import Skeleton from '@/modules/components/ui/Skeleton'

type LaunchesListProps = {
  launches: Launch[]
  query: UseLaunchesQuery
}

const COLUMNS = 1
const ROW_HEIGHT = 240

const LaunchesList: FC<LaunchesListProps> = ({ launches, query }) => {
  const launchesRef = useRef<HTMLDivElement | null>(null)

  const rows = useMemo(() => {
    const result: Launch[][] = []

    for (let index = 0; index < launches.length; index += COLUMNS) {
      result.push(launches.slice(index, index + COLUMNS))
    }

    return result
  }, [launches])

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => launchesRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 5
  })

  const items = virtualizer.getVirtualItems()

  const isInitialLoading = query.isLoading && launches.length === 0
  const isEmpty = !query.isLoading && !query.isError && launches.length === 0

  return (
    <div>
      <div
        ref={launchesRef}
        className="h-[650px] border border-white/10 overflow-y-auto p-4 bg-slate-900/30 rounded-3xl"
      >
        {isInitialLoading && <Skeleton />}
        {isEmpty && <p>No launches match the current filters.</p>}

        {!isInitialLoading && launches.length > 0 ? (
          <>
            <div
              className="relative w-full"
              style={{ height: `${virtualizer.getTotalSize()}px` }}
            >
              {items.map(virtualRow => {
                const rowLaunches = rows[virtualRow.index]

                return (
                  <div
                    key={virtualRow.key}
                    className="absolute left-0 top-0 w-full"
                    style={{
                      height: `${virtualRow.size}px`,
                      transform: `translateY(${virtualRow.start}px)`
                    }}
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {rowLaunches.map(launch => (
                        <div key={launch.id}>
                          <LaunchItem launch={launch} />
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        ) : null}
      </div>

      {!isInitialLoading && launches.length > 0 ? (
        <div className="mt-6 flex justify-center">
          {query.hasNextPage ? (
            <Button
              onClick={() => query.fetchNextPage()}
              disabled={query.isFetchingNextPage}
            >
              {query.isFetchingNextPage ? 'Loading more…' : 'Load more home'}
            </Button>
          ) : (
            <span className="badge">No more results to show</span>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default LaunchesList
