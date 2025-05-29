import React from 'react'

const But = () => {
  return (
     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-800">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </div>
  )
}

export default But


