import InstallmentsSelection from '.'
import { FormikProvider, useFormik } from 'formik'
import { StoryWrapper } from '../index.styles'

export default {
  title: 'InstallmentsSelection',
  component: InstallmentsSelection
}

export const Default = () => {
  const formik = useFormik({
    isInitialValid: false,
    initialValues: {
      installments: '',
      maxInstallments: 1
    }
  })

  return (
    <FormikProvider value={formik}>
      <StoryWrapper>
        <InstallmentsSelection />
      </StoryWrapper>
    </FormikProvider>
  )
}
