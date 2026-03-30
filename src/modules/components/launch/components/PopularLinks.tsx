import { Launch } from '@/modules/types'
import { FC } from 'react'

type PopularLinksProps = {
  launch: Launch
}

const PopularLinks: FC<PopularLinksProps> = ({ launch }) => {
  const hasLinks = launch.links.article || launch.links.wikipedia || launch.links.webcast

  if (!hasLinks) return
  return (
    <>
      <p className="mt-8">Popular links:</p>
      <ul className="mt-2 space-y-2">
        {launch.links.article && (
          <li>
            <a href={launch.links.article} target="_blank" rel="noreferrer">
              Article
            </a>
          </li>
        )}
        {launch.links.wikipedia && (
          <li>
            <a href={launch.links.wikipedia} target="_blank" rel="noreferrer">
              Wikipedia
            </a>
          </li>
        )}
        {launch.links.webcast && (
          <li>
            <a href={launch.links.webcast} target="_blank" rel="noreferrer">
              Webcast
            </a>
          </li>
        )}
      </ul>
    </>
  )
}

export default PopularLinks
