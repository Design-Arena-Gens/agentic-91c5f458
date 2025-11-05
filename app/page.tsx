import { DeviceFrame } from "@/components/device-frame";
import { DetailScreen } from "@/components/screens/detail-screen";
import { DownloadsScreen } from "@/components/screens/downloads-screen";
import { HomeScreen } from "@/components/screens/home-screen";
import { ProfileSelectorScreen } from "@/components/screens/profile-selector";
import { SearchScreen } from "@/components/screens/search-screen";
import { SplashScreen } from "@/components/screens/splash-screen";

const screens = [
  {
    title: "Splash Screen",
    description:
      "Cinematic boot experience with a glowing StreamX monogram and pulsating loading indicator.",
    element: <SplashScreen />,
    accent: true
  },
  {
    title: "Profile Selector",
    description:
      "Polished family selector with rich gradients, badges, and profile management entry point.",
    element: <ProfileSelectorScreen />
  },
  {
    title: "Home Experience",
    description:
      "Hero carousel with StreamX exclusives, personalized trending rows, and cinematic collections.",
    element: <HomeScreen />
  },
  {
    title: "Search & Discovery",
    description:
      "Voice-enabled search with intelligent filters, trending rankings, and premium result cards.",
    element: <SearchScreen />
  },
  {
    title: "Title Detail",
    description:
      "Feature showcase with Dolby experience highlights, cast carousels, and immersive actions.",
    element: <DetailScreen />
  },
  {
    title: "Downloads Hub",
    description:
      "Smart offline syncing with gradient cards, storage insights, and Dolby-quality toggles.",
    element: <DownloadsScreen />
  }
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020202] pb-24">
      <div className="absolute inset-0">
        <div className="absolute left-[-200px] top-[-80px] h-[420px] w-[420px] rounded-full bg-accent/20 blur-[160px]" />
        <div className="absolute right-[-140px] top-[200px] h-[380px] w-[380px] rounded-full bg-[#3d0a0d]/40 blur-[140px]" />
        <div className="absolute left-[20%] top-[60%] h-[300px] w-[300px] rounded-full bg-[#1a0a2e]/40 blur-[140px]" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-16 px-6 pt-16">
        <header className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-accent via-[#ff4d5a] to-[#59080a] shadow-glow">
              <span className="text-xl font-semibold tracking-[0.3em] text-white">
                SX
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.4em] text-white/40">
                StreamX
              </span>
              <h1 className="text-4xl font-semibold leading-tight">
                OTT Mobile Experience Concepts
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-white/60">
                Premium, dark-mode focused streaming user interface crafted for iPhone 14/15.
                All compositions are optimized for high-fidelity presentation and deployment on the web.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/40">
            <span className="rounded-full bg-white/5 px-4 py-2 text-white/70">
              Cinematic UI
            </span>
            <span className="rounded-full bg-white/5 px-4 py-2 text-white/70">
              Dolby-First
            </span>
            <span className="rounded-full bg-white/5 px-4 py-2 text-white/70">
              Gradient Depth
            </span>
            <span className="rounded-full bg-white/5 px-4 py-2 text-white/70">
              iPhone 15
            </span>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {screens.map((screen) => (
            <DeviceFrame
              key={screen.title}
              title={screen.title}
              description={screen.description}
              accent={screen.accent}
            >
              {screen.element}
            </DeviceFrame>
          ))}
        </div>
      </div>
    </main>
  );
}
