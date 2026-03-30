import { cn } from '@/lib/utils'
import { FC } from 'react'

type SkeletonProps = {
  className?: string
}
const Skeleton: FC<SkeletonProps> = ({ className }) => (
  <>
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className={cn(
          'skeleton my-8 rounded-3xl border border-white/10 bg-slate-900/70 p-5 min-h-[160px]',
          className
        )}
      />
    ))}
  </>
)

export default Skeleton
