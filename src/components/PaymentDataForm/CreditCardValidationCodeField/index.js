import { useContext } from 'react'
import { FormikContext } from 'formik'
import BaseInput from '../BaseInput'

const CreditCardVerificationCodeField = () => {
  const fieldLabel = 'CVV'
  const elementId = 'creditCardCVV'
  const placeholder = '000'

  const formikContext = useContext(FormikContext)

  const onChange = (e) => {
    const cvv = e.target.value
    const value = cvv.slice(0, 3)
    formikContext.setFieldValue(elementId, value)
  }

  return (
    <BaseInput
      value={formikContext.values.creditCardCVV}
      label={fieldLabel}
      elementId={elementId}
      name={elementId}
      id={elementId}
      placeholder={placeholder}
      onChange={onChange}
      type="number"
    />
  )
}

export default CreditCardVerificationCodeField
