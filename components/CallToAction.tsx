import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Start Your Better Hearing Journey Today
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Book a face-to-face appointment, arrange a home visit or take an online hearing test with our Melbourne audiologists.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/appointments" className="bg-white text-primary-green hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition inline-block">
            Book Appointment
          </Link>
          <Link href="/hearing-aids" className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-lg font-bold text-lg transition inline-block">
            Online Booking
          </Link>
        </div>
      </div>
    </section>
  )
}
