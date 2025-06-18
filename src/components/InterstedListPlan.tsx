import { useStore } from '@tanstack/react-store';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from '@tanstack/react-router';
import InterestSelector from './InterestSelector';
import { Button } from './ui/button';
import TripsPlanCard from './TripsPlanCard';
import type { City, Interes } from '@/lib/types';
import { tripsPlanStore } from '@/lib/useTirpsPlan';
import { hadelGeneratePlan } from '@/lib/ai';
import { userStore } from '@/lib/userStore';
import { CITIES } from '@/lib/constant';

export default function InterstedListPlan() {
    const plan = useStore(tripsPlanStore);
    const {user}= useStore(userStore);
    const userHomeAirePort= user?.user_metadata["homeAirePort"] as City | undefined;
    const [interests, setInterests] = useState<Array<Interes>>()
    const { t } = useTranslation()
    const navigate=useNavigate()
    const onContinue = useCallback(() => {
        if (interests && interests.length > 0) {
            tripsPlanStore.setState((s) => {
                return ({
                    tripsPlan: {
                        ...s.tripsPlan,
                        interests: interests,
                    },
                    state: "generate"
                })
            })
        }
        hadelGeneratePlan(plan.tripsPlan,userHomeAirePort??CITIES[0],navigate )

    }, [interests, plan])
    return (
        <div className='flex-1 flex flex-col items-center  w-full '>
            <TripsPlanCard plan={plan.tripsPlan}></TripsPlanCard>
            <div className='w-96 flex-1 flex flex-col justify-center items-center gap-2'>
                <InterestSelector onChange={setInterests} selected={interests || []} city={plan.tripsPlan.toCity.name}></InterestSelector>
                <Button
                    className='bg-cyan-500 rounded-full max-w-52'
                    onClick={onContinue}>{t("Continue")}</Button>
            </div>

        </div>
    )
}
