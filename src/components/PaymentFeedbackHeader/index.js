import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import {
  DetailedMessage,
  FeedbackMessage,
  FeedbackMessageWrapper,
  IconWrapper
} from './index.styles'
import useSubmitPayment from 'state/submitPayment'

const PaymentFeedbackHeader = () => {
  const { feedback } = useSubmitPayment()

  // if (!feedback) {
  //   return null
  // }

  return (
    <FeedbackMessageWrapper>
      <IconWrapper>
        <FontAwesomeIcon icon={faCheck} size="2x" />
      </IconWrapper>
      <FeedbackMessage>Parabéns</FeedbackMessage>
      <DetailedMessage>
        Sua assinatura foi realizada com sucesso.
      </DetailedMessage>
    </FeedbackMessageWrapper>
  )
}

export default PaymentFeedbackHeader
