import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sticker%20Redondo%20reposteria%20deliciosa%20Ilustrado%20femenino%20azul%20%20Rosa.jpg-fR37R8ZemJcqzq2bSKhbRArkCgrO3U.jpeg"
                alt="Sweet Sky Pastelería"
                className="h-16 w-16 rounded-full"
                width={64}
                height={64}
              />
            </Link>
            <div className="space-y-2">
              <a href="tel:3152323751" className="block text-sm text-gray-500 hover:text-primary transition-colors">
                Tel: 315 232-3751
              </a>
              <a
                href="https://instagram.com/sweet_sky230"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-500 hover:text-primary transition-colors"
              >
                @sweet_sky230
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Productos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/productos/mini-donas"
                  className="text-sm text-gray-500 hover:text-pink-600 transition-colors"
                >
                  Mini Donas
                </Link>
              </li>
              <li>
                <Link
                  href="/productos/mini-waffles"
                  className="text-sm text-gray-500 hover:text-pink-600 transition-colors"
                >
                  Mini Waffles
                </Link>
              </li>
              <li>
                <Link
                  href="/productos/mini-brownies"
                  className="text-sm text-gray-500 hover:text-pink-600 transition-colors"
                >
                  Mini Brownies
                </Link>
              </li>
              <li>
                <Link
                  href="/productos/mini-tortas"
                  className="text-sm text-gray-500 hover:text-pink-600 transition-colors"
                >
                  Mini Tortas
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/promociones" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">
                  Promociones
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sweet_sky230?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Sweet Sky. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

