import { useStore } from '@tanstack/react-store'
import { t } from 'i18next'
import bgCity from '../assets/city.jpg'
import CircularLoading from './ui/CircularLoading'
import { tripsPlanStore } from '@/lib/useTirpsPlan'

export default function LoadingGeneratePlane() {
    const plan = useStore(tripsPlanStore,)
    return (
        <div className='flex-1 p-5 w-full h-full flex flex-col  items-center gap-4'>
            <div
                style={{ backgroundImage: `url(${plan.tripsPlan.toCity.cityPhoto ?? bgCity})`, backgroundSize: "cover", backgroundPosition: "center" }}
                className='w-64 h-80 gap-4 bg-black/50 object-cover rounded-3xl overflow-hidden flex flex-col justify-end p-4 items-center'
            >
                {plan.tripsPlan.toCity.country && plan.tripsPlan.toCity.name && <p className='text-background text-xl '>{plan.tripsPlan.toCity.country}, {plan.tripsPlan.toCity.name}</p>}


            </div>
            <p className='text-foreground text-sm font-normal'>
                {t("Generating your plan...")}
            </p>
            <CircularLoading />
        </div>
    )
}
