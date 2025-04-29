import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  quote: string
  rating: number
}

export default function TestimonialCard({ name, quote, rating }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={i < rating ? "#ec4899" : "none"}
              stroke={i < rating ? "#ec4899" : "currentColor"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
        <p className="text-gray-500 italic mb-4">"{quote}"</p>
        <p className="font-medium">{name}</p>
      </CardContent>
    </Card>
  )
}
