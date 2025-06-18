import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import UserAvatar from '@/components/UserAvatar'
import { Button } from '@/components/ui/button'
import { supabase } from '@/db/SupabaseClinet'
import TripsPlanCard from '@/components/TripsPlanCard'

export const Route = createFileRoute('/home/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [plans, setPlans] = useState<Array<any> | null>([])
  useEffect(() => {
    const fetchPlans = async () => {
      const { data } = await supabase
        .from("plans")
        .select("*")
        .order("created_at", { ascending: false });
      const datatemp = data
      setPlans(datatemp);
    };

    fetchPlans();
  }, [])
  const { t } = useTranslation()
  const navigatie = useNavigate()
  return <div className='flex flex-col items-center justify-start h-screen gap-4'>
    <UserAvatar />
    {(plans && plans.length) &&
      plans.map((item, index) => (<TripsPlanCard
        onClick={() => {
          navigatie({
            to: "/home/$id", params: {
              id: item.id,
            }
          })
        }}
        key={index} plan={item.plan.input} />))
    }
    <Button onClick={() => navigatie({ to: "/home/generate-plane" })} className='bg-cyan-500 rounded-full' variant={"default"}>
      {t('generate')}
    </Button>
  </div>
}
