import { useTranslation } from 'react-i18next';
import bgCity from '../assets/city.jpg';
import type { TripsPlan } from "@/lib/types";
import { cn } from '@/lib/utils';

export default function TripsPlanCard({ plan, onClick }: { plan: TripsPlan, onClick?: () => void }) {
    const { t } = useTranslation()
    console.log({ city: plan })
    return (
        <div
            onClick={onClick}
            className={cn('w-full flex flex-row  h-24 rounded-3xl justify-start gap-20 border p-0.5', {
                "cursor-pointer": onClick !== undefined
            })}
        >
            <div
                style={{ backgroundImage: `url(${bgCity})`, backgroundSize: "cover", backgroundPosition: "center" }}
                className='w-32 h-full object-cover rounded-3xl overflow-hidden flex flex-col justify-center items-center'
            >
                {plan.toCity.country && plan.toCity.name && <p className='text-background text-sm'>{plan.toCity.country}, {plan.toCity.name}</p>}

            </div>
            {(plan.budget > 0) && <div
                className='flex flex-col justify-center items-center gap-2'
            >
                <p className='font-bold'>{t("Budget")}</p>
                <p className='font-normal'>{plan.budget} $</p>
            </div>}
            {(plan.startDate.length > 0 && plan.endDate.length > 0) && <div
                className='flex flex-col justify-center items-start gap-2 '
            >
                <p className='font-bold'>{t("Date")}</p>
                <p className='font-normal'>{plan.startDate} - {plan.endDate}</p>
            </div>}
            {plan.childrenCount + plan.adultsCount > 0 && <div
                className='flex flex-col justify-center items-start gap-2'
            >
                <p className='font-bold'>{t("Guests")}</p>
                <p className='font-normal'>{t("{{adults}} adults, {{children}} children", { adults: plan.adultsCount, children: plan.childrenCount })}</p>
            </div>}
        </div>
    )
}
