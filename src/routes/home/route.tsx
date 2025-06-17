import { Outlet, createFileRoute, useNavigate } from '@tanstack/react-router'
import { useStore } from '@tanstack/react-store'
import Header from '@/components/Header'
import { userStore } from '@/lib/userStore'

export const Route = createFileRoute('/home')({
  component: RouteComponent,
})

function RouteComponent() {
  const { user, } = useStore(userStore, (s) => s)
  const navigate = useNavigate()

  if (!user) {
    navigate({ to: '/' })
    return null;
  }
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-black/2 overflow-y-hidden">
      <Header isWhite={false} />
      <div className='flex-1 flex flex-col  bg-background mb-6  rounded-3xl shadow shadow-black/20 p-4 min-h-full w-full max-w-[1080px] justify-start items-center overflow-y-auto'>
        <Outlet />
      </div>
    </div>)
}
