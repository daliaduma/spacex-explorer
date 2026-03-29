import Button from '@/modules/components/ui/Button'

const CtaButtons = () => {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <Button variant="primary">Explore launches</Button>
      <Button variant="secondary">View favorites</Button>
    </div>
  )
}

export default CtaButtons
