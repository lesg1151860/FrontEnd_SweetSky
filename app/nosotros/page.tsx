import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Sobre Nosotros
                </h1>
                <p className="max-w-[700px] text-primary/80 md:text-xl mx-auto">
                  Conoce la historia y filosofía de Sweet Sky Pastelería
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Nuestra historia"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                width={400}
                height={400}
              />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-pink-600">Nuestra Historia</h2>
                <p className="text-gray-500">
                  Sweet Sky nació en 2024 como un pequeño emprendimiento personal con una gran pasión por la repostería
                  artesanal. Lo que comenzó como un hobbie se transformó rápidamente en un negocio en crecimiento
                  gracias a la calidad de nuestros productos y el amor que ponemos en cada detalle.
                </p>
                <p className="text-gray-500">
                  Nos especializamos en mini postres que son perfectos para cualquier ocasión, desde reuniones
                  familiares hasta eventos corporativos. Nuestra misión es endulzar los momentos especiales de nuestros
                  clientes con productos de la más alta calidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-pink-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <h2 className="text-2xl font-bold text-pink-600">Nuestra Misión</h2>
                <p className="text-gray-500">
                  En Sweet Sky, nuestra misión es crear experiencias dulces inolvidables a través de productos
                  artesanales de la más alta calidad. Nos comprometemos a utilizar ingredientes frescos y técnicas
                  tradicionales para ofrecer mini postres que no solo satisfagan el paladar sino que también evoquen
                  emociones y creen recuerdos especiales.
                </p>
                <p className="text-gray-500">
                  Buscamos ser parte de los momentos más importantes de nuestros clientes, aportando un toque de dulzura
                  y alegría a cada celebración, siempre con un servicio personalizado y atento a los detalles.
                </p>
              </div>
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Nuestra misión"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center order-1 lg:order-2"
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Nuestra visión"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                width={400}
                height={400}
              />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-pink-600">Nuestra Visión</h2>
                <p className="text-gray-500">
                  Aspiramos a ser reconocidos como la repostería artesanal líder en la región, destacándonos por la
                  innovación, calidad y presentación de nuestros productos. Buscamos expandir nuestra presencia
                  manteniendo siempre la esencia artesanal y el toque personal que nos caracteriza.
                </p>
                <p className="text-gray-500">
                  Visualizamos un futuro donde Sweet Sky sea sinónimo de excelencia en repostería, donde cada cliente
                  encuentre exactamente lo que busca para hacer especial cualquier ocasión, y donde nuestro compromiso
                  con la calidad y la satisfacción del cliente sea nuestra mejor carta de presentación.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
