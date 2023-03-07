import { useContext } from 'react'
import { FormikContext } from 'formik'
import BaseInput from '../BaseInput'

const CreditCardVerificationCodeField = () => {
  const fieldLabel = 'CVV'
  const elementId = 'creditCardCVV'
  const placeholder = '000'
  const inputMaxLenght = 3

  const formikContext = useContext(FormikContext)

  const onChange = (e) => {
    const cvv = e.target.value
    formikContext.setFieldValue(elementId, cvv)
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
      maxLenght={inputMaxLenght}
    />
  )
}

export default CreditCardVerificationCodeField
