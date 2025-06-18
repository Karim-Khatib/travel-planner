import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useStore } from '@tanstack/react-store'
import { LoginForm } from '@/components/LoginForm'
import { userStore } from '@/lib/userStore'
import CircularLoading from '@/components/ui/CircularLoading'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t } = useTranslation()
  const {user ,loading} = useStore(userStore, (s) => s)
   const navigate = useNavigate()
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularLoading />
      </div>
    )

  }
  if( user) {
    navigate({ to: '/home' })
    return null;
  }
  return <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="p-6 border rounded-lg shadow w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">{t("login.title")}</h1>
        <LoginForm />
      </div>
    </div>
}
