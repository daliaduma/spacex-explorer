import { QueryClient } from '@tanstack/react-query'

export function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60_000,
        gcTime: 10 * 60_000,
        retry(failureCount, error) {
          const status =
            typeof error === 'object' && error !== null && 'status' in error
              ? Number((error as { status?: number }).status)
              : 0

          if (status >= 400 && status < 500 && status !== 429) {
            return false
          }

          return failureCount < 3
        },
        retryDelay: attempt => Math.min(400 * 2 ** attempt, 3_000),
        refetchOnWindowFocus: false
      }
    }
  })
}
