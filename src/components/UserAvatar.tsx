import { useStore } from '@tanstack/react-store'
import { Avatar } from './ui/avatar'
import { userStore } from '@/lib/userStore'
import { cn } from '@/lib/utils'

export default function UserAvatar({size = 'sm'}:{size?: 'sm' | 'md' | 'lg' }) {
    const {user}= useStore( userStore)
    
  return (
     <div className={cn('bg-muted-foreground rounded-full p-0.5 flex flex-col justify-center items-center',{
        'h-8 w-8': size === 'sm',
        'h-10 w-10': size === 'md',
        'h-12 w-12': size === 'lg'

     })}>
        <p className='text-xl text-background'>{user?.app_metadata['name']?.[0]?.toUpperCase()??"A"}</p>
      </div>
  )
}
