'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FH</span>
              </div>
              <span className="font-bold text-xl text-gray-800 hidden sm:inline">
                AFA hearing
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-5 items-center">
            <Link href="/" className="text-gray-700 hover:text-primary-green transition font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-green transition font-medium">
              Services
            </Link>
            <Link href="/hearing-aids" className="text-gray-700 hover:text-primary-green transition font-medium">
              Hearing Aids
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-green transition font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-green transition font-medium">
              Contact
            </Link>
            <Link href="/appointments" className="bg-primary-orange hover:bg-primary-orange-dark text-white px-6 py-2 rounded-lg transition font-semibold">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-primary-green">
              Home
            </Link>
            <Link href="/services" className="block py-2 text-gray-700 hover:text-primary-green">
              Services
            </Link>
            <Link href="/hearing-aids" className="block py-2 text-gray-700 hover:text-primary-green">
              Hearing Aids
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-primary-green">
              About
            </Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-primary-green">
              Contact
            </Link>
            <Link href="/appointments" className="block mt-2 bg-primary-orange hover:bg-primary-orange-dark text-white px-4 py-2 rounded-lg transition">
              Book Now
            </Link>
          </div>
        )}
      </div>

      <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur">
        <Link href="/appointments" className="flex items-center justify-center px-4 py-3 text-sm font-semibold text-primary-green">
          Book an Appointment
        </Link>
      </div>
    </nav>
  )
}
