import CreditCardValidationCodeField from '.'
import { FormikProvider, useFormik } from 'formik'
import { StoryWrapper } from '../index.styles'

export default {
  title: 'CreditCardValidationCodeField',
  component: CreditCardValidationCodeField
}

export const Default = () => {
  const formik = useFormik({
    isInitialValid: false,
    initialValues: {
      cardVerificationCode: ''
    }
  })

  return (
    <FormikProvider value={formik}>
      <StoryWrapper>
        <CreditCardValidationCodeField />
      </StoryWrapper>
    </FormikProvider>
  )
}
