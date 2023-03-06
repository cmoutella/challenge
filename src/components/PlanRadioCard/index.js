import { useMemo } from 'react'
import {
  calcInstallmentValue,
  calcPriceWithDiscount,
  displayDiscount
} from '@/utils/planDataHelpers'
import PropTypes from 'prop-types'
import { FormControlLabel } from '@mui/material'
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

const PlanRadioCard = ({ planData }) => {
  return (
    <PaymentOptionCard variant="outlined">
      <FormControlLabel
        id={planData.id}
        value={planData}
        control={<StyledRadio />}
        label={<OptionLabel planData={planData} />}
        labelPlacement="start"
        classes={{ root: radioLabelRoot }}
      />
    </PaymentOptionCard>
  )
}

PlanRadioCard.propTypes = {
  planData: PropTypes.object
}

const OptionLabel = ({ planData }) => {
  const currValue = useMemo(
    () => calcPriceWithDiscount(planData.fullPrice, planData.discountAmmount),
    [planData]
  )
  const discount = useMemo(
    () => displayDiscount(planData.discountPercentage),
    [planData]
  )
  const minInstallmentValue = useMemo(
    () => calcInstallmentValue(currValue, planData.installments),
    [planData, currValue]
  )

  return (
    <ContentWrapper>
      <TitleTypography>
        {planData.title} | {planData.description}
      </TitleTypography>
      <PriceTypography>
        De R$ {planData.fullPrice} | Por R$
        {currValue}
        <DiscountTag>-{discount}%</DiscountTag>
      </PriceTypography>
      <InstallmentsTypography>
        {planData.installments}x de R$ {minInstallmentValue}/mês
      </InstallmentsTypography>
    </ContentWrapper>
  )
}

OptionLabel.propTypes = {
  planData: PropTypes.object
}

export default PlanRadioCard
