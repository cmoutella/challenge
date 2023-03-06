import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import getPlans from '@/resources/getPlans'

export const PlansContext = createContext()

const ContextProvider = ({ children }) => {
  const [plans, setPlans] = useState(null)
  useEffect(() => {
    try {
      getPlans().then((availablePlans) => {
        console.log(availablePlans)
        setPlans(availablePlans)
      })
    } catch (e) {
      console.log('Não foi possível acessar os planos')
      console.log(e)
    }
  }, [])

  return <PlansContext.Provider value={plans}>{children}</PlansContext.Provider>
}

ContextProvider.propTypes = {
  children: PropTypes.node
}

export default ContextProvider
