'use client'

import { useState } from 'react'

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedBrand, setSelectedBrand] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[number] | null>(null)

  const products = [
    {
      id: 1,
      brand: 'Phonak',
      name: 'Premium Digital Hearing Aid',
      category: 'premium',
      price: '$3,500 - $5,000',
      features: ['AI-powered noise reduction', 'Bluetooth connectivity', 'Water resistant', '24/7 support'],
      image: '/hearing-aid-clinic.svg'
    },
    {
      id: 2,
      brand: 'Oticon',
      name: 'Advanced Hearing Aid',
      category: 'advanced',
      price: '$2,000 - $3,500',
      features: ['Multiple listening programs', 'Wind noise reduction', 'Extended battery', 'Wireless connectivity'],
      image: '/hearing-aid-home.svg'
    },
    {
      id: 3,
      brand: 'Widex',
      name: 'Standard Hearing Aid',
      category: 'standard',
      price: '$1,000 - $2,000',
      features: ['Clear amplification', 'Easy controls', 'Reliable performance', 'Good battery life'],
      image: '/hearing-aid-outdoor.svg'
    },
    {
      id: 4,
      brand: 'Signia',
      name: 'IIC (Invisible in the Canal)',
      category: 'premium',
      price: '$3,500 - $5,000',
      features: ['Nearly invisible fit', 'Custom-molded for comfort', 'Natural sound quality', 'Ideal for mild to moderate loss'],
      image: '/hearing-aid-clinic.svg'
    },
    {
      id: 5,
      brand: 'Starkey',
      name: 'CIC (Completely in the Canal)',
      category: 'advanced',
      price: '$3,000 - $4,500',
      features: ['Discreet in-ear design', 'Reduced wind noise', 'Good sound clarity', 'Easy phone use'],
      image: '/hearing-aid-home.svg'
    },
    {
      id: 6,
      brand: 'ReSound',
      name: 'ITC (In the Canal)',
      category: 'advanced',
      price: '$2,500 - $3,500',
      features: ['Comfortable canal fit', 'Automatic sound processing', 'Discreet appearance', 'Easy controls'],
      image: '/hearing-aid-outdoor.svg'
    },
    {
      id: 7,
      brand: 'Unitron',
      name: 'RIC (Receiver in Canal)',
      category: 'premium',
      price: '$3,000 - $4,500',
      features: ['Behind-the-ear housing', 'Natural sound quality', 'Discreet receiver in canal', 'Great for moderate to severe loss'],
      image: '/hearing-aid-clinic.svg'
    },
    {
      id: 8,
      brand: 'Beltone',
      name: 'BTE (Behind the Ear)',
      category: 'standard',
      price: '$1,500 - $2,500',
      features: ['Powerful amplification', 'Long battery life', 'Durable design', 'Easy operation'],
      image: '/hearing-aid-home.svg'
    },
    {
      id: 9,
      brand: 'Bernafon',
      name: 'ITE (In the Ear)',
      category: 'standard',
      price: '$2,000 - $3,000',
      features: ['Custom fit in the ear', 'Wide range of styles', 'Comfortable and reliable', 'Good sound performance'],
      image: '/hearing-aid-outdoor.svg'
    }
  ]

  const brandOptions = [
    { name: 'Phonak', desc: 'AI-powered sound quality and speech clarity' },
    { name: 'Oticon', desc: 'BrainHearing technology for natural sound processing' },
    { name: 'Widex', desc: 'Deep neural network processing for natural hearing' },
    { name: 'Signia', desc: 'Automatic scene recognition and rich sound' },
    { name: 'Starkey', desc: 'Advanced AI features and seamless connectivity' },
    { name: 'ReSound', desc: 'Smart hearing aids with cloud-based adaptation' },
    { name: 'Unitron', desc: 'Flexible, personalised hearing solutions' },
    { name: 'Beltone', desc: 'Reliable, comfortable hearing solutions for daily life' },
    { name: 'Bernafon', desc: 'Natural sound quality in discreet styles' },
    { name: 'Rexton', desc: 'Modern features in a variety of fitting styles' }
  ]

  const filtered = products.filter((product) => {
    const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesBrand && matchesCategory
  })

  const handleBrandSelect = (brandName: string) => {
    setSelectedBrand(brandName)
    setSelectedCategory('all')
    document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Hearing Aids & <span className="gradient-text">Products</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Quality hearing solutions from leading manufacturers
          </p>

          <div className="bg-white border border-gray-200 rounded-3xl p-6 mb-12 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Hearing Aid Brands We Fit and Recommend
            </h2>
            <p className="text-gray-600 mb-6">
              We provide independent advice across leading hearing aid manufacturers so you can choose the best fit for your hearing needs, lifestyle and budget.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {brandOptions.map((brand) => (
                <button
                  key={brand.name}
                  type="button"
                  onClick={() => handleBrandSelect(brand.name)}
                  className="rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm hover:border-primary-green hover:shadow-md transition"
                >
                  <p className="font-semibold text-gray-800 mb-1">{brand.name}</p>
                  <p className="text-sm text-gray-600">{brand.desc}</p>
                </button>
              ))}
            </div>
            <div className="bg-primary-green/10 border border-primary-green/30 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-primary-green">Professional Brands:</span> All brands feature cutting-edge AI technology, wireless connectivity, smartphone apps, and government rebate eligibility for Australian pensioners and eligible applicants.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-6 mb-12 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Hearing Aid Options</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Styles of Hearing Aids',
                  description: 'IIC, CIC, ITC, RIC, BTE and ITE options available to suit every hearing loss and lifestyle preference.'
                },
                {
                  title: 'Technology Levels',
                  description: 'From entry-level to premium AI-powered devices with advanced sound processing and speech clarity.'
                },
                {
                  title: 'Rechargeable Options',
                  description: 'Convenient rechargeable hearing aids for reliable daily use without changing batteries.'
                },
                {
                  title: 'Bluetooth Connectivity',
                  description: 'Direct streaming from mobile phones, TVs and accessories for seamless listening.'
                },
                {
                  title: 'Trial Process',
                  description: 'Try hearing aids before you commit, with careful fitting and follow-up support to ensure the right match.'
                }
              ].map((item) => (
                <div key={item.title} className="rounded-3xl bg-gray-50 p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Technology Advantages */}
          <div className="bg-gradient-to-r from-primary-green/10 to-primary-orange/10 border border-primary-green/20 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Advantages of AI Technology in Hearing Aids
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '🎯',
                  title: 'Smart Noise Reduction',
                  description: 'AI automatically identifies and reduces background noise while preserving important sounds like speech.'
                },
                {
                  icon: '🔄',
                  title: 'Adaptive Learning',
                  description: 'Hearing aids learn your preferences and automatically adjust settings based on your listening environment.'
                },
                {
                  icon: '🎵',
                  title: 'Enhanced Speech Clarity',
                  description: 'Advanced algorithms improve speech understanding in challenging situations like crowded rooms or windy conditions.'
                },
                {
                  icon: '📱',
                  title: 'Seamless Connectivity',
                  description: 'Direct streaming from smartphones, TVs, and other devices with automatic volume and quality optimization.'
                },
                {
                  icon: '⚡',
                  title: 'Real-time Processing',
                  description: 'Instant analysis and adjustment to changing sound environments for optimal hearing in any situation.'
                },
                {
                  icon: '🧠',
                  title: 'Cognitive Support',
                  description: 'Reduces listening effort and mental fatigue by intelligently prioritizing important sounds and conversations.'
                }
              ].map((advantage, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <div className="text-3xl mb-3">{advantage.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-6">
          <div className="flex items-center gap-3 flex-wrap mb-4">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-green">Showing</span>
            <span className="text-gray-700">
              {selectedBrand === 'all' ? 'all hearing aid brands' : selectedBrand}
            </span>
            {selectedBrand !== 'all' && (
              <button
                type="button"
                onClick={() => setSelectedBrand('all')}
                className="text-sm font-semibold text-primary-green underline"
              >
                Show all brands
              </button>
            )}
          </div>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                selectedCategory === 'all'
                  ? 'bg-primary-green text-white'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary-green'
              }`}
            >
              All Products
            </button>
          <button
            onClick={() => setSelectedCategory('standard')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              selectedCategory === 'standard'
                ? 'bg-primary-green text-white'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary-green'
            }`}
          >
            Standard
          </button>
          <button
            onClick={() => setSelectedCategory('advanced')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              selectedCategory === 'advanced'
                ? 'bg-primary-green text-white'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary-green'
            }`}
          >
            Advanced
          </button>
            <button
              onClick={() => setSelectedCategory('premium')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                selectedCategory === 'premium'
                  ? 'bg-primary-green text-white'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-primary-green'
              }`}
            >
              Premium
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div id="product-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-primary-green/10 to-primary-orange/10 h-52 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-green mb-2">
                  {product.brand}
                </p>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {product.name}
                </h3>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-primary-green mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct(product)
                    document.getElementById('product-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="w-full bg-primary-green hover:bg-primary-green-dark text-white py-2 rounded-lg font-semibold transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div id="product-detail" className="mt-12 bg-white rounded-3xl border border-gray-200 shadow-lg p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="h-72 rounded-3xl overflow-hidden bg-gradient-to-br from-primary-green/10 to-primary-orange/10 mb-6">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-green mb-2">
                  {selectedProduct.brand}
                </p>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedProduct.name}</h2>
                <p className="text-gray-600 mb-4">
                  Price range: <span className="font-semibold text-gray-800">{selectedProduct.price}</span>
                </p>
                <ul className="space-y-3 mb-6">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <span className="text-primary-green mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 mb-6">
                  This product is part of our independent hearing aid fitting service. We provide customised programming, verification and trial support to ensure the device suits your hearing needs and lifestyle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/appointments" className="inline-flex items-center justify-center bg-primary-orange hover:bg-primary-orange-dark text-white px-6 py-3 rounded-lg font-semibold transition">
                    Book a fitting
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
