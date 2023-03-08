import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import {
  DetailedMessage,
  FeedbackMessage,
  FeedbackMessageWrapper,
  IconWrapper
} from './index.styles'
import { REQUEST_STATUS } from '../../state/requestStatus'
import { useContext } from 'react'
import { PaymentContext } from '../../provider/PaymentContext'

const SUCCESS = {
  title: 'Parabéns',
  subtitle: 'Sua assinatura foi realizada com sucesso.'
}
const ERROR = {
  title: 'Tivemos um problema',
  subtitle:
    'Infelizmente não pudemos finalizar sua assinatura agora, tente de novo mais tarde.'
}

const PaymentFeedbackHeader = () => {
  const payment = useContext(PaymentContext)

  const displayMessage =
    payment.status === REQUEST_STATUS.DONE ? SUCCESS : ERROR

  const displayIcon = payment.status === REQUEST_STATUS.DONE ? faCheck : faX

  return (
    <FeedbackMessageWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={displayIcon} size="2x" />
      </IconWrapper>
      <FeedbackMessage>{displayMessage.title}</FeedbackMessage>
      <DetailedMessage>{displayMessage.subtitle}</DetailedMessage>
    </FeedbackMessageWrapper>
  )
}

export default PaymentFeedbackHeader
