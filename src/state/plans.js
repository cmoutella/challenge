import { useCallback, useState } from 'react'
import { REQUEST_STATUS } from './requestStatus'
import getPlans from 'api/getPlans'

const usePlans = () => {
  const [plans, setPlans] = useState(null)
  const [getPlansStatus, setGetPlansStatus] = useState(REQUEST_STATUS.INITIAL)
  const [plan, setPlan] = useState(null)

  const listPlans = useCallback(async () => {
    console.log('getting plans')
    setGetPlansStatus(REQUEST_STATUS.LOADING)
    try {
      const plansList = await getPlans()
      console.log(plansList)
      setPlans(plansList)
      setGetPlansStatus(REQUEST_STATUS.DONE)
    } catch (e) {
      console.log(e)
      setGetPlansStatus(REQUEST_STATUS.ERROR)
    }
  }, [])

  return { listPlans, getPlansStatus, plans, setPlan, plan }
}

export default usePlans
