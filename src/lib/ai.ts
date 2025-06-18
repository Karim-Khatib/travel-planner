import OpenAI from "openai";
import { tripsPlanStore } from "./useTirpsPlan";
import type { UseNavigateResult } from "@tanstack/react-router";
import type { City, ItineraryAIResponse, TripsPlan } from "./types";
import { supabase } from "@/db/SupabaseClinet";

export function buildItineraryPrompt(input: TripsPlan, userCity: City): string {
  console.log({ input, userCity })
  return `
You are a travel assistant.

Plan a detailed day-by-day travel itinerary for a trip to ${input.toCity.name}, ${input.toCity.country}.
from ${userCity.country} to ${input.endDate}.

The traveler is interested in: ${input.interests.join(', ')}.
Their budget level is: ${input.budget}$.
The trip will include ${input.adultsCount} adults and ${input.childrenCount} children.


Return only valid JSON. Do not include any explanation or markdown formatting
Please respond in this JSON format:
{ days:
  [
    {
      day: "Day 1",
      activities: [
        {
          title: "",
          fromHours: "10:00 AM",
          toHours: "12:00 PM",
          duration: "2 hours",
          isFree: true,
          cost: 0,
        description: "Optional souvenirs/snacks (~¥1,000)"
        },
        {
          title: "",
          fromHours: "10:00 AM",
          toHours: "12:00 PM",
          duration: "2 hours",
          isFree: true,
          cost: 0,
        description: "Visit the local market."
        },
        
      ]
    },
    {
      day: "Day 2",
      activities: [
        {
          title: "",
          fromHours: "10:00 AM",
          toHours: "12:00 PM",
          duration: "2 hours",
          isFree: true,
          cost: 0,
          description: "Hike in the nearby national park."
        },
        {
          title: "Relax at a local café.",
          fromHours: "12:00 PM",
          toHours: "2:00 PM",
          duration: "2 hours",
          isFree: true,
          cost: 0,
        },
        {
          title: "Attend a cultural performance.",
          fromHours: "7:00 PM",
          toHours: "9:00 PM",
          duration: "2 hours",
          isFree: false,
          cost: 30,
        }
      ]
    }
]
    }

  `.trim()
}


export async function callAI(prompt: string): Promise<ItineraryAIResponse | undefined> {
  // const res = await fetch('https://api.openai.com/v1/chat/completions', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': `Bearer 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`,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     model: 'gpt-4o',
  //     messages: [{ role: 'user', content: prompt }],
  //     temperature: 0.7,
  //   }),
  // })
  // console.log({ res })
  const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: import.meta.env.OPENAI_API_KEY , // load from environment variable
  });
  const res = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: prompt },

    ],
    temperature: 0.7,
  })
  console.log({ res })

  if (res.choices.length > 0) {
    // const data = await res.json()
    const content = res.choices[0].message.content
    if (content) {

      return JSON.parse(content) // تأكد أن يكون JSON صالح
    }
  } else {
    tripsPlanStore.setState((s) => {
      return {
        tripsPlan: s.tripsPlan,
        state: "interests"
      }
    })
    return undefined;
  }


}
export async function hadelGeneratePlan(input: TripsPlan, userCity: City, navigate: UseNavigateResult<string>) {
  const prompt = buildItineraryPrompt(input, userCity)
  const response = await callAI(prompt)

  const { data } = await supabase.from("plans").insert({
    days: response?.days,
    plan: input,
  }).select("id").single();
  if (data?.id) {
    navigate({ to: `/home/$id`, params: { id: data.id } });
  }

} ``