import { useContext } from 'react'
import { formatCPF } from '@brazilian-utils/brazilian-utils'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { REQUEST_STATUS } from '../../state/requestStatus'
import { PaymentContext } from '../../provider/PaymentContext'
import { PlansContext } from 'provider/PlansContext'
import { calcPriceWithDiscount } from 'utils/planDataHelpers'
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

const PurchaseResume = () => {
  const payment = useContext(PaymentContext)
  const { plan } = useContext(PlansContext)

  if (
    payment.status === REQUEST_STATUS.LOADING ||
    payment.status === REQUEST_STATUS.ERROR
  ) {
    return null
  }

  const currValue = calcPriceWithDiscount(plan.fullPrice, plan.discountAmmount)

  return (
    <Card>
      <CardHeader>
        <PlanIconWrapper>
          <FontAwesomeIcon icon={faStar} />
        </PlanIconWrapper>
        <PlanData>
          <PlanTitle>{plan.title}</PlanTitle>
          <PlanPrice>
            R$ {currValue} | {payment.feedback.installments}x de R${' '}
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
        <ResumeValue>{formatCPF(payment.feedback.creditCardCPF)}</ResumeValue>
      </ResumeLine>
    </Card>
  )
}

export default PurchaseResume
