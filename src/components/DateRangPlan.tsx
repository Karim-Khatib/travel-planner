import { useStore } from '@tanstack/react-store';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import TripsPlanCard from './TripsPlanCard'
import { DateRangePicker } from './DateRangePicker';
import { Button } from './ui/button';
import type { DateRange } from 'react-day-picker';
import { tripsPlanStore } from '@/lib/useTirpsPlan';

export default function DateRangPlan() {
    const plan = useStore(tripsPlanStore);
    const { t } = useTranslation();
    const [dateRange, setDateRange] = useState<DateRange | undefined>();
    const onContinue = useCallback(() => {
        if (dateRange) {
            tripsPlanStore.setState((s) => {
                return ({
                    tripsPlan: {
                        ...s.tripsPlan,
                        endDate: dateRange.to?.toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        }) ?? "",
                        startDate: dateRange.from?.toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        }) ?? "",
                    },
                    state: "adults"
                })
            })
        }

    }, [dateRange, plan])
    return (
        <div className='flex-1 p-5 w-full h-full flex flex-col justify-between items-center'>
            <TripsPlanCard
                plan={plan.tripsPlan}
            />
            <DateRangePicker
                date={dateRange}
                setDate={setDateRange}
            />
            <Button
                className='bg-cyan-500 rounded-full max-w-52'
                onClick={onContinue}>{t("Continue")}</Button>
        </div>
    )
}
