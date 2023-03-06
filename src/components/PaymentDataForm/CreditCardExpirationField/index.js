import { useContext, useState } from 'react'
import { FormikContext } from 'formik'
import BaseInput from '../BaseInput'
import { formatExpirationDate } from '@/utils/fieldFormatting'
import { isExpirationDateValid } from 'creditcard.js'

const CreditCardExpirationField = () => {
  const [isValidInput, setIsValidInput] = useState(true)
  const fieldLabel = 'Validade'
  const elementId = 'cardExpirationDate'
  const placeholder = 'DD/MM'
  const inputMaxLenght = 5

  const handleDate = () => {
    const fullDate = formikContext.values.cardExpirationDate.split('/')
    const dt = {
      month: fullDate[0],
      year: fullDate[1]
    }
    return dt
  }

  const formikContext = useContext(FormikContext)

  console.log(formikContext)

  const onChange = (e) => {
    const date = e.target.value
    formikContext.setFieldValue(elementId, formatExpirationDate(date))
  }

  const onBlur = () => {
    const dateData = handleDate()
    console.log(dateData)
    const isValid = isExpirationDateValid(dateData.month, dateData.year)
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
      helperText={isValidInput ? '' : 'Data inválida'}
      error={!isValidInput}
    />
  )
}

export default CreditCardExpirationField
