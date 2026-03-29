import { FC } from 'react'

type BadgeVariant = 'primary' | 'secondary' | 'ghost' | 'danger'

type BadgeProps = {
  variant: BadgeVariant
  label: string
}

const Badge: FC<BadgeProps> = ({ variant = 'primary', label }) => {
  return (
    <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      {label}
    </span>
  )
}
export default Badge
