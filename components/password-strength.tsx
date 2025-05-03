import { CheckCircle2, XCircle } from "lucide-react"

interface PasswordStrengthProps {
  password: string
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  // Criterios de validación
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)
  const isLongEnough = password.length >= 8

  // Calcular puntuación de seguridad
  const criteria = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar, isLongEnough]
  const metCriteria = criteria.filter(Boolean).length

  // Determinar nivel de seguridad
  let strengthLevel = "baja"
  let strengthColor = "bg-red-500"

  if (metCriteria >= 4) {
    strengthLevel = "fuerte"
    strengthColor = "bg-green-500"
  } else if (metCriteria >= 3) {
    strengthLevel = "aceptable"
    strengthColor = "bg-yellow-500"
  }

  if (!password) {
    return null
  }

  return (
    <div className="space-y-2 mt-1">
      <div className="text-xs font-medium">
        Seguridad de la contraseña: <span className="font-semibold">{strengthLevel}</span>
      </div>

      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${strengthColor} transition-all duration-300`}
          style={{ width: `${(metCriteria / 5) * 100}%` }}
        />
      </div>

      <ul className="space-y-1 text-xs">
        <li className="flex items-center gap-1">
          {hasUpperCase ? (
            <CheckCircle2 className="h-3 w-3 text-green-500" />
          ) : (
            <XCircle className="h-3 w-3 text-red-500" />
          )}
          <span>Al menos una letra mayúscula</span>
        </li>
        <li className="flex items-center gap-1">
          {hasLowerCase ? (
            <CheckCircle2 className="h-3 w-3 text-green-500" />
          ) : (
            <XCircle className="h-3 w-3 text-red-500" />
          )}
          <span>Al menos una letra minúscula</span>
        </li>
        <li className="flex items-center gap-1">
          {hasNumber ? (
            <CheckCircle2 className="h-3 w-3 text-green-500" />
          ) : (
            <XCircle className="h-3 w-3 text-red-500" />
          )}
          <span>Al menos un número</span>
        </li>
        <li className="flex items-center gap-1">
          {hasSpecialChar ? (
            <CheckCircle2 className="h-3 w-3 text-green-500" />
          ) : (
            <XCircle className="h-3 w-3 text-red-500" />
          )}
          <span>Al menos un carácter especial</span>
        </li>
        <li className="flex items-center gap-1">
          {isLongEnough ? (
            <CheckCircle2 className="h-3 w-3 text-green-500" />
          ) : (
            <XCircle className="h-3 w-3 text-red-500" />
          )}
          <span>Mínimo 8 caracteres</span>
        </li>
      </ul>
    </div>
  )
}

export function PasswordMatch({ password, confirmPassword }: { password: string; confirmPassword: string }) {
  if (!confirmPassword) return null

  const matches = password === confirmPassword

  return (
    <div className={`flex items-center gap-1 mt-1 text-xs ${matches ? "text-green-600" : "text-red-600"}`}>
      {matches ? (
        <>
          <CheckCircle2 className="h-3 w-3" />
          <span>Las contraseñas coinciden</span>
        </>
      ) : (
        <>
          <XCircle className="h-3 w-3" />
          <span>Las contraseñas no coinciden</span>
        </>
      )}
    </div>
  )
}
