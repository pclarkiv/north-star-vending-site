import React, { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Buildings,
  CalendarCheck,
  Check,
  Coffee,
  CreditCard,
  DeviceMobile,
  EnvelopeSimple,
  ForkKnife,
  Gauge,
  GearSix,
  Handshake,
  ListChecks,
  MapPin,
  Package,
  PhoneCall,
  ShieldCheck,
  Sparkle,
  Storefront,
  Timer,
  Tray,
  UsersThree,
} from '@phosphor-icons/react'
import heroVideo from '../Video_Generation_Complete.mp4'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

const navItems = [
  { id: 'story', label: 'Story' },
  { id: 'programs', label: 'Programs' },
  { id: 'service', label: 'Service' },
  { id: 'contact', label: 'Contact' },
]

const stats = [
  { value: '$0', label: 'equipment and install cost' },
  { value: '24/7', label: 'cashless monitoring and alerts' },
  { value: '1 day', label: 'typical local service follow-up' },
]

const hospitalityNotes = [
  'Curated assortment planning',
  'Cashless hardware standard',
  'Owner-led local service cadence',
]

const industries = [
  {
    title: 'Workplaces',
    body: 'Office lounges, operations floors, and distribution teams that need dependable food and drink access across long shifts.',
    icon: Buildings,
  },
  {
    title: 'Apartments and hotels',
    body: 'Lobby placements that read clean, quiet, and premium for residents and guests without adding work for onsite staff.',
    icon: Storefront,
  },
  {
    title: 'Schools and training facilities',
    body: 'Balanced programs with straightforward replenishment plans, cashless checkout, and healthy-forward mix options.',
    icon: UsersThree,
  },
]

const machinePrograms = [
  {
    title: 'Lobby beverage wall',
    finish: 'brushed graphite cabinet',
    body: 'Cold brew, sparkling water, energy, and premium bottled drinks arranged for apartment communities, hotel lobbies, and amenity spaces.',
    accent: 'from-[#d6c09c] via-[#9c7a48] to-[#5e4829]',
    products: ['cold brew', 'sparkling water', 'electrolytes', 'energy'],
  },
  {
    title: 'Breakroom snack suite',
    finish: 'warm bronze trim',
    body: 'A polished snack bank for offices and operations teams with a mix of familiar favorites, better-for-you staples, and rotating local hits.',
    accent: 'from-[#d7c6af] via-[#b68d5c] to-[#6e5134]',
    products: ['protein bars', 'chips', 'trail mix', 'cookies'],
  },
  {
    title: 'Dual machine pairing',
    finish: 'charcoal and brass detail',
    body: 'Matched snack and drink placements for larger footprints where traffic, daypart shifts, and assortment depth all matter.',
    accent: 'from-[#ece3d4] via-[#c9a46d] to-[#7f6138]',
    products: ['waters', 'juice', 'pastries', 'salty snacks'],
  },
]

const serviceSteps = [
  {
    title: 'Walkthrough and traffic read',
    body: 'We review access, power, placement flow, and the type of people using the space so the equipment feels intentional from day one.',
    icon: MapPin,
  },
  {
    title: 'Machine plan and curated mix',
    body: 'You get a tailored product approach based on shift patterns, resident expectations, wellness goals, and the finish level your space needs.',
    icon: ListChecks,
  },
  {
    title: 'Install, monitor, refine',
    body: 'After launch we monitor sell-through, service the machine, and adjust the mix so the placement keeps earning its footprint.',
    icon: GearSix,
  },
]

const serviceFeatures = [
  {
    title: 'Cashless by default',
    body: 'Tap pay, wallet pay, and modern card acceptance are standard so the machine works for guests, staff, and residents without friction.',
    icon: CreditCard,
  },
  {
    title: 'Remote visibility',
    body: 'Inventory and machine health are monitored continuously so restocks and service are driven by actual movement, not guesswork.',
    icon: Gauge,
  },
  {
    title: 'Clean presentation',
    body: 'Cabinet finish, product blocking, and service cadence are handled with the same care as the rest of your front-of-house experience.',
    icon: ShieldCheck,
  },
]

