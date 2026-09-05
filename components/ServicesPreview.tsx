export default function ServicesPreview() {
  const services = [
    { icon: '🔊', title: 'Comprehensive Hearing Assessments', description: 'Full diagnostic audiometry for adults and children, with clear recommendations and written reports.' },
    { icon: '🎯', title: 'Hearing Aid Fittings & Programming', description: 'Personalised fittings, real-ear verification and counselling to help you get the best performance.' },
    { icon: '🛠️', title: 'Hearing Aid Repairs & Servicing', description: 'On-site repairs, cleaning, maintenance and ongoing support for all major brands.' },
    { icon: '👂', title: 'Ear Wax Management', description: 'Safe earwax removal (micro-suction / irrigation) where clinically appropriate.' },
    { icon: '🔔', title: 'Tinnitus Assessment & Management', description: 'Assessment, counselling and management strategies to reduce tinnitus impact.' },
    { icon: '⚖️', title: 'Balance & Vertigo Assessment', description: 'Vestibular screening and referrals for persistent dizziness and balance issues.' },
    { icon: '🛡️', title: 'Hearing Protection & Custom Earplugs', description: 'Custom earplugs for musicians, swimmers and workplace noise protection.' },
    { icon: '👶', title: "Children's Hearing Assessments", description: 'Child-focused testing and family-centred recommendations.' },
    { icon: '🏥', title: 'WorkCover, DVA, NDIS & HSP Support', description: 'Assistance with claims, eligibility and government-funded hearing programs for eligible patients.' },
    { icon: '📱', title: 'Bluetooth & Connectivity Support', description: 'Setup and support for smartphone streaming, TV connectors and accessories.' }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A complete hearing clinic service suite for Melbourne—testing, treatment, devices and care at home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary-green/10 text-4xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
