import {
  LaunchQueryFilters,
  Outcome,
  SortingOption,
  Timing
} from '@/modules/components/home/listing/types'

export const TIMING = ['all', 'upcoming', 'past']

export const OUTCOME = ['all', 'success', 'failure']

export const SORT = ['date-desc', 'date-asc', 'name-asc', 'name-desc']

export const DEFAULT_FILTERS: LaunchQueryFilters = {
  search: '',
  timing: 'all' as Timing,
  outcome: 'all' as Outcome,
  sort: 'date-desc' as SortingOption,
  dateFrom: '',
  dateTo: ''
}

export const TIMING_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'success', label: 'Upcoming' },
  { value: 'past', label: 'Past home' }
]

export const STATUS_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'success', label: 'Success' },
  { value: 'failure', label: 'Failure' }
]

export const SORTING_OPTIONS = [
  { value: 'date-desc', label: 'Newest' },
  { value: 'date-asc', label: 'Oldest' },
  { value: 'name-asc', label: 'Name A-Z' },
  { value: 'name-desc', label: 'Name Z-A' }
]
