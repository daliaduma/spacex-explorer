import { FC } from 'react'
import NavLink from '@/modules/layout/components/NavLink'
import Link from 'next/link'

const navLinks = [
  { key: 'home', to: '/', label: 'Home' },
  { key: 'launches', to: '/launches', label: 'Launches' },
  { key: 'favourites', to: '/favourites', label: 'Favourites' }
]

const Navbar: FC = () => {
  return (
    <header className="sticky border-b border-white/2 top-0 z-20 bg-slate-900/80 backdrop-blur py-4">
      <div className="mx-auto container flex items-center justify-between">
        <div>
          <Link
            href="/public"
            className="text-md uppercase tracking-[0.3em] text-primary"
          >
            SpaceX Explorer
          </Link>
        </div>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(navLink => (
            <NavLink key={navLink.key} to={navLink.to} label={navLink.label} />
          ))}
        </nav>
      </div>
    </header>
  )
}
export default Navbar
