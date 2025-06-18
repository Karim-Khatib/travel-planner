import { useStore } from '@tanstack/react-store'
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CitySelector from './CitySelector';
import { Button } from './ui/button';
import type { City } from '@/lib/types';
import { tripsPlanStore } from '@/lib/useTirpsPlan'

export default function CityPlan() {
    const plan = useStore(tripsPlanStore);
    const { t } = useTranslation()

    const [city, setSelected] = useState<City | undefined>(undefined);
    const onChange = useCallback((p: City) => {
        setSelected(p);

    }, [plan, city])
    const onContinue = useCallback(() => {
        if (city) {
            tripsPlanStore.setState((s) => {
                return ({
                    tripsPlan: {
                        ...s.tripsPlan,
                        toCity: city,
                    },
                    state: "budget"
                })
            })
        }
    }, [city, plan])
    return (
        <div className='flex-1 gap-20 w-full flex flex-col items-center justify-center p-4 max-w-96'>
            <CitySelector
                selected={city}
                onChange={onChange} />
            <Button
                className='bg-cyan-500 rounded-full max-w-52'
                onClick={onContinue}>{t("Continue")}</Button>
        </div>
    )
}
