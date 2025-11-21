import { ArrowRight, Recycle } from 'lucide-react'

const brandColor = '#4198B9'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]" style={{ background: `radial-gradient(circle at 20% 20%, ${brandColor}, transparent 40%), radial-gradient(circle at 80% 0%, ${brandColor}, transparent 40%), radial-gradient(circle at 50% 100%, ${brandColor}, transparent 40%)` }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6 border" style={{ borderColor: brandColor, color: brandColor }}>
              <Recycle size={16} /> Sustainable Waste Management
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Turn waste into value with a modern waste bank
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Collect, sort, and monetize recyclables. Empower communities and businesses with transparent, data-driven waste management.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="px-5 py-3 rounded-lg text-white inline-flex items-center justify-center gap-2 shadow-sm" style={{ backgroundColor: brandColor }}>
                Get a Demo <ArrowRight size={18} />
              </a>
              <a href="#products" className="px-5 py-3 rounded-lg border text-slate-700">
                Explore Products
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border bg-white shadow-sm overflow-hidden">
              <div className="h-full w-full bg-gradient-to-br from-white to-slate-50 p-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border p-4">
                  <p className="text-slate-500 text-sm">Daily Collections</p>
                  <p className="text-3xl font-semibold text-slate-900">1,245 kg</p>
                </div>
                <div className="rounded-xl border p-4">
                  <p className="text-slate-500 text-sm">Active Members</p>
                  <p className="text-3xl font-semibold text-slate-900">3,680</p>
                </div>
                <div className="rounded-xl border p-4">
                  <p className="text-slate-500 text-sm">CO₂ Saved</p>
                  <p className="text-3xl font-semibold text-slate-900">8.2t</p>
                </div>
                <div className="rounded-xl border p-4">
                  <p className="text-slate-500 text-sm">Payouts</p>
                  <p className="text-3xl font-semibold text-slate-900">$12.4k</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full blur-2xl opacity-50" style={{ backgroundColor: brandColor }} />
          </div>
        </div>
      </div>
    </section>
  )
}
