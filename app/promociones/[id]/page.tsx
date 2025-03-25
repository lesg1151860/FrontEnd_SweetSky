import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PromotionDetailPage({ params }: { params: { id: string } }) {
  // En una aplicación real, estos datos vendrían de una base de datos
  // Aquí usamos datos de ejemplo
  const promotionData = {
    id: params.id,
    title: `${params.id
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")}`,
    description:
      "Aprovecha esta promoción especial para celebrar esta fecha importante con nuestros deliciosos mini postres artesanales.",
    longDescription:
      "Nuestras promociones especiales están diseñadas para que puedas disfrutar de nuestros productos en fechas importantes a precios especiales. Todos nuestros mini postres están elaborados con ingredientes de la más alta calidad y puedes personalizarlos eligiendo tu salsa y topping favoritos.",
    discount: "20% OFF",
    validUntil: "Fecha especial",
    imageSrc: "/placeholder.svg?height=400&width=800",
    terms: [
      "Promoción válida hasta agotar existencias",
      "No acumulable con otras promociones",
      "Válido solo para pedidos realizados con anticipación",
      "Sujeto a disponibilidad",
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={promotionData.imageSrc || "/placeholder.svg"}
                  alt={promotionData.title}
                  className="w-full h-auto object-cover"
                />
                <Badge className="absolute top-4 right-4 text-lg py-1 px-3 bg-pink-600">{promotionData.discount}</Badge>
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-primary">{promotionData.title}</h1>
                  <p className="text-gray-500 mt-2">Válido hasta: {promotionData.validUntil}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-lg">{promotionData.description}</p>
                  <p className="text-gray-500">{promotionData.longDescription}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Términos y condiciones:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-500">
                    {promotionData.terms.map((term, index) => (
                      <li key={index}>{term}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/productos">
                    <Button className="w-full bg-pink-600 hover:bg-pink-700">Ver productos</Button>
                  </Link>
                  <Link href="/contacto">
                    <Button variant="outline" className="w-full border-pink-200 text-pink-600 hover:bg-pink-50">
                      Contactar
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

