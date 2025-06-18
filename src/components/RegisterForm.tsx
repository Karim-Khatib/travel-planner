import { useForm } from "react-hook-form";
import {  z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, } from "react";
import { useStore } from '@tanstack/react-store'
import InterestSelector from "./InterestSelector";
import CitySelector from "./CitySelector";
import type { City, Interes } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { signUpWithEmail, userStore } from "@/lib/userStore";

export default function RegisterForm() {
  const { error } = useStore(userStore)
  const { t } = useTranslation();
  const navigate = useNavigate()
  const goToLogin = useCallback(() => {
    navigate({ to: '/login' })
  }, [])
  const schema = z.object({
    name: z.string().min(2, t("form.name_error")),
    email: z.string().email(t("form.email_error")),
    password: z.string().min(6, t("form.password_error")),
    interests: z.array(z.object({
      key: z.string(),
      emoji: z.string()
    }),).optional(),
    homeAirport: z.object({
      name: z.string(),
                    country: z.string() 
                      }).optional(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const interests = watch('interests')
  const homeAirport = watch('homeAirport')
  const setInterests = useCallback((selectedInterests: Array<Interes>) => {
    setValue('interests', selectedInterests)
  }, [setValue])
  const setHomeAirport = useCallback((airport:City) => {
    setValue('homeAirport', {name: airport.name, country: airport.country })
  }, [setValue])
  const onSubmit = useCallback(async (data: FormData) => {
    await signUpWithEmail(data.email, data.password, data.name,data.interests,data.homeAirport).then(() => { })

  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full space-y-6 p-6 rounded-xl border bg-background text-foreground shadow"
    >
      <h2 className="text-2xl font-semibold text-center">
        {t("form.title")}
      </h2>

      <div>
        <Label htmlFor="name" className="mb-1">{t("form.name")}</Label>
        <Input id="name" type="text" {...register("name")} />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="mb-1">{t("form.email")}</Label>
        <Input id="email" type="email" {...register("email")} />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="password" className="mb-1">{t("form.password")}</Label>
        <Input id="password" type="password" {...register("password")} />
        {errors.password && (
          <p className="text-sm text-destructive mt-1">{errors.password.message}</p>
        )}
      </div>
      <h1 className="text-lg font-semibold text-center mt-4 mb-2">
        {t("form.interests_title")}
      </h1>
      <InterestSelector onChange={setInterests} selected={interests || []} />

      <h1 className="text-lg font-semibold text-center mt-4 mb-2">
        {t("form.home_airport_title")}
      </h1>
      <CitySelector onChange={setHomeAirport} selected={homeAirport } />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? t("form.submitting") : t("form.submit")}
      </Button>

      {error && (
        <p className="text-sm text-center text-muted-foreground">{error}</p>
      )}
      <Button
        onClick={goToLogin} type="button" variant={'link'} className="w-full">
        {t('login.login')}
      </Button>
    </form>
  );
}
