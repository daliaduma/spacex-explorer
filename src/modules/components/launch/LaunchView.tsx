import { FC } from 'react'
import { getLaunchById, getLaunchpadById, getRocketById } from '@/modules/apis/launch'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import StatusBadge from '@/modules/components/home/listing/StatusBadge'
import Gallery from '@/modules/components/launch/Gallery'
import Badge from '@/modules/components/ui/Badge'
import PopularLinks from '@/modules/components/launch/PopularLinks'
import Rocket from '@/modules/components/launch/Rocket'
import Launchpad from '@/modules/components/launch/Launchpad'

type LaunchViewProps = {
  id: string
}

const LaunchView: FC<LaunchViewProps> = async ({ id }) => {
  const launch = await getLaunchById(id)

  if (!launch) {
    return (
      <section className="py-16 lg:py-24">
        <div className="error stack" role="alert">
          <strong>We could not load this launch.</strong>
          <div className="row">
            <Link href="/" className="link-button">
              Back to launches
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const [rocket, launchpad] = await Promise.all([
    launch.rocket ? getRocketById(launch.rocket) : Promise.resolve(null),
    launch.launchpad ? getLaunchpadById(launch.launchpad) : Promise.resolve(null)
  ])

  return (
    <section className="py-16 lg:py-24">
      <p className="mb-8">
        <Link href="/">⬅ Back to launches</Link>
      </p>
      <article>
        <div>
          <StatusBadge success={launch.success} upcoming={launch.upcoming} />
          <Badge variant="secondary" label={`Flight #${launch.flight_number}`} />

          <div className="mt-3">
            <h1 className="text-4xl font-semibold text-white">{launch.name}</h1>
            <p className="mt-3 text-sm">{formatDate(launch.date_utc)}</p>
          </div>
        </div>

        <p className="my-8">
          {launch.details ?? 'No mission summary available for this launch.'}
        </p>

        {rocket && <Rocket rocket={rocket} />}
        {launchpad && <Launchpad launchpad={launchpad} />}

        {rocket?.flickr_images && (
          <Gallery links={rocket?.flickr_images} altText={'Image with Rocket'} />
        )}

        <PopularLinks launch={launch} />
      </article>
    </section>
  )
}

export default LaunchView
