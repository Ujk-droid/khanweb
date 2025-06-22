"use client"

import { useState, useEffect, createContext, useContext, ReactNode } from 'react'

type ToastType = {
  message: string
  type: 'success' | 'error' | 'info'
  duration?: number
}

type ToastContextType = {
  toast(arg0: { title: string; description: string }): unknown
  showToast: (toast: ToastType) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastType | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const showToast = (newToast: ToastType) => {
    setToast(newToast)
    setIsVisible(true)
  }

  useEffect(() => {
    if (isVisible && toast) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, toast.duration || 3000)

      return () => clearTimeout(timer)
    }
  }, [isVisible, toast])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {isVisible && toast && (
        <div className="fixed bottom-4 right-4 z-50">
          <div
            className={`px-6 py-4 rounded-md shadow-lg text-white ${
              toast.type === 'success' ? 'bg-green-500' :
              toast.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
            }`}
          >
            <div className="flex items-center">
              <span>{toast.message}</span>
            </div>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}