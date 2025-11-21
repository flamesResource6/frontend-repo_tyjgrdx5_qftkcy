import { Mail, Phone } from 'lucide-react'

const brandColor = '#4198B9'

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Contact</h2>
          <p className="mt-3 text-slate-600">Let’s talk about your waste bank goals</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <form className="rounded-2xl border bg-white shadow-sm p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">Name</label>
                <input className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2" style={{ borderColor: '#e2e8f0', boxShadow: `0 0 0 0 rgba(0,0,0,0)`, outline: 'none' }} placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2" style={{ borderColor: '#e2e8f0' }} placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">Message</label>
                <textarea className="mt-1 w-full px-3 py-2 border rounded-lg h-28 focus:outline-none focus:ring-2" style={{ borderColor: '#e2e8f0' }} placeholder="Tell us about your needs" />
              </div>
            </div>
            <button type="button" className="mt-6 w-full px-4 py-2 rounded-lg text-white" style={{ backgroundColor: brandColor }}>
              Send Message
            </button>
          </form>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900">Get in touch</h3>
              <p className="mt-2 text-slate-600 text-sm">
                Our team will respond within 1 business day.
              </p>
              <div className="mt-4 space-y-2 text-slate-700">
                <p className="flex items-center gap-2"><Mail size={18} /> hello@wastebank.io</p>
                <p className="flex items-center gap-2"><Phone size={18} /> +1 (555) 123-4567</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900">Why choose us?</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandColor }} /> Proven impact at scale</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandColor }} /> Secure and compliant</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brandColor }} /> Fast onboarding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
