import React, { useState } from 'react'
import {
  Menu, X, Coffee, CreditCard, Wrench, Package,
  Phone, Mail, MapPin, CheckCircle2, ChevronRight, ShieldCheck
} from 'lucide-react'

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('idle')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    setTimeout(() => {
      setFormStatus('success')
      e.target.reset()
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1000)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <nav className="fixed w-full bg-black text-white z-50 shadow-lg border-b border-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white">Destin<span className="text-purple-600">Eats</span></span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="hover:text-purple-500 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('benefits')} className="hover:text-purple-500 transition-colors font-medium">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full font-bold transition-transform hover:scale-105">Get a Machine</button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none p-2">
                {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 absolute w-full left-0">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md">Services</button>
              <button onClick={() => scrollToSection('benefits')} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-center mt-4 bg-purple-600 text-white px-3 py-3 rounded-md font-bold text-base hover:bg-purple-700">Get a Machine Today</button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img src="https://images.unsplash.com/photo-1585342565162-3704fc9b2a11?auto=format&fit=crop&q=80&w=2070" alt="Vending Machine Background" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col md:flex-row items-center mt-12">
          <div className="md:w-3/5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-400 font-semibold text-sm mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Premium Vending Services in Destin</span>
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Upgrade Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-600">Breakroom</span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl mb-8 leading-relaxed">
              Modern, reliable, and fully-stocked vending solutions at <strong className="text-white">zero cost</strong> to your business.
              We handle the machines, inventory, and maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={() => scrollToSection('contact')} className="px-8 py-4 text-lg font-bold rounded-full text-white bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-600/30 transition-transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Request a Machine <ChevronRight className="w-5 h-5" />
              </button>
              <button onClick={() => scrollToSection('services')} className="px-8 py-4 border-2 border-white text-lg font-bold rounded-full text-white hover:bg-white hover:text-black transition-colors">
                View Services
              </button>
            </div>
          </div>

          <div className="hidden md:block md:w-2/5 mt-10 md:mt-0 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-purple-900 rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg" />
            <img src="https://images.unsplash.com/photo-1625650484478-113df4bfc370?auto=format&fit=crop&q=80&w=800" alt="Modern Snack Vending Machine" className="relative rounded-3xl shadow-2xl border-4 border-gray-800 object-cover h-[500px] w-full" />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-purple-600 font-bold tracking-wide uppercase">What We Offer</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Tailored Vending Solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Package, title: 'Premium Snacks', body: 'A wide variety of chips, candies, pastries, and popular brand-name snacks.' },
              { icon: Coffee, title: 'Cold Beverages', body: 'Sodas, sparkling waters, energy drinks, and juices customized to your site.' },
              { icon: CheckCircle2, title: 'Healthy Options', body: 'Protein bars, nuts, baked chips, and low-sugar beverages available.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all group">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <item.icon className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-extrabold sm:text-4xl mb-6">Full-Service Vending, Zero Headaches.</h3>
              <div className="space-y-6">
                {[
                  { icon: <CreditCard />, title: 'Cashless Payments', desc: 'Accept Apple Pay, Google Pay, and major cards.' },
                  { icon: <Wrench />, title: 'Free Maintenance', desc: 'If something breaks, we fix it fast and free.' },
                  { icon: <CheckCircle2 />, title: 'Smart Inventory', desc: 'Remote monitoring helps keep machines stocked.' },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-600/20 text-purple-500">{feature.icon}</div>
                    <div className="ml-4">
                      <h4 className="text-xl font-bold">{feature.title}</h4>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full bg-gray-800 rounded-3xl p-8 border border-gray-700">
              <h4 className="text-2xl font-bold mb-6"><span className="bg-purple-600 px-2 py-1 rounded text-sm mr-2">COST TO YOU</span>$0.00</h4>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-purple-500 w-6 h-6" /> Free Machine Delivery</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-purple-500 w-6 h-6" /> Free Installation</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-purple-500 w-6 h-6" /> Free Restocking</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-purple-500 w-6 h-6" /> Free Repairs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-purple-600 p-10 lg:p-16 text-white">
              <h2 className="text-3xl font-extrabold mb-4">Ready for a Better Breakroom?</h2>
              <div className="space-y-6 mt-10">
                <div className="flex items-center"><Phone className="h-6 w-6 mr-4" /> <span>(555) 123-4567</span></div>
                <div className="flex items-center"><Mail className="h-6 w-6 mr-4" /> <span>hello@destineats.com</span></div>
                <div className="flex items-center"><MapPin className="h-6 w-6 mr-4" /> <span>Serving Destin, FL & Surrounding Areas</span></div>
              </div>
            </div>
            <div className="p-10 lg:p-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Machine</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300" placeholder="Business Name" />
                <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300" placeholder="Email" />
                <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300" placeholder="Phone" />
                <button type="submit" disabled={formStatus === 'submitting'} className="w-full py-4 px-6 rounded-xl text-lg font-bold text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-60">
                  {formStatus === 'submitting' ? 'Sending Request...' : formStatus === 'success' ? 'Request Received!' : 'Submit Request'}
                </button>
                {formStatus === 'success' && <p className="text-green-600 text-center font-medium mt-2">We will be in touch shortly!</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Package className="w-8 h-8 text-purple-600" />
            <span className="font-extrabold text-2xl tracking-tight text-white">Destin<span className="text-purple-600">Eats</span></span>
          </div>
          <span className="text-gray-400 text-sm">© {new Date().getFullYear()} Destin Eats Vending. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
