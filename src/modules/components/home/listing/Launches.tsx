'use client'
import Filter from '@/modules/components/home/listing/Filter'
import { LaunchQueryFilters } from '@/modules/types'
import { FC, useState } from 'react'
import { useLaunches } from '@/modules/hooks/useLaunches'
import { DEFAULT_FILTERS } from '@/modules/constants'
import LaunchesList from '@/modules/components/home/listing/LaunchesList'

const Launches: FC = () => {
  const [filters, setFilters] = useState<LaunchQueryFilters>(DEFAULT_FILTERS)

  const handleResetFilters = () => setFilters(DEFAULT_FILTERS)

  // TODO: store home and filters in a store
  const { launches, launchesQuery } = useLaunches({
    filters
  })

  return (
    <section className="grid lg:grid-cols-[300px_1fr] gap-4">
      <Filter
        onChange={setFilters}
        filters={filters}
        onReset={handleResetFilters}
        results={launches.length}
      />
      <LaunchesList launches={launches} query={launchesQuery} />
    </section>
  )
}

export default Launches
