const trending = [
  { title: "Neon City Rising", tag: "New Season", rating: "97%" },
  { title: "Eclipse Protocol", tag: "StreamX Original", rating: "94%" },
  { title: "Ghostwave", tag: "Sci-Fi • Dolby Vision", rating: "92%" },
  { title: "Crimson Oath", tag: "Top 10", rating: "95%" }
];

const continueWatching = [
  { title: "The Last Horizon", progress: 68 },
  { title: "Afterlight", progress: 42 },
  { title: "Atlas Falls", progress: 15 }
];

const cinematicCollections = [
  {
    name: "Visionaries",
    accent: "from-[#ff4b2b] via-[#e50914] to-[#a90329]",
    description: "Award-winning directors redefining cinema."
  },
  {
    name: "Pulse Beats",
    accent: "from-[#24c6dc] to-[#514a9d]",
    description: "High-octane thrillers with immersive sound."
  },
  {
    name: "Nightfall Stories",
    accent: "from-[#5f72be] to-[#9b23ea]",
    description: "Dark mysteries to keep you on edge."
  }
];

export function HomeScreen() {
  return (
    <div className="relative h-full w-full bg-[#030303]">
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(229,9,20,0.32),transparent)]" />
        <div className="absolute right-[-60px] top-32 h-56 w-56 rounded-full bg-[#2e0709] blur-3xl" />
      </div>
      <div className="relative z-10 flex h-full flex-col gap-6 px-6 py-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-[#7b0a10] shadow-glow">
              <span className="text-sm font-semibold tracking-[0.2em] text-white">
                SX
              </span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Streaming Now
              </p>
              <h1 className="text-xl font-semibold tracking-tight">
                For Amelia
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5">
              <span className="text-xl">🔔</span>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5">
              <span className="text-xl">🔍</span>
            </div>
          </div>
        </header>
        <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#1a0506] via-[#0b0b0b] to-black p-6 shadow-card">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.4),transparent)]" />
          <div className="relative flex flex-col gap-4">
            <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.4em]">
              StreamX Exclusive
            </span>
            <h2 className="text-3xl font-semibold leading-tight">
              ECLIPSE PROTOCOL
            </h2>
            <p className="text-sm text-white/60">
              Tactical operatives uncover a conspiracy spanning moons. Dive into
              Dolby Vision + Atmos for the ultimate immersion.
            </p>
            <div className="flex items-center gap-3">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-accent py-3 font-semibold uppercase tracking-[0.25em]">
                ▶ Play
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                +
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Trending Now</h3>
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Ultra HD
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {trending.map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-2xl bg-[#141414] p-3 shadow-card"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
                <div className="relative flex flex-col gap-3">
                  <span className="text-xs uppercase tracking-[0.25em] text-accent">
                    {item.tag}
                  </span>
                  <h4 className="text-base font-semibold leading-tight">
                    {item.title}
                  </h4>
                  <span className="text-xs text-white/50">{item.rating} Match</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Continue Watching</h3>
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Sync Across Devices
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {continueWatching.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-4"
              >
                <div className="flex items-center justify-between text-sm font-medium">
                  <span>{item.title}</span>
                  <span className="text-white/50">{item.progress}%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent via-[#ff4d5a] to-[#fcb045]"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-3 pb-4">
          <h3 className="text-lg font-semibold">Cinematic Collections</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {cinematicCollections.map((collection) => (
              <div
                key={collection.name}
                className={`flex min-w-[200px] flex-col justify-between gap-3 rounded-3xl bg-gradient-to-br ${collection.accent} p-4 shadow-card`}
              >
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/70">
                    Collection
                  </span>
                  <h4 className="mt-2 text-xl font-semibold">{collection.name}</h4>
                </div>
                <p className="text-sm text-white/70">{collection.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
