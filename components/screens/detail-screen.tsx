const highlights = [
  "Dolby Vision",
  "Dolby Atmos",
  "HDR10+",
  "IMAX Enhanced"
];

const cast = [
  { name: "Lena Park", role: "Commander Aria" },
  { name: "Noah Sterling", role: "Dr. Kove" },
  { name: "Iris Calder", role: "Lyra" }
];

export function DetailScreen() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#020202]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#160203] via-[#080808] to-black" />
        <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(229,9,20,0.35),transparent)]" />
      </div>
      <div className="relative z-10 flex h-full flex-col">
        <div className="relative h-72 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.45),transparent)]" />
          <div className="absolute bottom-6 left-6 flex flex-col gap-3">
            <span className="rounded-full bg-accent/20 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-accent">
              StreamX Original
            </span>
            <h1 className="text-3xl font-semibold leading-tight">
              CRIMSON OATH
            </h1>
            <p className="text-sm text-white/60">
              In a future empire, a strategist uncovers a secret order guarding the
              galaxy&apos;s last star forge.
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6 rounded-t-[40px] bg-[#070707]/95 px-6 pb-8 pt-6 backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-accent/30 px-3 py-1 text-xs uppercase tracking-[0.28em] text-accent">
                98% Match
              </div>
              <div className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/50">
                4K HDR
              </div>
            </div>
            <span className="text-xs text-white/40">Season 1 • Episode 3</span>
          </div>
          <div className="flex gap-3">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-3xl bg-accent py-3 font-semibold uppercase tracking-[0.25em]">
              ▶ Continue
            </button>
            <button className="flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] text-2xl">
              +
            </button>
            <button className="flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] text-xl">
              ⬇
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Experience Enhancers</h2>
            <div className="flex flex-wrap gap-2">
              {highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Synopsis</h2>
            <p className="text-sm text-white/60">
              Commander Aria leads an elite oathbound fleet tasked with protecting the
              Crimson Gate, a relic capable of rewriting reality. Political tension ignites
              as factions vie for control, and an ancient prophecy resurfaces.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Cast</h2>
              <span className="text-xs uppercase tracking-[0.25em] text-white/40">
                See All
              </span>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {cast.map((actor) => (
                <div
                  key={actor.name}
                  className="flex min-w-[120px] flex-col gap-2 rounded-3xl bg-white/[0.04] p-4"
                >
                  <div className="h-20 w-full rounded-2xl bg-gradient-to-br from-[#1f1f1f] to-[#0c0c0c]" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{actor.name}</span>
                    <span className="text-xs text-white/50">{actor.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto flex items-center justify-between rounded-3xl bg-white/[0.03] px-5 py-4 text-xs uppercase tracking-[0.2em] text-white/50">
            <span>More Like This</span>
            <span>IMAX</span>
            <span>Bonus Content</span>
          </div>
        </div>
      </div>
    </div>
  );
}
