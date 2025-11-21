import { useState } from 'react'
import { Menu, X, Leaf, Recycle } from 'lucide-react'

const brandColor = '#4198B9'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-800">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: brandColor }}>
              <Recycle className="text-white" size={18} />
            </div>
            WasteBank
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg text-white shadow-sm"
              style={{ backgroundColor: brandColor }}
            >
              Get Started
            </a>
          </div>

          <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-lg text-white text-center"
              style={{ backgroundColor: brandColor }}
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
