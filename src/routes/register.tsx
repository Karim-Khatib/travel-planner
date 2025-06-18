import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useStore } from '@tanstack/react-store';
import { userStore } from '@/lib/userStore';
import RegisterForm from '@/components/RegisterForm';
import CircularLoading from '@/components/ui/CircularLoading';

export const Route = createFileRoute('/register')({
  component: RouteComponent,
})

function RouteComponent() {
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
          
          <RegisterForm />
      </div>
}
