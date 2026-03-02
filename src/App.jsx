import React, { useState } from 'react'
import {
  Menu, X, Coffee, CreditCard, Wrench, Package,
  Phone, Mail, MapPin, CheckCircle2, ChevronRight, ShieldCheck, Sparkles
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
    <div className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/40">
      <nav className="fixed w-full bg-black/45 backdrop-blur-2xl text-white z-50 border-b border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-full flex items-center justify-center border border-white/40 shadow-lg shadow-purple-600/30">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <span className="font-extrabold text-2xl tracking-tight">Destin<span className="text-purple-400">Eats</span></span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="hover:text-purple-300 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-purple-300 transition-colors font-medium">Gallery</button>
              <button onClick={() => scrollToSection('benefits')} className="hover:text-purple-300 transition-colors font-medium">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="bg-purple-600 hover:bg-purple-700 px-6 py-2.5 rounded-full font-bold transition-transform hover:scale-105">Get a Machine</button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white p-2">
                {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/10 absolute w-full left-0">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {['services', 'gallery', 'benefits'].map((id) => (
                <button key={id} onClick={() => scrollToSection(id)} className="block w-full text-left px-3 py-3 text-base text-gray-300 hover:text-white hover:bg-white/10 rounded-md capitalize">{id}</button>
              ))}
              <button onClick={() => scrollToSection('contact')} className="block w-full text-center mt-4 bg-purple-600 text-white px-3 py-3 rounded-md font-bold hover:bg-purple-700">Get a Machine Today</button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={machineImages[1]} alt="Vending machine background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-purple-950/60" />
          <div className="absolute -top-32 -right-20 w-[30rem] h-[30rem] bg-fuchsia-600/20 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-200 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" /> Premium Vending Services in Destin, FL
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
              Make your breakroom feel <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">premium</span>.
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Stylish machines, top-selling snacks, cold drinks, and zero-hassle management. We place, stock, and maintain everything for you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('contact')} className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 font-bold shadow-lg shadow-purple-800/40 inline-flex items-center justify-center gap-2">Request Placement <ChevronRight className="w-5 h-5" /></button>
              <button onClick={() => scrollToSection('gallery')} className="px-8 py-4 rounded-full border border-white/30 hover:bg-white hover:text-black font-bold">See Machines</button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src={machineImages[0]} alt="Machine 1" className="rounded-2xl h-52 sm:h-64 w-full object-cover border border-white/20" />
            <img src={machineImages[2]} alt="Machine 2" className="rounded-2xl h-52 sm:h-64 w-full object-cover border border-white/20 mt-8" />
            <div className="col-span-2 rounded-2xl bg-white/10 border border-white/30 p-6 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_20px_40px_rgba(0,0,0,0.35)]">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div><p className="text-3xl font-extrabold text-purple-300">24/7</p><p className="text-xs text-slate-300">Monitoring</p></div>
                <div><p className="text-3xl font-extrabold text-purple-300">0$</p><p className="text-xs text-slate-300">Install Cost</p></div>
                <div><p className="text-3xl font-extrabold text-purple-300">Fast</p><p className="text-xs text-slate-300">Refills</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-sm tracking-widest uppercase text-purple-600 font-bold">What We Offer</h2>
            <p className="mt-2 text-4xl font-extrabold">Tailored Vending Solutions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Package, title: 'Premium Snacks', body: 'Name-brand snacks and local favorites matched to your audience.' },
              { icon: Coffee, title: 'Drinks & Energy', body: 'Cold beverages, sparkling waters, energy drinks, and more.' },
              { icon: ShieldCheck, title: 'Healthy Mixes', body: 'Protein bars, low-sugar choices, and wellness-friendly options.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-8 bg-white/65 backdrop-blur-xl border border-white/70 hover:-translate-y-1 transition-transform shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_12px_30px_rgba(15,23,42,0.15)]">
                <div className="w-14 h-14 rounded-2xl bg-purple-600 text-white flex items-center justify-center"><item.icon className="w-7 h-7" /></div>
                <h3 className="text-xl font-bold mt-5">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-sm tracking-widest uppercase text-purple-300 font-bold">Machine Gallery</h2>
              <p className="mt-2 text-4xl font-extrabold">Real machines. Modern look.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {machineImages.map((src, i) => (
              <div key={src} className="group relative overflow-hidden rounded-2xl border border-white/10">
                <img src={src} alt={`Vending machine ${i + 1}`} className="h-80 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-semibold">Machine Setup #{i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-gradient-to-b from-slate-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-4xl font-extrabold mb-6">Full-Service Vending. Zero Headaches.</h3>
            <div className="space-y-5">
              {[
                { icon: <CreditCard />, title: 'Cashless Payments', desc: 'Apple Pay, Google Pay, cards, and tap-to-pay.' },
                { icon: <Wrench />, title: 'Free Maintenance', desc: 'Fast support and no repair costs to you.' },
                { icon: <CheckCircle2 />, title: 'Live Inventory Tracking', desc: 'We monitor stock levels and refill proactively.' },
              ].map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-purple-600/20 text-purple-300 flex items-center justify-center">{f.icon}</div>
                  <div>
                    <h4 className="font-bold text-xl">{f.title}</h4>
                    <p className="text-slate-300">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/30 bg-white/10 backdrop-blur-2xl p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_20px_40px_rgba(0,0,0,0.3)]">
            <h4 className="text-2xl font-bold mb-5"><span className="text-purple-300">Cost to your business:</span> $0.00</h4>
            <ul className="space-y-4 text-lg text-slate-200">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-purple-300" /> Delivery + setup included</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-purple-300" /> Weekly restocking</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-purple-300" /> Ongoing cleaning + maintenance</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-purple-300" /> Local support team</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-100 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_30px_60px_rgba(15,23,42,0.18)] overflow-hidden grid lg:grid-cols-2 border border-white/80">
            <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 p-10 lg:p-14 text-white">
              <h2 className="text-3xl font-extrabold">Ready for a Better Breakroom?</h2>
              <p className="mt-4 text-purple-100">Tell us about your location and we’ll recommend the best machine setup.</p>
              <div className="space-y-5 mt-10">
                <div className="flex items-center gap-3"><Phone className="h-5 w-5" /> (555) 123-4567</div>
                <div className="flex items-center gap-3"><Mail className="h-5 w-5" /> hello@destineats.com</div>
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5" /> Serving Destin, FL & surrounding areas</div>
              </div>
            </div>
            <div className="p-10 lg:p-14">
              <h3 className="text-2xl font-bold mb-6">Request Machine Placement</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input name="business" required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300" placeholder="Business Name" />
                <input name="email" required type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300" placeholder="Email" />
                <input name="phone" required type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300" placeholder="Phone" />
                <textarea name="notes" rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-300" placeholder="Location + estimated daily traffic" />
                <button type="submit" disabled={formStatus === 'submitting'} className="w-full py-4 rounded-xl text-lg font-bold text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-60">
                  {formStatus === 'submitting' ? 'Sending Request...' : formStatus === 'success' ? 'Request Received!' : 'Submit Request'}
                </button>
                {formStatus === 'success' && <p className="text-green-600 text-center font-medium">We will be in touch shortly!</p>}
                {formStatus === 'error' && <p className="text-red-600 text-center font-medium">Submission failed. Please try again.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Package className="w-7 h-7 text-purple-400" />
            <span className="font-extrabold text-xl">Destin<span className="text-purple-400">Eats</span></span>
          </div>
          <span className="text-slate-400 text-sm">© {new Date().getFullYear()} Destin Eats Vending. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
