import { useStore } from '@tanstack/react-store'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { userStore } from '@/lib/userStore'
import { tripsPlanStore } from '@/lib/useTirpsPlan'
import CityPlan from '@/components/CityPlan'
import InterstedListPlan from '@/components/InterstedListPlan'
import BudgePlan from '@/components/BudgePlan'
import DateRangPlan from '@/components/DateRangPlan'
import LoadingGeneratePlane from '@/components/LoadingGeneratePlane'
import ChildrenAdultsPicker from '@/components/ChildrenAdultsPicker'

export const Route = createFileRoute('/home/generate-plane')({
  component: RouteComponent,
})

function RouteComponent() {
  const { user, } = useStore(userStore, (s) => s)
  const tripsPlan=useStore(tripsPlanStore);
    const navigate = useNavigate()
  
    if (!user) {
      navigate({ to: '/' })
      return null;
    }
    switch (tripsPlan.state) {
  case 'city':
    return <CityPlan/>
  case 'interests':
    return <InterstedListPlan/>
  case 'budget':
    return <BudgePlan/>
  case 'dates':
    return <DateRangPlan/>
  case 'generate':
    return <LoadingGeneratePlane/>
      case 'adults':
    return <ChildrenAdultsPicker/>
    }
  return <div>Hello "/home/generate-plane"!</div>
}
