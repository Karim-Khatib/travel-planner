import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { supabase } from '@/db/SupabaseClinet';
import TripsPlanCard from '@/components/TripsPlanCard';
import ItineraryTimeline from '@/components/ItineraryTimeline';

export const Route = createFileRoute('/home/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = useParams({ "from": "/home/$id" })
  const [plan, setPlan] = useState<any | null>([])
  const {t}=useTranslation()
  const navigation=useNavigate()
  useEffect(() => {
    const fetchPlans = async () => {
            console.log({  id})

      const { data ,error } = await supabase
        .from("plans")
        .select("*")
        .eq("id", id)
        .maybeSingle();
      setPlan(data);
      console.log({  data ,error})
    };

    fetchPlans();
  }, [id])
  return <div className='flex-1 w-full '>
     <div className="flex items-center gap-2 p-4 bg-background text-foreground">
      <button onClick={()=>{
        navigation({
          to:"/home"
        })
      }} className="rounded-full border border-muted p-1.5 hover:bg-muted transition-colors">
        <ArrowLeft className="h-4 w-4" />
      </button>
      {plan?.plan?.input && <h1 className="text-lg font-medium">{t("Trip plan to {{city}}",{city:plan?.plan?.input?.toCity?.name})}</h1>}
    </div>
    {plan?.plan?.input && <TripsPlanCard plan={plan?.plan?.input}></TripsPlanCard>}
    {plan?.dayes && <ItineraryTimeline days={plan?.dayes}></ItineraryTimeline>}

  </div>
}
