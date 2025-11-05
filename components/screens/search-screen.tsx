const quickFilters = [
  "4K Dolby Vision",
  "Award Winners",
  "Mind-Bending",
  "For Tonight",
  "New Episodes"
];

const results = [
  {
    title: "Spectrum Divide",
    meta: "Sci-Fi • 2024 • 2h 18m",
    description:
      "Reality fractures after a failed experiment. A quantum linguist races to decode the fractures."
  },
  {
    title: "Velvet Ember",
    meta: "Drama • 2023 • 6 Episodes",
    description:
      "A luxury hotel becomes a clandestine stage for secret negotiations, love, and betrayal."
  },
  {
    title: "Nova Drift",
    meta: "Documentary • 2024 • StreamX Original",
    description:
      "Journey with pilots who balance art and science to guide starships through cosmic storms."
  }
];

export function SearchScreen() {
  return (
    <div className="relative h-full w-full bg-[#040404]">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />
      <div className="absolute left-[-40px] top-36 h-60 w-60 rounded-full bg-[#230608] blur-3xl" />
      <div className="absolute right-[-60px] top-12 h-52 w-52 rounded-full bg-[#190707] blur-3xl" />
      <div className="relative z-10 flex h-full flex-col gap-6 px-6 py-8">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Find your next story</h1>
          <span className="rounded-full bg-accent/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-accent">
            Live
          </span>
        </header>
        <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.06] px-4 py-3">
          <span className="text-lg text-white/50">🔍</span>
          <input
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/40"
            placeholder="Search shows, films, genres, people"
          />
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/60">
            Voice
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {quickFilters.map((filter) => (
            <button
              key={filter}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.18em] text-white/70"
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Trending Searches</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">
            Updated Hourly
          </span>
        </div>
        <div className="flex flex-col gap-4">
          {results.map((result, index) => (
            <div
              key={result.title}
              className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-4 shadow-card"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.08] via-transparent to-transparent" />
              <div className="relative flex gap-4">
                <div className="flex h-16 w-12 items-center justify-center text-2xl font-semibold text-white/20">
                  {index + 1}
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold">{result.title}</h3>
                    <span className="rounded-full bg-accent/20 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-accent">
                      Dolby Atmos
                    </span>
                  </div>
                  <p className="text-xs text-white/50">{result.meta}</p>
                  <p className="text-sm text-white/60">{result.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-center gap-3 rounded-3xl bg-white/[0.03] py-4 text-xs uppercase tracking-[0.25em] text-white/60">
          <span>Filter</span>
          <div className="h-1 w-1 rounded-full bg-white/20" />
          <span>Genre</span>
          <div className="h-1 w-1 rounded-full bg-white/20" />
          <span>Release</span>
        </div>
      </div>
    </div>
  );
}
