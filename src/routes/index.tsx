import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useStore } from '@tanstack/react-store'
import backgoundImag from '../../public/backgound.jpg'
import { userStore } from '@/lib/userStore'
import MainLayout from '@/components/MainLayout'
import CircularLoading from '@/components/ui/CircularLoading'
import Header from '@/components/Header'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { user, loading } = useStore(userStore, (s) => s)
  const navigate = useNavigate()
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularLoading />
      </div>
    )

  }
  if (user) {
    navigate({ to: '/home' })
    return null;
  }
  return (
    <div className='bg-amber-500 w-full'>
<div className='w-full   relative h-full'>
  <img src={backgoundImag} className='w-full h-[720px] ' />
  <div className='absolute top-0 start-0 w-full h-full flex flex-col items-center justify-start'>
   <div>
     <Header />
    <MainLayout />
   </div>
   
  </div>
</div>
    </div>
    // <div className='h-full w-full flex flex-col '>
    //   <div className='w-full   relative h-full'>
    //     <img src={backgoundImag} className='w-full h-[720px] ' />
    //     <div className='absolute top-0 start-0 w-full h-full flex flex-col items-center justify-center'>
    //       <Header />
    //       <MainLayout />
    //     </div>
    //   </div>
    // </div>
    // <div className='w-full   h-full flex flex-col'>
    //   <img src={backgoundImag} className='w-full h-[720px] ' />
    //   <div className='absolute z-10 top-0 start-0 w-full h-full flex flex-col items-center justify-center'>
    //     <div >
    //     <Header />
    //     <MainLayout />
    //     </div>
    //   </div>
    // </div>


  )
}
