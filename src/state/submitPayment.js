import { useState, useCallback } from 'react'
import { REQUEST_STATUS } from './requestStatus'
import submitPayment from '../api/submitPayment'

const useSubmitPayment = () => {
  const [submitPaymentStatus, setSubmitPaymentStatus] = useState(
    REQUEST_STATUS.INITIAL
  )
  const [feedback, setFeedback] = useState(null)

  const paymentPost = useCallback(
    async (data) => {
      if (!data) {
        return
      }

      setSubmitPaymentStatus(REQUEST_STATUS.LOADING)
      try {
        const postResponse = await submitPayment(data)
        setSubmitPaymentStatus(REQUEST_STATUS.DONE)
        setFeedback(postResponse)
      } catch (e) {
        setSubmitPaymentStatus(REQUEST_STATUS.ERROR)
      }
    },
    [setSubmitPaymentStatus]
  )

  return { paymentPost, submitPaymentStatus, feedback }
}

export default useSubmitPayment
