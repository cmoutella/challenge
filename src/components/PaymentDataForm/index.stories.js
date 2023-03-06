import PaymentDataForm from '.'
import { FormikProvider, useFormik } from 'formik'
import { StoryWrapper } from './index.styles'

export default {
  title: 'PaymentDataForm',
  component: PaymentDataForm
}

export const Default = () => {
  const formik = useFormik({
    isInitialValid: false,
    initialValues: {
      cardNumber: '',
      cardExpirationDate: '',
      ownerName: '',
      ownerId: '',
      coupon: '',
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
        <PaymentDataForm />
      </StoryWrapper>
    </FormikProvider>
  )
}
