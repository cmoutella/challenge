import { useContext, useState } from 'react'
import { FormikContext } from 'formik'
import { onlyNumbers, formatCPF } from '@brazilian-utils/helper-only-numbers'
import BaseInput from '../BaseInput'
import { isValidCpf } from '@brazilian-utils/is-valid-cpf'

const CreditCardOwnerIdField = () => {
  const [isValidInput, setIsValidInput] = useState(true)
  const fieldLabel = 'Nome impresso no cartão'
  const elementId = 'ownerId'
  const placeholder = '000.000.000-00'

  const formikContext = useContext(FormikContext)

  const onChange = (e) => {
    const value = e.target.value
    formikContext.setFieldValue(elementId, formatCPF(value, { pad: true }))
  }

  const onBlur = () => {
    setIsValidInput(isValidCpf(onlyNumbers(formikContext.values.ownerId)))
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
      onBlur={onBlur}
      error={!isValidInput}
      helperText={isValidInput ? '' : 'CPF inválido'}
    />
  )
}

export default CreditCardOwnerIdField
