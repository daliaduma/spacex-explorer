import { LaunchQueryFilters } from '@/modules/types'

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
export const RETRYABLE_STATUS = new Set([429, 500, 502, 503, 504])

export const DEFAULT_FILTERS: LaunchQueryFilters = {
  search: '',
  timing: 'all',
  outcome: 'all',
  sort: 'date-desc',
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
