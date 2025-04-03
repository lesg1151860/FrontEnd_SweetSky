import Header from "@/components/header"
import Footer from "@/components/footer"
import PromotionCard from "@/components/promotion-card"

export default function PromotionsPage() {
  // Datos de ejemplo para las promociones
  // TODO: Reemplazar con datos reales de promociones mediante una llamada a la API
  // Hacer una llamada a la API para obtener las promociones
  const promotions = [
    {
      id: "promo-dia-mujer",
      title: "Especial Día de la Mujer",
      description: "Celebra el Día de la Mujer con nuestros mini postres especiales con un 15% de descuento.",
      discount: "15% OFF",
      validUntil: "8 de Marzo",
      imageSrc: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "promo-dia-madre",
      title: "Celebra a Mamá",
      description:
        "Sorprende a mamá en su día con nuestros deliciosos mini postres. Paquetes especiales con 20% de descuento.",
      discount: "20% OFF",
      validUntil: "Día de la Madre",
      imageSrc: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "promo-dia-padre",
      title: "Especial Día del Padre",
      description: "Endulza el día de papá con nuestros mini postres. Paquetes especiales con 15% de descuento.",
      discount: "15% OFF",
      validUntil: "Día del Padre",
      imageSrc: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "promo-dia-amor",
      title: "Dulce Amor y Amistad",
      description:
        "Celebra el amor y la amistad con nuestros mini postres. Paquetes para compartir con 25% de descuento.",
      discount: "25% OFF",
      validUntil: "Día del Amor y la Amistad",
      imageSrc: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Promociones
                </h1>
                <p className="max-w-[700px] text-primary/80 md:text-xl mx-auto">
                  Descubre nuestras promociones especiales para fechas importantes
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promotions.map((promotion) => (
                <PromotionCard
                  key={promotion.id}
                  id={promotion.id}
                  title={promotion.title}
                  description={promotion.description}
                  discount={promotion.discount}
                  validUntil={promotion.validUntil}
                  imageSrc={promotion.imageSrc}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

