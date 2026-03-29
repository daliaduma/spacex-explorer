import Link from 'next/link'
import { FC } from 'react'

type NavLinkProps = {
  to: string
  label: string
}
const NavLink: FC<NavLinkProps> = ({ to, label }) => {
  return (
    <Link
      href={to}
      className="text-sm px-4 mx-1 py-3 border-b-2 border-transparent hover:border-primary/60 hover:text-primary transition"
    >
      {label}
    </Link>
  )
}

export default NavLink
