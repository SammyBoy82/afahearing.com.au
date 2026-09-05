export default function ContactSection() {
  return (
    <section id="location" className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Our <span className="gradient-text">Locations</span> & Contact
          </h1>
          <p className="text-xl text-gray-600">
            Head office in Forest Hill and Branch 1 at Burwood Healthcare, Mount Waverly. We accept bulk-bill hearing assessments and reports with a GP referral.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-3xl text-primary-orange flex-shrink-0">📍</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Head Office</h3>
                    <p className="text-gray-600">
                      AFA hearing Clinic<br />
                      6 Boeing Court<br />
                      Forest Hill, VIC 3131<br />
                      Australia
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-primary-orange flex-shrink-0">🏥</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Branch 1</h3>
                    <p className="text-gray-600">
                      Burwood Healthcare<br />
                      170-174 Highbury Road<br />
                      Mount Waverly, VIC 3149<br />
                      Australia
                    </p>
                    <p className="mt-2 text-sm text-primary-green font-semibold">Bulk-bill hearing assessments and reports available with GP referral</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-primary-green flex-shrink-0">📞</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+61426399344" className="hover:text-primary-green transition">
                        0426399344
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-primary-orange flex-shrink-0">✉️</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:audiology.vanak@gmail.com" className="hover:text-primary-green transition">
                        audiology.vanak@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl text-primary-green flex-shrink-0">🕒</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 3:00 PM (by prior appointment)<br />
                      Sunday: Available by prior appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Map */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              title="AFA hearing Location"
              src="https://maps.google.com/maps?q=6%20Boeing%20Court%20Forest%20Hill%20VIC%203131&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-96 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'How long does a hearing test take?',
                a: 'A comprehensive hearing test typically takes 45-60 minutes including consultation and results review.'
              },
              {
                q: 'Do you provide free consultations?',
                a: 'Yes, we offer free initial consultations to discuss your hearing concerns and answer your questions.'
              },
              {
                q: 'What payment options do you accept?',
                a: 'We accept cash, credit cards, and offer flexible payment plans for hearing aid purchases.'
              },
              {
                q: 'Can I try hearing aids before purchasing?',
                a: 'Yes, we offer a trial period so you can test hearing aids in your daily environment before committing.'
              },
              {
                q: 'Do you provide government rebates?',
                a: (
                  <>
                    We help with Australian government hearing services including HSP for pensioners and pension card holders, DVA, WorkCover, private insurance, and HAS (Hearing Assistance Scheme) eligibility. We can also help you access <strong>free hearing aids for pensioners, DVA, and WorkCover</strong> where eligible, <strong>get rebates from private insurance</strong>, and <strong>insure your hearing aids</strong>.
                  </>
                )
              },
              {
                q: 'Do you offer bulk-bill hearing assessments?',
                a: 'Yes, bulk-bill hearing assessments and a report with GP referral are available at our Burwood Healthcare Mount Waverly branch.'
              },
              {
                q: 'Do pensioners qualify for bulk-bill services?',
                a: 'Eligible pensioners and concession card holders can access bulk-bill hearing assessments and support through our Mount Waverly location.'
              },
              {
                q: 'What brands do you stock?',
                a: 'We work with leading hearing aid manufacturers to provide you with options suited to your needs and budget.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3 text-lg">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
