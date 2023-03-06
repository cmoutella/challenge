import { useContext } from 'react'
import { FormikContext } from 'formik'
import BaseInput from '../BaseInput'

const CreditCardExpirationField = () => {
  const fieldLabel = 'Validade'
  const elementId = 'cardExpirationDate'
  const placeholder = 'DD/MM'

  const formikContext = useContext(FormikContext)
  if (!formikContext) {
    return null
  }

  return (
    <BaseInput
      value={formikContext.values.cardExpirationDate}
      label={fieldLabel}
      elementId={elementId}
      name={elementId}
      id={elementId}
      placeholder={placeholder}
      onChange={formikContext.handleChange}
      helperText={
        formikContext.touched.cardExpirationDate &&
        formikContext.errors.cardExpirationDate
      }
      error={
        formikContext.touched.cardExpirationDate &&
        Boolean(formikContext.errors.cardExpirationDate)
      }
    />
  )
}

export default CreditCardExpirationField
