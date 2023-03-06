import CreditCardNumberField from '.'
import { FormikProvider, useFormik } from 'formik'
import { StoryWrapper } from '../index.styles'

export default {
  title: 'CreditCardNumberField',
  component: CreditCardNumberField
}

export const Default = () => {
  const formik = useFormik({
    isInitialValid: false,
    initialValues: {
      cardNumber: ''
    }
  })

  return (
    <FormikProvider value={formik}>
      <StoryWrapper>
        <CreditCardNumberField label="Teste" id="element" placeholder="MM/AA" />
      </StoryWrapper>
    </FormikProvider>
  )
}
