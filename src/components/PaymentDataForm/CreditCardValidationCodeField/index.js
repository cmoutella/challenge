import { useContext, useState } from 'react'
import { FormikContext } from 'formik'
import BaseInput from '../BaseInput'
import { isSecurityCodeValid } from 'creditcard.js'

const CreditCardVerificationCodeField = () => {
  const [isValidInput, setIsValidInput] = useState(true)
  const fieldLabel = 'CVV'
  const elementId = 'cardVerificationCode'
  const placeholder = '000'
  const inputMaxLenght = 3

  const formikContext = useContext(FormikContext)

  const onChange = (e) => {
    const cvv = e.target.value
    formikContext.setFieldValue(elementId, cvv)
  }

  const onBlur = () => {
    const isValid = isSecurityCodeValid(
      formikContext.values.cardVerificationCode
    )
    setIsValidInput(isValid)
  }

  return (
    <BaseInput
      value={formikContext.values.cardExpirationDate}
      label={fieldLabel}
      elementId={elementId}
      name={elementId}
      id={elementId}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      maxLenght={inputMaxLenght}
      helperText={isValidInput ? '' : 'Código CVV inválido'}
      error={!isValidInput}
    />
  )
}

export default CreditCardVerificationCodeField
