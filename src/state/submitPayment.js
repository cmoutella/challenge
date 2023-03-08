import { useState, useCallback } from 'react'
import { REQUEST_STATUS } from './requestStatus'
import submitPayment from '../api/submitPayment'

const useSubmitPayment = () => {
  const [status, setStatus] = useState(REQUEST_STATUS.INITIAL)
  const [feedback, setFeedback] = useState(null)

  const submit = useCallback(
    async (data) => {
      if (!data) {
        return
      }

      setStatus(REQUEST_STATUS.LOADING)
      try {
        const postResponse = await submitPayment(data)
        setFeedback(postResponse)
        setStatus(REQUEST_STATUS.DONE)
      } catch (e) {
        setStatus(REQUEST_STATUS.ERROR)
      }
    },
    [setStatus]
  )

  return { submit, status, feedback }
}

export default useSubmitPayment
