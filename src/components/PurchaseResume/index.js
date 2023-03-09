import { formatCPF } from '@brazilian-utils/brazilian-utils'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { calcPriceWithDiscount } from '../../utils/planDataHelpers'
import {
  Card,
  CardHeader,
  PlanData,
  PlanIconWrapper,
  PlanPrice,
  PlanTitle,
  ResumeLabel,
  ResumeLine,
  ResumeValue,
  WrapLine
} from './index.styles'

const PurchaseResume = ({ plan, feedback }) => {
  const currValue = calcPriceWithDiscount(plan.fullPrice, plan.discountAmmount)

  return (
    <Card data-testid="purchase-resume">
      <CardHeader>
        <PlanIconWrapper>
          <FontAwesomeIcon icon={faStar} />
        </PlanIconWrapper>
        <PlanData>
          <PlanTitle>{plan.title}</PlanTitle>
          <PlanPrice>
            R$ {currValue} | {feedback.installments}x de R${' '}
            {currValue / plan.installments}
          </PlanPrice>
        </PlanData>
      </CardHeader>
      <WrapLine>
        <ResumeLine>
          <ResumeLabel>E-mail</ResumeLabel>
          <ResumeValue>fulano@cicrano.com.br</ResumeValue>
        </ResumeLine>
      </WrapLine>
      <ResumeLine>
        <ResumeLabel>CPF</ResumeLabel>
        <ResumeValue>{formatCPF(feedback.creditCardCPF)}</ResumeValue>
      </ResumeLine>
    </Card>
  )
}

PurchaseResume.propTypes = {
  plan: PropTypes.object.required,
  feedback: PropTypes.object.required
}

export default PurchaseResume
