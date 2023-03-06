import React from 'react'
import { FormikContext } from 'formik'
import CouponField from './CouponField'
import CreditCardExpirationField from './CreditCardExpirationField'
import CreditCardNumberField from './CreditCardNumberField'
import CreditCardOwnerIdField from './CreditCardOwnerIdField'
import CreditCardOwnerNameField from './CreditCardOwnerNameField'
import {
  FieldWrapper,
  FormSubtitle,
  FormTitle,
  FormWrapper,
  ValidationSection
} from './index.styles'
import Button from '../Button/index.styles'
import UnavailabilityFeedback from '../UnavailabilityFeedback'

const PaymentForm = () => {
  const formikContext = React.useContext(FormikContext)

  if (!formikContext) {
    return <UnavailabilityFeedback />
  }

  return (
    <FormWrapper>
      <FormTitle>Estamos quase lá!</FormTitle>
      <FormSubtitle>Insira seus dados de pagamento abaixo:</FormSubtitle>
      {/* tem um troço aqui */}
      <>
        <FieldWrapper>
          <CreditCardNumberField />
        </FieldWrapper>
        <FieldWrapper>
          <ValidationSection>
            <CreditCardExpirationField />
          </ValidationSection>
        </FieldWrapper>
        <FieldWrapper>
          <CreditCardOwnerNameField />
        </FieldWrapper>
        <FieldWrapper>
          <CreditCardOwnerIdField />
        </FieldWrapper>
        <FieldWrapper>
          <CouponField />
        </FieldWrapper>
      </>
      <Button type="submit" disabled={formikContext.isValid} fullWidth>
        Finalizar pagamento
      </Button>
    </FormWrapper>
  )
}

export default PaymentForm
