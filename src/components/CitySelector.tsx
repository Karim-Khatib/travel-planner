import  cityPhoto from "../assets/city.jpg";
import type { City } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CITIES,  } from "@/lib/constant";

export default function CitySelector({
    selected,
    onChange,
}: {
    selected?: City;
    onChange?: (value: City) => void;
}) {
    return (
        <div className="space-y-4">
            <div className="flex flex-wrap justify-center gap-3">
                {CITIES.map((cty) => (
                    <button
                        type="button"
                        key={cty.country+cty.name}
                        style={{ backgroundImage: `url(${cty.cityPhoto??cityPhoto})`,backgroundSize: "cover", backgroundPosition: "center" }}
                        onClick={() => onChange?.(cty)}
                        className={cn(
                            "relative px-8 max-h-3.5 flex flex-col border-1/2 justify-center items-center cursor-pointer py-4 rounded-full bg-secondary text-sm font-medium  transition overflow-hidden",
                            {
                                "border-foreground": selected?.name === cty.name,
                                "border-transparent": !(selected?.name === cty.name)
                            }
                        )}
                    >
                        <div className={cn("absolute inset-0 bg-black/50 ",{
                            "bg-black/50": !(selected?.name === cty.name),
                            "bg-transparent": (selected?.name === cty.name)
                        })}/>
                        <p className={cn(" relative text-sm text-background text-shadow-2xs",{
                            "font-bold": selected?.name === cty.name,
                            "font-normal": !(selected?.name === cty.name)
                        })}>{cty.name}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}
