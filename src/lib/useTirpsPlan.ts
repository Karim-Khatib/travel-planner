import { Store } from '@tanstack/react-store'
import { CITIES } from './constant';
import type {  TripsPlanContextType } from "@/lib/types";



const initalState:TripsPlanContextType={
  state:"city",
tripsPlan:{
    adultsCount: 0,
    childrenCount: 0,
    budget: 0,
    endDate: '',
    interests: [],
    startDate: '',
    toCity: CITIES[0]
}
}

export const tripsPlanStore = new Store<TripsPlanContextType>(initalState)
