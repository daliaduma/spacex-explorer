import { FC } from 'react'
import { cn } from '@/lib/utils'

type BadgeVariant = 'primary' | 'secondary' | 'danger' | 'success'

type BadgeProps = {
  variant?: BadgeVariant
  label: string
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'border-primary/30 bg-primary/10 hover:border-primary/20 text-primary',
  secondary:
    'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 text-slate-400',
  success:
    'border-teal-800/40 bg-teal-500/10 hover:border-teal-500/20 hover:bg-teal-500/10 text-teal-500',
  danger:
    'border-red-300/10 bg-red-300/5 hover:border-red-700/20 hover:bg-red-700/10 text-red-300'
}

const Badge: FC<BadgeProps> = ({ variant = 'primary', label }) => {
  return (
    <span
      className={cn(
        'inline-flex rounded-full border px-3 py-1 text-xs font-medium',
        variantClasses[variant]
      )}
    >
      {label}
    </span>
  )
}
export default Badge
