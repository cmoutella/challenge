import PlanSelectionGroup from '.'
import { FormikProvider, useFormik } from 'formik'
import { StoryWrapper } from './index.styles'
import ContextProvider from '../../provider/PlansContext'

export default {
  title: 'PlanSelectionGroup',
  component: PlanSelectionGroup
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
    <ContextProvider>
      <FormikProvider value={formik}>
        <StoryWrapper>
          <PlanSelectionGroup />
        </StoryWrapper>
      </FormikProvider>
    </ContextProvider>
  )
}
