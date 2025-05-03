"use client"

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
import { Loader2, Lock, User, MapPin, Phone, Eye, EyeOff } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { PasswordStrength } from "@/components/password-strength"

export default function ProfilePage() {
  const { user, updateUserProfile, updatePassword, isLoading } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  // Estado para el modo de edición
  const [isEditing, setIsEditing] = useState(false)

  // Estados para los campos editables
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  // Estados para cambio de contraseña
  const [currentPassword, setCurrentPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [changingPassword, setChangingPassword] = useState(false)

  // Cargar datos del usuario
  useEffect(() => {
    if (user) {
      setPhone(user.phone || "")
      setAddress(user.address || "")
    } else {
      // Redirigir si no hay usuario autenticado
      router.push("/login")
    }
  }, [user, router])

  // Validar requisitos de contraseña
  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)
    const isLongEnough = password.length >= 8

    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isLongEnough
  }

  if (!user) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto" />
            <p className="mt-2">Cargando...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleSaveProfile = async () => {
    try {
      const success = await updateUserProfile({
        phone,
        address,
      })

      if (success) {
        toast({
          title: "Perfil actualizado",
          description: "Tu información ha sido actualizada correctamente",
        })
        setIsEditing(false)
      } else {
        toast({
          title: "Error",
          description: "No se pudo actualizar tu información",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error al actualizar tu perfil",
        variant: "destructive",
      })
    }
  }

  const handleCancelEdit = () => {
    // Restaurar valores originales
    setPhone(user.phone || "")
    setAddress(user.address || "")
    setIsEditing(false)

    toast({
      title: "Cambios cancelados",
      description: "Se han descartado los cambios",
    })
  }

  const handleChangePassword = async () => {
    // Validar que las contraseñas coincidan
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas nuevas no coinciden",
        variant: "destructive",
      })

      return
    }

    // Validar requisitos de contraseña
    if (!validatePassword(newPassword)) {
      toast({
        title: "Error",
        description: "La contraseña no cumple con los requisitos de seguridad",
        variant: "destructive",
      })
      return
    }

    try {
      setChangingPassword(true)
      const success = await updatePassword(currentPassword, newPassword)

      if (success) {
        toast({
          title: "Contraseña actualizada",
          description: "Tu contraseña ha sido actualizada correctamente",
        })
        setCurrentPassword("")
        setNewPassword("")
        setConfirmPassword("")
      } else {
        toast({
          title: "Error",
          description: "La contraseña actual es incorrecta",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error al cambiar tu contraseña",
        variant: "destructive",
      })
    } finally {
      setChangingPassword(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Mi Perfil</h1>

            <Tabs defaultValue="info" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="info">Información Personal</TabsTrigger>
                <TabsTrigger value="security">Seguridad</TabsTrigger>
              </TabsList>

              <TabsContent value="info" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      Información Personal
                    </CardTitle>
                    <CardDescription>Visualiza y actualiza tu información personal</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-end">
                      {!isEditing ? (
                        <Button onClick={() => setIsEditing(true)} variant="outline">
                          Editar información
                        </Button>
                      ) : (
                        <div className="space-x-2">
                          <Button onClick={handleCancelEdit} variant="outline">
                            Cancelar
                          </Button>
                          <Button onClick={handleSaveProfile} disabled={isLoading}>
                            {isLoading ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Guardando...
                              </>
                            ) : (
                              "Guardar cambios"
                            )}
                          </Button>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Nombre</Label>
                          <Input value={user.name} disabled className="bg-gray-50" />
                          <p className="text-xs text-gray-500">Este campo no se puede editar</p>
                        </div>
                        <div className="space-y-2">
                          <Label>Apellidos</Label>
                          <Input value={user.lastName || ""} disabled className="bg-gray-50" />
                          <p className="text-xs text-gray-500">Este campo no se puede editar</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Email</Label>
                        <Input value={user.email} disabled className="bg-gray-50" />
                        <p className="text-xs text-gray-500">Este campo no se puede editar</p>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Phone className="mr-2 h-4 w-4" />
                          <Label>Teléfono</Label>
                        </div>
                        <Input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          disabled={!isEditing}
                          className={!isEditing ? "bg-gray-50" : ""}
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4" />
                          <Label>Dirección</Label>
                        </div>
                        <Input
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          disabled={!isEditing}
                          className={!isEditing ? "bg-gray-50" : ""}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lock className="mr-2 h-5 w-5" />
                      Seguridad
                    </CardTitle>
                    <CardDescription>Actualiza tu contraseña y configura opciones de seguridad</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Cambiar contraseña</h3>

                      <div className="space-y-2">
                        <Label htmlFor="current-password">Contraseña actual</Label>
                        <div className="relative">
                          <Input
                            id="current-password"
                            type={showCurrentPassword ? "text" : "password"}
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          >
                            {showCurrentPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-500" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-500" />
                            )}
                            <span className="sr-only">
                              {showCurrentPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            </span>
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="new-password">Nueva contraseña</Label>
                        <div className="relative">
                          <Input
                            id="new-password"
                            type={showNewPassword ? "text" : "password"}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                          >
                            {showNewPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-500" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-500" />
                            )}
                            <span className="sr-only">
                              {showNewPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            </span>
                          </Button>
                        </div>
                        <PasswordStrength password={newPassword} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar nueva contraseña</Label>
                        <div className="relative">
                          <Input
                            id="confirm-password"
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={
                              confirmPassword
                                ? newPassword === confirmPassword
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
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-500" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-500" />
                            )}
                            <span className="sr-only">
                              {showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            </span>
                          </Button>
                        </div>
                        {confirmPassword && (
                          <div
                            className={`text-xs ${newPassword === confirmPassword ? "text-green-600" : "text-red-600"}`}
                          >
                            {newPassword === confirmPassword
                              ? "Las contraseñas coinciden"
                              : "Las contraseñas no coinciden"}
                          </div>
                        )}
                      </div>

                      <Button
                        onClick={handleChangePassword}
                        disabled={
                          changingPassword ||
                          !currentPassword ||
                          !newPassword ||
                          !confirmPassword ||
                          newPassword !== confirmPassword
                        }
                      >
                        {changingPassword ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Actualizando...
                          </>
                        ) : (
                          "Cambiar contraseña"
                        )}
                      </Button>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Método de inicio de sesión</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Proveedor de autenticación</p>
                          <p className="text-sm text-gray-500">
                            {user.authProvider === "google" ? "Google" : "Email y contraseña"}
                          </p>
                        </div>
                      </div>
                    </div>
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
