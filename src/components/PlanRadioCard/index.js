import { useMemo } from 'react'
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
import {
  calcInstallmentValue,
  calcPriceWithDiscount,
  displayDiscount
} from '../../utils/planDataHelpers'

const PlanRadioCard = ({ planData }) => {
  return (
    <PaymentOptionCard variant="outlined" data-testId="plan-option-card">
      <FormControlLabel
        id={planData.id}
        value={planData.storeId}
        control={<StyledRadio value={planData.storeId} />}
        label={<OptionLabel planData={planData} />}
        labelPlacement="start"
        classes={{ root: radioLabelRoot, label: radioLabelRoot }}
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
        De R$ {planData.fullPrice} | Por R$ {currValue}
        <DiscountTag>-{discount}%</DiscountTag>
      </PriceTypography>
      {planData.installments > 1 && (
        <InstallmentsTypography>
          {planData.installments}x de R$ {minInstallmentValue}/mês
        </InstallmentsTypography>
      )}
    </ContentWrapper>
  )
}

OptionLabel.propTypes = {
  planData: PropTypes.object
}

export default PlanRadioCard
