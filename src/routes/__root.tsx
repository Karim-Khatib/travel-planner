import { Outlet, createRootRoute } from '@tanstack/react-router'
import { useStore } from '@tanstack/react-store'
import { userStore } from '@/lib/userStore'
import CircularLoading from '@/components/ui/CircularLoading'

export const Route = createRootRoute({
  component: RootRoute,
})
function RootRoute() {
  const { loading } = useStore(userStore, (s) => s)


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularLoading />
      </div>
    )
  }
    return (
    <div className='h-full w-full flex flex-col bg-background'>
      <Outlet  />
      </div>)
  // if (location.pathname === '/login' || location.pathname === '/register') {
  // }
  // return (
  //   <div className='h-full w-full flex flex-col '>
  //     <div className='w-full   relative h-full'>
  //       <img src={backgoundImag} className='w-full h-[720px] ' />
  //       <div className='absolute top-0 start-0 w-full h-full flex flex-col items-center justify-center'>
  //         <Header />
  //         <Outlet />
  //       </div>
  //     </div>
  //   </div>
  // )
}