import { useContext } from 'react'
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
import useSubmitPayment from 'state/submitPayment'
import { onlyNumbers } from '@brazilian-utils/brazilian-utils'

const PaymentDataForm = () => {
  const formikContext = useContext(FormikContext)

  const { paymentPost } = useSubmitPayment()

  if (!formikContext) {
    return <UnavailabilityFeedback />
  }

  const onSubmit = () => {
    const requestData = {
      couponCode: formikContext.values.couponCode,
      creditCardCPF: onlyNumbers(formikContext.values.ownerId),
      creditCardCVV: formikContext.values.creditCardCVV,
      creditCardExpirationDate: formikContext.values.cardExpirationDate,
      creditCardHolder: formikContext.values.cardOwnerName,
      creditCardNumber: onlyNumbers(formikContext.values.creditCardNumber),
      gateway: formikContext.values.gateway,
      installments: formikContext.values.installments,
      offerId: formikContext.values.planId,
      userId: 1
    }

    paymentPost(requestData, () => {
      formikContext.resetForm()
      // change to feedback page
    })
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
      <Button
        type="submit"
        disabled={formikContext.isValid}
        onClick={onSubmit}
        fullWidth
      >
        Finalizar pagamento
      </Button>
    </FormWrapper>
  )
}

export default PaymentDataForm
