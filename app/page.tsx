import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import Link from "next/link"

export default function Home() {
  // Datos de ejemplo para los productos más vendidos
  // TODO: Reemplazar con datos reales de productos
  // Hacer una llamada a la API para obtener los productos más vendidos
  const featuredProducts = [
    {
      id: "mini-donas-4", //Posible id de producto numerico
      title: "Mini Donas x4",
      description: "Deliciosas mini donas con tu salsa y topping favorito",
      price: "$12.000",
      // imageSrc: "/placeholder.svg?height=300&width=300",
      imageSrc: "/minidonas.jpeg",
      category: "mini-donas",
    },
    {
      id: "mini-waffles-4",
      title: "Mini Waffles x4",
      description: "Crujientes mini waffles con tu salsa y topping favorito",
      price: "$14.000",
      imageSrc: "/placeholder.svg?height=300&width=300",
      category: "mini-waffles",
    },
    {
      id: "mini-brownies-4",
      title: "Mini Brownies x4",
      description: "Deliciosos mini brownies con tu salsa y topping favorito",
      price: "$16.000",
      imageSrc: "/placeholder.svg?height=300&width=300",
      category: "mini-brownies",
    },
    {
      id: "mini-tortas-4",
      title: "Mini Tortas x4",
      description: "Exquisitas mini tortas con tu salsa y topping favorito",
      price: "$18.000",
      imageSrc: "/placeholder.svg?height=300&width=300",
      category: "mini-tortas",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Sweet Sky Pastelería
                </h1>
                <p className="max-w-[600px] text-primary/80 md:text-xl">
                  Endulzando tus momentos especiales con postres artesanales de la más alta calidad.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/productos">
                  <Button className="bg-pink-600 hover:bg-pink-700">Ver productos</Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                    Contactar
                  </Button>
                </Link>
              </div>
            </div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sticker%20Redondo%20reposteria%20deliciosa%20Ilustrado%20femenino%20azul%20%20Rosa.jpg-fR37R8ZemJcqzq2bSKhbRArkCgrO3U.jpeg"
              alt="Sweet Sky Pastelería"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              width={550}
              height={550}
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-600">
                Nuestros Productos Más Vendidos
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre nuestra selección de postres artesanales, elaborados con ingredientes de la más alta calidad.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                imageSrc={product.imageSrc}
                category={product.category}
              />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/productos">
              <Button className="bg-pink-600 hover:bg-pink-700">Ver todos los productos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Sobre Sweet Sky"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
              width={400}
              height={400}
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-600">
                  Sobre Nosotros
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Sweet Sky nació de la pasión por crear postres artesanales que endulcen los momentos especiales de
                  nuestros clientes. Desde nuestros inicios, nos hemos comprometido con la calidad y la innovación,
                  creando mini postres que no solo son deliciosos sino también hermosos.
                </p>
              </div>
              <div>
                <Link href="/nosotros">
                  <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                    Conoce nuestra historia
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-600">
                Promociones Especiales
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                No te pierdas nuestras promociones para fechas especiales.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Promoción especial"
                className="w-full h-[300px] object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold">Promoción del Mes</h3>
                <p className="text-white/80">Descubre nuestras ofertas especiales</p>
                <Link href="/promociones" className="mt-4">
                  <Button className="bg-pink-600 hover:bg-pink-700">Ver promociones</Button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Días especiales"
                className="w-full h-[300px] object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold">Días Especiales</h3>
                <p className="text-white/80">Celebra con nuestros productos especiales</p>
                <Link href="/promociones" className="mt-4">
                  <Button className="bg-pink-600 hover:bg-pink-700">Ver más</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

