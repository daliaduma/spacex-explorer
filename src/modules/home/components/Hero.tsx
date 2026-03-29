import CtaButtons from '@/modules/home/components/CtaButtons'
import NextLaunch from '@/modules/home/components/NextLaunch'
import HeroFeatureCard from '@/modules/home/components/HeroFeatureCard'

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_24%)]" />
      <div className="container mx-auto grid items-center gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
        <div className="relative z-10">
          <h2 className="mt-4 max-w-3xl text-2xl font-bold tracking-tight text-white md:text-5xl">
            Browse SpaceX launches with fast filters and rich details.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 md:text-lg">
            Search by mission name, filter past and upcoming launches, sort by date, and
            save your favorite missions.
          </p>

          <CtaButtons />
          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              ['256+', 'Launches indexed'],
              ['4', 'Primary filters'],
              ['Real-time', 'Fast cached queries']
            ].map(([value, label]) => (
              <HeroFeatureCard label={label} value={value} key={value} />
            ))}
          </div>
        </div>
        <NextLaunch />
      </div>
    </section>
  )
}

export default Hero
