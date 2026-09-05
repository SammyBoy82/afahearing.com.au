export default function ServicesList() {
  const services = [
    {
      icon: '🔊',
      title: 'Hearing Tests & Assessments',
      description: 'Comprehensive audiological testing for adults, children and seniors, including pure tone audiometry and speech understanding.'
    },
    {
      icon: '🎧',
      title: 'Tinnitus Evaluation',
      description: 'Detailed tinnitus assessment, counselling and management strategies to improve comfort and sound quality.'
    },
    {
      icon: '🔄',
      title: 'Vertigo & Balance Evaluation',
      description: 'Inner ear and balance assessments to diagnose vertigo, dizziness and middle ear conditions.'
    },
    {
      icon: '👂',
      title: 'Hearing Aids & Prescription',
      description: 'Hearing aid selection, invisible device prescriptions and fitting services to match your lifestyle.'
    },
    {
      icon: '🛠️',
      title: 'Hearing Aid Repairs & Batteries',
      description: 'Fast hearing aid repairs, battery replacement and maintenance to keep your devices functioning reliably.'
    },
    {
      icon: '🩺',
      title: 'Middle Ear Evaluation',
      description: 'Middle ear health checks to identify middle ear fluid, Eustachian tube issues and referral needs.'
    },
    {
      icon: '🧒',
      title: 'Paediatric Audiology',
      description: 'Child-friendly hearing tests, paediatric fittings and support for speech, school and classroom listening.'
    },
    {
      icon: '🏥',
      title: 'GP Referral Support',
      description: 'Assistance with GP referrals to secure bulk-billed assessments and hearing reports for eligible patients.'
    }
  ]

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive hearing care solutions for all your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
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
