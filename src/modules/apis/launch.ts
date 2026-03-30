import { API_BASE_URL } from '@/modules/constants'
import { Launch, Launchpad, Rocket } from '@/modules/types'
import { fetchWithRetry } from '@/modules/apis/launches'

export const getLaunchById = (id: string): Promise<Launch> => {
  return fetchWithRetry<Launch>(`${API_BASE_URL}/launches/${id}`)
}

export const getRocketById = (rocketId: string): Promise<Rocket> => {
  return fetchWithRetry<Rocket>(`${API_BASE_URL}/rockets/${rocketId}`)
}

export const getLaunchpadById = (launchpadId: string): Promise<Launchpad> => {
  return fetchWithRetry<Launchpad>(`${API_BASE_URL}/launchpads/${launchpadId}`)
}
