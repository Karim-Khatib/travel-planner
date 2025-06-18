import { useStore } from '@tanstack/react-store';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import TripsPlanCard from './TripsPlanCard';
import BudgetInput from './BudgeInput';
import { tripsPlanStore } from '@/lib/useTirpsPlan';

export default function BudgePlan() {
    const plan = useStore(tripsPlanStore);
    const { t } = useTranslation();
    const [amount, setAmount] = useState('400');
    const onContinue = useCallback(() => {
        if (amount) {
            tripsPlanStore.setState((s) => {
                return ({
                    tripsPlan: {
                        ...s.tripsPlan,
                        budget: Number(amount),
                    },
                    state: "dates"
                })
            })
        }
    }, [amount, plan])
    return (
        <div className='flex-1 p-5 w-full h-full flex flex-col justify-between items-center'>
            <TripsPlanCard
                plan={plan.tripsPlan}
            />
            <BudgetInput
                onChange={setAmount}
                value={amount}
            />
            <Button
                className='bg-cyan-500 rounded-full max-w-52'
                onClick={onContinue}>{t("Continue")}</Button>
        </div>
    )
}
