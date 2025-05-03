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
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@sweet.sky230?_t=ZS-8w3Jt8fwcpL&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-600 transition-colors"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M15 8c0 1.657-1.343 3-3 3"></path>
                  <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5z"></path>
                  <path d="M16 8v13"></path>
                  <path d="M12 16v5"></path>
                </svg>
                <span className="sr-only">TikTok</span>
              </a>
              <a
                href="https://wa.me/573152323751"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                  <path d="M9 14h6a1 1 0 0 0 1-1v0a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v0a1 1 0 0 0 1 1Z"></path>
                </svg>
                <span className="sr-only">WhatsApp</span>
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
