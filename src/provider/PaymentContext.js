import { createContext } from 'react'
import PropTypes from 'prop-types'
import useSubmitPayment from 'state/submitPayment'

export const PaymentContext = createContext()

const PaymentManager = ({ children }) => {
  const payment = useSubmitPayment()

  return (
    <PaymentContext.Provider value={payment}>
      {children}
    </PaymentContext.Provider>
  )
}

PaymentManager.propTypes = {
  children: PropTypes.node
}

export default PaymentManager
