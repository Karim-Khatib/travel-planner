import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import AuthButton from './AuthButton'
import { cn } from '@/lib/utils'

export default function Header({ isWhite = true }: { isWhite?: boolean }) {
  const { t } = useTranslation()
  return (
    <header className=" max-w-[1080px] p-2 h-20 w-full flex flex-row justify-between gap-2 items-center  bg-transparent text-foreground">
      <p className={cn('text-2xl ', {
        "text-background": isWhite,
        "text-foreground": !isWhite
      })}>
        Travelio
      </p>
      <nav className={cn("flex flex-row ", {
        "text-background": isWhite,
        "text-foreground": !isWhite
      })}>
        <div className="px-2 font-bold">
          <Link to="/">{t('features')}</Link>
        </div>
        <div className="px-2 font-bold">
          <Link to="/">{t('about')}</Link>
        </div>
        <div className="px-2 font-bold">
          <Link to="/">{t('contact_us')}</Link>
        </div>
      </nav>
      <AuthButton />
    </header>
  )
}
