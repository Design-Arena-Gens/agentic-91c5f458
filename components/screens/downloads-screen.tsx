const downloads = [
  {
    title: "Echoes in Orbit",
    status: "Ready to Watch • 4K",
    size: "4.8 GB",
    gradient: "from-[#ff512f] to-[#dd2476]"
  },
  {
    title: "Midnight Meridian",
    status: "Downloading • 68%",
    size: "3.2 GB of 4.7 GB",
    gradient: "from-[#24c6dc] to-[#514a9d]"
  },
  {
    title: "Solaris Drift",
    status: "Queued",
    size: "6 Episodes",
    gradient: "from-[#f7971e] to-[#ffd200]"
  }
];

export function DownloadsScreen() {
  return (
    <div className="relative h-full w-full bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(229,9,20,0.35),transparent)]" />
      <div className="relative z-10 flex h-full flex-col gap-6 px-6 py-8">
        <header className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              Offline Hub
            </span>
            <h1 className="text-2xl font-semibold">Downloads</h1>
          </div>
          <button className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/60">
            Smart Sync
          </button>
        </header>
        <div className="rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/15 via-[#120204] to-transparent p-5">
          <h2 className="text-lg font-semibold">Ultra Profiles Enabled</h2>
          <p className="mt-2 text-sm text-white/60">
            StreamX automatically refreshes your downloads with Dolby Vision + Atmos assets
            for the devices you watch on.
          </p>
          <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
            <span>Capacity 52%</span>
            <span>128 GB Available</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-white/10">
            <div className="h-full w-[52%] rounded-full bg-gradient-to-r from-accent via-[#ff4d5a] to-[#fcb045]" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {downloads.map((item, index) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-4 shadow-card"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20`} />
              <div className="relative flex gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black/50 text-xl">
                  {index === 1 ? "⬇" : "▶"}
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/60">
                      {index === 1 ? "Streaming" : "Ready"}
                    </span>
                  </div>
                  <p className="text-xs text-white/50">{item.status}</p>
                  <p className="text-xs text-white/50">{item.size}</p>
                  {index === 1 && (
                    <div className="mt-2 h-1.5 rounded-full bg-white/10">
                      <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#24c6dc] to-[#514a9d]" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-3 rounded-3xl border border-white/5 bg-white/[0.02] p-5 text-sm text-white/60">
          <div className="flex items-center justify-between">
            <span>Download in Dolby Quality</span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" defaultChecked />
              <div className="h-7 w-12 rounded-full bg-white/10 transition peer-checked:bg-accent" />
              <div className="absolute left-1 top-[6px] h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-5 peer-checked:bg-white" />
            </label>
          </div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/40">
            Manage Smart Downloads
          </div>
        </div>
      </div>
    </div>
  );
}
