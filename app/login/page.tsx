"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/hooks/use-toast"
import { AlertCircle, Eye, EyeOff } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { PasswordStrength, PasswordMatch } from "@/components/password-strength"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [showLoginPassword, setShowLoginPassword] = useState(false)

  // Campos para registro
  const [registerName, setRegisterName] = useState("")
  const [registerLastName, setRegisterLastName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [showRegisterPassword, setShowRegisterPassword] = useState(false)
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("")
  const [showRegisterConfirmPassword, setShowRegisterConfirmPassword] = useState(false)
  const [registerPhone, setRegisterPhone] = useState("")
  const [registerAddress, setRegisterAddress] = useState("")

  const { login, register, user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  // Si el usuario ya está autenticado, redirigir a la página de inicio
  useEffect(() => {
    if (user) {
      router.push("/")
    }
  }, [user, router])

  const handleGoogleLogin = () => {
    setIsLoading(true)
    // Aquí iría la lógica para iniciar sesión con Google
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Funcionalidad en desarrollo",
        description: "El inicio de sesión con Google estará disponible próximamente",
      })
    }, 1500)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const success = await login(loginEmail, loginPassword)

      if (success) {
        toast({
          title: "Inicio de sesión exitoso",
          description: `Bienvenido ${user?.name}`,
        })
        router.push("/promociones")
      } else {
        toast({
          title: "Error de inicio de sesión",
          description: "Correo electrónico o contraseña incorrectos",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error al iniciar sesión",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Validar requisitos de contraseña
  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)
    const isLongEnough = password.length >= 8

    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isLongEnough
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Validar que las contraseñas coincidan
    if (registerPassword !== registerConfirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    // Validar requisitos de contraseña
    if (!validatePassword(registerPassword)) {
      toast({
        title: "Error",
        description: "La contraseña no cumple con los requisitos de seguridad",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    try {
      const success = await register({
        name: registerName,
        lastName: registerLastName,
        email: registerEmail,
        password: registerPassword,
        phone: registerPhone,
        address: registerAddress,
        authProvider: "email",
      })

      if (success) {
        toast({
          title: "Registro exitoso",
          description: `Bienvenido ${registerName}, tu cuenta ha sido creada correctamente`,
        })
        router.push("/promociones")
      } else {
        toast({
          title: "Error de registro",
          description: "El correo electrónico ya está registrado",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error al registrarse",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (user) {
    return null // No renderizar nada si el usuario ya está autenticado
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-md space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-primary">Bienvenido a Sweet Sky</h1>
              <p className="text-gray-500">Inicia sesión para realizar pedidos y más</p>
            </div>

            <Button
              className="w-full bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 flex items-center justify-center gap-2"
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path
                    fill="#4285F4"
                    d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                  />
                  <path
                    fill="#34A853"
                    d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                  />
                </g>
              </svg>
              {isLoading ? "Cargando..." : "Continuar con Google"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">O continúa con</span>
              </div>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Iniciar sesión</TabsTrigger>
                <TabsTrigger value="register">Registrarse</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle>Iniciar sesión</CardTitle>
                    <CardDescription>Ingresa tus credenciales para acceder a tu cuenta</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          required
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Contraseña</Label>
                          <a href="#" className="text-xs text-pink-600 hover:underline">
                            ¿Olvidaste tu contraseña?
                          </a>
                        </div>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showLoginPassword ? "text" : "password"}
                            required
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowLoginPassword(!showLoginPassword)}
                          >
                            {showLoginPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-500" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-500" />
                            )}
                            <span className="sr-only">
                              {showLoginPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            </span>
                          </Button>
                        </div>
                      </div>
                      <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" disabled={isLoading}>
                        {isLoading ? "Cargando..." : "Iniciar sesión"}
                      </Button>

                      {/* Credenciales de prueba */}
                      <div className="mt-4 p-3 bg-gray-50 rounded-md border text-sm">
                        <p className="font-medium mb-1">Credenciales de prueba:</p>
                        <p>Email: soporte@sweetsky.com</p>
                        <p>Contraseña: sweetsky123</p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="register">
                <Card>
                  <CardHeader>
                    <CardTitle>Crear cuenta</CardTitle>
                    <CardDescription>Regístrate para realizar pedidos y más</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <form onSubmit={handleRegister} className="space-y-4">
                      <Alert className="bg-yellow-50 border-yellow-200 text-yellow-800">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          Los campos de nombre, apellido y correo electrónico no podrán ser modificados después del
                          registro. Por favor, asegúrate de ingresar la información correcta.
                        </AlertDescription>
                      </Alert>

                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Nombre <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          placeholder="Tu nombre"
                          required
                          value={registerName}
                          onChange={(e) => setRegisterName(e.target.value)}
                        />
                        <p className="text-xs text-gray-500">Este campo no podrá ser modificado después.</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">
                          Apellidos <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Tus apellidos"
                          required
                          value={registerLastName}
                          onChange={(e) => setRegisterLastName(e.target.value)}
                        />
                        <p className="text-xs text-gray-500">Este campo no podrá ser modificado después.</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="registerEmail">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="registerEmail"
                          type="email"
                          placeholder="tu@email.com"
                          required
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                        />
                        <p className="text-xs text-gray-500">Este campo no podrá ser modificado después.</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Tu número de teléfono"
                          value={registerPhone}
                          onChange={(e) => setRegisterPhone(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Dirección</Label>
                        <Input
                          id="address"
                          placeholder="Tu dirección"
                          value={registerAddress}
                          onChange={(e) => setRegisterAddress(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="registerPassword">
                          Contraseña <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Input
                            id="registerPassword"
                            type={showRegisterPassword ? "text" : "password"}
                            required
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                          >
                            {showRegisterPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-500" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-500" />
                            )}
                            <span className="sr-only">
                              {showRegisterPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            </span>
                          </Button>
                        </div>
                        <PasswordStrength password={registerPassword} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">
                          Confirmar contraseña <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <Input
                            id="confirmPassword"
                            type={showRegisterConfirmPassword ? "text" : "password"}
                            required
                            value={registerConfirmPassword}
                            onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                            className={
                              registerConfirmPassword
                                ? registerPassword === registerConfirmPassword
                                  ? "border-green-500"
                                  : "border-red-500"
                                : ""
                            }
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowRegisterConfirmPassword(!showRegisterConfirmPassword)}
                          >
                            {showRegisterConfirmPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-500" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-500" />
                            )}
                            <span className="sr-only">
                              {showRegisterConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            </span>
                          </Button>
                        </div>
                        <PasswordMatch password={registerPassword} confirmPassword={registerConfirmPassword} />
                      </div>

                      <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" disabled={isLoading}>
                        {isLoading ? "Cargando..." : "Registrarse"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
