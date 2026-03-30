'use client'

import React, { ChangeEvent, FC, useState } from 'react'
import Input from '@/modules/components/ui/Input'
import Button from '@/modules/components/ui/Button'
import Select from '@/modules/components/ui/Select'
import {
  TIMING_OPTIONS,
  STATUS_OPTIONS,
  SORTING_OPTIONS,
  DEFAULT_FILTERS
} from '@/modules/components/home/listing/constants'
import { LaunchQueryFilters } from '@/modules/components/home/listing/types'
import { useFilterStore } from '@/modules/components/home/listing/stores/useFilterStore'

type FilterProps = {
  results: number
}

const Filter: FC<FilterProps> = ({ results }) => {
  const setFilters = useFilterStore(state => state.setFilters)
  const onReset = useFilterStore(state => state.onReset)

  const [localFilters, setLocalFilters] = useState<LaunchQueryFilters>(DEFAULT_FILTERS)

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target
    const key = name as keyof LaunchQueryFilters

    setLocalFilters(state => ({
      ...state,
      [key]: value
    }))
  }

  const handleApplyFilters = () => {
    setFilters(localFilters)
  }

  const handleResetFilters = () => {
    setLocalFilters(DEFAULT_FILTERS)
    onReset()
  }

  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
    >
      <h2 className="text-md uppercase text-center">Find launches</h2>

      <Input
        type="text"
        placeholder="Search by mission name..."
        name="search"
        value={localFilters.search}
        onChange={handleFieldChange}
        label={'Mission name'}
      />

      <Select
        name="timing"
        label="Timeline"
        options={TIMING_OPTIONS}
        value={localFilters.timing}
        onChange={handleFieldChange}
      />

      <Select
        name="outcome"
        label="Status"
        options={STATUS_OPTIONS}
        value={localFilters.outcome}
        onChange={handleFieldChange}
      />

      <Select
        name="sort"
        label="Sort by"
        options={SORTING_OPTIONS}
        value={localFilters.sort}
        onChange={handleFieldChange}
      />

      <Input
        type="date"
        name="dateFrom"
        value={localFilters.dateFrom}
        onChange={handleFieldChange}
        label={'From'}
      />

      <Input
        type="date"
        name="dateTo"
        value={localFilters.dateTo}
        onChange={handleFieldChange}
        label={'From'}
      />

      <div className="mt-6">
        <Button className="block w-full" onClick={handleApplyFilters} type="submit">
          Apply filters
        </Button>

        <Button
          className="block w-full mt-3"
          onClick={handleResetFilters}
          variant="secondary"
        >
          Reset filters
        </Button>
      </div>

      <p className="mt-6 text-center">Showing {results} results</p>
    </form>
  )
}

export default Filter
