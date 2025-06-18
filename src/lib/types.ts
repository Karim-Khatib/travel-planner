


type City = {
    country: string,
    name: string,
    cityPhoto?: string
}

type Interes = {
    key: string;
    emoji: string;
}
type TripsPlan = {
    toCity: City,
    budget: number,
    startDate: string,
    endDate: string,
    interests: Array<Interes>,
    adultsCount: number,
    childrenCount: number,
}
 type TripsPlanState="city"|"interests"|"budget"|"dates"|"generate"|"adults"

type TripsPlanContextType = {
    tripsPlan: TripsPlan;
    state: TripsPlanState
}
type ItineraryAIResponse = {
    days: Array<{
        day: string;
        activities: Array<{
            title: string;
            fromHours: string;
            toHours: string;
            duration: string;
            isFree: boolean;
            cost: number;
            description?: string;
        }>;
    }>;
}

export type { City ,Interes, ItineraryAIResponse,TripsPlan ,TripsPlanState,TripsPlanContextType};