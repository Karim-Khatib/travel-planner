import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function DateRangePicker({
  date,
  setDate,
}: {
  date: DateRange | undefined
  setDate: (date: DateRange | undefined) => void
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <h3 className="text-sm text-muted-foreground">What is the date range</h3>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-center text-lg font-semibold",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "d MMM, yyyy")} <span className="text-sm font-normal text-muted-foreground"> until </span> {format(date.to, "d MMM, yyyy")}
                </>
              ) : (
                format(date.from, "d MMM, yyyy")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
