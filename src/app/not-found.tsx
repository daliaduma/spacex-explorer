import Button from '@/modules/components/ui/Button'

const ErrorPage = () => (
  <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <h1 className="text-9xl font-semibold text-cyan-400">404</h1>
      <h2 className="mt-4 font-semibold tracking-tight text-balance text-white sm:text-4xl">
        Page not found
      </h2>
      <p className="mt-6 font-medium text-pretty text-gray-400">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button>Go back home</Button>
        <a href="#" className="text-sm text-white">
          Contact support
        </a>
      </div>
    </div>
  </main>
)

export default ErrorPage
