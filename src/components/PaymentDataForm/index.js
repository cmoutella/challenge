import { useContext, useMemo } from 'react'
import Link from 'next/link'
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
import { onlyNumbers } from '@brazilian-utils/brazilian-utils'
import { PaymentContext } from 'provider/PaymentContext'

const PaymentDataForm = () => {
  const formikContext = useContext(FormikContext)
  const payment = useContext(PaymentContext)

  const checkValue = (val) => {
    return val === ''
  }

  const handleDisabled = () => {
    if (!formikContext) {
      return true
    }

    return (
      checkValue(formikContext.values.ownerId) ||
      checkValue(formikContext.values.creditCardCVV) ||
      checkValue(formikContext.values.creditCardCPF) ||
      checkValue(formikContext.values.cardExpirationDate) ||
      checkValue(formikContext.values.cardOwnerName) ||
      checkValue(formikContext.values.creditCardNumber) ||
      checkValue(formikContext.values.gateway) ||
      checkValue(formikContext.values.installments) ||
      checkValue(formikContext.values.planId)
    )
  }

  const disabled = useMemo(() => handleDisabled(), [formikContext])

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

    payment.submit(requestData, () => {
      formikContext.resetForm()
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
      <Link href="/pagamento" passHref>
        <Button type="submit" disabled={disabled} onClick={onSubmit} fullWidth>
          Finalizar pagamento
        </Button>
      </Link>
    </FormWrapper>
  )
}

export default PaymentDataForm
