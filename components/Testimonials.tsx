export default function Testimonials() {
  const testimonials = [
    {
      name: 'Margaret Thompson',
      role: 'Client',
      text: 'AFA hearing transformed my life. The team is professional, caring, and the hearing aids are amazing. I can hear my grandchildren again!'
    },
    {
      name: 'Robert Chen',
      role: 'Client',
      text: 'Best hearing clinic in Melbourne. The staff explains everything clearly and takes time to ensure proper fitting. Highly recommended!'
    },
    {
      name: 'Sarah Williams',
      role: 'Client',
      text: 'After visiting multiple clinics, I found what I was looking for at AFA hearing. Outstanding service and genuine care.'
    }
  ]

  return (
    <section className="py-20 bg-primary-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-primary-green">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
