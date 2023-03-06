import { useEffect, useState } from 'react'
import BaseInput from '../BaseInput'

const CreditCardOwnerNameField = () => {
  const fieldLabel = 'Nome impresso no cartão'
  const elementId = 'cardOwnerName'
  const placeholder = 'Seu nome'
  const errorMessage = 'Insira seu nome'

  const [cardOwnerName, setCardOwnerName] = useState(null)
  const [isValid, setIsValid] = useState(true)
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [isFirstChange, setIsFirstChange] = useState(true)

  useEffect(() => {
    if (!isFirstRender) {
      validate()
    }
    setIsFirstRender(false)
  }, [cardOwnerName])

  const onChange = (e) => {
    const currValue = e.target.value
    setCardOwnerName(currValue)
  }

  const validate = () => {
    if (!isFirstChange) {
      const validation = cardOwnerName
      setIsValid(validation)
    }
  }

  const onBlur = () => {
    setIsFirstChange(false)
    validate()
  }

  return (
    <BaseInput
      value={cardOwnerName}
      label={fieldLabel}
      elementId={elementId}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      helperText={!isValid ? errorMessage : ''}
      error={isValid}
    />
  )
}

export default CreditCardOwnerNameField
