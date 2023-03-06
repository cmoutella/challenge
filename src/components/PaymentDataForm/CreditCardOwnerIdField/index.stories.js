import CreditCardOwnerIdField from '.'
import { FormikProvider, useFormik } from 'formik'
import { StoryWrapper } from '../index.styles'

export default {
  title: 'CreditCardOwnerIdField',
  component: CreditCardOwnerIdField
}

export const Default = () => {
  const formik = useFormik({
    isInitialValid: false,
    initialValues: {
      ownerId: ''
    }
  })

  return (
    <FormikProvider value={formik}>
      <StoryWrapper>
        <CreditCardOwnerIdField />
      </StoryWrapper>
    </FormikProvider>
  )
}
