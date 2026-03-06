import React from 'react'
import Link from 'next/link'

const Friends = () => {
  return (
    <section className="bg-[#030712] text-white font-serif border-t border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Understand User Flow.

            <span className="sm:block"> Increase Conversion. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-gray-300">
            TechExa Vision transforms ideas into exceptional digital solutions through cutting-edge web design and full-stack development.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto transition-all duration-300"
              href="/contact"
            >
              Get Started
            </a>

            <Link
              href="/about"
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Friends