export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            About <span className="gradient-text">AFA hearing</span>
          </h1>
          <p className="text-xl text-gray-600">
            Your trusted partner for hearing health in Melbourne, Victoria
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              AFA hearing was established to provide exceptional hearing care for Melbourne families at every stage of life. Led by an experienced Audiologist with over 20 years of clinical experience, we offer personalised care for children, adults and seniors.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our lead audiologist trained in Australia with a Master of Audiology and has held clinical roles in leading hearing clinics. We combine professional expertise, advanced technology and compassionate support so every patient can hear clearly and confidently.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our clinic philosophy is simple: listening first, treating every patient with respect, and delivering reliable hearing solutions that fit your lifestyle.
            </p>
            <div className="mt-8 bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Qualifications</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>20+ years of clinical audiology experience</li>
                <li>Master of Audiology (Australia)</li>
                <li>Member of Audiology Australia</li>
                <li>Specialist in paediatric, adult and senior hearing care</li>
                <li>Experienced with veterans and government-funded hearing programs</li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg bg-white p-6 flex items-center">
            <div className="w-36 h-36 rounded-full overflow-hidden mr-6">
              <img src="/afa-clinic-scene.svg" alt="AFA hearing clinic" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Jacob Hass</h3>
              <p className="text-gray-600 mb-2">Lead Audiologist — Master of Audiology</p>
              <p className="text-gray-600 mb-2">Languages: English, Persian</p>
              <p className="text-gray-600">My philosophy: listening first, personalised care plans, and empowering patients with education and ongoing support.</p>
            </div>
          </div>
        </div>

        {/* Our Team removed per request */}

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-lg p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Why Choose AFA hearing?
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
            AFA hearing delivers trusted audiology care with bulk-bill hearing assessments by GP referral, free hearing aid support for pensioners, and the latest AI hearing aid brands to keep you connected.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Expert Professionals', desc: 'Certified audiologists with 20+ years of experience in clinical hearing care.' },
              { title: 'Bulk-Bill Assessments', desc: 'Bulk-bill hearing assessments and reports available at Mount Waverly with GP referral.' },
              { title: 'Pensioner Support', desc: 'Free hearing aid options for eligible pensioners through government-funded programs.' },
              { title: 'Latest Technology', desc: 'We offer leading AI hearing aid brands like Phonak, ReSound, Widex, Signia, Starkey, Oticon and Unitron.' },
              { title: 'Personalized Care', desc: 'Individualised treatment plans designed around your hearing lifestyle.' },
              { title: 'Family-Focused', desc: 'Friendly, compassionate care for every age group in the family.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-primary-orange text-2xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
