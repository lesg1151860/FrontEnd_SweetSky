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
                  Conoce la historia y evolución de Sweet Sky Pastelería
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
                  Sweet Sky nació en 2020 como un pequeño emprendimiento familiar con una gran pasión por la repostería
                  artesanal. Lo que comenzó como un hobby se transformó rápidamente en un negocio en crecimiento gracias
                  a la calidad de nuestros productos y el amor que ponemos en cada detalle.
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
                <h2 className="text-2xl font-bold text-pink-600">Nuestra Evolución</h2>
                <p className="text-gray-500">
                  A lo largo de los años, hemos perfeccionado nuestras recetas y ampliado nuestra variedad de productos.
                  Comenzamos con mini donas y hoy ofrecemos una amplia gama de mini postres que incluyen waffles,
                  brownies y tortas.
                </p>
                <p className="text-gray-500">
                  Cada año incorporamos nuevos sabores y presentaciones, siempre escuchando las sugerencias de nuestros
                  clientes y manteniéndonos al día con las tendencias en repostería.
                </p>
              </div>
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Nuestra evolución"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center order-1 lg:order-2"
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-pink-600">Nuestros Valores</h2>
                <p className="max-w-[700px] text-gray-500 mx-auto">
                  En Sweet Sky nos guiamos por valores que se reflejan en cada uno de nuestros productos.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pink-600"
                  >
                    <path d="M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2" />
                    <path d="m2 19 1.6.5a6.9 6.9 0 0 0 5.4-1" />
                    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                    <path d="M12 12v8" />
                    <path d="m9 16 3 3 3-3" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Calidad</h3>
                <p className="text-gray-500 mt-2">
                  Utilizamos ingredientes de la más alta calidad para garantizar el mejor sabor en cada bocado.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pink-600"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Atención Personalizada</h3>
                <p className="text-gray-500 mt-2">
                  Cada cliente es único y nos esforzamos por brindar una atención personalizada que satisfaga sus
                  necesidades.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pink-600"
                  >
                    <path d="M12 2v4" />
                    <path d="m6.8 15-3.5 2" />
                    <path d="m20.7 7-3.5 2" />
                    <path d="M6.8 7 3.3 5" />
                    <path d="m20.7 15-3.5-2" />
                    <path d="m9 21 3-8 3 8" />
                    <path d="M12 13V2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Innovación</h3>
                <p className="text-gray-500 mt-2">
                  Constantemente buscamos nuevas formas de sorprender a nuestros clientes con sabores y presentaciones
                  innovadoras.
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

