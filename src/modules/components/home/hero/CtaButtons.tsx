'use client'
import Button from '@/modules/components/ui/Button'
import { useRouter } from 'next/navigation'

const CtaButtons = () => {
  const router = useRouter()
  const hanfleViewFavorites = () => router.push('/favourites')

  return (
    <div className="mt-6 flex sm:flex-wrap gap-3 text-center flex-col md:flex-row">
      <Button variant="primary">Explore launches</Button>
      <Button variant="secondary" onClick={hanfleViewFavorites}>
        View favorites
      </Button>
    </div>
  )
}

export default CtaButtons