const proofPoints = [
  {
    title: 'No capital request',
    body: 'Equipment, placement, and routine maintenance are covered as part of the partnership.',
  },
  {
    title: 'Assortment tuning',
    body: 'Fast-moving staples stay in place while underperforming items are replaced with smarter options.',
  },
  {
    title: 'Local response',
    body: 'Service stays close to Arlington, so the support loop stays direct and accountable.',
  },
]

const testimonials = [
  {
    quote:
      'The machines look considered instead of temporary. Residents use them every day, and our team never has to chase service calls.',
    name: 'Marina House property team',
    role: 'multifamily placement',
  },
  {
    quote:
      'What stood out was the product planning. They treated the breakroom like part of our employee experience, not just a box in the corner.',
    name: 'Arlington Area operations office',
    role: 'office and warehouse placement',
  },
]

function MachineMockup({ accent, title }) {
  return (
    <div className="double-bezel p-2">
      <div className="machine-shell relative overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,rgba(40,33,24,0.92),rgba(19,17,15,0.98))] p-4">
        <div className={`absolute inset-x-4 top-4 h-28 rounded-[1.5rem] bg-gradient-to-br ${accent} opacity-80 blur-2xl`} />
        <div className="relative grid grid-cols-[1.35fr_0.65fr] gap-3">
          <div className="rounded-[1.55rem] border border-white/10 bg-white/[0.06] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="mb-3 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.28em] text-white/55">
              <span>Display</span>
              <span>{title}</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 20 }).map((_, index) => (
                <div
                  key={index}
                  className="h-10 rounded-xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))]"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="mb-3 text-[0.65rem] uppercase tracking-[0.28em] text-white/55">Pay</div>
              <div className="space-y-2">
                <div className="h-12 rounded-2xl bg-white/10" />
                <div className="h-16 rounded-[1.25rem] border border-white/10 bg-black/25" />
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <div key={index} className="h-7 rounded-lg bg-white/10" />
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="mb-3 text-[0.65rem] uppercase tracking-[0.28em] text-white/55">Pickup</div>
              <div className="h-20 rounded-[1.25rem] border border-dashed border-white/15 bg-black/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('idle')
  const heroVideoRef = useRef(null)

  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.playbackRate = 0.82
    }
  }, [])

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
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--canvas)] text-[var(--ink)] selection:bg-[color:var(--accent-soft)] selection:text-[var(--ink)]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,138,68,0.16),transparent_36%),radial-gradient(circle_at_88%_14%,rgba(111,126,94,0.12),transparent_24%),linear-gradient(180deg,rgba(255,251,244,0.9),rgba(246,240,230,0.96))]" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--canvas)]"
      >
        Skip to content
      </a>

      <header className="relative z-20 px-4 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <nav className="double-bezel mx-auto flex w-full max-w-[1180px] items-center justify-between rounded-full px-3 py-3 text-sm text-[var(--muted)]">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 rounded-full px-3 py-2 text-left transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-px"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ink)] text-[var(--canvas)] shadow-[0_18px_40px_-24px_rgba(28,26,23,0.7)]">
                <Package size={20} weight="duotone" />
              </span>
              <span>
                <span className="block font-sans text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                  Arlington, Texas
                </span>
                <span className="block text-base font-semibold tracking-[-0.03em] text-[var(--ink)]">
                  DestinEats
                </span>
              </span>
            </button>

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-full px-4 py-2.5 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/55 hover:text-[var(--ink)] active:scale-[0.98]"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden md:block">
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-3 py-3 text-[var(--canvas)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-px hover:bg-[#23201b] active:scale-[0.98]"
              >
                <span className="px-3 text-sm font-medium">Request a placement review</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px">
                  <ArrowUpRight size={18} weight="bold" />
                </span>
              </button>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/5 bg-white/70 text-[var(--ink)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white md:hidden"
            >
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isMobileMenuOpen ? 'top-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-current transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[1.5px] w-5 bg-current transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                    isMobileMenuOpen ? 'top-[7px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </nav>

          <div
            className={`mx-auto mt-3 max-w-[1180px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
              isMobileMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="double-bezel rounded-[2rem] p-3">
              <div className="rounded-[calc(2rem-0.375rem)] bg-white/88 p-3 backdrop-blur-sm">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="reveal-item flex w-full items-center justify-between rounded-[1.35rem] px-4 py-4 text-left text-base text-[var(--ink)]"
                    style={{ '--delay': `${index * 80}ms` }}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={18} />
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="mt-2 inline-flex w-full items-center justify-between rounded-[1.35rem] bg-[var(--ink)] px-5 py-4 text-base text-[var(--canvas)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                >
                  <span>Request a placement review</span>
                  <ArrowUpRight size={18} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" className="relative z-10">
        <section className="px-4 pb-20 pt-10 sm:px-6 md:pb-28 md:pt-14 lg:px-8 lg:pb-32">
          <div className="mx-auto grid min-h-[100dvh] max-w-[1400px] items-center gap-12 md:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-8 md:pl-4 lg:pl-8">
              <div className="reveal-item inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)] shadow-[0_18px_40px_-28px_rgba(28,26,23,0.45)] backdrop-blur-sm">
                <Sparkle size={15} weight="fill" className="text-[var(--accent)]" />
                premium local vending partner
              </div>

              <div className="space-y-6">
                <p className="reveal-item max-w-xl text-sm font-medium uppercase tracking-[0.28em] text-[var(--muted)]" style={{ '--delay': '80ms' }}>
                  Crafted for workplaces, residences, and guest-facing spaces
                </p>
                <h1 className="reveal-item max-w-[12ch] text-5xl leading-[0.92] tracking-[-0.05em] text-[var(--ink)] sm:text-6xl lg:text-[5.4rem]" style={{ '--delay': '160ms' }}>
                  Vending that feels considered, not improvised.
                </h1>
                <p className="reveal-item max-w-[62ch] text-lg leading-relaxed text-[var(--muted)] sm:text-xl" style={{ '--delay': '240ms' }}>
                  DestinEats installs modern snack and beverage machines that match the tone of your property, stay stocked through real monitoring, and cost your team nothing to launch.
                </p>
              </div>

              <div className="reveal-item flex flex-col gap-4 sm:flex-row" style={{ '--delay': '320ms' }}>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="group inline-flex items-center justify-between gap-3 rounded-full bg-[var(--ink)] px-3 py-3 text-[var(--canvas)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-px hover:bg-[#23201b] active:scale-[0.98]"
                >
                  <span className="px-4 text-sm font-medium sm:text-base">Schedule a site review</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px">
                    <ArrowUpRight size={19} weight="bold" />
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('programs')}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-black/8 bg-white/65 px-6 py-3.5 text-sm font-medium text-[var(--ink)] shadow-[0_16px_36px_-28px_rgba(28,26,23,0.4)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-px hover:bg-white active:scale-[0.98] sm:text-base"
                >
                  See machine programs
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="reveal-item grid gap-3 sm:grid-cols-3" style={{ '--delay': '400ms' }}>
                {stats.map((stat) => (
                  <div key={stat.label} className="double-bezel rounded-[1.6rem] p-1.5">
                    <div className="rounded-[calc(1.6rem-0.375rem)] bg-white/84 px-5 py-5 backdrop-blur-sm">
                      <div className="text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">{stat.value}</div>
                      <div className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center md:pr-4 lg:pr-8">
              <div className="absolute -left-8 top-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(184,138,68,0.3),transparent_70%)] blur-3xl translate-y-[-10%]" />
              <div className="absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(111,126,94,0.25),transparent_70%)] blur-3xl translate-y-[10%]" />

              <div className="reveal-item relative z-10 w-full max-w-[28rem]" style={{ '--delay': '160ms' }}>
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(11,9,8,0.0),rgba(11,9,8,0.15))] pointer-events-none"></div>
                  <video
                    ref={heroVideoRef}
                    className="hero-video w-full h-auto transition-transform duration-700 hover:scale-105"
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="space-y-5 lg:sticky lg:top-28">
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">The company</p>
                <h2 className="max-w-[10ch] text-4xl leading-[0.95] tracking-[-0.05em] text-[var(--ink)] sm:text-5xl">
                  Local service with a hospitality point of view.
                </h2>
              </div>

              <div className="double-bezel rounded-[2.4rem] p-2.5">
                <div className="rounded-[calc(2.4rem-0.5rem)] bg-white/84 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-sm sm:p-10 lg:p-12">
                  <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                      <p className="max-w-[64ch] text-lg leading-relaxed text-[var(--muted)]">
                        DestinEats is built for owners and managers who want vending to look appropriate in the room, stay dependable in daily use, and stop becoming one more vendor problem for the team. The company focuses on thoughtful placements, measured assortment planning, and quick local follow-through rather than generic machine drops.
                      </p>
                      <p className="mt-5 max-w-[64ch] text-lg leading-relaxed text-[var(--muted)]">
                        The result is a zero-capital vending program that feels clean in presentation, practical in operation, and flexible enough to reflect the traffic patterns and expectations of each site.
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                      {proofPoints.map((item) => (
                        <div key={item.title} className="rounded-[1.7rem] bg-[var(--sand)]/75 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
                          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#806a49]">{item.title}</p>
                          <p className="mt-3 text-sm leading-relaxed text-[#5e5449]">{item.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">Machine programs</p>
                <h2 className="mt-4 max-w-[10ch] text-4xl leading-[0.95] tracking-[-0.05em] text-[var(--ink)] sm:text-5xl">
                  Built for the room, the traffic, and the people using it.
                </h2>
              </div>
              <p className="max-w-[62ch] text-lg leading-relaxed text-[var(--muted)]">
                Instead of forcing every location into the same setup, we shape the placement around the kind of experience the space should deliver and the kind of products that actually move there.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
              {machinePrograms.map((program, index) => (
                <article key={program.title} className={`double-bezel rounded-[2.25rem] p-2.5 ${index === 0 ? 'lg:translate-y-8' : ''}`}>
                  <div className="rounded-[calc(2.25rem-0.5rem)] bg-white/84 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.52)] backdrop-blur-sm sm:p-7">
                    <MachineMockup accent={program.accent} title={program.title} />
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-2xl tracking-[-0.04em] text-[var(--ink)]">{program.title}</h3>
                        <span className="rounded-full border border-black/8 bg-[var(--sand)]/70 px-3 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-[#776147]">
                          {program.finish}
                        </span>
                      </div>
                      <p className="text-base leading-relaxed text-[var(--muted)]">{program.body}</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {program.products.map((product) => (
                          <span key={product} className="rounded-full bg-[#f3ecdf] px-3 py-2 text-sm text-[#6c5c47]">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
              <div className="double-bezel rounded-[2.35rem] p-2.5">
                <div className="rounded-[calc(2.35rem-0.5rem)] bg-[linear-gradient(155deg,#201c18,#15120f)] p-8 text-[var(--canvas)] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] sm:p-10">
                  <p className="text-[0.72rem] uppercase tracking-[0.28em] text-white/55">Where the machines belong</p>
                  <h2 className="mt-4 max-w-[12ch] text-4xl leading-[0.95] tracking-[-0.05em] sm:text-5xl">
                    Programs for the spaces people use every day.
                  </h2>
                  <div className="mt-10 grid gap-4">
                    {industries.map((industry) => (
                      <div key={industry.title} className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                        <div className="flex items-center gap-3">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[var(--canvas)]">
                            <industry.icon size={22} weight="duotone" />
                          </span>
                          <h3 className="text-xl tracking-[-0.03em] text-white">{industry.title}</h3>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-white/72">{industry.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="double-bezel rounded-[2.35rem] p-2.5">
                  <div className="rounded-[calc(2.35rem-0.5rem)] bg-white/84 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-sm sm:p-10">
                    <div className="flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                      <ForkKnife size={16} className="text-[var(--accent)]" />
                      curation
                    </div>
                    <h3 className="mt-4 max-w-[15ch] text-3xl tracking-[-0.04em] text-[var(--ink)] sm:text-[2.35rem]">
                      Product mix is tuned like a service program, not a warehouse list.
                    </h3>
                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      {[
                        ['Daily staples', 'fast-moving drinks, chips, bars, and familiar comfort items'],
                        ['Wellness layer', 'protein, low sugar, and lighter picks for balanced assortments'],
                        ['Location edits', 'resident favorites, shift-specific items, and seasonal adjustments'],
                      ].map(([title, body]) => (
                        <div key={title} className="rounded-[1.5rem] bg-[var(--sand)]/72 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.42)]">
                          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7a6344]">{title}</p>
                          <p className="mt-3 text-sm leading-relaxed text-[#5d5448]">{body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-3">
                  {serviceFeatures.map((feature) => (
                    <div key={feature.title} className="double-bezel rounded-[1.95rem] p-2">
                      <div className="rounded-[calc(1.95rem-0.5rem)] bg-white/82 p-6 backdrop-blur-sm">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--sand)] text-[#8c6c3b] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
                          <feature.icon size={22} weight="duotone" />
                        </span>
                        <h3 className="mt-5 text-xl tracking-[-0.03em] text-[var(--ink)]">{feature.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{feature.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="service" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
              <div className="space-y-5">
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">How service runs</p>
                <h2 className="max-w-[10ch] text-4xl leading-[0.95] tracking-[-0.05em] text-[var(--ink)] sm:text-5xl">
                  A quiet process that keeps the placement dependable.
                </h2>
                <p className="max-w-[60ch] text-lg leading-relaxed text-[var(--muted)]">
                  The point is simple: the machine should feel useful to the people onsite and nearly invisible to the team responsible for the building.
                </p>
              </div>

              <div className="grid gap-5">
                {serviceSteps.map((step, index) => (
                  <article key={step.title} className="double-bezel rounded-[2.1rem] p-2.5">
                    <div className="rounded-[calc(2.1rem-0.5rem)] bg-white/84 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.52)] backdrop-blur-sm sm:p-7">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--sand)] text-[#8b6d3e] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                            <step.icon size={24} weight="duotone" />
                          </span>
                          <div>
                            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--muted)]">step {index + 1}</p>
                            <h3 className="mt-2 text-2xl tracking-[-0.04em] text-[var(--ink)]">{step.title}</h3>
                          </div>
                        </div>
                        <p className="max-w-[38ch] text-base leading-relaxed text-[var(--muted)]">{step.body}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-[1400px]">
            <div className="double-bezel rounded-[2.6rem] p-2.5">
              <div className="rounded-[calc(2.6rem-0.5rem)] bg-[linear-gradient(150deg,#201c18,#15120f)] px-7 py-8 text-[var(--canvas)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                  <div>
                    <p className="text-[0.72rem] uppercase tracking-[0.28em] text-white/55">What clients notice</p>
                    <h2 className="mt-4 max-w-[12ch] text-4xl leading-[0.95] tracking-[-0.05em] sm:text-5xl">
                      The equipment feels polished, and the service feels accountable.
                    </h2>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    {testimonials.map((testimonial) => (
                      <figure key={testimonial.name} className="rounded-[1.9rem] border border-white/10 bg-white/[0.05] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                        <blockquote className="text-lg leading-relaxed text-white/82">“{testimonial.quote}”</blockquote>
                        <figcaption className="mt-6 border-t border-white/10 pt-4 text-sm text-white/62">
                          <div className="font-medium text-white">{testimonial.name}</div>
                          <div className="mt-1 uppercase tracking-[0.18em]">{testimonial.role}</div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-24 pt-20 sm:px-6 md:pb-32 md:pt-28 lg:px-8">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="double-bezel rounded-[2.45rem] p-2.5">
                <div className="rounded-[calc(2.45rem-0.5rem)] bg-[linear-gradient(150deg,#1e1a16,#15120f)] p-8 text-[var(--canvas)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-10 lg:p-12">
                  <p className="text-[0.72rem] uppercase tracking-[0.28em] text-white/55">Start the conversation</p>
                  <h2 className="mt-4 max-w-[11ch] text-4xl leading-[0.95] tracking-[-0.05em] sm:text-5xl">
                    Tell us about the location and we will shape the right placement.
                  </h2>
                  <p className="mt-6 max-w-[28rem] text-lg leading-relaxed text-white/68">
                    Share the property type, approximate traffic, and what kind of mix you want the machine to support.
                  </p>

                  <div className="mt-10 grid gap-4">
                    <div className="rounded-[1.65rem] border border-white/10 bg-white/[0.05] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      <div className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-white/55">
                        <EnvelopeSimple size={18} />
                        Email
                      </div>
                      <p className="mt-3 text-lg text-white">hello@destineats.co</p>
                    </div>
                    <div className="rounded-[1.65rem] border border-white/10 bg-white/[0.05] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      <div className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-white/55">
                        <PhoneCall size={18} />
                        Response window
                      </div>
                      <p className="mt-3 text-lg text-white">Most inquiries are reviewed within one business day.</p>
                    </div>
                    <div className="rounded-[1.65rem] border border-white/10 bg-white/[0.05] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      <div className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-white/55">
                        <Handshake size={18} />
                        Best fit
                      </div>
                      <p className="mt-3 text-lg text-white">Offices, apartment communities, schools, gyms, hospitality-adjacent properties.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="double-bezel rounded-[2.45rem] p-2.5">
                <div className="rounded-[calc(2.45rem-0.5rem)] bg-white/88 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-sm sm:p-10 lg:p-12">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--muted)]">Placement review form</p>
                      <h3 className="mt-3 text-3xl tracking-[-0.04em] text-[var(--ink)]">Request a recommendation</h3>
                    </div>
                    <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-[var(--sand)] text-[#8a6d3f] shadow-[inset_0_1px_0_rgba(255,255,255,0.42)] sm:flex">
                      <CalendarCheck size={22} weight="duotone" />
                    </div>
                  </div>

                  <form onSubmit={handleFormSubmit} className="grid gap-5">
                    <label className="grid gap-2">
                      <span className="text-sm font-medium text-[var(--ink)]">Business or property name</span>
                      <input
                        name="business"
                        required
                        type="text"
                        className="form-input"
                        placeholder="Example: Harbor Pointe Offices"
                      />
                      <span className="text-sm text-[var(--muted)]">Tell us the site name so we can tailor the recommendation.</span>
                    </label>

                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-sm font-medium text-[var(--ink)]">Email address</span>
                        <input name="email" required type="email" className="form-input" placeholder="you@company.com" />
                        <span className="text-sm text-[var(--muted)]">We will send follow-up details here.</span>
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-medium text-[var(--ink)]">Phone number</span>
                        <input name="phone" required type="tel" className="form-input" placeholder="Best call-back number" />
                        <span className="text-sm text-[var(--muted)]">Optional after-hours support details can be added in notes.</span>
                      </label>
                    </div>

                    <label className="grid gap-2">
                      <span className="text-sm font-medium text-[var(--ink)]">Location details</span>
                      <textarea
                        name="notes"
                        rows="5"
                        className="form-input min-h-[160px] resize-none"
                        placeholder="Property type, estimated daily traffic, preferred product mix, service hours, or any finish requirements"
                      />
                      <span className="text-sm text-[var(--muted)]">Include any details that would help us plan the right machine program.</span>
                    </label>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="group mt-2 inline-flex items-center justify-between rounded-full bg-[var(--ink)] px-3 py-3 text-[var(--canvas)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-px hover:bg-[#23201b] disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98]"
                    >
                      <span className="px-4 text-sm font-medium sm:text-base">
                        {formStatus === 'submitting'
                          ? 'Sending request'
                          : formStatus === 'success'
                            ? 'Request received'
                            : 'Send placement review request'}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px">
                        <ArrowUpRight size={19} weight="bold" />
                      </span>
                    </button>

                    {formStatus === 'success' && (
                      <p className="inline-flex items-center gap-2 rounded-full bg-[#edf4ea] px-4 py-2 text-sm text-[#476245]">
                        <Check size={16} weight="bold" />
                        Thanks. Your request is in and we will follow up shortly.
                      </p>
                    )}

                    {formStatus === 'error' && (
                      <p className="rounded-[1.25rem] border border-[#d6c2b7] bg-[#f7efe9] px-4 py-3 text-sm text-[#835d4d]">
                        Connection failed. Please try again or send a note to hello@destineats.co.
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-black/6 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ink)] text-[var(--canvas)] shadow-[0_16px_36px_-24px_rgba(28,26,23,0.65)]">
              <Package size={20} weight="duotone" />
            </span>
            <div>
              <div className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">DestinEats</div>
              <div className="mt-1 text-sm text-[var(--muted)]">Arlington, Texas vending placement and service</div>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:gap-6">
            <a href="/privacy-policy.html" className="transition-colors hover:text-[var(--ink)]">Privacy policy</a>
            <a href="/terms-of-service.html" className="transition-colors hover:text-[var(--ink)]">Terms of service</a>
            <span>© {new Date().getFullYear()} DestinEats</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
