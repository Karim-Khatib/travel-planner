'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from '@tanstack/react-router'
import { Label } from './ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import { signInWithEmail } from '@/lib/userStore'

export function LoginForm() {
  const { t } = useTranslation()
const navigate = useNavigate()
  const schema = z.object({
    email: z.string().email(t('login.invalidEmail')),
    password: z.string().min(6, t('login.passwordMin')),
  })

  type LoginFormValues = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = useCallback((values: LoginFormValues) => {
     signInWithEmail(values.email, values.password)
  }, [])
  const goToRegister = useCallback(() => {
    navigate({ to: '/register' })
  },[])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label className="block mb-1 text-sm font-medium">{t('login.email')}</Label>
        <Input type="email" {...register('email')} placeholder="you@example.com" />
        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <Label className="block mb-1 text-sm font-medium">{t('login.password')}</Label>
        <Input type="password" {...register('password')} placeholder="********" />
        {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
      </div>

      <Button type="submit" className="w-full">
        {t('login.submit')}
      </Button>
       <Button 
       onClick={goToRegister} type="button" variant={'link'} className="w-full">
        {t('login.createAccount')}
      </Button>
    </form>
  )
}
