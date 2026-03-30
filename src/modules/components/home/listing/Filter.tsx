'use client'
import { LaunchQueryFilters } from '@/modules/types'
import React, { FC } from 'react'
import Input from '@/modules/components/ui/Input'
import Button from '@/modules/components/ui/Button'
import Select from '@/modules/components/ui/Select'
import { STATUS_OPTIONS, TIMING_OPTIONS, SORTING_OPTIONS } from '@/modules/constants'

type FilterProps = {
  onChange: (filters: LaunchQueryFilters) => void
  onReset: () => void
  filters: LaunchQueryFilters
  results: number
}

const Filter: FC<FilterProps> = ({ onChange, onReset, filters, results }) => {
  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target
    onChange({
      ...filters,
      [name]: value
    })
  }

  return (
    <div>
      <aside className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
        <h2 className="text-md uppercase mb-4">Find launches</h2>
        <Input
          type="text"
          placeholder="Search by mission name..."
          name="search"
          value={filters.search}
          onChange={handleFieldChange}
        />

        <div className="mt-6">
          <Select
            name="timing"
            onChange={handleFieldChange}
            options={TIMING_OPTIONS}
            value={filters.timing}
            label="Timeline"
          />
        </div>

        <div className="mt-6">
          <Select
            name="outcome"
            onChange={handleFieldChange}
            options={STATUS_OPTIONS}
            value={filters.outcome}
            label="Status"
          />
        </div>

        <div className="mt-6">
          <Select
            name="sort"
            onChange={handleFieldChange}
            options={SORTING_OPTIONS}
            value={filters.sort}
            label="Sort by"
          />
        </div>

        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">From</p>
          <Input
            placeholder="mm/dd/yyyy"
            name="dateFrom"
            onChange={handleFieldChange}
            type="date"
            value={filters.dateFrom}
          />
        </div>

        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">To</p>
          <Input
            placeholder="mm/dd/yyyy"
            name="dateTo"
            onChange={handleFieldChange}
            type="date"
            value={filters.dateTo}
          />
        </div>

        <Button className="mt-6 block w-full" onClick={onReset}>
          Reset filters
        </Button>

        <p className="mt-6">Showing {results} results</p>
      </aside>
    </div>
  )
}
export default Filter
