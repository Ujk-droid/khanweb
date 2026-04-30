"use client"

import { useState, useEffect, createContext, useContext, ReactNode } from 'react'

type ToastType = {
  message: string
  type: 'success' | 'error' | 'info'
  duration?: number
}

type ToastContextType = {
  toast: (params: { title: string; description: string }) => void
  showToast: (toast: ToastType) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toastData, setToastData] = useState<ToastType | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const showToast = (newToast: ToastType) => {
    setToastData(newToast)
    setIsVisible(true)
  }

  const toast = ({ title, description }: { title: string; description: string }) => {
    showToast({
      message: `${title}: ${description}`,
      type: 'info'
    })
  }

  useEffect(() => {
    if (isVisible && toastData) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, toastData.duration || 3000)

      return () => clearTimeout(timer)
    }
  }, [isVisible, toastData])

  return (
    <ToastContext.Provider value={{ showToast, toast }}>
      {children}
      {isVisible && toastData && (
        <div className="fixed bottom-4 right-4 z-50">
          <div
            className={`px-6 py-4 rounded-md shadow-lg text-white ${
              toastData.type === 'success' ? 'bg-green-500' :
              toastData.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
            }`}
          >
            <div className="flex items-center">
              <span>{toastData.message}</span>
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