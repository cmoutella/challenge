import { useContext, useState } from 'react'
import { creditCardNoSpaces, toCardFormat } from '@/utils/fieldFormatting'
import { isValid } from 'creditcard.js'
import { FormikContext } from 'formik'
import BaseInput from '../BaseInput'

const CreditCardNumberField = () => {
  const [validInput, setValidInput] = useState(true)
  const fieldLabel = 'Número do cartão'
  const elementId = 'creditCardNumber'
  const placeholder = '0000 0000 0000 0000'

  const formikContext = useContext(FormikContext)

  console.log(formikContext.values[elementId])

  const onChange = (e) => {
    const value = e.target.value
    toCardFormat(value)
    formikContext.setFieldValue(elementId, toCardFormat(value))
  }

  const onBlur = () => {
    const isCardValid = isValid(
      creditCardNoSpaces(formikContext.values.creditCardNumber)
    )
    setValidInput(isCardValid)
  }

  return (
    <BaseInput
      name={elementId}
      id={elementId}
      value={formikContext.values.creditCardNumber}
      label={fieldLabel}
      elementId={elementId}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      helperText={validInput ? '' : 'Número de cartão inválido'}
      error={!validInput}
    />
  )
}

export default CreditCardNumberField
