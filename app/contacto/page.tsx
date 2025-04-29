import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Contacto</h1>
                <p className="max-w-[700px] text-primary/80 md:text-xl mx-auto">
                  Estamos aquí para responder tus preguntas y ayudarte con tus pedidos
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-pink-600 mb-4">Información de Contacto</h2>
                  <p className="text-gray-500 mb-6">
                    Si tienes alguna pregunta sobre nuestros productos o quieres hacer un pedido especial, no dudes en contactarnos.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-pink-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Teléfono</h3>
                      <p className="text-gray-500">
                        <a href="tel:3152323751" className="hover:text-pink-600 transition-colors">
                          315 232-3751
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-pink-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-500">
                        <a href="mailto:info@sweetsky.com" className="hover:text-pink-600 transition-colors">
                          sweet.sky2303@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Instagram className="h-5 w-5 text-pink-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Instagram</h3>
                      <p className="text-gray-500">
                        <a
                          href="https://www.instagram.com/sweet_sky230?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-pink-600 transition-colors"
                        >
                          @sweet_sky230
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-pink-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Ubicación</h3>
                      <p className="text-gray-500">Cúcuta, Colombia</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Mapa de ubicación"
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-pink-600 mb-4">Envíanos un Mensaje</h2>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nombre
                      </label>
                      <Input id="name" placeholder="Tu nombre" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Teléfono
                      </label>
                      <Input id="phone" placeholder="Tu número de teléfono" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Asunto
                      </label>
                      <Input id="subject" placeholder="Asunto de tu mensaje" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensaje
                      </label>
                      <Textarea id="message" placeholder="Tu mensaje" className="min-h-[120px]" />
                    </div>

                    <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
                      Enviar mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
