import { FormikContext } from 'formik'
import { useContext } from 'react'
import BaseInput from '../BaseInput'

const CreditCardOwnerNameField = () => {
  const fieldLabel = 'Nome impresso no cartão'
  const elementId = 'cardOwnerName'
  const placeholder = 'Seu nome'

  const formikContext = useContext(FormikContext)

  return (
    <BaseInput
      value={formikContext.values.cardOwnerName}
      label={fieldLabel}
      elementId={elementId}
      name={elementId}
      placeholder={placeholder}
      onChange={formikContext.handleChange}
      onBlur={formikContext.handleBlur}
      error={
        formikContext.touched.cardOwnerName &&
        Boolean(formikContext.errors.cardOwnerName)
      }
      helperText={
        formikContext.touched.cardOwnerName &&
        formikContext.errors.cardOwnerName
      }
    />
  )
}

export default CreditCardOwnerNameField
