import { useState, useCallback } from 'react'
import { REQUEST_STATUS } from './requestStatus'
import { submitPayment as submitPaymentRequest } from '../api/submitPayment'

const useSubmitPayment = () => {
  const [submitPaymentStatus, setSubmitPaymentStatus] = useState(
    REQUEST_STATUS.INITIAL
  )
  const [feedback, setFeedback] = useState({})

  const submitPayment = useCallback(
    async (data) => {
      if (!data) {
        return
      }

      setSubmitPaymentStatus(REQUEST_STATUS.LOADING)
      try {
        const postResponse = await submitPaymentRequest(data)
        setSubmitPaymentStatus(REQUEST_STATUS.DONE)
        setFeedback(postResponse)
      } catch (e) {
        setSubmitPaymentStatus(REQUEST_STATUS.ERROR)
      }
    },
    [setSubmitPaymentStatus]
  )

  return { submitPayment, submitPaymentStatus, feedback }
}

export default useSubmitPayment
