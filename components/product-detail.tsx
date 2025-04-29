"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useSearchParams } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/hooks/use-toast"

interface ProductDetailProps {
  id: string
  title: string
  description: string
  price: string
  imageSrc: string
  category: string
}

export default function ProductDetail({ id, title, description, price, imageSrc, category }: ProductDetailProps) {
  const searchParams = useSearchParams()
  const showOrderForm = searchParams.get("pedido") === "true"
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const [quantity, setQuantity] = useState(4)
  const [sauce, setSauce] = useState("")
  const [topping, setTopping] = useState("")
  const [observations, setObservations] = useState("")
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState("")
  const [deliveryOption, setDeliveryOption] = useState(false)
  const [address, setAddress] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  // Extraer el precio base del producto (sin el signo $ y separadores)
  const basePrice = Number.parseInt(price.replace(/\D/g, ""))

  // Calcular el precio total
  const calculateTotal = () => {
    let total = (basePrice * quantity) / 4 // Asumiendo que el precio base es para 4 unidades
    if (deliveryOption) {
      total += 6000 // Agregar costo de domicilio
    }
    return total
  }

  // Formatear precio para mostrar
  const formatPrice = (price: number) => {
    return `$${price.toLocaleString("es-CO")}`
  }

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

  const handleSendReceipt = () => {
    if (!user) {
      toast({
        title: "Inicia sesión",
        description: "Debes iniciar sesión para realizar un pedido",
        variant: "destructive",
      })
      router.push("/login")
      return
    }

    // Formatear la fecha y hora
    const formattedDate = date ? format(date, "PPP", { locale: es }) : ""
    const formattedTime = time || ""

    // Construir el mensaje con el formato solicitado
    let message = `Hola! Soy ${user.name}, mi pedido es ${quantity} unidades de ${title}, con fecha de entrega ${formattedDate} a las ${formattedTime}`

    // Agregar información de domicilio si está seleccionado
    if (deliveryOption) {
      message += `, con servicio a domicilio`
    }

    // Agregar el valor total
    message += ` y el valor total del pedido ${formatPrice(calculateTotal())}. Aquí te envío el comprobante de pago. Gracias`

    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/573152323751?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) {
      toast({
        title: "Inicia sesión",
        description: "Debes iniciar sesión para realizar un pedido",
        variant: "destructive",
      })
      router.push("/login")
      return
    }

    // Aquí iría la lógica para enviar el pedido
    toast({
      title: "Pedido realizado",
      description: "Tu pedido ha sido recibido correctamente. Gracias por tu compra.",
    })
  }

  useEffect(() => {
    // Si el parámetro pedido=true está presente, hacer scroll al formulario de pedido
    if (showOrderForm) {
      const orderFormElement = document.getElementById("order-form")
      if (orderFormElement) {
        orderFormElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [showOrderForm])

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
          <form onSubmit={handleSubmit} className="mt-6 space-y-6" id="order-form">
            {!user && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                <p className="font-medium">Inicia sesión para realizar tu pedido</p>
                <p className="mt-1">Necesitas iniciar sesión para poder completar tu pedido.</p>
                <Button
                  className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white"
                  onClick={() => router.push("/login")}
                >
                  Iniciar sesión
                </Button>
              </div>
            )}

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
              <label className="block text-sm font-medium mb-1">Hora de entrega</label>
              <div className="relative">
                <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="pl-10" />
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="delivery"
                checked={deliveryOption}
                onCheckedChange={(checked) => setDeliveryOption(checked as boolean)}
              />
              <label
                htmlFor="delivery"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Servicio de domicilio (+$6.000)
              </label>
            </div>

            {deliveryOption && (
              <div>
                <label className="block text-sm font-medium mb-1">Dirección de entrega</label>
                <Textarea
                  placeholder="Ingresa tu dirección completa"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            )}

            <div className="space-y-4">
              <h3 className="font-medium">Información de contacto</h3>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  placeholder="Tu número de teléfono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
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

            <div className="space-y-4">
              <h3 className="font-medium">Método de pago</h3>

              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="efectivo" id="efectivo" />
                  <Label htmlFor="efectivo">Efectivo</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="transferencia" id="transferencia" />
                  <Label htmlFor="transferencia">Transferencia bancaria</Label>
                </div>
              </RadioGroup>
            </div>

            {paymentMethod === "transferencia" && (
              <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
                <h4 className="font-medium text-center">Información de pago</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col items-center">
                    <p className="text-sm font-medium mb-2">Cuenta Bancolombia</p>
                    <div className="bg-white p-4 rounded-lg">
                      <img
                        src="/placeholder.svg?height=150&width=150"
                        alt="QR Bancolombia"
                        className="w-32 h-32 mx-auto"
                      />
                    </div>
                    <p className="text-sm mt-2">Cuenta Ahorros: 123-456789-00</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="text-sm font-medium mb-2">Cuenta Nequi</p>
                    <div className="bg-white p-4 rounded-lg">
                      <img src="/placeholder.svg?height=150&width=150" alt="QR Nequi" className="w-32 h-32 mx-auto" />
                    </div>
                    <p className="text-sm mt-2">Nequi: 315 232-3751</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
                  <p>Recuerda enviar el comprobante de pago al WhatsApp de Sweet Sky para confirmar tu pedido.</p>
                </div>

                <Button type="button" onClick={handleSendReceipt} className="w-full bg-green-500 hover:bg-green-600">
                  Enviar comprobante
                </Button>
              </div>
            )}

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Subtotal:</span>
                <span>{formatPrice((basePrice * quantity) / 4)}</span>
              </div>

              {deliveryOption && (
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Domicilio:</span>
                  <span>$6.000</span>
                </div>
              )}

              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span className="text-pink-600">{formatPrice(calculateTotal())}</span>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700"
              disabled={
                !user ||
                !sauce ||
                !topping ||
                !date ||
                !time ||
                !phone ||
                !paymentMethod ||
                (deliveryOption && !address)
              }
            >
              Realizar pedido
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
