import PlanRadioCard from '.'
import { FormikProvider, useFormik } from 'formik'
import { StoryWrapper } from './index.styles'
import submitPaymentResponse from '../../api/__fixtures__/submitPaymentResponse'

export default {
  title: 'PlanRadioCard',
  component: PlanRadioCard
}

export const Default = () => {
  const formik = useFormik({
    isInitialValid: false,
    initialValues: {
      installments: '',
      planId: '',
      storeId: '',
      gateway: '',
      maxInstallments: 1
    }
  })

  return (
    <FormikProvider value={formik}>
      <StoryWrapper>
        <PlanRadioCard planData={submitPaymentResponse} />
      </StoryWrapper>
    </FormikProvider>
  )
}
