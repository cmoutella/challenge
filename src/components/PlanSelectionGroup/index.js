import { RadioGroup } from '@mui/material'
import { useContext } from 'react'
import PlanRadioCard from '../PlanRadioCard'
import {
  FormSection,
  OptionWrapper,
  SectionSubtitle,
  SectionTitle
} from './index.styles'
import { PlansContext } from '../../provider/PlansContext'
import UnavailabilityFeedback from '../UnavailabilityFeedback'
import { FormikContext } from 'formik'

const PlanSelectionGroup = () => {
  const { plans, setPlan } = useContext(PlansContext)
  const formikContext = useContext(FormikContext)

  if (!plans || !formikContext) {
    return <UnavailabilityFeedback />
  }

  const onChange = (e) => {
    const planId = e.target.value
    const selected = plans.find((pln) => pln.storeId === planId)
    setPlan(selected)
    valuesToFormik(selected)
  }

  const valuesToFormik = (selectedPlan) => {
    const values = {
      ...formikContext.values,
      planId: selectedPlan.id,
      storeId: selectedPlan.storeId,
      gateway: selectedPlan.gateway,
      maxInstallments: selectedPlan.installments
    }

    formikContext.setValues(values)
  }

  return (
    <FormSection>
      <SectionTitle aria-label="plans-section">
        Confira o seu plano
      </SectionTitle>
      <SectionSubtitle>fulano@cicrano.com.br</SectionSubtitle>
      <RadioGroup
        aria-labelledby="plans-section"
        defaultValue="annually"
        onChange={onChange}
      >
        {plans.map((plan) => (
          <OptionWrapper key={plan.id}>
            <PlanRadioCard planData={plan} />
          </OptionWrapper>
        ))}
      </RadioGroup>
    </FormSection>
  )
}

export default PlanSelectionGroup
