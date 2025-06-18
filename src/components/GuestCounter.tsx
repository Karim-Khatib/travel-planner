import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";

export function GuestCounter({ count, setCount, label, min }: { count: number, setCount:(fun:(prev: number) => number)=>void , label: string; min: number }) {

    return (
        <div className="flex items-center justify-between gap-4 text-lg">
            <span className="text-muted-foreground w-20 text-left">{label}</span>
            <div className="flex items-center gap-3">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-8 w-8"
                    onClick={() => setCount((prev) => Math.max(min, prev - 1))}
                >
                    <Minus className="h-4 w-4" />
                </Button>
                <span className="w-4 text-center font-medium">{count}</span>
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-8 w-8"
                    onClick={() => setCount((prev) => prev + 1)}
                >
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
