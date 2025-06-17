


import { useStore } from '@tanstack/react-store'
import { useTranslation } from 'react-i18next'
import { useNavigate } from '@tanstack/react-router'
import CircularLoading from './ui/CircularLoading'
import { Button } from './ui/button'
import UserAvatar from './UserAvatar'
import { signOut, userStore } from '@/lib/userStore'

export default function AuthButton() {
    const {user, loading} = useStore(userStore, (s) => s)
    const navigation=useNavigate()
    const {t}=useTranslation()

    if(loading){
        return <CircularLoading/>
    }
    if(user){
        return (
            <div className=' flex flex-row items-center gap-4'>
            <UserAvatar/>
            <Button onClick={signOut} variant={ "destructive"} className='rounded-full'>
                {t('logout')}
            </Button>
            </div>
        )
    }
  return (
    <Button className='rounded-full bg-background/20' variant={'secondary'} onClick={() => navigation({to:'/login'})}>{t('login.title')}</Button>
  )
}
