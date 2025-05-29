import { Code, Target, Users, Zap, Shield, Cloud } from 'lucide-react'
import React from 'react'

const tea = () => {
  return (
    <div>
      <section className="py-20 bg-gray-900/50 font-serif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose TechExa Vision?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We combine technical expertise with creative vision to deliver exceptional results
            </p>
          </div>

          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors mx-8">
              <Code className="h-8 w-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">Clean Code</h3>
              <p className="text-gray-400 text-sm">We write maintainable, scalable code that stands the test of time.</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors mx-8">
              <Zap className="h-8 w-8 text-purple-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">Fast Delivery</h3>
              <p className="text-gray-400 text-sm">Rapid development cycles without compromising on quality.</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-colors mx-8">
              <Users className="h-8 w-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">Expert Team</h3>
              <p className="text-gray-400 text-sm">Skilled professionals with years of industry experience.</p>
            </div>
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-green-500/50 transition-colors mx-8">
              <Target className="h-8 w-8 text-green-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">Goal Focused</h3>
              <p className="text-gray-400 text-sm">We align our solutions with your business objectives.</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-colors mx-8">
              <Shield className="h-8 w-8 text-yellow-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">Secure Solutions</h3>
              <p className="text-gray-400 text-sm">Security is our priority to protect your valuable data.</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-indigo-500/50 transition-colors mx-8">
              <Cloud className="h-8 w-8 text-indigo-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">Cloud Ready</h3>
              <p className="text-gray-400 text-sm">Scalable cloud solutions tailored for your business.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default tea
