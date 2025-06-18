import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import type { Interes } from "@/lib/types";
import { cn } from "@/lib/utils";
import { INTERESTS } from "@/lib/constant";

export default function InterestSelector({
    selected,
    onChange,
    city
}: {
    selected: Array<Interes>;
    onChange: (values: Array<Interes>) => void;
    city?: string;
}) {
    const { t } = useTranslation();
    const toggle = useCallback((key: Interes) => {
        if (selected.map((e)=>e.key).includes(key.key)) {
            onChange(selected.filter((item) => item.key !== key.key));
        } else {
            onChange([...selected, key]);
        }
    }, [selected, onChange]);

    return (
        <div className="space-y-4">
            {city && <h2 className="text-center text-lg font-medium text-foreground">
                {t("interests.titleWithCity", { city })}
            </h2>}
            <div className="flex flex-wrap justify-center gap-3">
                {INTERESTS.map((ob) => (
                    <button
                    type="button"
                        key={ob.key}
                        onClick={() => toggle(ob)}
                        className={cn(
                            "px-4 py-2 cursor-pointer rounded-full text-sm font-medium border transition",
                            {
                                "bg-foreground text-background": selected.map((e)=>e.key).includes(ob.key),
                                "bg-muted text-muted-foreground": !selected.map((e)=>e.key).includes(ob.key)
                            }
                        )}
                    >
                        <span className="mr-1">{ob.emoji}</span> {t(`interests.${ob.key}`)}
                    </button>
                ))}
            </div>
        </div>
    );
}
