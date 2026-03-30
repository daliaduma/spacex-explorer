# SpaceX Explorer

A mini frontend app built with **Next.js + TypeScript** against the public **SpaceX REST API v4**.

## How to run

Create a .env file in the root of the project with or copy the .env.example content in your file

```
NEXT_PUBLIC_API_BASE_URL=https://api.spacexdata.com/v4
```


```bash
pnpm install
pnpm run dev
```

Then open `http://localhost:3000`.

## Implemented features

- Launch list using **POST `/launches/query`** with **server-side pagination**
- Search by mission name
- Filters for upcoming/past, success/failure, and date range
- Sort by date or mission name
- **Load more** pagination
- Loading skeletons, empty state, error state with retry
- Launch detail page at `/launches/[id]`
- Related rocket + launchpad fetched by ID
- Flickr image gallery when available
- Favorites stored in **LocalStorage**
- Favorites page with remove actions
- Basic **virtualization** for long launch lists using `@tanstack/react-virtual`
- React Query caching, deduplication, retry, and background refresh support

## Architecture decisions

### Why App Router

I chose **Next.js App Router** because it gives a cleaner route structure for:

- nested routes like `/launches/[id]`
- future SSR/streaming enhancements
- a good separation between server entry points and client components

For this task, the list and detail experiences are mostly client-driven because filters, pagination, favorites, and
virtualization are highly interactive.

### Why React Query

I chose **React Query** over custom fetchers because it provides:

- built-in caching
- request deduplication
- loading/error states
- pagination helpers via `useInfiniteQuery`
- retry and retry delay configuration

This keeps the data layer predictable without adding too much custom logic.

## SpaceX API usage

### Launch list

The list uses:

- `POST /launches/query`

The request body is built from UI filters and sends:

- `query.name` as a regex for mission search
- `query.upcoming` for upcoming/past filtering
- `query.success` for success/failure filtering
- `query.date_utc.$gte/$lte` for date range filtering
- `options.page` and `options.limit` for pagination
- `options.sort` for sorting

This avoids downloading all launches and filtering client-side.

### Launch detail

The detail route fetches:

- `GET /launches/:id`
- `GET /rockets/:id`
- `GET /launchpads/:id`

The launch response provides the `rocket` and `launchpad` IDs needed for the related requests.

## Performance considerations

- **Server-side pagination** to avoid fetching all launches
- **Virtualized list rendering** for large result sets
- **Debounced search/filter updates** to reduce unnecessary network calls
- **React Query stale time + cache time** to reuse data across navigation
- **Memoized flattened launch pages** before rendering
- Basic **retry/backoff** for `429` and `5xx` API responses

## Accessibility considerations

- Semantic HTML (`header`, `main`, `section`, `article`, `nav`)
- Keyboard-focusable controls with visible focus styles
- Labeled form controls
- `aria-live` for list refresh area
- `role="alert"` on error messages
- Proper `aria-pressed` on the favorite toggle button

## Tradeoffs

- I used **Load more** instead of infinite scroll because it is easier to control, more predictable, and usually more
  accessible.
- The list page is client-rendered because the filters, virtualization, and infinite query behavior are state-heavy.
- Favorites are stored only in LocalStorage, so they are device-specific.
- I kept styling in plain global CSS for speed and clarity. In a production project, I might switch to CSS Modules or
  Tailwind depending on the team standard.

## What I would do next with more time

- Add charts for launches per year / success rate
- Add side-by-side comparison between launches with a shareable URL
- Add URL-synced filters so searches can be shared/bookmarked
- Add tests (unit + integration + accessibility checks)
- Improve image gallery with modal/lightbox and keyboard traps
- Add offline caching / service worker support
- Add animations

## Known limitations / TODOs

- No chart bonus yet
- No translation strings
- No service worker / offline support yet
- No SSR hydration strategy for preloaded first page yet
- No automated tests included in this mini version
- No animations
