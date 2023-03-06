import { FormikContext } from 'formik'
import { useContext } from 'react'
import BaseInput from '../BaseInput'

const CreditCardOwnerIdField = () => {
  const fieldLabel = 'Nome impresso no cartão'
  const elementId = 'ownerId'
  const placeholder = '000.000.000-00'

  const formikContext = useContext(FormikContext)

  return (
    <BaseInput
      value={formikContext.values.ownerId}
      label={fieldLabel}
      elementId={elementId}
      id={elementId}
      name={elementId}
      placeholder={placeholder}
      onChange={formikContext.handleChange}
      helperText={formikContext.touched.ownerid && formikContext.errors.ownerid}
      error={
        formikContext.touched.ownerid && Boolean(formikContext.errors.ownerid)
      }
    />
  )
}

export default CreditCardOwnerIdField
