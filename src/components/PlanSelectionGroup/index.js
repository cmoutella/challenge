import { RadioGroup } from '@mui/material'
import { useContext } from 'react'
import PlanRadioCard from '../PlanRadioCard'
import {
  FormSection,
  OptionWrapper,
  SectionSubtitle,
  SectionTitle
} from './index.styles'
import { PlansContext } from '@/provider/PlansContext'
import UnavailabilityFeedback from '../UnavailabilityFeedback'

const PlanSelectionGroup = () => {
  const plans = useContext(PlansContext)

  console.log('group')
  console.log(plans)

  if (!plans) {
    return <UnavailabilityFeedback />
  }

  return (
    <FormSection>
      <SectionTitle>Confira o seu plano</SectionTitle>
      <SectionSubtitle>fulano@cicrano.com.br</SectionSubtitle>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
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
