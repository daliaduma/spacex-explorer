import React, { FC } from 'react'
import { cn } from '@/lib/utils'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        'w-full mt-3 rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-500 placeholder:text-slate-400 focus:border focus:border-primary focus:outline-none text-white',
        className
      )}
      {...props}
    />
  )
}

export default Input
