import CreditCardExpirationField from '.'
import { FormikProvider, useFormik } from 'formik'
import { StoryWrapper } from '../index.styles'

export default {
  title: 'CreditCardExpirationField',
  component: CreditCardExpirationField
}

export const Default = () => {
  const formik = useFormik({
    isInitialValid: false,
    initialValues: {
      cardExpirationDate: ''
    }
  })

  return (
    <FormikProvider value={formik}>
      <StoryWrapper>
        <CreditCardExpirationField
          label="Teste"
          id="element"
          placeholder="MM/AA"
        />
      </StoryWrapper>
    </FormikProvider>
  )
}
