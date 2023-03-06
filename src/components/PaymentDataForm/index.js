import { useContext, useMemo } from 'react'
import { FormikContext } from 'formik'
import CouponField from './CouponField'
import CreditCardExpirationField from './CreditCardExpirationField'
import CreditCardNumberField from './CreditCardNumberField'
import CreditCardOwnerIdField from './CreditCardOwnerIdField'
import CreditCardOwnerNameField from './CreditCardOwnerNameField'
import CreditCardVerificationCodeField from './CreditCardValidationCodeField'
import InstallmentsSelection from './InstallmentsSelection'
import Button from '../Button/index.styles'
import UnavailabilityFeedback from '../UnavailabilityFeedback'
import {
  FieldWrapper,
  FormSubtitle,
  FormTitle,
  FormWrapper,
  InlineFieldWrapper,
  ValidationSection
} from './index.styles'

const PaymentDataForm = () => {
  const formikContext = useContext(FormikContext)

  if (!formikContext) {
    return <UnavailabilityFeedback />
  }

  return (
    <FormWrapper>
      <FormTitle>Estamos quase lá!</FormTitle>
      <FormSubtitle>Insira seus dados de pagamento abaixo:</FormSubtitle>
      {/* TODO cards display */}
      <>
        <FieldWrapper>
          <CreditCardNumberField />
        </FieldWrapper>
        <FieldWrapper>
          <ValidationSection>
            <InlineFieldWrapper>
              <CreditCardExpirationField />
            </InlineFieldWrapper>
            <CreditCardVerificationCodeField />
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
        <FieldWrapper>
          <InstallmentsSelection />
        </FieldWrapper>
      </>
      <Button type="submit" disabled={formikContext.isValid} fullWidth>
        Finalizar pagamento
      </Button>
    </FormWrapper>
  )
}

export default PaymentDataForm
