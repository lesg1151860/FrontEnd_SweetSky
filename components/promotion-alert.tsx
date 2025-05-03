"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PromotionAlertProps {
  title: string
  description: string
  linkText: string
  linkHref: string
}

export function PromotionAlert({ title, description, linkText, linkHref }: PromotionAlertProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mostrar la alerta después de un breve retraso
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md bg-white rounded-lg shadow-lg border border-pink-200 p-4 animate-in slide-in-from-bottom-5">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="font-medium text-lg text-pink-600">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
          <div className="mt-3">
            <Link href={linkHref}>
              <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                {linkText}
              </Button>
            </Link>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0 rounded-md" onClick={() => setIsVisible(false)}>
          <X className="h-4 w-4" />
          <span className="sr-only">Cerrar</span>
        </Button>
      </div>
    </div>
  )
}
