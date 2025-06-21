"use client"

import Image from "next/image"
import { Dancing_Script } from "next/font/google"
import { useEffect, useState, useMemo } from "react"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function Loading() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Create Your Digital Home"
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  // Memoized elements for better performance
  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: `${Math.random() * 4 + 2}px`,
      delay: `${i * 0.1}s`,
      duration: `${Math.random() * 3 + 2}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    })), [])

  const floatingShapes = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: `${Math.random() * 40 + 20}px`,
      delay: `${i * 0.2}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      color: `rgba(0, 106, 113, ${Math.random() * 0.2 + 0.1})`,
    })), [])

  // Typewriter effect with smoother reset
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100 + Math.random() * 50) // Slight randomness for natural feel
      return () => clearTimeout(timeout)
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayText("")
        setCurrentIndex(0)
      }, 2000)
      return () => clearTimeout(resetTimeout)
    }
  }, [currentIndex, fullText.length])

  // Smooth progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 0.5))
    }, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black z-[999] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingShapes.map((shape) => (
          <div
            key={shape.id}
            className="absolute rounded-full blur-md transform-gpu animate-float-slow pointer-events-none"
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.left,
              top: shape.top,
              background: shape.color,
              animationDelay: shape.delay,
            }}
          />
        ))}
      </div>

      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#006A71]/10 via-[#01949f]/10 to-[#73f3f3]/10 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4">
        {/* Animated text */}
        <div className="relative mb-12 group">
          <h1
            className={`${dancingScript.className} text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#006A71] via-[#01949f] to-[#73f3f3] tracking-wide`}
            style={{
              textShadow: "0 0 15px rgba(115, 243, 243, 0.5)",
              transform: "perspective(500px) rotateX(10deg)",
            }}
          >
            {displayText}
            <span className="ml-1 animate-pulse">|</span>
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-[#006A71]/20 to-[#73f3f3]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-full" />
        </div>

        {/* Animated logo */}
        <div className="relative mb-12 animate-float">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
            <Image
              src="/logo1.jpg"
              alt="Loading"
              fill
              className="rounded-full object-cover border-4 border-[#006A71]/80 shadow-lg"
              style={{
                boxShadow: "0 0 30px rgba(1, 148, 159, 0.7)",
              }}
            />
            <div className="absolute inset-0 rounded-full border-2 border-[#73f3f3]/50 animate-ping-slow pointer-events-none" />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-[#006A71]/30 to-[#73f3f3]/30 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
        </div>

        {/* Progress indicator */}
        <div className="w-full max-w-md">
          <div className="relative h-1.5 bg-gray-700/50 rounded-full overflow-hidden mb-2">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#006A71] to-[#73f3f3] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute top-0 right-0 w-1 h-full bg-white/80 animate-pulse" />
            </div>
          </div>
          <p className="text-center text-[#73f3f3]/80 text-sm font-mono tracking-wider">
            LOADING {Math.min(100, Math.floor(progress))}%
          </p>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-[#73f3f3] transform-gpu animate-particle"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
              opacity: 0,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              boxShadow: "0 0 10px rgba(115, 243, 243, 0.8)",
            }}
          />
        ))}
      </div>

      {/* Global styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes particle {
          0% { transform: translateY(0) translateX(0) scale(0.5); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translateY(-100px) translateX(20px) scale(1.2); opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(0.8); opacity: 0.8; }
          70%, 100% { transform: scale(1.4); opacity: 0; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-particle {
          animation: particle linear infinite;
        }
        
        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .transform-gpu {
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}