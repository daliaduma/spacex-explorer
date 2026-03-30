import { FC } from 'react'
import Badge from '@/modules/components/ui/Badge'

type StatusBadgeProps = {
  success: boolean | null
  upcoming: boolean
}

const StatusBadge: FC<StatusBadgeProps> = ({ success, upcoming }) => {
  if (upcoming) {
    return <Badge label={'Upcoming'} />
  }

  if (success === true) {
    return <Badge variant="success" label={'Successful'} />
  }

  if (success === false) {
    return <Badge variant="danger" label="Failed" />
  }

  return <Badge variant="secondary" label={'Status unavailable'} />
}

export default StatusBadge
