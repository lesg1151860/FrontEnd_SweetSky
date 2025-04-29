import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductDetail from "@/components/product-detail"

export default function ProductDetailPage({ params }: { params: { category: string; id: string } }) {
  // En una aplicación real, estos datos vendrían de una base de datos
  // Aquí usamos datos de ejemplo
  const productData = {
    id: params.id,
    title: `${params.id
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")}`,
    description:
      "Delicioso postre artesanal elaborado con ingredientes de la más alta calidad. Personaliza tu pedido eligiendo tu salsa y topping favoritos.",
    price: "$12.000 - $48.000",
    imageSrc: "/placeholder.svg?height=500&width=500",
    category: params.category,
  }

  // Asignar imágenes específicas según la categoría y el ID
  if (params.category === "mini-waffles") {
    if (params.id === "mini-waffles-4") {
      productData.imageSrc =
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-OE4xLdmYsTHLVYY5N986rBHYOSXisy.jpeg"
      productData.price = "$14.000"
    } else if (params.id === "mini-waffles-6") {
      productData.imageSrc =
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-5YcWH9TQJ6uqk8fEKryWAD4A3GzQP3.jpeg"
      productData.price = "$26.000"
    } else if (params.id === "mini-waffles-9") {
      productData.imageSrc =
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-vQLQBsA8Hk3wSAm6eXar36RnbBjD4h.jpeg"
      productData.price = "$38.000"
    }
  } else if (params.category === "mini-donas") {
    if (params.id === "mini-donas-6") {
      productData.imageSrc =
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21.jpg-WsAhALE5VvL7yjc9AMVjKwsTbpj60f.jpeg"
      productData.price = "$10.000"
    } else if (params.id === "mini-donas-9") {
      productData.imageSrc =
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-xUzl0HtKSLhImqkBeIK0idMGNVPael.jpeg"
      productData.price = "$15.000"
    } else if (params.id === "mini-donas-12") {
      productData.imageSrc =
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20.jpg-5MWRUHQdbzX5wQXgNYLtXUXbpHBbJy.jpeg"
      productData.price = "$20.000"
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <ProductDetail
              id={productData.id}
              title={productData.title}
              description={productData.description}
              price={productData.price}
              imageSrc={productData.imageSrc}
              category={productData.category}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
