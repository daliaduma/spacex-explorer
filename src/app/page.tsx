import Hero from '@/modules/components/home/hero/Hero'
import Launches from '@/modules/components/home/listing/Launches'

const Home = async () => {
  return (
    <section>
      <Hero />
      <Launches />
    </section>
  )
}

export default Home
