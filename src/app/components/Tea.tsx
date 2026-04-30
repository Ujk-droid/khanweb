import { Code, Target, Users, Zap, Shield, Cloud } from 'lucide-react'
import React from 'react'

const tea = () => {
  return (
    <div>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Why Choose TechExa Vision?</h2>
            <p className="text-[#9A8F87] text-lg max-w-2xl mx-auto">
              We combine technical expertise with creative vision to deliver exceptional results
            </p>
          </div>

          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-[#141414] p-4 rounded-xl border border-[#2A2420] hover:border-[#B78460]/50 transition-colors mx-8">
              <Code className="h-8 w-8 text-[#B78460] mb-3" />
              <h3 className="font-heading text-lg font-semibold text-white mb-1">Clean Code</h3>
              <p className="text-[#9A8F87] text-sm">We write maintainable, scalable code that stands the test of time.</p>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl border border-[#2A2420] hover:border-[#B78460]/50 transition-colors mx-8">
              <Zap className="h-8 w-8 text-[#B78460] mb-3" />
              <h3 className="font-heading text-lg font-semibold text-white mb-1">Fast Delivery</h3>
              <p className="text-[#9A8F87] text-sm">Rapid development cycles without compromising on quality.</p>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl border border-[#2A2420] hover:border-[#B78460]/50 transition-colors mx-8">
              <Users className="h-8 w-8 text-[#B78460] mb-3" />
              <h3 className="font-heading text-lg font-semibold text-white mb-1">Expert Team</h3>
              <p className="text-[#9A8F87] text-sm">Skilled professionals with years of industry experience.</p>
            </div>
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#141414] p-4 rounded-xl border border-[#2A2420] hover:border-[#B78460]/50 transition-colors mx-8">
              <Target className="h-8 w-8 text-[#B78460] mb-3" />
              <h3 className="font-heading text-lg font-semibold text-white mb-1">Goal Focused</h3>
              <p className="text-[#9A8F87] text-sm">We align our solutions with your business objectives.</p>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl border border-[#2A2420] hover:border-[#B78460]/50 transition-colors mx-8">
              <Shield className="h-8 w-8 text-[#B78460] mb-3" />
              <h3 className="font-heading text-lg font-semibold text-white mb-1">Secure Solutions</h3>
              <p className="text-[#9A8F87] text-sm">Security is our priority to protect your valuable data.</p>
            </div>
            <div className="bg-[#141414] p-4 rounded-xl border border-[#2A2420] hover:border-[#B78460]/50 transition-colors mx-8">
              <Cloud className="h-8 w-8 text-[#B78460] mb-3" />
              <h3 className="font-heading text-lg font-semibold text-white mb-1">Cloud Ready</h3>
              <p className="text-[#9A8F87] text-sm">Scalable cloud solutions tailored for your business.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default tea
