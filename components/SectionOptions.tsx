'use client'

import Link from 'next/link'

const options = [
  {
    id: 'services',
    title: 'Services',
    description: 'See the hearing care options available, from assessments to fittings and support.',
    icon: '🛠️',
    route: '/services'
  },
  {
    id: 'hearing-aids',
    title: 'Hearing Aids',
    description: 'Browse hearing aid options, brands and support available at the clinic.',
    icon: '🎧',
    route: '/hearing-aids'
  },
  {
    id: 'about',
    title: 'About',
    description: 'Learn about the clinic, the team and the approach to patient care.',
    icon: '👋',
    route: '/about'
  },
  {
    id: 'appointments',
    title: 'Book Now',
    description: 'Get in touch to arrange an appointment or ask about the next steps.',
    icon: '📅',
    route: '/appointments'
  }
]

export default function SectionOptions() {

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-green/80 mb-3">Most important information</p>
          <h2 className="text-4xl font-bold text-white">Start here for services, hearing aids and the clinic</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            These are the key places to begin if you want clear information about care, devices and the next steps.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((option) => (
            <Link
              key={option.id}
              href={option.route}
              className="text-left rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:shadow-xl hover:bg-white/10"
            >
              <div className="text-primary-green text-3xl mb-4">{option.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">{option.title}</h3>
              <p className="text-gray-300 mb-5">{option.description}</p>
              <p className="text-sm font-semibold text-primary-green">Go to page</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
