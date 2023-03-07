import { useContext } from 'react'
import { FormikContext } from 'formik'
import { onlyNumbers, formatCPF } from '@brazilian-utils/brazilian-utils'
import BaseInput from '../BaseInput'

const CreditCardOwnerIdField = () => {
  const fieldLabel = 'CPF'
  const elementId = 'ownerId'
  const placeholder = '000.000.000-00'

  const formikContext = useContext(FormikContext)

  const onChange = (e) => {
    const value = e.target.value
    formikContext.setFieldValue(elementId, formatCPF(onlyNumbers(value)))
  }

  return (
    <BaseInput
      value={formikContext.values.ownerId}
      label={fieldLabel}
      elementId={elementId}
      id={elementId}
      name={elementId}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default CreditCardOwnerIdField
