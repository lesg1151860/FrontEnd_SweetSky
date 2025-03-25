"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"

interface ProductDetailProps {
  id: string
  title: string
  description: string
  price: string
  imageSrc: string
  category: string
}

export default function ProductDetail({ id, title, description, price, imageSrc, category }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(4)
  const [sauce, setSauce] = useState("")
  const [topping, setTopping] = useState("")
  const [observations, setObservations] = useState("")
  const [date, setDate] = useState<Date | undefined>(undefined)

  // Calcular la fecha mínima (2 días después de hoy)
  const today = new Date()
  const minDate = new Date(today)
  minDate.setDate(today.getDate() + 2)

  const handleWhatsAppOrder = () => {
    if (quantity <= 3) {
      const message = encodeURIComponent(
        `Hola, me gustaría ordenar ${quantity} unidades de ${title}. ¿Podrían ayudarme?`,
      )
      window.open(`https://wa.me/573152323751?text=${message}`, "_blank")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el pedido
    alert("Funcionalidad de pedido en desarrollo. Pronto estará disponible.")
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <div className="rounded-lg overflow-hidden">
          <img
            src={imageSrc || "/placeholder.svg?height=500&width=500"}
            alt={title}
            className="w-full h-auto object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-primary">{title}</h1>
        <p className="text-xl text-pink-600 font-medium mt-2">{price}</p>
        <div className="mt-4 text-gray-600">{description}</div>

        {quantity <= 3 ? (
          <div className="mt-6">
            <p className="mb-4">Para pedidos de 1-3 unidades, contáctanos directamente por WhatsApp:</p>
            <Button onClick={handleWhatsAppOrder} className="bg-green-500 hover:bg-green-600">
              Ordenar por WhatsApp
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Cantidad</label>
              <div className="flex items-center">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(4, quantity - 1))}
                  disabled={quantity <= 4}
                >
                  -
                </Button>
                <span className="mx-4 font-medium">{quantity}</span>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.min(20, quantity + 1))}
                  disabled={quantity >= 20}
                >
                  +
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Salsa</label>
              <Select value={sauce} onValueChange={setSauce}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una salsa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="arequipe">Arequipe</SelectItem>
                  <SelectItem value="leche-condensada">Leche condensada</SelectItem>
                  <SelectItem value="chocolate">Chocolate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Topping</label>
              <Select value={topping} onValueChange={setTopping}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un topping" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mms">M&M's</SelectItem>
                  <SelectItem value="chispas-chocolate">Chispas de chocolate</SelectItem>
                  <SelectItem value="chispas-colores">Chispas de colores</SelectItem>
                  <SelectItem value="goticas-chocolate-negro">Goticas de chocolate negro</SelectItem>
                  <SelectItem value="goticas-chocolate-blanco">Goticas de chocolate blanco</SelectItem>
                  <SelectItem value="pepitas-colores">Pepitas de colores</SelectItem>
                  <SelectItem value="oreo">Oreo</SelectItem>
                  <SelectItem value="coco">Coco</SelectItem>
                  <SelectItem value="mani">Maní</SelectItem>
                  <SelectItem value="estrellitas">Estrellitas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Fecha de entrega</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < minDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <p className="text-xs text-gray-500 mt-1">
                Los pedidos deben realizarse con mínimo 2 días de anticipación
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Observaciones</label>
              <Textarea
                placeholder="Indícanos cómo quieres personalizar tu pedido o si deseas agregar algo más"
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700"
              disabled={!sauce || !topping || !date}
            >
              Realizar pedido
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}

