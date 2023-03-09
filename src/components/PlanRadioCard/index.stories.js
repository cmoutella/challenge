import PlanRadioCard from '.'
import { FormikProvider, useFormik } from 'formik'
import { StoryWrapper } from './index.styles'
import planMock from '../../api/__fixtures__/getOnePlan'

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
        <PlanRadioCard planData={planMock} />
      </StoryWrapper>
    </FormikProvider>
  )
}
