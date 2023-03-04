import { FormControlLabel, Radio } from '@mui/material'
import {
  PaymentOptionCard,
  DiscountTag,
  InstallmentsTypography,
  PriceTypography,
  TitleTypography,
  ContentWrapper,
  radioLabelRoot,
  StyledRadio
} from './index.styles'

const OptionLabel = ({ planData }) => {
  return (
    <ContentWrapper>
      <TitleTypography>Anual | À vista</TitleTypography>
      <PriceTypography>
        De R$ 514,80 | Por R$ 436,90<DiscountTag>-15%</DiscountTag>
      </PriceTypography>
      <InstallmentsTypography>10x de R$ 43,69/mês</InstallmentsTypography>
    </ContentWrapper>
  )
}

const PaymentMethodRadioPaymentOptionCard = ({ planData }) => {
  return (
    <PaymentOptionCard variant="outlined">
      <FormControlLabel
        value={planData}
        control={<StyledRadio />}
        label={<OptionLabel data={planData} />}
        labelPlacement="start"
        classes={{ root: radioLabelRoot }}
      />
    </PaymentOptionCard>
  )
}

export default PaymentMethodRadioPaymentOptionCard
