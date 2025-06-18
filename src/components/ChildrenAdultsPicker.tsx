import { useStore } from "@tanstack/react-store";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import TripsPlanCard from "./TripsPlanCard";
import { GuestCounter } from "./GuestCounter";
import { Button } from "./ui/button";
import { tripsPlanStore } from "@/lib/useTirpsPlan";

export default function ChildrenAdultsPicker() {
    const plan = useStore(tripsPlanStore);
    const [adults, setAdults] = useState(1)
    const [children, setChildren] = useState(0);
    const { t } = useTranslation()
    const onContinue = useCallback(() => {
        if (adults + children > 0) {
            tripsPlanStore.setState((s) => {
                return ({
                    tripsPlan: {
                        ...s.tripsPlan,
                        childrenCount: children,
                        adultsCount: adults,
                    },
                    state: "interests"
                })
            })
        }
    }, [adults, children, plan])
    return (
        <div className="w-full flex-1 p-4 flex flex-col justify-between gap-5 items-center ">
            <TripsPlanCard
                plan={plan.tripsPlan}
            />

            <div className="w-96 flex flex-col items-center gap-2">
                <p className="text-sm text-muted-foreground">{t("plan.childrenAdults")}</p>
                <GuestCounter count={adults} setCount={setAdults} label={t("Adults")} min={0} />
                <GuestCounter count={children} setCount={setChildren} label={t("Children")} min={0} />
                

            </div>
            <Button
                    className='bg-cyan-500 rounded-full max-w-52'
                    onClick={onContinue}>{t("Continue")}</Button>

        </div>
    )
}
