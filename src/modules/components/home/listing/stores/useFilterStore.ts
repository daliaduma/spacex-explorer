import { create } from 'zustand'
import { DEFAULT_FILTERS } from '@/modules/components/home/listing/constants'
import { LaunchQueryFilters } from '@/modules/components/home/listing/types'

const initialState = {
  filters: DEFAULT_FILTERS
}

type FilterState = {
  filters: LaunchQueryFilters
}

type FilterActions = {
  setFilters: (filters: Partial<LaunchQueryFilters>) => void
  onReset: () => void
}

type FilterStore = FilterState & FilterActions

export const useFilterStore = create<FilterStore>(set => ({
  ...initialState,
  setFilters: (filters: Partial<LaunchQueryFilters>) => {
    set(state => ({ ...state, filters: { ...state.filters, ...filters } }))
  },
  onReset: () => set(state => ({ ...state, filters: DEFAULT_FILTERS }))
}))
