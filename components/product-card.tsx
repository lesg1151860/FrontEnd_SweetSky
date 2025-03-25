import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

interface ProductCardProps {
  id: string
  title: string
  description: string
  price: string
  imageSrc: string
  category: string
}

export default function ProductCard({ id, title, description, price, imageSrc, category }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={imageSrc || "/placeholder.svg?height=300&width=300"}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
          width={300}
          height={300}
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
        <p className="text-pink-600 font-medium mt-2">{price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/productos/${category}/${id}`} className="w-full">
          <Button className="w-full bg-pink-600 hover:bg-pink-700">Ver detalles</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

