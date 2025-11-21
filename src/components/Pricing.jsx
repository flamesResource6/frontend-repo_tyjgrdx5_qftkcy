const brandColor = '#4198B9'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    features: ['100 monthly transactions', '1 collection point', 'Community support'],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    price: '$79',
    period: 'per month',
    features: ['Unlimited transactions', 'Up to 10 points', 'Analytics & reports', 'Email support'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    features: ['Multi-site operations', 'Advanced permissions', 'SLA & onboarding'],
    cta: 'Contact Sales',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Pricing</h2>
          <p className="mt-3 text-slate-600">Simple plans that scale with your mission</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border bg-white shadow-sm p-6 ${t.highlight ? 'ring-2' : ''}`} style={t.highlight ? { boxShadow: '0 10px 30px rgba(65,152,185,0.2)', borderColor: brandColor, ringColor: brandColor } : {}}>
              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
              </div>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-bold text-slate-900">{t.price}</span>
                <span className="text-slate-500">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandColor }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg text-white"
                style={{ backgroundColor: brandColor }}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
