export type Launch = {
  id: string
  name: string
  date_utc: string
  upcoming: boolean
  success: boolean | null
  details: string | null
  flight_number: number
  links: {
    article: string | null
    webcast: string | null
    wikipedia: string | null
    patch: {
      small: string | null
      large: string | null
    }
    flickr: {
      original: string[]
      small: string[]
    }
  }
  rocket: string
  launchpad: string
}

export type Rocket = {
  id: string
  name: string
  type: string
  description: string
  active: boolean
  first_flight: string
  success_rate_pct: number
  company: string
  country: string
  flickr_images: string[]
}

export type Launchpad = {
  id: string
  name: string
  full_name: string
  locality: string
  region: string
  details: string
  launches: string[]
  status: string
}
