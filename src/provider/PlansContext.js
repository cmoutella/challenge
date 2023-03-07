import { createContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import usePlans from 'state/plans'

export const PlansContext = createContext()

const ContextProvider = ({ children }) => {
  const { listPlans, plans } = usePlans()

  useEffect(() => {
    listPlans()
  }, [])

  return <PlansContext.Provider value={plans}>{children}</PlansContext.Provider>
}

ContextProvider.propTypes = {
  children: PropTypes.node
}

export default ContextProvider
