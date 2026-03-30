import { FC } from 'react'
import Image from 'next/image'

type GalleryProps = {
  links: string[]
  altText: string
}

const Gallery: FC<GalleryProps> = ({ links, altText }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {links.map((link, index) => (
        <Image
          key={`${link}-${index}`}
          src={link}
          alt={altText}
          width={500}
          height={500}
          className="rounded-3xl"
        />
      ))}
    </div>
  )
}

export default Gallery
