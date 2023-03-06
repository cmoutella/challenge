import PlanRadioCard from '.'
import { FormikProvider, useFormik } from 'formik'
import { StoryWrapper } from './index.styles'

export default {
  title: 'PlanRadioCard',
  component: PlanRadioCard
}

const PLAN_MOCK = {
  id: 'plan',
  storeId: 'store_plan',
  title: 'Anual',
  description: 'Parcelado',
  fullPrice: 600,
  installments: 10,
  discountAmmount: 60,
  discountPercentage: 0.1
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
        <PlanRadioCard planData={PLAN_MOCK} />
      </StoryWrapper>
    </FormikProvider>
  )
}
