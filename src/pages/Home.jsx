import { Link } from "react-router-dom";
import { ArrowRight, Rocket, ShieldCheck, Sparkles, Zap } from "lucide-react";

const highlights = [
  {
    title: "Mission-Ready Inventory",
    text: "Launch systems, crew modules, and orbital hardware from trusted aerospace manufacturers.",
    icon: Rocket,
  },
  {
    title: "Verified Components",
    text: "Each product card is sourced from real mission hardware references and curated metadata.",
    icon: ShieldCheck,
  },
  {
    title: "Realtime Cart Signal",
    text: "Quantities, pricing, and cart badge updates stay synchronized instantly across the app.",
    icon: Zap,
  },
];

const Home = () => {
  return (
    <div className="space-y-10">
      <section className="surface-card relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(34,211,238,0.18),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(217,70,239,0.16),transparent_40%)]"
        />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-cyan-200">
              <Sparkles size={14} />
              Cinematic Marketplace
            </span>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl">
              Build Your Next
              <span className="text-gradient"> Orbital Mission </span>
              With Premium Space Hardware
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              SpaceShop is a futuristic aerospace marketplace for launch
              systems, spacecraft, and mission essentials. Browse cinematic
              product cards, tune quantities precisely, and command your cart
              with confidence.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 via-sky-400 to-violet-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_30px_rgba(56,189,248,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(56,189,248,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              >
                Explore the Fleet
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/cart"
                className="rounded-xl border border-slate-500/45 bg-slate-900/40 px-5 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:border-cyan-300/50 hover:bg-slate-800/55 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              >
                Open Cart Console
              </Link>
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
              Flight Deck Stats
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4 text-slate-100">
              <div className="rounded-xl border border-slate-600/40 bg-slate-900/45 p-4">
                <p className="text-2xl font-semibold text-cyan-200">30+</p>
                <p className="mt-1 text-sm text-slate-300">Curated Products</p>
              </div>
              <div className="rounded-xl border border-slate-600/40 bg-slate-900/45 p-4">
                <p className="text-2xl font-semibold text-fuchsia-200">24/7</p>
                <p className="mt-1 text-sm text-slate-300">Mission Access</p>
              </div>
              <div className="col-span-2 rounded-xl border border-slate-600/40 bg-slate-900/45 p-4">
                <p className="text-2xl font-semibold text-sky-200">
                  Realtime Cart Telemetry
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Every quantity update reflects instantly across navigation,
                  shop, and checkout views.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map((highlight) => {
          const IconComponent = highlight.icon;

          return (
            <article
              key={highlight.title}
              className="surface-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 transition group-hover:scale-105">
                <IconComponent size={18} />
              </div>
              <h2 className="text-lg font-semibold text-slate-100">
                {highlight.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {highlight.text}
              </p>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
