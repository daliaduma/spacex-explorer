const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-slate-900/80 backdrop-blur py-2">
      <p className="text-center text-xs">&copy; {year} SpaceX Explorer</p>
    </footer>
  )
}

export default Footer
