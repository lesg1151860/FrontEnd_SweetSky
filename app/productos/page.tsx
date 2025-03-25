import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
  // Datos de ejemplo para los productos
  const products = {
    "mini-donas": [
      {
        id: "mini-donas-4",
        title: "Mini Donas x4",
        description: "Deliciosas mini donas con tu salsa y topping favorito",
        price: "$12.000",
        imageSrc: "/placeholder.svg?height=300&width=300",
        category: "mini-donas",
      },
      {
        id: "mini-donas-8",
        title: "Mini Donas x8",
        description: "Deliciosas mini donas con tu salsa y topping favorito",
        price: "$22.000",
        imageSrc: "/placeholder.svg?height=300&width=300",
        category: "mini-donas",
      },
      {
        id: "mini-donas-12",
        title: "Mini Donas x12",
        description: "Deliciosas mini donas con tu salsa y topping favorito",
        price: "$32.000",
        imageSrc: "/placeholder.svg?height=300&width=300",
        category: "mini-donas",
      },
    ],
    "mini-waffles": [
      {
        id: "mini-waffles-4",
        title: "Mini Waffles x4",
        description: "Crujientes mini waffles con tu salsa y topping favorito",
        price: "$14.000",
        imageSrc: "/placeholder.svg?height=300&width=300",
        category: "mini-waffles",
      },
      {
        id: "mini-waffles-8",
        title: "Mini Waffles x8",
        description: "Crujientes mini waffles con tu salsa y topping favorito",
        price: "$26.000",
        imageSrc: "/placeholder.svg?height=300&width=300",
        category: "mini-waffles",
      },
      {
        id: "mini-waffles-12",
        title: "Mini Waffles x12",
        description: "Crujientes mini waffles con tu salsa y topping favorito",
        price: "$38.000",
        imageSrc: "/placeholder.svg?height=300&width=300",
        category: "mini-waffles",
      },
    ],
    "mini-brownies": [
      {
        id: "mini-brownies-4",
        title: "Mini Brownies x4",
        description: "Deliciosos mini brownies con tu salsa y topping favorito",
        price: "$16.000",
        imageSrc: "/placeholder.svg?height=300&width=300",
        category: "mini-brownies",
      },
      {
        id: "mini-brownies-8",
        title: "Mini Brownies x8",
        description: "Deliciosos mini brownies con tu salsa y topping favorito",
        price: "$30.000",
        imageSrc: "/placeholder.svg?height=300&width=300",
        category: "mini-brownies",
      },
      {
        id: "mini-brownies-12",
        title: "Mini Brownies x12",
        description: "Deliciosos mini brownies con tu salsa y topping favorito",
        price: "$42.000",
        imageSrc: "/placeholder.svg?height=300&width=300",
        category: "mini-brownies",
      },
    ],
    "mini-tortas": [
      {
        id: "mini-tortas-4",
        title: "Mini Tortas x4",
        description: "Exquisitas mini tortas con tu salsa y topping favorito",
        price: "$18.000",
        imageSrc: "/placeholder.svg?height=300&width=300",
        category: "mini-tortas",
      },
      {
        id: "mini-tortas-8",
        title: "Mini Tortas x8",
        description: "Exquisitas mini tortas con tu salsa y topping favorito",
        price: "$34.000",
        imageSrc: "/placeholder.svg?height=300&width=300",
        category: "mini-tortas",
      },
      {
        id: "mini-tortas-12",
        title: "Mini Tortas x12",
        description: "Exquisitas mini tortas con tu salsa y topping favorito",
        price: "$48.000",
        imageSrc: "/placeholder.svg?height=300&width=300",
        category: "mini-tortas",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Nuestros Productos
                </h1>
                <p className="max-w-[700px] text-primary/80 md:text-xl mx-auto">
                  Descubre nuestra variedad de mini postres artesanales
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="mini-donas" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="mini-donas">Mini Donas</TabsTrigger>
                <TabsTrigger value="mini-waffles">Mini Waffles</TabsTrigger>
                <TabsTrigger value="mini-brownies">Mini Brownies</TabsTrigger>
                <TabsTrigger value="mini-tortas">Mini Tortas</TabsTrigger>
              </TabsList>

              <TabsContent value="mini-donas" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products["mini-donas"].map((product) => (
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
              </TabsContent>

              <TabsContent value="mini-waffles" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products["mini-waffles"].map((product) => (
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
              </TabsContent>

              <TabsContent value="mini-brownies" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products["mini-brownies"].map((product) => (
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
              </TabsContent>

              <TabsContent value="mini-tortas" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products["mini-tortas"].map((product) => (
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
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

