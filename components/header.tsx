"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sticker%20Redondo%20reposteria%20deliciosa%20Ilustrado%20femenino%20azul%20%20Rosa.jpg-fR37R8ZemJcqzq2bSKhbRArkCgrO3U.jpeg"
            alt="Sweet Sky Pastelería"
            className="h-12 w-12 rounded-full"
            width={48}
            height={48}
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-pink-600 transition-colors">
            Inicio
          </Link>
          <Link href="/nosotros" className="text-sm font-medium hover:text-pink-600 transition-colors">
            Sobre Nosotros
          </Link>
          <Link href="/productos" className="text-sm font-medium hover:text-pink-600 transition-colors">
            Productos
          </Link>
          <Link href="/contacto" className="text-sm font-medium hover:text-pink-600 transition-colors">
            Contacto
          </Link>
          <Link href="/promociones" className="text-sm font-medium hover:text-pink-600 transition-colors">
            Promociones
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Link href="/login">
            <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">
              Iniciar sesión
            </Button>
          </Link>
          <Link href="/productos">
            <Button className="bg-pink-600 hover:bg-pink-700">Hacer pedido</Button>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium hover:text-pink-600 transition-colors py-2">
                Inicio
              </Link>
              <Link href="/nosotros" className="text-lg font-medium hover:text-pink-600 transition-colors py-2">
                Sobre Nosotros
              </Link>
              <Link href="/productos" className="text-lg font-medium hover:text-pink-600 transition-colors py-2">
                Productos
              </Link>
              <Link href="/contacto" className="text-lg font-medium hover:text-pink-600 transition-colors py-2">
                Contacto
              </Link>
              <Link href="/promociones" className="text-lg font-medium hover:text-pink-600 transition-colors py-2">
                Promociones
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Link href="/login">
                  <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50 w-full">
                    Iniciar sesión
                  </Button>
                </Link>
                <Link href="/productos">
                  <Button className="bg-pink-600 hover:bg-pink-700 w-full">Hacer pedido</Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

