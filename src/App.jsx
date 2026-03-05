import React, { useState } from 'react'
import {
  Menu, X, Coffee, CreditCard, Wrench, Package,
  Phone, Mail, MapPin, CheckCircle2, ChevronRight, ShieldCheck, Sparkles, Zap
} from 'lucide-react'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

const machineImages = [
  'https://images.unsplash.com/photo-1625650484478-113df4bfc370?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1585342565162-3704fc9b2a11?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&q=80&w=1200',
]

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('idle')

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      if (FORMSPREE_ENDPOINT) {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
        })
        if (!res.ok) throw new Error('Form submission failed')
      }

      setFormStatus('success')
      form.reset()
      setTimeout(() => setFormStatus('idle'), 3500)
    } catch {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 4500)
    }
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-purple-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-xl z-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight">Destin<span className="text-purple-600">Eats</span></span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {['about', 'services', 'gallery', 'benefits'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')} 
                className="ml-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-purple-600/25"
              >
                Get Started
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 hover:text-slate-900 p-2">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-6 py-4 space-y-1">
              {['about', 'services', 'gallery', 'benefits'].map((id) => (
                <button 
                  key={id} 
                  onClick={() => scrollToSection(id)} 
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg capitalize"
                >
                  {id}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-center mt-2 bg-purple-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-purple-700"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" /> Premium Vending in Destin, FL
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
              Elevate your <span className="text-purple-600">breakroom</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Modern vending machines with zero upfront cost. We handle everything—placement, stocking, and maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium shadow-lg shadow-purple-600/25 hover:shadow-xl hover:shadow-purple-600/30 transition-all inline-flex items-center justify-center gap-2"
              >
                Request Placement <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="px-8 py-4 rounded-lg border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-all"
              >
                View Machines
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 mt-20">
            {[
              { label: '24/7 Monitoring', value: 'Always On' },
              { label: 'Setup Cost', value: '$0' },
              { label: 'Response Time', value: '<24hrs' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-purple-600 mb-3 tracking-wide uppercase">About Us</p>
            <h2 className="text-4xl font-bold text-slate-900">Built on Integrity & Service</h2>
          </div>
          <div className="bg-slate-50 rounded-2xl p-10 md:p-12 border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed">
              DestinEats was founded by <span className="font-semibold text-slate-900">Jamya Clark</span> on the core values of integrity, reliability, and local pride. We specialize in providing hassle-free vending services specifically designed to keep your business moving and your team fueled. My philosophy is simple: if our machines are always full and your people are smiling, I've done my job. We achieve this by offering a zero-cost partnership—providing and maintaining modern machines at no expense to you—equipped with contactless payment technology and a curated product selection tailored to your tastes. For me, this business is about more than just snacks; it's about building lasting professional relationships through smart inventory management and a personal commitment to top-tier service.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-purple-600 mb-3 tracking-wide uppercase">What We Offer</p>
            <h2 className="text-4xl font-bold text-slate-900">Tailored Vending Solutions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Package, title: 'Premium Snacks', body: 'Name-brand snacks and local favorites matched to your audience.' },
              { icon: Coffee, title: 'Drinks & Energy', body: 'Cold beverages, sparkling waters, energy drinks, and more.' },
              { icon: ShieldCheck, title: 'Healthy Options', body: 'Protein bars, low-sugar choices, and wellness-friendly selections.' },
            ].map((item) => (
              <div key={item.title} className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-600/5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-purple-600 mb-3 tracking-wide uppercase">Machine Gallery</p>
            <h2 className="text-4xl font-bold text-slate-900">Modern Equipment</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {machineImages.map((src, i) => (
              <div key={src} className="group relative overflow-hidden rounded-2xl border border-slate-200 hover:border-purple-200 transition-all">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={src} 
                    alt={`Vending machine ${i + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-purple-600 mb-3 tracking-wide uppercase">Why Choose Us</p>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Full-Service Vending.<br />Zero Headaches.</h2>
              <div className="space-y-6">
                {[
                  { icon: <CreditCard className="w-5 h-5" />, title: 'Cashless Payments', desc: 'Apple Pay, Google Pay, and all major cards accepted.' },
                  { icon: <Wrench className="w-5 h-5" />, title: 'Free Maintenance', desc: 'Fast support and repairs at no cost to you.' },
                  { icon: <Zap className="w-5 h-5" />, title: 'Smart Inventory', desc: 'Real-time monitoring ensures machines stay stocked.' },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-1">{f.title}</h4>
                      <p className="text-slate-600">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl border border-slate-200 p-10 shadow-xl shadow-slate-900/5">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Zero Cost to You</h3>
              <p className="text-purple-600 font-semibold text-lg mb-8">$0.00 upfront or monthly</p>
              <ul className="space-y-4">
                {[
                  'Free delivery and professional setup',
                  'Weekly restocking and inventory management',
                  'Ongoing cleaning and maintenance',
                  'Dedicated local support team',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200">
            <div className="grid lg:grid-cols-2">
              <div className="bg-purple-600 p-12 lg:p-16 text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Upgrade?</h2>
                <p className="text-purple-100 mb-10 text-lg">Tell us about your location and we'll recommend the perfect setup.</p>
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" /> 
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" /> 
                    <span>hello@destineats.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" /> 
                    <span>Serving Destin, FL & surrounding areas</span>
                  </div>
                </div>
              </div>
              
              <div className="p-12 lg:p-16 bg-white">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Request Placement</h3>
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <input 
                    name="business" 
                    required 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all" 
                    placeholder="Business Name" 
                  />
                  <input 
                    name="email" 
                    required 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all" 
                    placeholder="Email Address" 
                  />
                  <input 
                    name="phone" 
                    required 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all" 
                    placeholder="Phone Number" 
                  />
                  <textarea 
                    name="notes" 
                    rows="4" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none" 
                    placeholder="Tell us about your location and estimated daily traffic" 
                  />
                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'} 
                    className="w-full py-4 rounded-lg text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-60 transition-all shadow-lg shadow-purple-600/25 hover:shadow-xl hover:shadow-purple-600/30"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Request Received!' : 'Submit Request'}
                  </button>
                  {formStatus === 'success' && <p className="text-green-600 text-center font-medium">We'll be in touch shortly!</p>}
                  {formStatus === 'error' && <p className="text-red-600 text-center font-medium">Something went wrong. Please try again.</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Package className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg">Destin<span className="text-purple-600">Eats</span></span>
          </div>
          <span className="text-slate-600 text-sm">© {new Date().getFullYear()} DestinEats Vending. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
