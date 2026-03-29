const NextLaunch = () => {
  return (
    <div className="relative z-10">
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur">
        <div className="rounded-[22px] border border-white/10 bg-slate-900/80 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Next launch
              </p>
              <h3 className="mt-2 text-xl font-semibold">Starlink Group Mission</h3>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">
              Upcoming
            </span>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
            <div className="aspect-[16/10] rounded-2xl bg-[linear-gradient(135deg,rgba(34,211,238,0.15),rgba(15,23,42,0.95)),radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_24%)] p-5">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Falcon 9</span>
                  <span>LC-39A</span>
                </div>
                <div>
                  <div className="h-2 w-24 rounded-full bg-cyan-400/70" />
                  <div className="mt-3 h-2 w-40 rounded-full bg-white/20" />
                  <div className="mt-2 h-2 w-32 rounded-full bg-white/15" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ['Date', 'Aug 12, 2026'],
              ['Rocket', 'Falcon 9'],
              ['Launchpad', 'Kennedy LC-39A']
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-3"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {label}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-100">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NextLaunch
