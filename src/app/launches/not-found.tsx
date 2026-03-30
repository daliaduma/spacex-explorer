'use client'
import Button from '@/modules/components/ui/Button'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

type ErrorProps = {
  error: Error & { digest?: string }
  unstable_retry: () => void
}

const ErrorPage: FC<ErrorProps> = () => {
  const router = useRouter()

  const handleGoHome = () => router.push('/')

  return (
    <main className="grid px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h2 className="mt-4 font-semibold tracking-tight text-balance text-white sm:text-4xl">
          Page not found
        </h2>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button onClick={handleGoHome}>Go back home</Button>
        </div>
      </div>
    </main>
  )
}

export default ErrorPage
