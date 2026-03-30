import LaunchView from '@/modules/components/launch/LaunchView'
import { FC } from 'react'

type LaunchDetailPageProps = {
  params: Promise<{ id: string }>
}
const LaunchDetailPage: FC<LaunchDetailPageProps> = async ({ params }) => {
  const { id } = await params
  return <LaunchView id={id} />
}

export default LaunchDetailPage
