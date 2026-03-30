import React, { FC } from 'react'
import { cn } from '@/lib/utils'

type SelectOption = {
  value: string
  label: string
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string
  options: SelectOption[]
  placeholder?: string
  label?: string
}

const Select: FC<SelectProps> = ({
  className,
  options,
  placeholder = 'Select an option',
  label = 'Select an option',
  ...props
}) => {
  const id = props.id ?? props.name

  return (
    <div className="relative mt-3">
      <label htmlFor={id} className="text-xs uppercase tracking-[0.2em] text-slate-500">
        {label}
      </label>
      <select
        id={id}
        className={cn(
          'mt-2 w-full appearance-none rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 pr-10 text-sm text-slate-100 transition',
          'focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        <option value="" disabled className="bg-slate-900 text-slate-400">
          {placeholder}
        </option>

        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
            className="bg-slate-900 text-slate-100"
          >
            {option.label}
          </option>
        ))}
      </select>

      <svg
        className="pointer-events-none absolute right-4 bottom-2 h-4 w-4 -translate-y-1/2 text-slate-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.51a.75.75 0 0 1-1.08 0l-4.25-4.51a.75.75 0 0 1 .02-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}

export default Select
