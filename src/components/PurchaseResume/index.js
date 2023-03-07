import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  return (
    <Card>
      <CardHeader>
        <PlanIconWrapper>
          <FontAwesomeIcon icon={faStar} />
        </PlanIconWrapper>
        <PlanData>
          <PlanTitle>Anual</PlanTitle>
          <PlanPrice>R$ xxx</PlanPrice>
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
        <ResumeValue>0000000000</ResumeValue>
      </ResumeLine>
    </Card>
  )
}

export default PurchaseResume
