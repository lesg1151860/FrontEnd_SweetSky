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

