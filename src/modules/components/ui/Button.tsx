import React, { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '@/lib/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-slate-900 hover:brightness-115 hover:text-slate-950',
  secondary: 'border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10',
  ghost: 'bg-transparent text-slate-900 hover:bg-slate-100',
  danger: 'bg-red-600 text-slate-100 hover:bg-red-700'
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-8 text-sm',
  lg: 'h-11 px-8 text-base'
}

const Button: FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  return (
    <button
      className={cn(
        'cursor-pointer font-semibold rounded-full border border-white/10 text-sm transition',
        variantClasses[variant],
        sizeClasses[size]
      )}
      {...props}
    />
  )
}

export default Button
