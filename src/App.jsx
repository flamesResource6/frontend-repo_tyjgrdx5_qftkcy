import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'

const brandColor = '#4198B9'

function App() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Pricing />
      <Contact />

      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} WasteBank. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#about" className="text-sm text-slate-600 hover:text-slate-900">About</a>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: brandColor }} />
            <a href="#products" className="text-sm text-slate-600 hover:text-slate-900">Products</a>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: brandColor }} />
            <a href="#pricing" className="text-sm text-slate-600 hover:text-slate-900">Pricing</a>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: brandColor }} />
            <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
