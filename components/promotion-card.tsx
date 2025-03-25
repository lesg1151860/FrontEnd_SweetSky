import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface PromotionCardProps {
  id: string
  title: string
  description: string
  discount: string
  validUntil: string
  imageSrc: string
}

export default function PromotionCard({ id, title, description, discount, validUntil, imageSrc }: PromotionCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={imageSrc || "/placeholder.svg?height=200&width=400"}
            alt={title}
            className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
            width={400}
            height={200}
          />
        </div>
        <Badge className="absolute top-2 right-2 bg-pink-600">{discount}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
        <p className="text-xs text-gray-400 mt-2">Válido hasta: {validUntil}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/promociones/${id}`} className="w-full">
          <Button className="w-full bg-pink-600 hover:bg-pink-700">Ver promoción</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

