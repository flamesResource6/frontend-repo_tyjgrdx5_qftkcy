import { Leaf, Recycle, Truck } from 'lucide-react'

const brandColor = '#4198B9'

const products = [
  {
    icon: <Recycle className="text-white" size={18} />,
    title: 'Collection Hub',
    desc: 'Digitize intake, weigh-ins, and payouts with barcode tracking and automated receipts.',
  },
  {
    icon: <Truck className="text-white" size={18} />,
    title: 'Logistics',
    desc: 'Plan routes, optimize pickups, and monitor fleet performance in real-time.',
  },
  {
    icon: <Leaf className="text-white" size={18} />,
    title: 'Sustainability',
    desc: 'Track CO₂ savings, diversion rates, and ESG metrics for reporting and incentives.',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Products</h2>
          <p className="mt-3 text-slate-600">Tools built for high-impact, scalable waste management</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.title} className="p-6 rounded-2xl border bg-white shadow-sm">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: brandColor }}>
                {p.icon}
              </div>
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
