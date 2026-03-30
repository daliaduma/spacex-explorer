import CtaButtons from '@/modules/components/home/hero/CtaButtons'

const Hero = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="flex flex-col items-center">
        <h1 className="text-center mt-4 max-w-3xl text-2xl font-bold tracking-tight text-white md:text-5xl">
          Browse SpaceX launches with fast filters and rich details.
        </h1>
        <p className="text-center mt-6 max-w-2xl text-base leading-7 md:text-lg">
          Search by mission name, filter past and upcoming launches, sort by date, and
          save your favorite missions.
        </p>
        <CtaButtons />
      </div>
    </section>
  )
}

export default Hero
