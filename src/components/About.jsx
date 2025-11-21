const brandColor = '#4198B9'

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">About Us</h2>
            <p className="mt-4 text-slate-600">
              We help organizations and communities transform waste management with software that is simple, transparent, and scalable. Our platform powers waste banks that reward participation, reduce landfill, and generate new revenue streams.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border">
                <p className="text-3xl font-semibold text-slate-900">5+</p>
                <p className="text-slate-500">Years building</p>
              </div>
              <div className="p-4 rounded-xl border">
                <p className="text-3xl font-semibold text-slate-900">1M+</p>
                <p className="text-slate-500">kg diverted</p>
              </div>
              <div className="p-4 rounded-xl border">
                <p className="text-3xl font-semibold text-slate-900">98%</p>
                <p className="text-slate-500">Uptime</p>
              </div>
              <div className="p-4 rounded-xl border">
                <p className="text-3xl font-semibold text-slate-900">24/7</p>
                <p className="text-slate-500">Support</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border bg-white shadow-sm overflow-hidden">
              <div className="h-full w-full p-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border p-4 bg-slate-50">
                  <p className="text-slate-500 text-sm">Plastic</p>
                  <p className="text-2xl font-semibold text-slate-900">540 kg</p>
                </div>
                <div className="rounded-xl border p-4 bg-slate-50">
                  <p className="text-slate-500 text-sm">Paper</p>
                  <p className="text-2xl font-semibold text-slate-900">320 kg</p>
                </div>
                <div className="rounded-xl border p-4 bg-slate-50">
                  <p className="text-slate-500 text-sm">Glass</p>
                  <p className="text-2xl font-semibold text-slate-900">210 kg</p>
                </div>
                <div className="rounded-xl border p-4 bg-slate-50">
                  <p className="text-slate-500 text-sm">Metal</p>
                  <p className="text-2xl font-semibold text-slate-900">175 kg</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full blur-2xl opacity-50" style={{ backgroundColor: brandColor }} />
          </div>
        </div>
      </div>
    </section>
  )
}
