import React, { FC } from 'react'
import { cn } from '@/lib/utils'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  label: string
}

const Input: FC<InputProps> = ({ className, label, ...props }) => {
  const id = props.id ?? props.name

  return (
    <div className="mt-6">
      <label htmlFor={id} className="text-xs uppercase tracking-[0.2em] text-slate-500">
        {label}
      </label>
      <input
        className={cn(
          'w-full mt-2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-500 placeholder:text-slate-400 focus:border focus:border-primary focus:outline-none text-white',
          className
        )}
        {...props}
      />
    </div>
  )
}

export default Input
