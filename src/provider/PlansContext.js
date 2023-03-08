import { createContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import usePlans from 'state/plans'

export const PlansContext = createContext()

const ContextProvider = ({ children }) => {
  const plansManager = usePlans()

  useEffect(() => {
    plansManager.listPlans()
  }, [])

  return (
    <PlansContext.Provider value={plansManager}>
      {children}
    </PlansContext.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node
}

export default ContextProvider
