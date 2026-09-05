import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <p className="uppercase tracking-[0.3em] text-sm text-white/80 mb-4">
              AFA hearing Care
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[2.2rem] sm:text-5xl md:text-6xl">
              Helping You Hear Better with Personalised Hearing Care
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-4 max-w-xl leading-relaxed">
              AFA hearing is a Melbourne-based audiology clinic offering comprehensive, compassionate hearing care. We provide evidence-based assessments, hearing aid fittings and ongoing support for families, adults and children.
            </p>
            <p className="text-base sm:text-lg text-white/80 mb-6 max-w-xl leading-relaxed">
              Lead Audiologist: Jacob Hass — Master of Audiology, Member of Audiology Australia, 20+ years' clinical experience.
            </p>
            <div className="grid gap-4 max-w-xl mb-8">
              {[
                'Comprehensive hearing assessments',
                'Hearing aid fittings and rehabilitation',
                'Tinnitus management',
                "Children's hearing services",
                'Bulk-bill assessments at Mount Waverly with GP referral'
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-white/90">
                  <span className="mt-1 text-2xl">✓</span>
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link href="/appointments" className="bg-white text-primary-green hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition">
                Book an Appointment
              </Link>
              <a href="tel:+61426399344" className="bg-primary-orange hover:bg-primary-orange-dark text-white px-6 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 shadow-lg transition">
                <span className="text-xl">📞</span>
                Call Us Now
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/services" className="bg-white/10 border border-white/30 text-white px-5 py-3 rounded-xl font-semibold transition">
                View Services
              </Link>
              <Link href="/hearing-aids" className="bg-white/10 border border-white/30 text-white px-5 py-3 rounded-xl font-semibold transition">
                See Hearing Aids
              </Link>
              <Link href="#hearing-screening-test" className="bg-white/10 border border-white/30 text-white px-5 py-3 rounded-xl font-semibold transition">
                Try Online Test
              </Link>
            </div>
            <div className="mt-6 text-sm text-white/90 leading-relaxed">
              <div><strong>Clinic:</strong> 6 Boeing Court, Forest Hill VIC 3131</div>
              <div><strong>Open:</strong> Mon–Fri 9am–5pm • Sat by appointment</div>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white/10 p-5 border border-white/20">
                <p className="text-sm text-white/80 mb-1">Who are we?</p>
                <p className="font-semibold">A family-focused Melbourne audiology clinic.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5 border border-white/20">
                <p className="text-sm text-white/80 mb-1">What we do</p>
                <p className="font-semibold">Hearing tests, aids, tinnitus and paediatric care.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-5 border border-white/20">
                <p className="text-sm text-white/80 mb-1">Book now</p>
                <p className="font-semibold">Appointments made easy online.</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white">
            <Image
              src="/clinicroom.png"
              alt="AFA hearing Clinic"
              width={1536}
              height={1024}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
