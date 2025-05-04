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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4 animate-in fade-in zoom-in duration-300">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-medium text-lg text-pink-600">{title}</h3>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full" onClick={() => setIsVisible(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Cerrar</span>
          </Button>
        </div>
        <div className="p-4">
          <p className="text-gray-600">{description}</p>
          <div className="mt-6 flex justify-center">
            <Link href={linkHref}>
              <Button className="bg-pink-600 hover:bg-pink-700 px-6">{linkText}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
