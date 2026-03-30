'use client'
import Filter from '@/modules/components/home/listing/components/Filter'
import { FC } from 'react'
import { useLaunches } from '@/modules/components/home/listing/hooks/useLaunches'
import LaunchesList from '@/modules/components/home/listing/components/LaunchesList'

const Launches: FC = () => {
  const { launches, launchesQuery } = useLaunches()

  return (
    <section className="grid lg:grid-cols-[300px_1fr] gap-4">
      <Filter results={launches.length} />
      <LaunchesList launches={launches} query={launchesQuery} />
    </section>
  )
}

export default Launches
