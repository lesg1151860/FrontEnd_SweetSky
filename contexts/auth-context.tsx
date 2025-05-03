"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { PromotionAlert } from "@/components/promotion-alert"

export type User = {
  id: string
  name: string
  lastName?: string
  email: string
  phone?: string
  address?: string
  role: string
  authProvider: "email" | "google"
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (userData: Omit<User, "id" | "role"> & { password: string }) => Promise<boolean>
  logout: () => void
  updateUserProfile: (userData: Partial<User>) => Promise<boolean>
  updatePassword: (currentPassword: string, newPassword: string) => Promise<boolean>
  isLoading: boolean
  showPromotionAlert: boolean
  setShowPromotionAlert: (show: boolean) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showPromotionAlert, setShowPromotionAlert] = useState(false)

  // Verificar si hay un usuario en localStorage al cargar
  useEffect(() => {
    const storedUser = localStorage.getItem("sweetsky_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // Usuario predefinido para Soporte Sweet Sky
  const predefinedUser = {
    id: "1",
    name: "Soporte",
    lastName: "Sweet Sky",
    email: "soporte@sweetsky.com",
    password: "sweetsky123", // En una aplicación real, nunca almacenar contraseñas en texto plano
    phone: "3152323751",
    address: "Cúcuta, Colombia",
    role: "admin",
    authProvider: "email" as const,
  }

  // Simular una base de datos de usuarios
  const [users, setUsers] = useState<Array<typeof predefinedUser>>([predefinedUser])

  const login = async (email: string, password: string) => {
    // Simular una llamada a la API
    setIsLoading(true)

    // Buscar el usuario por email
    const foundUser = users.find((u) => u.email === email && u.password === password)

    if (foundUser) {
      const userData: User = {
        id: foundUser.id,
        name: foundUser.name,
        lastName: foundUser.lastName,
        email: foundUser.email,
        phone: foundUser.phone,
        address: foundUser.address,
        role: foundUser.role,
        authProvider: foundUser.authProvider,
      }

      setUser(userData)
      localStorage.setItem("sweetsky_user", JSON.stringify(userData))
      setIsLoading(false)

      // Mostrar alerta de promociones después del login
      setShowPromotionAlert(true)

      return true
    }

    setIsLoading(false)
    return false
  }

  const register = async (userData: Omit<User, "id" | "role"> & { password: string }) => {
    setIsLoading(true)

    // Verificar si el email ya está registrado
    if (users.some((u) => u.email === userData.email)) {
      setIsLoading(false)
      return false
    }

    // Crear nuevo usuario
    const newUser = {
      id: (users.length + 1).toString(),
      ...userData,
      role: "user",
    }

    // Agregar a la "base de datos"
    setUsers((prevUsers) => [...prevUsers, newUser])

    // Iniciar sesión automáticamente
    const userForAuth: User = {
      id: newUser.id,
      name: newUser.name,
      lastName: newUser.lastName,
      email: newUser.email,
      phone: newUser.phone,
      address: newUser.address,
      role: newUser.role,
      authProvider: newUser.authProvider,
    }

    setUser(userForAuth)
    localStorage.setItem("sweetsky_user", JSON.stringify(userForAuth))

    // Mostrar alerta de promociones después del registro
    setShowPromotionAlert(true)

    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("sweetsky_user")
    setShowPromotionAlert(false)
  }

  const updateUserProfile = async (userData: Partial<User>) => {
    if (!user) return false

    setIsLoading(true)

    // Actualizar usuario en la "base de datos"
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.id === user.id
          ? {
              ...u,
              ...userData,
            }
          : u,
      ),
    )

    // Actualizar usuario en el estado
    const updatedUser = { ...user, ...userData }
    setUser(updatedUser)
    localStorage.setItem("sweetsky_user", JSON.stringify(updatedUser))

    setIsLoading(false)
    return true
  }

  const updatePassword = async (currentPassword: string, newPassword: string) => {
    if (!user) return false

    setIsLoading(true)

    // Verificar la contraseña actual
    const currentUser = users.find((u) => u.id === user.id)
    if (!currentUser || currentUser.password !== currentPassword) {
      setIsLoading(false)
      return false
    }

    // Actualizar contraseña en la "base de datos"
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.id === user.id
          ? {
              ...u,
              password: newPassword,
            }
          : u,
      ),
    )

    setIsLoading(false)
    return true
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        updateUserProfile,
        updatePassword,
        isLoading,
        showPromotionAlert,
        setShowPromotionAlert,
      }}
    >
      {children}
      {showPromotionAlert && user && (
        <PromotionAlert
          title="¡Promociones especiales!"
          description="Descubre nuestras promociones del mes. ¡No te las pierdas!"
          linkText="Ver promociones"
          linkHref="/promociones"
        />
      )}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
