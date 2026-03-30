import Button from '@/modules/components/ui/Button'
import { useRouter } from 'next/navigation'

const NoFavourites = () => {
  const router = useRouter()

  const handleExplore = () => router.push('/')

  return (
    <div>
      <p>No favorites yet.</p>
      <p className="muted">
        Save launches from the list or detail page and they will appear here.
      </p>
      <div className="mt-10">
        <Button onClick={handleExplore}>Explore launches</Button>
      </div>
    </div>
  )
}

export default NoFavourites
