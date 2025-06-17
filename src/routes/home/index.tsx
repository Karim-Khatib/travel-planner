import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import UserAvatar from '@/components/UserAvatar'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/home/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {t}=useTranslation()
  return <div className='flex flex-col items-center justify-start h-screen gap-4'>
    <UserAvatar/>
    
    <Button className='bg-cyan-500 rounded-full' variant={"default"}>
      {t('generate')}
    </Button>
    </div>
}
