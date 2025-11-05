export function SplashScreen() {
  return (
    <div className="relative h-full w-full bg-gradient-to-b from-black via-[#0b0b0b] to-black">
      <div className="absolute inset-0 bg-radial-fade opacity-80" />
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
        <div className="absolute right-[-50px] top-64 h-64 w-64 rounded-full bg-[#43100f] blur-3xl" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10">
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-accent via-[#ff3038] to-[#751114] shadow-glow">
          <div className="absolute inset-2 rounded-full bg-black/80 backdrop-blur" />
          <span className="relative text-4xl font-semibold tracking-[0.2em] text-white">
            SX
          </span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="text-[32px] font-semibold tracking-[0.45em] uppercase">
            StreamX
          </span>
          <p className="max-w-[220px] text-center text-sm text-white/60">
            Your cinematic universe. Curated worlds, original stories, and
            ultra-premium streaming.
          </p>
        </div>
        <div className="flex h-1.5 w-32 items-center gap-2 rounded-full bg-white/10 px-1">
          <div className="h-1 rounded-full bg-accent animate-streamx-pulse" />
          <div className="h-1 w-6 rounded-full bg-white/20 animate-streamx-pulse [animation-delay:0.4s]" />
          <div className="h-1 w-4 rounded-full bg-white/10 animate-streamx-pulse [animation-delay:0.8s]" />
        </div>
      </div>
    </div>
  );
}
