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
    }, 900)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <nav className="fixed w-full bg-black text-white z-50 shadow-lg border-b border-purple-700/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <span className="font-extrabold text-2xl tracking-tight">
                  North<span className="text-purple-500">Star</span>
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="hover:text-purple-400 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('benefits')} className="hover:text-purple-400 transition-colors font-medium">Why Us</button>
              <button onClick={() => scrollToSection('machines')} className="hover:text-purple-400 transition-colors font-medium">Our Machines</button>
              <button onClick={() => scrollToSection('contact')} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-md">
                Get a Machine
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none p-2"
              >
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
              <button onClick={() => scrollToSection('machines')} className="block w-full text-left px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md">Our Machines</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-3 text-base font-medium bg-purple-600 text-white rounded-md">Get a Machine</button>
            </div>
          </div>
        )}
      </nav>

      <header className="pt-28 pb-14 bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-purple-300 text-sm mb-3">Fort Worth • Dallas • Arlington</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Premium vending solutions for busy properties.</h1>
            <p className="mt-5 text-gray-300 max-w-xl">We place, stock, and maintain modern snack + drink machines with cashless payments and fast local support.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => scrollToSection('contact')} className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-bold inline-flex items-center gap-2">Request Free Placement <ChevronRight className="w-4 h-4" /></button>
              <button onClick={() => scrollToSection('benefits')} className="border border-gray-600 hover:border-purple-400 px-6 py-3 rounded-full font-semibold">See Benefits</button>
            </div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur">
            <h3 className="font-bold text-xl mb-4">What you get</h3>
            <ul className="space-y-3 text-gray-100">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-purple-400" /> No installation cost</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-purple-400" /> Weekly restocking + cleaning</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-purple-400" /> Card / tap-to-pay enabled</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-purple-400" /> Fast service response</li>
            </ul>
          </div>
        </div>
      </header>

      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center">Services</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: Coffee, title: 'Snack + Beverage Setup', body: 'Machine placement based on traffic and audience preferences.' },
              { icon: CreditCard, title: 'Cashless Payment', body: 'Apple Pay, Google Pay, tap cards, and traditional payment options.' },
              { icon: Wrench, title: 'Maintenance + Repairs', body: 'Proactive checks and quick repair visits to keep machines live.' }
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <item.icon className="w-8 h-8 text-purple-600" />
                <h3 className="mt-4 font-bold text-xl">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center">Why North Star</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {['No-cost installation', 'Custom product mix', 'Weekly restocking', 'Reliable local support'].map((benefit) => (
              <div key={benefit} className="bg-white p-5 rounded-xl border border-gray-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-purple-600 mt-0.5" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="machines" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center">Our Machines</h2>
          <p className="text-center text-gray-600 mt-3">Modern, clean, and high-capacity units for offices, schools, gyms, and apartments.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {['Combo Machine', 'Snack-Only Machine', 'Beverage-Only Machine'].map((name) => (
              <div key={name} className="rounded-2xl overflow-hidden border border-gray-200 bg-white">
                <div className="h-44 bg-gradient-to-br from-purple-700 to-black" />
                <div className="p-5">
                  <h3 className="font-bold text-lg">{name}</h3>
                  <p className="text-gray-600 mt-2">High reliability, telemetry-enabled, and perfect for busy locations.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold">Get a machine at your location</h2>
          <p className="mt-3 text-gray-300">Tell us about your property and we’ll follow up with a placement recommendation.</p>

          <form onSubmit={handleFormSubmit} className="mt-8 grid gap-3 text-left">
            <input required placeholder="Name" className="w-full rounded-xl px-4 py-3 bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none" />
            <input required type="email" placeholder="Email" className="w-full rounded-xl px-4 py-3 bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none" />
            <input placeholder="Business / Property Name" className="w-full rounded-xl px-4 py-3 bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none" />
            <textarea required placeholder="Tell us your location + estimated daily foot traffic" rows="4" className="w-full rounded-xl px-4 py-3 bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none" />
            <button type="submit" disabled={formStatus === 'submitting'} className="mt-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-60 px-6 py-3 rounded-full font-bold">
              {formStatus === 'submitting' ? 'Sending...' : 'Request Placement'}
            </button>
            {formStatus === 'success' && <p className="text-green-400">Thanks — request received. We’ll reach out shortly.</p>}
          </form>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="flex items-center justify-center gap-2"><Phone className="w-4 h-4" /> (817) 555-0199</div>
            <div className="flex items-center justify-center gap-2"><Mail className="w-4 h-4" /> hello@northstarvending.co</div>
            <div className="flex items-center justify-center gap-2"><MapPin className="w-4 h-4" /> Fort Worth, TX</div>
          </div>
        </div>
      </section>
    </div>
  )
}
