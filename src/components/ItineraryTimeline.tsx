// components/ItineraryTimeline.tsx
import { Link, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Activity {
  cost: number;
  title: string;
  isFree: boolean;
  toHours: string;
  duration: string;
  fromHours: string;
  description?: string;
}

interface Day {
  day: string;
  activities: Array<Activity>;
}

interface Props {
  days: Array<Day>;
}

export default function ItineraryTimeline({ days }: Props) {
  return (
    <div className="space-y-8 flex flex-col items-center">
      {days.map((day, dayIndex) => (
        <div key={dayIndex} className="flex gap-4">
          {/* Timeline + Labels */}
          <div className="flex flex-col items-center">
            {day.activities.map((_, idx) => (
              <div key={idx} className="flex mt-8 flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-sky-500 border border-white dark:border-gray-800" />
                {idx !== day.activities.length - 1 && (
                  <div className="h-[204px] border-l-2 border-dashed border-muted" />
                )}
              </div>
            ))}
          </div>

          {/* Day + Activities */}
          <div className="flex-1 w-[480px]">
            <h2 className="text-lg font-semibold mb-2">{day.day}</h2>
            {day.activities.map((activity, activityIndex) => (
              <div key={activityIndex} className="mb-6">
                <div className="text-sm text-muted-foreground mb-1">
                  {activity.fromHours} - {activity.toHours}
                </div>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">
                        {activity.title || "Senso-ji Temple"}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-muted-foreground" />
                        <Link className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <span>⏱ {activity.duration}</span>
                    </div>
                    <div className="text-base font-semibold">
                      {activity.isFree ? "Free" : `$${activity.cost}`}
                    </div>
                    {activity.description && (
                      <p className="text-sm text-muted-foreground">
                        {activity.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
