import { toCardFormat } from '@/utils/fieldFormatting'
import { FormikContext } from 'formik'
import { useContext } from 'react'
import BaseInput from '../BaseInput'

const CreditCardNumberField = () => {
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

  return (
    <BaseInput
      name={elementId}
      id={elementId}
      value={formikContext.values.creditCardNumber}
      label={fieldLabel}
      elementId={elementId}
      placeholder={placeholder}
      onChange={onChange}
      helperText={
        formikContext.touched.cardCreditNumber &&
        formikContext.errors.cardCreditNumber
      }
      error={
        formikContext.touched.cardCreditNumber &&
        Boolean(formikContext.errors.cardCreditNumber)
      }
    />
  )
}

export default CreditCardNumberField
