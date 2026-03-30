import { API_BASE_URL, RETRYABLE_STATUS } from '@/modules/constants'
import {
  LaunchesResponse,
  LaunchQueryFilters
} from '@/modules/components/home/listing/types'

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

class ApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

const getSort = (sort: LaunchQueryFilters['sort']) => {
  switch (sort) {
    case 'date-asc':
      return { date_utc: 'asc' as const }
    case 'name-asc':
      return { name: 'asc' as const }
    case 'name-desc':
      return { name: 'desc' as const }
    case 'date-desc':
    default:
      return { date_utc: 'desc' as const }
  }
}

export const fetchWithRetry = async <TResponse>(
  input: string,
  init?: RequestInit,
  attempt = 0
): Promise<TResponse> => {
  const response = await fetch(input, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {})
    },
    next: { revalidate: 60 }
  })

  if (!response.ok) {
    if (attempt < 3 && RETRYABLE_STATUS.has(response.status)) {
      const retryDelay = 400 * 2 ** attempt
      await wait(retryDelay)
      return fetchWithRetry<TResponse>(input, init, attempt + 1)
    }

    throw new ApiError(`Request failed with status ${response.status}`, response.status)
  }

  return response.json() as Promise<TResponse>
}

const getQuery = (filters: LaunchQueryFilters) => {
  const query: Record<string, unknown> = {}

  if (filters.search.trim()) {
    query.name = {
      $regex: filters.search.trim(),
      $options: 'i'
    }
  }

  if (filters.timing === 'upcoming') {
    query.upcoming = true
  }

  if (filters.timing === 'past') {
    query.upcoming = false
  }

  if (filters.outcome === 'success') {
    query.success = true
  }

  if (filters.outcome === 'failure') {
    query.success = false
  }

  const dateQuery: Record<string, string> = {}

  if (filters.dateFrom) {
    dateQuery.$gte = new Date(filters.dateFrom).toISOString()
  }

  if (filters.dateTo) {
    const until = new Date(filters.dateTo)
    until.setHours(23, 59, 59, 999)
    dateQuery.$lte = until.toISOString()
  }

  if (Object.keys(dateQuery).length > 0) {
    query.date_utc = dateQuery
  }

  return query
}

export const fetchLaunches = async ({
  pageParam = 1,
  filters,
  limit = 12
}: {
  pageParam?: number
  filters: LaunchQueryFilters
  limit?: number
}): Promise<LaunchesResponse> => {
  return fetchWithRetry<LaunchesResponse>(`${API_BASE_URL}/launches/query`, {
    method: 'POST',
    body: JSON.stringify({
      query: getQuery(filters),
      options: {
        page: pageParam,
        limit,
        sort: getSort(filters.sort),
        select: [
          'id',
          'name',
          'date_utc',
          'upcoming',
          'success',
          'details',
          'flight_number',
          'links',
          'rocket',
          'launchpad'
        ]
      }
    })
  })
}
