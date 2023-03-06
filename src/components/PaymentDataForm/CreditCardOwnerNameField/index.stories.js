import CreditCardOwnerNameField from '.'
import { FormikProvider, useFormik } from 'formik'
import { StoryWrapper } from '../index.styles'

export default {
  title: 'CreditCardOwnerNameField',
  component: CreditCardOwnerNameField
}

export const Default = () => {
  const formik = useFormik({
    isInitialValid: false,
    initialValues: {
      ownerName: ''
    }
  })

  return (
    <FormikProvider value={formik}>
      <StoryWrapper>
        <CreditCardOwnerNameField />
      </StoryWrapper>
    </FormikProvider>
  )
}
