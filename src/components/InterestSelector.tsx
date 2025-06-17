import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import { INTERESTS } from "@/lib/constant";

export default function InterestSelector({
    selected,
    onChange,
    city
}: {
    selected: Array<string>;
    onChange: (values: Array<string>) => void;
    city?: string;
}) {
    const { t } = useTranslation();
    const toggle = useCallback((key: string) => {
        if (selected.includes(key)) {
            onChange(selected.filter((item) => item !== key));
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
                {INTERESTS.map(({ key, emoji }) => (
                    <button
                    type="button"
                        key={key}
                        onClick={() => toggle(key)}
                        className={cn(
                            "px-4 py-2 cursor-pointer rounded-full text-sm font-medium border transition",
                            {
                                "bg-foreground text-background": selected.includes(key),
                                "bg-muted text-muted-foreground": !selected.includes(key)
                            }
                        )}
                    >
                        <span className="mr-1">{emoji}</span> {t(`interests.${key}`)}
                    </button>
                ))}
            </div>
        </div>
    );
}
